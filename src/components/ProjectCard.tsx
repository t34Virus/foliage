"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { Project } from "@/content/projects";
import { asset } from "@/lib/asset";
import styles from "./ProjectCard.module.css";

// Agency-style tile: poster at rest, the muted demo loop plays on hover or keyboard focus, and on
// touch screens while the card is scrolled into view (Teresa, 2026-11-18), since phones can't hover.
export default function ProjectCard({ project }: { project: Project }) {
  const card = useRef<HTMLAnchorElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const { poster, preview } = project.media;

  // Touch screens: the demo plays while at least 60% of the card is on screen and pauses when it
  // scrolls away (preload="none", so it only downloads then). It fades in once it's actually
  // playing, so the poster never flashes to black. Not with reduced motion or the data saver.
  useEffect(() => {
    const el = card.current;
    const v = video.current;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (!el || !v || !window.matchMedia("(hover: none)").matches
      || window.matchMedia("(prefers-reduced-motion: reduce)").matches || connection?.saveData) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        v.play().then(() => { el.dataset.playing = ""; }).catch(() => {}); // e.g. iOS Low Power Mode
      } else {
        delete el.dataset.playing;
        v.pause();
      }
    }, { threshold: 0.6 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const play = () => {
    const v = video.current;
    if (!v || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    v.play().catch(() => {});
  };
  const stop = () => video.current?.pause();

  return (
    <Link
      ref={card}
      href={`/work/${project.slug}/`}
      className={`${styles.card} grad-host`}
      // Mouse hover or keyboard focus only: a tap on a phone would start the demo and leave it playing.
      onPointerEnter={(e) => { if (e.pointerType === "mouse") play(); }}
      onPointerLeave={(e) => { if (e.pointerType === "mouse") stop(); }}
      onFocus={(e) => { if (e.currentTarget.matches(":focus-visible")) play(); }}
      onBlur={stop}
    >
      <div className={styles.media}>
        {poster ? (
          <>
            {/* The tile is 16:9 like most demo loops. A few older clips aren't, so the poster and loop
                fit inside it whole, over a soft blurred copy of the poster that fills the gaps. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.backdrop} src={asset(poster)} alt="" loading="lazy" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.poster} src={asset(poster)} alt="" loading="lazy" />
            {preview && (
              <video ref={video} src={asset(preview)} muted loop playsInline preload="none" aria-hidden="true" />
            )}
          </>
        ) : (
          <div className={styles.typeTile} aria-hidden="true">
            <span>{project.title}</span>
          </div>
        )}
        {project.award && <span className={styles.badge}>Award</span>}
      </div>
      <div className={styles.text}>
        <span className="eyebrow">{project.client}</span>
        <h3 className="grad-text">{project.title}</h3>
        <span className={styles.madeAt}>{project.madeAt}</span>
      </div>
    </Link>
  );
}
