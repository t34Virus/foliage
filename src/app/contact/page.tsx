import type { Metadata } from "next";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Teresa Nededog about senior engineering and creative technologist roles.",
};

const rows: [string, string, string][] = [
  ["Email", profile.email, `mailto:${profile.email}`],
  ["LinkedIn", "linkedin.com/in/teresa-nededog", profile.links.linkedin],
  ["GitHub", "github.com/t34Virus", profile.links.github],
];

export default function ContactPage() {
  return (
    <section className="wrap section">
      <p className="eyebrow">Contact</p>
      <h1 style={{ margin: "12px 0 16px", maxWidth: "16ch" }}>Hiring, or have something to build?</h1>
      <p className="lede" style={{ marginBottom: 40 }}>
        I&apos;m looking for senior and staff engineering roles and creative technologist work. {profile.location}.
      </p>
      <dl style={{ display: "grid", gap: 0, margin: 0, borderTop: "1px solid var(--line)", maxWidth: 760 }}>
        {rows.map(([label, text, href]) => (
          <div key={label} style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", padding: "22px 0", borderBottom: "1px solid var(--line)" }}>
            <dt className="eyebrow">{label}</dt>
            <dd style={{ margin: 0, fontSize: "clamp(1.1rem, 2.4vw, 1.5rem)", overflowWrap: "anywhere" }}>
              <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{text}</a>
            </dd>
          </div>
        ))}
      </dl>
      <p style={{ marginTop: 32 }}><a className="button primary" href={profile.resumeRequest}>Request resume</a></p>
    </section>
  );
}
