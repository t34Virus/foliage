import Link from "next/link";
import { profile } from "@/content/profile";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <div>
          <p className={styles.cta}>Let&apos;s build something people remember.</p>
          <a className={`${styles.email} grad-text`} href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        <ul className={styles.links}>
          <li><a className="grad-text" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a className="grad-text" href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a></li>
          <li><Link className="grad-text" href="/contact/">Contact</Link></li>
        </ul>
      </div>
      <div className={`wrap ${styles.base}`}>
        <span>{profile.location}</span>
      </div>
    </footer>
  );
}
