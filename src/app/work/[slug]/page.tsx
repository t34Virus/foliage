import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BrandText from "@/components/BrandText";
import Gallery from "@/components/Gallery";
import HeroMedia, { type HeroSource } from "@/components/HeroMedia";
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
    // Plain path: metadataBase already carries the site's base, so asset() here could double it.
    openGraph: p.media.poster ? { images: [p.media.poster] } : undefined,
  };
}

function Hero({ project }: { project: NonNullable<ReturnType<typeof projectBySlug>> }) {
  const { vimeo, youtube, videoTitle, video, preview, poster } = project.media;
  const name = `${project.client} ${project.title}`;
  // Teresa, 2026-11-17: the hero is an image, with the video one click away. The full video comes first
  // (Vimeo, then YouTube, then a self-hosted clip); a project with only the demo loop plays that.
  const source: HeroSource | null = vimeo
    ? { kind: "vimeo", id: vimeo }
    : youtube
      ? { kind: "youtube", id: youtube }
      : video
        ? { kind: "video", src: asset(video) }
        : preview
          ? { kind: "loop", src: asset(preview) }
          : null;
  if (poster) {
    return (
      <div className={styles.frame}>
        {source ? (
          <HeroMedia
            source={source}
            poster={asset(poster)}
            title={source.kind === "loop" ? `${name} demo` : (videoTitle ?? `${name} video`)}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={asset(poster)} alt={name} />
        )}
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

  const here = `/work/${project.slug}/`; // brand links skip the page you're on
  const i = projects.indexOf(project);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];

  const meta = [
    ["Role", project.role],
    [project.madeAtLabel ?? "Built at", project.madeAt],
    ["Platform", project.platform?.join(", ")],
    ["Recognition", project.award],
  ].filter(([, v]) => v) as [string, string][];

  const gallery = (project.media.images ?? []).map((m) =>
    typeof m === "string"
      ? { src: asset(m), alt: `${project.client} ${project.title} screen` }
      : { src: asset(m.src), poster: asset(m.poster), alt: m.label, caption: m.label, video: true },
  );

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
        <p className="lede"><BrandText text={project.summary} here={here} /></p>
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
          {(project.credit || project.aiUse) && (
            <div className={styles.footnote}>
              {project.credit && <p>{project.credit}</p>}
              {project.aiUse && <p>{project.aiUse}</p>}
            </div>
          )}
        </aside>

        <div className={styles.story}>
          {project.quote && (
            <figure className={styles.quote}>
              <blockquote>&ldquo;{project.quote.text}&rdquo;</blockquote>
              <figcaption>{project.quote.by}</figcaption>
            </figure>
          )}
          {project.challenge && (
            <section>
              <h2>{project.challengeTitle ?? "Challenge"}</h2>
              <p><BrandText text={project.challenge} here={here} /></p>
            </section>
          )}
          {project.built && (
            <section>
              <h2>What I built</h2>
              <ul>{project.built.map((b) => <li key={b}><BrandText text={b} here={here} /></li>)}</ul>
            </section>
          )}
          {project.howItWorks && (
            <section>
              <h2>How it works</h2>
              <div className={styles.how}>
                {project.howItWorks.map((h) => (
                  <div key={h.part}>
                    <h3>{h.part}</h3>
                    <p><BrandText text={h.detail} here={here} /></p>
                  </div>
                ))}
              </div>
            </section>
          )}
          {project.results && (
            <section>
              <h2>Results</h2>
              <ul>{project.results.map((r) => <li key={r}><BrandText text={r} here={here} /></li>)}</ul>
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

      {project.media.moreVideos && (
        <section className={`wrap ${styles.moreVideos}`} aria-label="More video">
          {project.media.moreVideos.map((v) => (
            <figure key={v.youtube}>
              <div className={styles.frame}>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.youtube}?rel=0`}
                  title={v.title}
                  allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <figcaption>{v.title}</figcaption>
            </figure>
          ))}
        </section>
      )}

      {gallery.length > 0 && (
        <div className={`wrap ${styles.gallery}`}>
          <Gallery items={gallery} />
        </div>
      )}

      <nav className={`wrap ${styles.pager}`} aria-label="More projects">
        <Link href={`/work/${prev.slug}/`}><span className="eyebrow">Previous</span>{prev.client}: {prev.title}</Link>
        <Link href={`/work/${next.slug}/`} className={styles.nextLink}><span className="eyebrow">Next</span>{next.client}: {next.title}</Link>
      </nav>
    </article>
  );
}
