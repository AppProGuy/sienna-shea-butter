import type { Metadata } from "next";
import Image from "next/image";
import {
  deliveryPath,
  instagramUrl,
  product,
  productPath,
  productUrl,
  siteUrl,
  whatsappUrl,
} from "../site-data";

/* eslint-disable @next/next/no-html-link-for-pages */

export const metadata: Metadata = {
  title: "Hibiscus Infused Shea Butter 200g | Sienna South Africa",
  description:
    "Shop Sienna Hibiscus Infused Shea Butter: a rich 200g hair butter for natural, afro, coily, curly, mixed-texture and relaxed hair. R180. Order on WhatsApp in South Africa.",
  alternates: { canonical: productPath },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: productPath,
    title: "Hibiscus Infused Shea Butter | Sienna",
    description:
      "A rich, small-batch 200g shea butter for moisture-focused natural-hair routines. R180.",
    images: [{ url: product.image, width: 1400, height: 1400, alt: product.imageAlt }],
  },
};

const ingredients = [
  "Butyrospermum parkii butter (shea butter)",
  "Herbal-infused Cocos nucifera oil",
  "Olea europaea oil",
  "Vitamin E",
  "Arrowroot powder",
  "Essential oils",
  "Fragrance oil",
];

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  image: [`${siteUrl}${product.image}`],
  description: product.description,
  brand: { "@type": "Brand", name: "Sienna Shea Butter" },
  weight: { "@type": "QuantitativeValue", value: 200, unitCode: "GRM" },
  material: ingredients.join(", "),
  offers: {
    "@type": "Offer",
    url: productUrl,
    priceCurrency: product.currency,
    price: product.price,
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "Sienna Shea Butter" },
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: product.shortName, item: productUrl },
  ],
};

export default function HibiscusInfusedSheaButterPage() {
  return (
    <main className="detail-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <header className="detail-header">
        <a className="brand" href="/" aria-label="Sienna Shea Butter home">
          <span className="brand-word">SIENNA</span>
          <span className="brand-script">Shea Butter</span>
          <span className="brand-origin"><span aria-hidden="true">🇿🇦</span> Made in South Africa</span>
        </a>
        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Order on WhatsApp</a>
      </header>

      <section className="detail-hero">
        <div className="detail-hero-copy">
          <p className="eyebrow">THE ORIGINAL · SMALL-BATCH IN SOUTH AFRICA</p>
          <h1>Hibiscus Infused Shea Butter</h1>
          <p>A rich, thick hair butter made for moisture-focused routines. Start with a little after hydration, then let your own texture and routine guide the amount.</p>
          <p className="detail-price">R180 <span>per 200g tub</span></p>
          <div className="detail-hero-actions">
            <a className="button button-dark" href={whatsappUrl} target="_blank" rel="noreferrer">Order on WhatsApp <span aria-hidden="true">↗</span></a>
            <a className="text-link" href={deliveryPath}>Delivery &amp; collection <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <figure>
          <Image src={product.image} alt={product.imageAlt} width={1400} height={1400} sizes="(max-width: 980px) 88vw, 46vw" priority />
        </figure>
      </section>

      <section className="detail-quick-facts" aria-label="Product essentials">
        <div><b>200g</b><span>A generous tub of rich, thick butter.</span></div>
        <div><b>R180</b><span>One clear price per tub.</span></div>
        <div><b>Made here</b><span>Small-batch hair care from South Africa.</span></div>
      </section>

      <section className="detail-content" aria-labelledby="inside-title">
        <div className="detail-content-intro">
          <p className="eyebrow">WHAT’S INSIDE</p>
          <h2 id="inside-title">A simple blend for rich, everyday care.</h2>
          <p>Every ingredient is listed clearly so customers can make an informed choice. Patch test before use, avoid the eyes, and stop use if irritation occurs.</p>
        </div>
        <ul className="detail-list" aria-label="Ingredients">
          {ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}
        </ul>
      </section>

      <section className="detail-section" aria-labelledby="use-title">
        <div className="detail-section-copy">
          <p className="eyebrow">HOW TO USE IT</p>
          <h2 id="use-title">Hydrate, warm, smooth.</h2>
          <p>Sienna was born from Mashudu’s own natural-hair journey. The routine stays straightforward: hydration first, a small amount of butter second, then gentle styling.</p>
        </div>
        <div className="detail-callout">
          <div><h3>1. Start on damp hair</h3><p>Use after washing, misting, or your preferred leave-in step. Butter helps seal in moisture; it does not replace water.</p></div>
          <div><h3>2. Begin with a pea-sized amount</h3><p>Warm it between your palms. Because the butter is thick, a little can go a long way.</p></div>
          <div><h3>3. Focus on lengths and ends</h3><p>Smooth through the parts that feel driest, then adjust on your next wash day if your hair needs more or less.</p></div>
        </div>
      </section>

      <section className="detail-cta">
        <p className="eyebrow">READY WHEN YOU ARE</p>
        <h2>Order your 200g tub directly from Sienna.</h2>
        <p>Message on WhatsApp to confirm your order, payment, and whether Aramex courier or Centurion collection suits you best.</p>
        <a className="button button-dark" href={whatsappUrl} target="_blank" rel="noreferrer">Message to order <span aria-hidden="true">↗</span></a>
      </section>

      <footer>
        <Image src="/sienna-logo.jpg" alt="Sienna Shea Butter" width={100} height={100} />
        <p>Small-batch natural hair care, made with intention in South Africa. <span className="south-africa-flag" role="img" aria-label="South African flag">🇿🇦</span></p>
        <div className="footer-links"><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a><a href={whatsappUrl} target="_blank" rel="noreferrer">Order on WhatsApp ↗</a></div>
      </footer>
    </main>
  );
}
