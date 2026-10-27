import type { Metadata } from "next";
import Image from "next/image";
import { ResponsiveImage } from "../responsive-image";
import { pageMetadata } from "../seo";
import { TrackedCta } from "../tracked-cta";
import {
  deliveryPath,
  instagramUrl,
  product,
  productPath,
  productWhatsAppUrl,
  productUrl,
  siteUrl,
  whatsappUrl,
} from "../site-data";


/* eslint-disable @next/next/no-html-link-for-pages */

export const metadata: Metadata = pageMetadata({
  title: "Hibiscus Infused Shea Butter 250 ml & 125 ml | Sienna South Africa",
  description:
    "Shop Sienna Hibiscus Infused Shea Butter, handmade in Centurion: 250 ml R180 or 125 ml R100. A rich hair butter for natural, afro, coily, curly, mixed-texture and relaxed hair. Order on WhatsApp.",
  path: productPath,
  image: product.image,
  imageAlt: product.imageAlt,
  socialTitle: "Hibiscus Infused Shea Butter | Sienna",
  socialDescription: "A rich, small-batch shea butter for moisture-focused natural-hair routines. 250 ml R180 · 125 ml R100.",
});

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
  "@id": `${productUrl}#product`,
  "@type": "Product",
  name: product.name,
  image: [`${siteUrl}${product.image}`],
  description: product.description,
  brand: { "@type": "Brand", name: "Sienna Shea Butter" },
  countryOfOrigin: { "@type": "Country", name: "South Africa" },
  size: product.sizes.map((size) => size.label),
  material: ingredients.join(", "),
  additionalProperty: [
    { "@type": "PropertyValue", name: "Texture", value: "Thick, rich butter" },
    { "@type": "PropertyValue", name: "Typical jar life", value: "About one to two months for the 250 ml jar, depending on use" },
  ],
  offers: product.sizes.map((size) => ({
    "@type": "Offer",
    name: `${product.shortName} ${size.label}`,
    url: productUrl,
    priceCurrency: product.currency,
    price: size.price,
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    seller: { "@id": `${siteUrl}/#organization` },
  })),
};

const questions = [
  { question: "What sizes and prices are available?", answer: "Sienna Hibiscus Infused Shea Butter comes in a 250 ml jar for R180 and a 125 ml jar for R100." },
  { question: "How long does a jar last?", answer: "Because the butter is thick, the 250 ml jar can last about one to two months depending on hair length, density and how often it is used. The 125 ml jar lasts roughly half as long and is a good size to try first or to travel with." },
  { question: "Where is it made?", answer: "Every batch is handmade by founder Mashudu in Centurion, Gauteng." },
  { question: "How do I get my order?", answer: "Order on WhatsApp, then choose free collection in Eco Park, Centurion by arrangement, or Aramex courier delivery across South Africa from R120." },
  { question: "Will it make my hair grow?", answer: "No product can promise that, and Sienna does not claim to. It is a cosmetic hair butter that helps hair feel softer and seals in moisture after hydration. For hair loss or scalp concerns, speak to a qualified healthcare professional." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: questions.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <header className="detail-header">
        <a className="brand" href="/" aria-label="Sienna Shea Butter home">
          <span className="brand-word">SIENNA</span>
          <span className="brand-script">Shea Butter</span>
          <span className="brand-origin"><span aria-hidden="true">🇿🇦</span> Made in South Africa</span>
        </a>
        <TrackedCta className="header-cta" target="_blank" rel="noreferrer" href={productWhatsAppUrl} events={["whatsapp_click", "order_click"]}>Order on WhatsApp</TrackedCta>
      </header>

      <section className="detail-hero">
        <div className="detail-hero-copy">
          <p className="eyebrow">THE ORIGINAL · HANDMADE IN CENTURION</p>
          <h1>Hibiscus Infused Shea Butter</h1>
          <p>A rich, thick hair butter made for moisture-focused routines. Start with a little after hydration, then let your own texture and routine guide the amount.</p>
          <p className="detail-price">R180 <span>250 ml</span> · R100 <span>125 ml</span></p>
          <div className="detail-hero-actions">
            <TrackedCta className="button button-dark" target="_blank" rel="noreferrer" href={productWhatsAppUrl} events={["whatsapp_click", "order_click"]}>Order on WhatsApp <span aria-hidden="true">↗</span></TrackedCta>
            <a className="text-link" href={deliveryPath}>Delivery &amp; collection <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="/natural-hair-care-cost-south-africa">Simple price guide <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <figure>
          <ResponsiveImage src={product.image} alt={product.imageAlt} width={1000} height={1500} sizes="(max-width: 980px) 88vw, 46vw" priority />
        </figure>
      </section>

      <section className="detail-quick-facts" aria-label="Product essentials">
        <div><b>250 ml · R180</b><span>The full-size jar of rich, thick butter.</span></div>
        <div><b>125 ml · R100</b><span>A smaller jar to try first or travel with.</span></div>
        <div><b>Made in Centurion</b><span>Handmade in small batches by founder Mashudu.</span></div>
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

      <section className="guide-questions" aria-labelledby="product-questions-title">
        <div>
          <p className="eyebrow">COMMON QUESTIONS</p>
          <h2 id="product-questions-title">Before you order.</h2>
        </div>
        <div className="guide-faq-list">
          {questions.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="detail-cta">
        <p className="eyebrow">READY WHEN YOU ARE</p>
        <h2>Order your jar directly from Sienna.</h2>
        <p>Message on WhatsApp to choose the 250 ml (R180) or 125 ml (R100) jar, confirm EFT or cash payment, and whether Aramex courier or free Centurion collection suits you best.</p>
        <TrackedCta className="button button-dark" target="_blank" rel="noreferrer" href={productWhatsAppUrl} events={["whatsapp_click", "order_click"]}>Message to order <span aria-hidden="true">↗</span></TrackedCta>
      </section>

      <footer>
        <Image src="/sienna-logo.jpg" alt="Sienna Shea Butter" width={100} height={100} />
        <p>Small-batch natural hair care, made with intention in South Africa. <span className="south-africa-flag" role="img" aria-label="South African flag">🇿🇦</span></p>
        <div className="footer-links"><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a><TrackedCta target="_blank" rel="noreferrer" href={whatsappUrl} events={["whatsapp_click", "order_click"]}>Order on WhatsApp ↗</TrackedCta></div>
      </footer>
    </main>
  );
}
