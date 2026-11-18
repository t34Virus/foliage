"use client";

// Project gallery: a grid of images and silent clips. Selecting any of them opens a full-screen viewer
// (Teresa, 2026-11-17: "If any image is selected, reveal a gallery.") with previous/next buttons, arrow
// keys, swipe on touch screens, and Esc, the close button or a click outside the media to close.
// The viewer is a native modal <dialog>, so focus stays inside it and returns to the tile on close.

import {
  faChevronLeft,
  faChevronRight,
  faPlay,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import styles from "./Gallery.module.css";

export type GalleryItem = {
  src: string;
  alt: string;
  poster?: string; // clips only
  caption?: string;
  video?: boolean;
};

// A clip tile plays like a GIF while hovered or focused, unless the visitor prefers reduced motion.
const startPreview = (tile: HTMLElement) => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  tile.querySelector("video")?.play().catch(() => {});
};
const stopPreview = (tile: HTMLElement) => tile.querySelector("video")?.pause();

export default function Gallery({ items }: Readonly<{ items: GalleryItem[] }>) {
  const dialog = useRef<HTMLDialogElement>(null);
  const touchX = useRef<number | null>(null);
  const [at, setAt] = useState<number | null>(null);
  const n = items.length;
  const item = at === null ? null : items[at];

  const isOpen = at !== null;

  useEffect(() => {
    if (!isOpen) return;
    const root = document.documentElement; // keep the page still behind the viewer
    root.style.overflow = "hidden";
    return () => { root.style.overflow = ""; };
  }, [isOpen]);

  const open = (i: number) => {
    setAt(i);
    dialog.current?.showModal();
  };
  const go = (step: number) => setAt((i) => (i === null ? i : (i + step + n) % n));

  return (
    <>
      <ul className={styles.grid}>
        {items.map((it, i) => (
          <li key={it.src}>
            <button
              type="button"
              className={`${styles.tile} spin-border spin-inset`}
              onClick={() => open(i)}
              // Mouse hover or keyboard focus only; a tap just opens the viewer.
              onPointerEnter={(e) => { if (e.pointerType === "mouse") startPreview(e.currentTarget); }}
              onPointerLeave={(e) => { if (e.pointerType === "mouse") stopPreview(e.currentTarget); }}
              onFocus={(e) => { if (e.currentTarget.matches(":focus-visible")) startPreview(e.currentTarget); }}
              onBlur={(e) => stopPreview(e.currentTarget)}
              aria-label={`View ${it.video ? "video" : "image"} ${i + 1} of ${n}: ${it.caption ?? it.alt}`}
            >
              {it.video ? (
                <video src={it.src} poster={it.poster} muted loop playsInline preload="metadata" />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={it.src} alt="" loading="lazy" />
              )}
              {it.video && <span className={styles.play}><Icon icon={faPlay} /></span>}
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        className={styles.viewer}
        aria-label="Gallery"
        onClose={() => setAt(null)}
        onClick={(e) => {
          // A click anywhere but the media, a button or the caption closes the viewer.
          if (!(e.target as HTMLElement).closest("img, video, button, figcaption")) dialog.current?.close();
        }}
        onKeyDown={(e) => {
          if ((e.target as HTMLElement).tagName === "VIDEO") return; // arrow keys seek a focused video
          if (e.key === "ArrowRight") go(1);
          else if (e.key === "ArrowLeft") go(-1);
        }}
      >
        <div className={styles.bar}>
          <p aria-live="polite">{at !== null && `${at + 1} / ${n}`}</p>
          <button type="button" className={`${styles.icon} spin-border`} onClick={() => dialog.current?.close()} aria-label="Close gallery">
            <Icon icon={faXmark} />
          </button>
        </div>

        <figure
          className={styles.stage}
          onPointerDown={(e) => { touchX.current = e.pointerType === "touch" ? e.clientX : null; }}
          onPointerUp={(e) => {
            if (touchX.current === null) return;
            const dx = e.clientX - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
          }}
        >
          {item?.video && (
            <video
              key={item.src}
              className={styles.media}
              src={item.src}
              poster={item.poster}
              aria-label={item.caption ?? item.alt}
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          )}
          {item && !item.video && (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={item.src} className={styles.media} src={item.src} alt={item.alt} />
          )}
          {item?.caption && <figcaption>{item.caption}</figcaption>}
        </figure>

        {n > 1 && (
          <>
            <button type="button" className={`${styles.icon} ${styles.prev} spin-border`} onClick={() => go(-1)} aria-label="Previous">
              <Icon icon={faChevronLeft} />
            </button>
            <button type="button" className={`${styles.icon} ${styles.next} spin-border`} onClick={() => go(1)} aria-label="Next">
              <Icon icon={faChevronRight} />
            </button>
          </>
        )}
      </dialog>
    </>
  );
}
