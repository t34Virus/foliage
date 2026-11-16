import type { Metadata } from "next";
import Link from "next/link";
import { capabilities } from "@/content/capabilities";
import { projectsFor } from "@/content/projects";
import styles from "./capabilities.module.css";

export const metadata: Metadata = {
  title: "Capabilities",
  description: "Cross-platform apps, full-stack platforms, interactive experiences, cloud and security, and engineering leadership.",
};

export default function CapabilitiesPage() {
  return (
    <section className="wrap section">
      <p className="eyebrow">Capabilities</p>
      <h1 style={{ margin: "12px 0 16px" }}>What I bring to a team.</h1>
      <p className="lede" style={{ marginBottom: 48 }}>
        Five areas I&apos;ve shipped real work in. Each one links to the projects behind it.
      </p>
      <ol className={styles.list}>
        {capabilities.map((c, i) => (
          <li key={c.slug}>
            <Link href={`/capabilities/${c.slug}/`} className={styles.row}>
              <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
              <span className={styles.rowText}>
                <h2>{c.title}</h2>
                <p>{c.short}</p>
              </span>
              <span className={styles.count}>{projectsFor(c.slug).length} projects</span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
