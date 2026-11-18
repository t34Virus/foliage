import Link from "next/link";
import { BrandLink } from "@/components/BrandText";
import CardCircle from "@/components/CardCircle";
import ProjectCard from "@/components/ProjectCard";
import { capabilities } from "@/content/capabilities";
import { clients, profile } from "@/content/profile";
import { featuredProjects, projects } from "@/content/projects";
import styles from "./home.module.css";

export default function Home() {
  // Same order as the original ring (top, then clockwise), plus Sounds of Security with the IBM work.
  const circle = [
    "andersen-vr-showroom", "fm-global-hacker-resilience", "nissan-next-lineup", "adobe-platinum-club",
    "ibm-think-city", "ibm-quantum", "ibm-ripple-effect", "ibm-sounds-of-security", "valent-biosciences",
    "aviall-interactive-display", "illumina-miniseq", "cummins-iaa", "cummins-conexpo",
    "cummins-engine-interactive", "inhance-website", "baxter-patient-journey", "baxter-prismaflex",
  ].flatMap((slug) => projects.filter((p) => p.slug === slug));

  return (
    <>
      <CardCircle projects={circle}>
        <p className="eyebrow">{profile.roles.join(" / ")}</p>
        <h1>
          I build software people <span className="gradient-text">use, touch and remember.</span>
        </h1>
        <p className="lede">{profile.intro}</p>
        <div className={styles.actions}>
          <Link className="button primary" href="/work/">See the work</Link>
          <a className="button spin-border" href={profile.resumeRequest}>Request resume</a>
        </div>
        {/* Teresa's wording (2026-11-17): only that it was handwritten in 2021, no AI mention. */}
        <p className={styles.note}>The rectangle ring is my original animation, handwritten in 2021.</p>
      </CardCircle>

      <section className="wrap section">
        <div className="section-head">
          <h2>What I do</h2>
          <Link className="text-link" href="/capabilities/">All capabilities</Link>
        </div>
        <ul className={styles.capGrid}>
          {capabilities.map((c, i) => (
            <li key={c.slug}>
              <Link href={`/capabilities/${c.slug}/`} className={`${styles.capTile} spin-border`}>
                <span className={styles.capNum}>{String(i + 1).padStart(2, "0")}</span>
                <h3>{c.title}</h3>
                <p>{c.short}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap section">
        <div className="section-head">
          <h2>Selected work</h2>
          <Link className="text-link" href="/work/">All {projects.length} projects</Link>
        </div>
        <div className="project-grid">
          {featuredProjects().map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section className="wrap section">
        <p className="eyebrow">Brands I&apos;ve built for</p>
        <ul className={styles.clients}>
          {clients.map((c) => (
            <li key={c}><BrandLink name={c} /></li>
          ))}
        </ul>
      </section>
    </>
  );
}
