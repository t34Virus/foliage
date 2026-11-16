import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap section">
      <p className="eyebrow">404</p>
      <h1 style={{ margin: "12px 0 24px" }}>That page moved or never existed.</h1>
      <Link className="button primary" href="/work/">See the work</Link>
    </section>
  );
}
