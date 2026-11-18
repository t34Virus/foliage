"use client";

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import type { Project } from "@/content/projects";
import { asset } from "@/lib/asset";
import styles from "./CardCircle.module.css";

// The card circle from the original foliage site (Angular 11 + anime.js, 2021, tag v1-angular:
// src/app/components/card/). Same geometry, rainbow, timing and behavior:
// - rectangles sit in a ring; a wave pops each one out in turn (scale 1.25 about the ring's center,
//   1vw further out), one card every 5000 / (n * 2) ms, each pop lasting that step x PI out and back
// - hovering a card pauses the wave, plays its demo inside it and shows "Client | Title" in the center
// - clicking flies the card out to fill the stage with its demo glowing; a second click opens the
//   case study; the back button flies it home
// The ring runs in the original 2:1 stage proportions (the canvas), scaled to the hero's right column.
//
// The fly-out was reworked on 2026-11-16 because resizing the card felt slow and clunky. Now a
// separate stage is laid out at its final size (the whole hero on wide screens, the ring column on
// phones) and animated with transforms only, starting from the card's exact spot, size and angle in
// the ring, so it still spins out of the circle. Once it lands it looks like the original: black,
// demo contain-fit in the middle with the cyan glow, title on top. Going back is the fly-out in
// reverse: the demo spins and shrinks back toward its slot, fading as the box turns back to the
// card's grey, and the grey box spins into place in the ring. Both ways the size changes like an
// even zoom (see zoomed) and the card and stage crossfade where they meet. Only transform and opacity
// animate (the grey is an overlay that fades, not a background color), so the browser never repaints.

type Geometry = { stage: CSSProperties; exit: CSSProperties };
type Pose = { dx: number; dy: number; angle: number; sx: number; sy: number }; // the stage laid over a card

const OPEN = 560; // ms
const CLOSE = 560;
const STEPS = 30; // keyframes along each flight path
const HANDOFF = 0.12; // share of a flight spent crossfading between the stage and the real card

// The stage's transform from the card (0) to its full size (1): k for its place and size, turn for its angle.
const posed = (p: Pose, k: number, turn = k) =>
  `translate(${p.dx * (1 - k)}px, ${p.dy * (1 - k)}px) rotate(${p.angle * (1 - turn)}deg) ` +
  `scale(${p.sx + (1 - p.sx) * k}, ${p.sy + (1 - p.sy) * k})`;
// Its overall size there, as a share of full size.
const sizeAt = (p: Pose, k: number) => Math.sqrt((p.sx + (1 - p.sx) * k) * (p.sy + (1 - p.sy) * k));

const easeInOut = (t: number) => (1 - Math.cos(Math.PI * t)) / 2; // sine
const easeOut = (t: number) => Math.sin((Math.PI * t) / 2); // sine
// Share of the way travelled, u of the way through (0 to 1), when the size changes by `ratio` overall
// and by the same factor every moment, the way a smooth zoom does. Small things then grow or shrink
// as visibly as big ones, so the flight never hangs, lurches or crawls.
const zoomed = (u: number, ratio: number) => (Math.abs(ratio - 1) < 1e-3 ? u : (1 - ratio ** u) / (1 - ratio));
// The fly-out t of the way through: how far it is from the card toward full size, and how far it
// has turned. Quick to start (the card is tiny then, so that reads as a crisp response), soft landing.
const outward = (p: Pose, t: number) => ({ k: zoomed(easeOut(t), 1 / sizeAt(p, 0)), turn: easeOut(t) });

// Icon: Font Awesome Free "chevron-left" (CC BY 4.0, https://fontawesome.com/license/free).
const [chevronW, chevronH, , , chevronPath] = faChevronLeft.icon;

export default function CardCircle({ projects, children }: Readonly<{ projects: Project[]; children: ReactNode }>) {
  const router = useRouter();
  const n = projects.length;
  const step = 5000 / (n * 2);

  const hero = useRef<HTMLElement>(null);
  const column = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLButtonElement | null)[]>([]);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);
  const stage = useRef<HTMLButtonElement>(null);
  const stageContent = useRef<HTMLSpanElement>(null);
  const stageVideo = useRef<HTMLVideoElement>(null);
  const tint = useRef<HTMLSpanElement>(null); // the hovered card's grey, faded over the stage's black
  const flight = useRef<Animation[]>([]); // the stage's transform first, then its fades
  const paused = useRef(false);
  const next = useRef(0);

  const [title, setTitle] = useState<string | null>(null);
  const [scaled, setScaled] = useState<number | null>(null);
  const [geometry, setGeometry] = useState<Geometry | null>(null);
  const [ready, setReady] = useState(false); // the second click opens the case study once it lands
  const [closing, setClosing] = useState(false);
  const [ctaHidden, setCtaHidden] = useState(false);

  const base = (i: number, ty = -5, scale = 1) =>
    `rotate(${(360 / n) * i}deg) translateY(${ty}cqw) translateX(0.25cqw) scale(${scale})`;
  const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // The wave: the original anime.js timeline, rebuilt on the Web Animations API.
  useEffect(() => {
    if (reducedMotion()) return;
    const timer = setInterval(() => {
      if (paused.current) return;
      const i = next.current;
      next.current = (i + 1) % n;
      cards.current[i]?.animate([{ transform: base(i) }, { transform: base(i, -6, 1.25) }], {
        duration: step * Math.PI,
        easing: "cubic-bezier(0.37, 0, 0.63, 1)", // easeInOutSine
        direction: "alternate",
        iterations: 2,
      });
    }, step);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n, step]);

  // The stage's box, relative to the hero, and the demo's contain-fit size inside it.
  const measure = (i: number): Geometry | null => {
    const wide = window.matchMedia("(min-width: 861px)").matches;
    const area = (wide ? hero.current : column.current)?.getBoundingClientRect();
    const h = hero.current?.getBoundingClientRect();
    if (!area || !h) return null;
    const v = videos.current[i];
    const aspect = v?.videoWidth ? v.videoWidth / v.videoHeight : 16 / 9;
    const fitHeight = area.width / area.height > aspect;
    const top = area.top - h.top;
    const left = area.left - h.left;
    return {
      stage: {
        top,
        left,
        width: area.width,
        height: area.height,
        "--vid-w": `${fitHeight ? area.height * aspect : area.width}px`,
        "--vid-h": `${fitHeight ? area.height : area.width / aspect}px`,
      } as CSSProperties,
      exit: { top: top + (wide ? 20 : 12), left: left + (wide ? 96 : 12) },
    };
  };

  // The pose that lays the stage exactly over card i in the ring: its center, size and angle.
  const overCard = (i: number): Pose | null => {
    const card = cards.current[i];
    const el = stage.current;
    const h = hero.current?.getBoundingClientRect();
    if (!card || !el || !h) return null;
    const r = card.getBoundingClientRect(); // a rotated box shares its center with its bounding box
    const dx = r.left + r.width / 2 - (h.left + el.offsetLeft + el.offsetWidth / 2);
    const dy = r.top + r.height / 2 - (h.top + el.offsetTop + el.offsetHeight / 2);
    let angle = (360 / n) * i;
    if (angle > 180) angle -= 360; // spin the short way round
    return { dx, dy, angle, sx: card.offsetWidth / el.offsetWidth, sy: card.offsetHeight / el.offsetHeight };
  };

  useEffect(() => {
    if (scaled === null) return;
    const onResize = () => setGeometry(measure(scaled));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [scaled]);

  const hover = (i: number) => {
    paused.current = true;
    setTitle(`${projects[i].client} | ${projects[i].title}`);
    videos.current[i]?.play().catch(() => {});
  };
  const unhover = (i: number) => {
    if (scaled === null) paused.current = false;
    setTitle(null);
    videos.current[i]?.pause();
  };

  const select = (i: number) => {
    if (scaled !== null) return;
    paused.current = true;
    setCtaHidden(true);
    cards.current[i]?.getAnimations().forEach((a) => a.cancel());
    setGeometry(measure(i));
    setReady(reducedMotion());
    setScaled(i);
  };

  // Fly out as soon as the stage mounts, before the first paint, so it starts on top of the card.
  useLayoutEffect(() => {
    if (scaled === null) return;
    const ring = videos.current[scaled];
    const demo = stageVideo.current;
    if (demo) {
      if (ring) demo.currentTime = ring.currentTime; // carry on from where the hover preview was
      demo.play().catch(() => {});
    }
    ring?.pause();

    const el = stage.current;
    const from = overCard(scaled);
    if (!el || !from || reducedMotion()) return;
    const card = cards.current[scaled];
    const path = Array.from({ length: STEPS + 1 }, (_, i) => {
      const o = outward(from, i / STEPS);
      return { transform: posed(from, o.k, o.turn) };
    });
    const move = el.animate(path, OPEN);
    flight.current = [
      move,
      // The close in reverse: the hovered card hands over to a grey box, which spins out, darkens,
      // and the demo fades in as it settles.
      el.animate([{ opacity: 0 }, { opacity: 1, offset: HANDOFF }, { opacity: 1 }], OPEN),
      ...(tint.current ? [tint.current.animate([{ opacity: 1 }, { opacity: 1, offset: 0.45 }, { opacity: 0, offset: 0.75 }, { opacity: 0 }], OPEN)] : []),
      ...(stageContent.current ? [stageContent.current.animate([{ opacity: 0 }, { opacity: 0, offset: 0.55 }, { opacity: 1, offset: 0.8 }, { opacity: 1 }], OPEN)] : []),
      // Held at 0 until the close (which cancels it); .flown hides the card once the stage lands.
      ...(card ? [card.animate([{ opacity: 1 }, { opacity: 0, offset: HANDOFF }, { opacity: 0 }], { duration: OPEN, fill: "forwards" })] : []),
    ];
    move.onfinish = () => setReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scaled]);

  const exit = () => {
    if (scaled === null || closing) return;
    setReady(false);
    setClosing(true); // shows the real card again (see .flown), faded out until the stage lands on it

    const el = stage.current;
    const content = stageContent.current;
    const shade = tint.current;
    const card = cards.current[scaled];
    const target = overCard(scaled);
    // Start from wherever the stage is: landed, or partway out if Back comes mid-flight. Read its
    // state before stopping the fly-out so the turn-around has no jump.
    const [move] = flight.current;
    const t = move?.playState === "running" ? (move.effect?.getComputedTiming().progress ?? 1) : 1;
    const opacity = (e: Element | null | undefined, missing: number) => (e ? Number(getComputedStyle(e).opacity) : missing);
    const seen = opacity(el, 1);
    const shown = opacity(content, 1);
    const grey = opacity(shade, 0);
    const cardSeen = opacity(card, 0);
    flight.current.forEach((a) => a.cancel());

    const animate = el && target && !reducedMotion();
    const { k, turn } = target ? outward(target, t) : { k: 1, turn: 1 };
    const timing = { duration: Math.round(CLOSE * Math.max(0.6, k)), fill: "forwards" as const };
    const land = 1 - HANDOFF;
    const cardFade = animate
      ? card?.animate([{ opacity: cardSeen }, { opacity: cardSeen, offset: land }, { opacity: 1 }], timing)
      : undefined;
    const done = () => {
      stageVideo.current?.pause();
      cardFade?.cancel(); // it ended at full opacity, the card's normal look, so this changes nothing
      flight.current = [];
      setClosing(false);
      setScaled(null);
      paused.current = false;
    };
    if (!animate) return done();

    // The path home, sampled into keyframes: place and size follow the even zoom, and the angle
    // turns steadily the whole way, so the box is still spinning as it settles into its slot.
    const end = Math.min(0.9, sizeAt(target, 0) / sizeAt(target, k));
    const path = Array.from({ length: STEPS + 1 }, (_, i) => {
      const u = easeInOut(i / STEPS);
      return { transform: posed(target, k * (1 - zoomed(u, end)), turn * (1 - u)) };
    });
    const back = el.animate(path, timing);
    flight.current = [
      back,
      // The demo and its glow stay up while it starts to spin back, then fade before it squeezes thin.
      ...(content ? [content.animate([{ opacity: shown }, { opacity: shown, offset: 0.2 }, { opacity: 0, offset: 0.45 }, { opacity: 0 }], timing)] : []),
      // Black turns back to the card's grey, so the box stays visible as it spins into its slot.
      ...(shade ? [shade.animate([{ opacity: grey }, { opacity: grey, offset: 0.25 }, { opacity: 1, offset: 0.55 }, { opacity: 1 }], timing)] : []),
      // Once it's in place, a brief handover to the real card, which fades in beneath it.
      el.animate([{ opacity: seen }, { opacity: 1, offset: HANDOFF }, { opacity: 1, offset: land }, { opacity: 0 }], timing),
    ];
    back.onfinish = done;
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && exit();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const active = scaled === null ? null : projects[scaled];
  const open = scaled !== null && !closing;

  return (
    <section ref={hero} className={styles.hero}>
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.copy}>{children}</div>

        <div ref={column} className={styles.ring}>
          {!ctaHidden && (
            <p className={styles.cta}>
              select a rectangle
              <span className={styles.ctaGlow} aria-hidden="true">select a rectangle</span>
            </p>
          )}
          <div className={styles.canvas}>
            {projects.map((p, i) => (
              <button
                key={p.slug}
                type="button"
                ref={(el) => { cards.current[i] = el; }}
                className={[
                  styles.card,
                  scaled === i && ready && !closing ? styles.flown : "", // in flight, the card crossfades instead
                  scaled !== null && scaled !== i ? styles.disable : "",
                ].join(" ")}
                style={{ transform: base(i), "--hue": ((i + 1) / 20) * 360 } as CSSProperties}
                aria-label={`Preview ${p.client}: ${p.title}`}
                onMouseEnter={() => hover(i)}
                onMouseLeave={() => unhover(i)}
                onFocus={() => hover(i)}
                onBlur={() => unhover(i)}
                onClick={() => select(i)}
              >
                <span className={styles.videoContainer}>
                  {p.media.preview && (
                    <video
                      ref={(el) => { videos.current[i] = el; }}
                      src={asset(p.media.preview)}
                      poster={p.media.poster ? asset(p.media.poster) : undefined}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  )}
                </span>
              </button>
            ))}
            <p className={`${styles.center} ${title ? styles.show : ""}`} aria-live="polite">
              {title}
            </p>
          </div>
        </div>
      </div>

      {active && geometry && (
        <button
          ref={stage}
          type="button"
          className={styles.stage}
          style={geometry.stage}
          onClick={() => ready && router.push(`/work/${active.slug}/`)}
          aria-label={`Open ${active.client}: ${active.title}`}
        >
          <span ref={tint} className={styles.tint} aria-hidden="true" />
          <span ref={stageContent} className={styles.stageContent}>
            <span className={styles.stageText}>
              <span className={styles.stageName}>{active.client} {active.title}</span>
              {(["portrait", "landscape"] as const).map((o) => {
                const label = o === "portrait" ? "tap to learn more" : "click to learn more";
                return (
                  <span key={o} className={`${styles.stageMore} ${styles[o]}`}>
                    {label}
                    {/* Added once it lands: drawing its wide blur the first time is costly, so that
                        happens while nothing is moving. Its pulse starts from zero, so it fades in. */}
                    {(ready || closing) && <span className={styles.moreGlow} aria-hidden="true">{label}</span>}
                  </span>
                );
              })}
            </span>
            <span className={styles.glow} aria-hidden="true" />
            {active.media.preview && (
              <video
                ref={stageVideo}
                className={styles.stageVideo}
                src={asset(active.media.preview)}
                poster={active.media.poster ? asset(active.media.poster) : undefined}
                muted
                loop
                playsInline
                preload="auto"
              />
            )}
          </span>
        </button>
      )}

      <button
        type="button"
        className={`${styles.exit} ${open ? styles.show : ""} spin-border`}
        style={geometry?.exit}
        onClick={exit}
        aria-label="Back to the circle"
        tabIndex={open ? 0 : -1}
      >
        <svg viewBox={`0 0 ${chevronW} ${chevronH}`} aria-hidden="true" focusable="false">
          <path fill="currentColor" d={String(chevronPath)} />
        </svg>
      </button>
    </section>
  );
}
