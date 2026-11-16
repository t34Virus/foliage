import type { Metadata } from "next";
import WorkGrid from "@/components/WorkGrid";
import { capabilities } from "@/content/capabilities";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Cross-platform apps, full-stack platforms and interactive experiences for brands including IBM, Cummins, Baxter and Andersen Windows.",
};

export default function WorkPage() {
  return (
    <section className="wrap section">
      <p className="eyebrow">Work</p>
      <h1 style={{ margin: "12px 0 16px" }}>Apps, platforms and experiences.</h1>
      <p className="lede" style={{ marginBottom: 40 }}>
        A selection of what I&apos;ve built across product teams and agencies, from a K12 community app to
        show-floor installations for Fortune 500 brands.
      </p>
      <WorkGrid projects={projects} capabilities={capabilities} />
    </section>
  );
}
