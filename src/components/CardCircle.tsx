"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import type { Project } from "@/content/projects";
import { asset } from "@/lib/asset";
import styles from "./CardCircle.module.css";

// A faithful port of the card circle from the original foliage site (Angular 11 + anime.js, 2021,
// tag v1-angular: src/app/components/card/). Same geometry, rainbow, timing and behavior:
// - rectangles sit in a ring; a wave pops each one out in turn (scale 1.25 about the ring's center,
//   1vw further out), one card every 5000 / (n * 2) ms, each pop lasting that step x PI out and back
// - hovering a card pauses the wave, plays its demo inside it and shows "Client | Title" in the center
// - the first click flies the card out to fill the stage with its demo glowing; the second click
//   opens the case study; "<" puts it back
// The ring runs in the original 2:1 stage proportions (the canvas), scaled to the hero's right column.
// The fly-out fills the whole hero on wide screens, as the original filled its full-width stage.

type Geometry = { card: CSSProperties; exit: CSSProperties };

export default function CardCircle({ projects, children }: Readonly<{ projects: Project[]; children: ReactNode }>) {
  const router = useRouter();
  const n = projects.length;
  const step = 5000 / (n * 2);

  const hero = useRef<HTMLElement>(null);
  const column = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLButtonElement | null)[]>([]);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);
  const paused = useRef(false);
  const next = useRef(0);
  const readyTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const [title, setTitle] = useState<string | null>(null);
  const [scaled, setScaled] = useState<number | null>(null);
  const [geometry, setGeometry] = useState<Geometry | null>(null);
  const [ready, setReady] = useState(false); // second click allowed (original: 1.5s after the first)
  const [ctaHidden, setCtaHidden] = useState(false);

  const base = (i: number, ty = -5, scale = 1) =>
    `rotate(${(360 / n) * i}deg) translateY(${ty}cqw) translateX(0.25cqw) scale(${scale})`;

  // The wave: the original anime.js timeline, rebuilt on the Web Animations API.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
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

  // Where the selected card flies to. The original's scaleUp box was (left 25%, top 75%, 50% x 50%)
  // with translate(-50%, -50%) scale(2) from its bottom-left corner, which lands exactly on the
  // stage. Here we solve for the box that lands on the target area instead.
  const measure = (i: number): Geometry | null => {
    const wide = window.matchMedia("(min-width: 861px)").matches;
    const area = (wide ? hero.current : column.current)?.getBoundingClientRect();
    const c = canvas.current?.getBoundingClientRect();
    const h = hero.current?.getBoundingClientRect();
    if (!area || !c || !h) return null;
    const w = area.width / 2;
    const ht = area.height / 2;
    const v = videos.current[i];
    const aspect = v?.videoWidth ? v.videoWidth / v.videoHeight : 16 / 9;
    const fitHeight = w / ht > aspect; // the original: video at full height, width from its aspect ratio
    return {
      card: {
        "--su-left": `${area.left - c.left + w / 2}px`,
        "--su-top": `${area.top - c.top + 1.5 * ht}px`,
        "--su-w": `${w}px`,
        "--su-h": `${ht}px`,
        "--vid-w": `${fitHeight ? ht * aspect : w}px`,
        "--vid-h": `${fitHeight ? ht : w / aspect}px`,
      } as CSSProperties,
      exit: { top: area.top - h.top, left: area.left - h.left + (wide ? 96 : 16) },
    };
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
    if (scaled !== i) videos.current[i]?.pause();
  };

  const select = (i: number) => {
    if (scaled === i && ready) {
      router.push(`/work/${projects[i].slug}/`);
      return;
    }
    paused.current = true;
    setCtaHidden(true);
    cards.current[i]?.getAnimations().forEach((a) => a.cancel());
    setGeometry(measure(i));
    setScaled(i);
    videos.current[i]?.play().catch(() => {});
    clearTimeout(readyTimer.current);
    readyTimer.current = setTimeout(() => setReady(true), 1500);
  };

  const exit = () => {
    clearTimeout(readyTimer.current);
    if (scaled !== null) videos.current[scaled]?.pause();
    setScaled(null);
    setReady(false);
    paused.current = false;
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && exit();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <section ref={hero} className={styles.hero}>
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.copy}>{children}</div>

        <div ref={column} className={styles.ring}>
          {!ctaHidden && <p className={styles.cta}>select a rectangle</p>}
          <div ref={canvas} className={styles.canvas}>
            {projects.map((p, i) => (
              <button
                key={p.slug}
                type="button"
                ref={(el) => { cards.current[i] = el; }}
                className={[
                  styles.card,
                  scaled === i ? styles.scaleUp : "",
                  scaled !== null && scaled !== i ? styles.disable : "",
                ].join(" ")}
                style={{
                  transform: base(i),
                  "--hue": ((i + 1) / 20) * 360,
                  ...(scaled === i ? geometry?.card : {}),
                } as CSSProperties}
                aria-label={scaled === i ? `Open ${p.client}: ${p.title}` : `Preview ${p.client}: ${p.title}`}
                onMouseEnter={() => hover(i)}
                onMouseLeave={() => unhover(i)}
                onFocus={() => hover(i)}
                onBlur={() => unhover(i)}
                onClick={() => select(i)}
              >
                <span className={styles.text} style={{ transform: `rotate(${-(360 / n) * i}deg)` }}>
                  <span className={styles.name}>{p.client} {p.title}</span>
                  <span className={`${styles.more} ${styles.portrait}`}>tap to learn more</span>
                  <span className={`${styles.more} ${styles.landscape}`}>click to learn more</span>
                </span>
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

      <button
        type="button"
        className={`${styles.exit} ${scaled !== null ? styles.show : ""}`}
        style={geometry?.exit}
        onClick={exit}
        aria-label="Back to the circle"
        tabIndex={scaled !== null ? 0 : -1}
      >
        &lt;
      </button>
    </section>
  );
}
