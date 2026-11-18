"use client";

import type { MouseEvent } from "react";
import styles from "./CalendlyButton.module.css";

// Teresa's Calendly scheduler, opened in Calendly's own popup. This replaces Calendly's badge widget
// (a clickable div that keyboards can't reach and whose inline color would cover the gradient) with a
// real link that opens the same popup through Calendly's popup API. Calendly's script and stylesheet
// load the first time someone points at, focuses or taps the link, so pages make no Calendly requests
// until then. Without JavaScript, the link simply opens the scheduler in a new tab.
const SCHEDULER = "https://calendly.com/alohateresa/aloha";
const ASSETS = "https://assets.calendly.com/assets/external/widget";

type Calendly = { initPopupWidget: (options: { url: string }) => void };
declare global {
  interface Window { Calendly?: Calendly }
}

let loading: Promise<Calendly> | undefined;
function loadCalendly(): Promise<Calendly> {
  loading ??= new Promise<Calendly>((resolve, reject) => {
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = `${ASSETS}.css`;
    document.head.appendChild(css);
    const js = document.createElement("script");
    js.src = `${ASSETS}.js`;
    js.async = true;
    js.onload = () => (window.Calendly ? resolve(window.Calendly) : reject(new Error("Calendly did not start")));
    js.onerror = () => {
      loading = undefined; // let a later click try again
      reject(new Error("Calendly did not load"));
    };
    document.head.appendChild(js);
  });
  return loading;
}

const preload = () => { loadCalendly().catch(() => {}); };

export default function CalendlyButton() {
  const open = (event: MouseEvent<HTMLAnchorElement>) => {
    // Let modified clicks (new tab, new window) behave like a normal link.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    event.preventDefault();
    loadCalendly()
      .then((calendly) => calendly.initPopupWidget({ url: SCHEDULER }))
      .catch(() => window.open(SCHEDULER, "_blank", "noopener"));
  };

  return (
    <a
      className={`${styles.badge} grad-fill`}
      href={SCHEDULER}
      target="_blank"
      rel="noreferrer"
      aria-haspopup="dialog"
      onClick={open}
      onPointerEnter={preload}
      onFocus={preload}
    >
      <span className={styles.emoji} aria-hidden="true">🗓️</span>
      {/* Collapsed until hover or keyboard focus, but always in the page, so screen readers hear it. */}
      <span className={styles.label}>Schedule time with me</span>
    </a>
  );
}
