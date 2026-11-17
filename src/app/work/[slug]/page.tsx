import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { capabilityBySlug } from "@/content/capabilities";
import { projectBySlug, projects } from "@/content/projects";
import { asset } from "@/lib/asset";
import styles from "./project.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/work/[slug]">): Promise<Metadata> {
  const p = projectBySlug((await props.params).slug);
  if (!p) return {};
  return {
    title: `${p.client}: ${p.title}`,
    description: p.summary,
    // Plain path: metadataBase already ends in /foliage/, so asset() here would double it.
    openGraph: p.media.poster ? { images: [p.media.poster] } : undefined,
  };
}

function Hero({ project }: { project: NonNullable<ReturnType<typeof projectBySlug>> }) {
  const { vimeo, video, poster } = project.media;
  if (vimeo) {
    return (
      <div className={styles.frame}>
        <iframe
          src={`https://player.vimeo.com/video/${vimeo}?dnt=1&title=0&byline=0&portrait=0`}
          title={`${project.client} ${project.title} demo video`}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }
  if (video) {
    return (
      <div className={styles.frame}>
        <video src={asset(video)} poster={poster ? asset(poster) : undefined} controls playsInline preload="metadata" />
      </div>
    );
  }
  if (poster) {
    return (
      <div className={styles.frame}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset(poster)} alt={`${project.client} ${project.title}`} />
      </div>
    );
  }
  return (
    <div className={`${styles.frame} ${styles.typeHero}`} aria-hidden="true">
      <span>{project.madeAt}</span>
    </div>
  );
}

export default async function ProjectPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = projectBySlug(slug);
  if (!project) notFound();

  const i = projects.indexOf(project);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];

  const meta = [
    ["Role", project.role],
    ["Built at", project.madeAt],
    ["Platform", project.platform?.join(", ")],
    ["Recognition", project.award],
  ].filter(([, v]) => v) as [string, string][];

  return (
    <article>
      <div className={`wrap ${styles.top}`}>
        <Link className="text-link" href="/work/">All work</Link>
      </div>
      <div className="wrap">
        <Hero project={project} />
      </div>

      <header className={`wrap ${styles.header}`}>
        <p className="eyebrow">{project.client}</p>
        <h1>{project.title}</h1>
        <p className="lede">{project.summary}</p>
      </header>

      <div className={`wrap ${styles.body}`}>
        <aside className={styles.meta}>
          <dl>
            {meta.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          {project.tech && (
            <>
              <p className={styles.metaLabel}>Technology</p>
              <ul className="chips">{project.tech.map((t) => <li key={t}>{t}</li>)}</ul>
            </>
          )}
          <p className={styles.metaLabel}>Capabilities</p>
          <ul className={styles.caps}>
            {project.capabilities.map((c) => (
              <li key={c}><Link href={`/capabilities/${c}/`}>{capabilityBySlug(c)?.title}</Link></li>
            ))}
          </ul>
        </aside>

        <div className={styles.story}>
          {project.challenge && (
            <section>
              <h2>Challenge</h2>
              <p>{project.challenge}</p>
            </section>
          )}
          {project.built && (
            <section>
              <h2>What I built</h2>
              <ul>{project.built.map((b) => <li key={b}>{b}</li>)}</ul>
            </section>
          )}
          {project.results && (
            <section>
              <h2>Results</h2>
              <ul>{project.results.map((r) => <li key={r}>{r}</li>)}</ul>
            </section>
          )}
          {project.links && (
            <section>
              <h2>Links</h2>
              <ul>{project.links.map((l) => <li key={l.href}><a href={l.href} target="_blank" rel="noreferrer">{l.label}</a></li>)}</ul>
            </section>
          )}
        </div>
      </div>

      {project.media.images && (
        <div className={`wrap ${styles.gallery}`}>
          {project.media.images.map((src) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={src} src={asset(src)} alt={`${project.client} ${project.title} screen`} loading="lazy" />
          ))}
        </div>
      )}

      <nav className={`wrap ${styles.pager}`} aria-label="More projects">
        <Link href={`/work/${prev.slug}/`}><span className="eyebrow">Previous</span>{prev.client}: {prev.title}</Link>
        <Link href={`/work/${next.slug}/`} className={styles.nextLink}><span className="eyebrow">Next</span>{next.client}: {next.title}</Link>
      </nav>
    </article>
  );
}
