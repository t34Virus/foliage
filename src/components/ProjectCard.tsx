"use client";

import Link from "next/link";
import { useRef } from "react";
import type { Project } from "@/content/projects";
import { asset } from "@/lib/asset";
import styles from "./ProjectCard.module.css";

// Agency-style tile: poster at rest, the muted demo loop plays on hover or keyboard focus.
export default function ProjectCard({ project }: { project: Project }) {
  const video = useRef<HTMLVideoElement>(null);
  const { poster, preview } = project.media;

  const play = () => {
    const v = video.current;
    if (!v || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    v.play().catch(() => {});
  };
  const stop = () => video.current?.pause();

  return (
    <Link
      href={`/work/${project.slug}/`}
      className={styles.card}
      onMouseEnter={play}
      onMouseLeave={stop}
      onFocus={play}
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
        <h3>{project.title}</h3>
        <span className={styles.madeAt}>{project.madeAt}</span>
      </div>
    </Link>
  );
}
