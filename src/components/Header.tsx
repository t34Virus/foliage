import Link from "next/link";
import { profile } from "@/content/profile";
import styles from "./Header.module.css";

const nav = [
  { href: "/work/", label: "Work" },
  { href: "/capabilities/", label: "Capabilities" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.bar}`}>
        <Link href="/" className={styles.wordmark}>
          {profile.wordmark}
        </Link>
        <nav aria-label="Main" className={styles.nav}>
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <a className={styles.resume} href={profile.resumeRequest} title="Request my resume by email">
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
