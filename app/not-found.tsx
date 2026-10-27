import type { Metadata } from "next";
import { TrackedCta } from "./tracked-cta";
import { whatsappUrl } from "./site-data";

/* eslint-disable @next/next/no-html-link-for-pages */

export const metadata: Metadata = {
  title: "Page Not Found | Sienna Shea Butter",
  description: "This page could not be found. Visit the Sienna Shea Butter homepage, product page or hair-care guides.",
};

export default function NotFound() {
  return (
    <main className="detail-page">
      <header className="detail-header">
        <a className="brand" href="/" aria-label="Sienna Shea Butter home">
          <span className="brand-word">SIENNA</span>
          <span className="brand-script">Shea Butter</span>
          <span className="brand-origin"><span aria-hidden="true">🇿🇦</span> Made in South Africa</span>
        </a>
        <TrackedCta className="header-cta" target="_blank" rel="noreferrer" href={whatsappUrl} events={["whatsapp_click", "order_click"]}>Order on WhatsApp</TrackedCta>
      </header>

      <section className="detail-cta">
        <p className="eyebrow">PAGE NOT FOUND</p>
        <h1>We couldn’t find that page.</h1>
        <p>The link may be old or mistyped. Try the homepage, the Hibiscus Infused Shea Butter, or one of our hair-care guides.</p>
        <div className="detail-hero-actions">
          <a className="button button-dark" href="/">Go to the homepage <span aria-hidden="true">↗</span></a>
          <a className="text-link" href="/hibiscus-infused-shea-butter">View the butter <span aria-hidden="true">↗</span></a>
          <a className="text-link" href="/how-to-use-shea-butter">Hair-care guides <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </main>
  );
}
