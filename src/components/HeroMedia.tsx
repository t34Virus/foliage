"use client";

// Project hero: the poster image first, with a play button that swaps in the video (Teresa, 2026-11-17:
// "I feel like the hero should be an image instead of the video"). The Vimeo or YouTube player only loads
// on click, so the page opens faster and no third-party player loads for people who don't press play.
// The poster is shown whole over a blurred copy of itself, so posters that aren't 16:9 aren't cropped.

import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styles from "./HeroMedia.module.css";

export type HeroSource =
  | { kind: "vimeo"; id: string }
  | { kind: "youtube"; id: string }
  | { kind: "video"; src: string } // a full clip with sound
  | { kind: "loop"; src: string }; // the silent demo loop

// Icon: Font Awesome Free "play" (CC BY 4.0, https://fontawesome.com/license/free).
const [playW, playH, , , playPath] = faPlay.icon;

// Moves focus into the player once it mounts, so keyboard users land on what they just started.
const focusOnMount = (el: HTMLElement | null) => el?.focus();

export default function HeroMedia({
  source,
  poster,
  title,
  posterPortrait,
}: Readonly<{ source: HeroSource; poster: string; title: string; posterPortrait?: string }>) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    switch (source.kind) {
      case "vimeo":
        return (
          <iframe
            ref={focusOnMount}
            src={`https://player.vimeo.com/video/${source.id}?dnt=1&title=0&byline=0&portrait=0&autoplay=1`}
            title={title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        );
      case "youtube":
        return (
          <iframe
            ref={focusOnMount}
            src={`https://www.youtube-nocookie.com/embed/${source.id}?rel=0&autoplay=1`}
            title={title}
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
          />
        );
      case "video":
        return <video ref={focusOnMount} src={source.src} poster={poster} aria-label={title} controls autoPlay playsInline />;
      case "loop":
        return <video ref={focusOnMount} src={source.src} poster={poster} aria-label={title} controls autoPlay muted loop playsInline />;
    }
  }

  return (
    <button type="button" className={`${styles.facade} spin-host`} onClick={() => setPlaying(true)} aria-label={`Play ${title}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.backdrop} src={poster} alt="" />
      <picture>
        {/* Phones held upright show a portrait video's frame in its own shape (see the project page's
            .portraitFrame); a portrait crop of the poster fills it. */}
        {posterPortrait && <source media="(orientation: portrait) and (max-width: 860px)" srcSet={posterPortrait} />}
        <img className={styles.poster} src={poster} alt="" />
      </picture>
      <span className={`${styles.cta} spin-border`}>
        <svg viewBox={`0 0 ${playW} ${playH}`} aria-hidden="true" focusable="false">
          <path fill="currentColor" d={String(playPath)} />
        </svg>
        {source.kind === "loop" ? "Play demo" : "Play video"}
      </span>
    </button>
  );
}
