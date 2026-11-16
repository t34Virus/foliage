import type { Metadata } from "next";
import { certifications, community, education, experience, profile, recognition } from "@/content/profile";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "Senior software engineer and creative technologist in Los Angeles.",
};

export default function AboutPage() {
  return (
    <section className="wrap section">
      <p className="eyebrow">About</p>
      <h1 style={{ margin: "12px 0 24px" }}>{profile.name}</h1>
      <div className={styles.bio}>
        {profile.bio.map((p) => <p key={p}>{p}</p>)}
        <div><a className="button primary" href={profile.resumeRequest}>Request resume</a></div>
      </div>

      <h2 className={styles.heading}>Experience</h2>
      <ol className={styles.timeline}>
        {experience.map((j) => (
          <li key={j.company}>
            <span className={styles.dates}>{j.dates}</span>
            <div>
              <h3>{j.title}, {j.company}</h3>
              <p>{j.summary}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className={styles.grid}>
        <div>
          <h2 className={styles.heading}>Certifications</h2>
          <ul>{certifications.map((c) => <li key={c}>{c}</li>)}</ul>
        </div>
        <div>
          <h2 className={styles.heading}>Education</h2>
          <p><strong>{education.school}</strong></p>
          <p className={styles.muted}>{education.detail}</p>
        </div>
        <div>
          <h2 className={styles.heading}>Recognition and speaking</h2>
          <ul>{recognition.map((r) => <li key={r}>{r}</li>)}</ul>
        </div>
        <div>
          <h2 className={styles.heading}>Community</h2>
          <ul>{community.map((c) => <li key={c}>{c}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
