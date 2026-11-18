import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

// Icons: Font Awesome Free (CC BY 4.0, https://fontawesome.com/license/free), drawn inline as SVG.
// Decorative only: the control that holds the icon carries the text or label.
export default function Icon({ icon }: Readonly<{ icon: IconDefinition }>) {
  const [w, h, , , path] = icon.icon;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} aria-hidden="true" focusable="false">
      <path fill="currentColor" d={String(path)} />
    </svg>
  );
}
