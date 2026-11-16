import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectCard from "@/components/ProjectCard";
import { capabilities, capabilityBySlug } from "@/content/capabilities";
import { projectsFor } from "@/content/projects";
import styles from "../capabilities.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return capabilities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(props: PageProps<"/capabilities/[slug]">): Promise<Metadata> {
  const c = capabilityBySlug((await props.params).slug);
  return c ? { title: c.title, description: c.short } : {};
}

export default async function CapabilityPage(props: PageProps<"/capabilities/[slug]">) {
  const capability = capabilityBySlug((await props.params).slug);
  if (!capability) notFound();
  const work = projectsFor(capability.slug);

  return (
    <section className="wrap section">
      <Link className="text-link" href="/capabilities/">All capabilities</Link>
      <p className="eyebrow" style={{ marginTop: 32 }}>Capability</p>
      <h1 style={{ margin: "12px 0 16px" }}>{capability.title}</h1>
      <p className="lede">{capability.intro}</p>

      <div className={styles.columns}>
        <div>
          <h2>What I build</h2>
          <ul>{capability.builds.map((b) => <li key={b}>{b}</li>)}</ul>
        </div>
        <div className={styles.proof}>
          <h2>Proof</h2>
          <ul>{capability.proof.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
      </div>

      <div className="section-head">
        <h2>Related work</h2>
        <span className="eyebrow">{work.length} projects</span>
      </div>
      <div className="project-grid">
        {work.map((p) => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </section>
  );
}
