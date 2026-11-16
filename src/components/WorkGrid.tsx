"use client";

import { useState } from "react";
import type { Capability } from "@/content/capabilities";
import type { Project } from "@/content/projects";
import ProjectCard from "./ProjectCard";
import styles from "./WorkGrid.module.css";

export default function WorkGrid({ projects, capabilities }: { projects: Project[]; capabilities: Capability[] }) {
  const [filter, setFilter] = useState<string>("all");
  const shown = filter === "all" ? projects : projects.filter((p) => p.capabilities.includes(filter as Capability["slug"]));

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
      <p className={styles.count} aria-live="polite">{shown.length} projects</p>
      <div className="project-grid">
        {shown.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </>
  );
}
