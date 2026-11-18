import Link from "next/link";
import type { ReactNode } from "react";
import { brandLinks, isExternal } from "@/content/brands";

// Longest names first, so "Boeing's Aviall division" wins over "Aviall"; whole words only.
const names = Object.keys(brandLinks).sort((a, b) => b.length - a.length);
const pattern = new RegExp(
  `(?<![A-Za-z0-9])(${names.map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})(?![A-Za-z0-9])`,
  "g",
);

export function BrandLink({ name, children }: Readonly<{ name: string; children?: ReactNode }>) {
  const href = brandLinks[name];
  if (!href) return <>{children ?? name}</>;
  return isExternal(href) ? (
    <a className="brand-link" href={href} target="_blank" rel="noreferrer">{children ?? name}</a>
  ) : (
    <Link className="brand-link" href={href}>{children ?? name}</Link>
  );
}

// Text with every known brand or event turned into a link. `here` is the current page's path,
// so a project page never links to itself.
export default function BrandText({ text, here }: Readonly<{ text: string; here?: string }>) {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(pattern)) {
    const name = m[1];
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(brandLinks[name] === here ? name : <BrandLink key={`${name}-${m.index}`} name={name} />);
    last = m.index + name.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
