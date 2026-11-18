"use client";

import { useEffect, useState } from "react";
import type { Capability } from "@/content/capabilities";
import type { Project } from "@/content/projects";
import ProjectCard from "./ProjectCard";
import styles from "./WorkGrid.module.css";

export default function WorkGrid({ projects, capabilities }: { projects: Project[]; capabilities: Capability[] }) {
  const [filter, setFilter] = useState<string>("all");
  // A brand link can open this page as /work/?client=IBM to show just that client's projects.
  const [client, setClient] = useState<string | null>(null);
  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("client");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- read once from the URL after hydration
    if (fromUrl) setClient(fromUrl);
  }, []);
  const clearClient = () => {
    setClient(null);
    window.history.replaceState(null, "", window.location.pathname);
  };
  const shown = projects
    .filter((p) => filter === "all" || p.capabilities.includes(filter as Capability["slug"]))
    .filter((p) => !client || p.client.toLowerCase().includes(client.toLowerCase()));

  return (
    <>
      <div className={styles.filters} role="group" aria-label="Filter projects by capability">
        {[{ slug: "all", title: "All work" }, ...capabilities].map((c) => (
          <button
            key={c.slug}
            type="button"
            aria-pressed={filter === c.slug}
            className={styles.filter}
            onClick={() => setFilter(c.slug)}
          >
            {c.title}
          </button>
        ))}
      </div>
      {client && (
        <button type="button" className={`${styles.filter} ${styles.clientChip}`} onClick={clearClient} aria-label={`Stop showing only ${client} work`}>
          Client: {client} <span aria-hidden="true">&times;</span>
        </button>
      )}
      <p className={styles.count} aria-live="polite">{shown.length} projects{client ? ` for ${client}` : ""}</p>
      <div className="project-grid">
        {shown.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </>
  );
}
