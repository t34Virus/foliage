import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { profile } from "@/content/profile";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://t34virus.github.io/foliage/"),
  title: { default: `${profile.name} | ${profile.roles.join(" and ")}`, template: `%s | ${profile.name}` },
  description: profile.intro,
  openGraph: { type: "website", siteName: profile.name },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <a className="sr-only" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
