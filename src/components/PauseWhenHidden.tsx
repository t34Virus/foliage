"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

// A box (the project page's video frames) that pauses whatever is playing inside it once it's
// scrolled mostly out of view (under a quarter showing), so a video with sound doesn't keep playing
// where nobody's watching (Teresa, 2026-11-18: "Some have audio and people will forget to pause").
// It never resumes on its own; people press play again when they come back.
//
// Embedded players are paused through their postMessage APIs: Vimeo's player takes {"method":"pause"},
// and YouTube's takes a pauseVideo command when the embed URL has enablejsapi=1.
function pauseAll(box: HTMLElement) {
  box.querySelectorAll("video").forEach((v) => v.pause());
  box.querySelectorAll("iframe").forEach((frame) => {
    const target = frame.contentWindow;
    if (!target) return;
    const origin = new URL(frame.src).origin;
    if (origin === "https://player.vimeo.com") {
      target.postMessage(JSON.stringify({ method: "pause" }), origin);
    } else if (origin.endsWith("youtube-nocookie.com") || origin.endsWith("youtube.com")) {
      target.postMessage(JSON.stringify({ event: "command", func: "pauseVideo", args: [] }), origin);
    }
  });
}

export default function PauseWhenHidden({
  className,
  style,
  children,
}: Readonly<{ className?: string; style?: CSSProperties; children: ReactNode }>) {
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.intersectionRatio < 0.25) pauseAll(el); },
      { threshold: [0, 0.25] },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={box} className={className} style={style}>
      {children}
    </div>
  );
}
