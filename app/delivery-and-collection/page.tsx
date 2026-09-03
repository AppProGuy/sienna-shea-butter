import type { Metadata } from "next";
import Image from "next/image";
import {
  collectionDetails,
  deliveryPath,
  instagramUrl,
  productPath,
  siteUrl,
  whatsappUrl,
} from "../site-data";

/* eslint-disable @next/next/no-html-link-for-pages */

export const metadata: Metadata = {
  title: "Shea Butter Delivery & Collection | Centurion | Sienna",
  description:
    "Order Sienna Hibiscus Infused Shea Butter by WhatsApp. Aramex courier starts from R120, or arrange collection in Eco Park, Centurion from 09:00–18:00.",
  alternates: { canonical: deliveryPath },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: deliveryPath,
    title: "Sienna Shea Butter Delivery & Collection",
    description: "Aramex courier across South Africa or pre-arranged collection in Eco Park, Centurion.",
    images: [{ url: "/media/community-product-closeup.jpg", width: 900, height: 900, alt: "Sienna Shea Butter jar" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Delivery & collection", item: `${siteUrl}${deliveryPath}` },
  ],
};

export default function DeliveryAndCollectionPage() {
  return (
    <main className="detail-page">
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
          <p className="eyebrow">ORDERING MADE SIMPLE</p>
          <h1>Delivery or collection, arranged with you.</h1>
          <p>Every order is confirmed personally on WhatsApp. Choose Aramex courier for delivery or arrange collection in Eco Park, Centurion before travelling.</p>
          <div className="detail-hero-actions">
            <a className="button button-dark" href={whatsappUrl} target="_blank" rel="noreferrer">Message to order <span aria-hidden="true">↗</span></a>
            <a className="text-link" href={productPath}>View the butter <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <figure>
          <Image src="/media/community-product-in-hands.jpg" alt="A customer holding a labelled jar of Sienna Shea Butter" width={1000} height={1300} sizes="(max-width: 980px) 88vw, 46vw" priority />
        </figure>
      </section>

      <section className="detail-quick-facts" aria-label="Delivery and collection essentials">
        <div><b>{collectionDetails.courier}</b><span>Courier delivery across South Africa.</span></div>
        <div><b>From {collectionDetails.courierFrom}</b><span>Courier cost is confirmed with your order.</span></div>
        <div><b>{collectionDetails.hours}</b><span>WhatsApp ordering and collection arrangement hours.</span></div>
      </section>

      <section className="detail-content" aria-labelledby="delivery-title">
        <div className="detail-content-intro">
          <p className="eyebrow">ARAMEX COURIER</p>
          <h2 id="delivery-title">Delivery that starts with a real conversation.</h2>
          <p>Message first so Sienna can confirm the delivery address, courier cost, and the best route for your order before payment is made.</p>
        </div>
        <div className="detail-callout">
          <div><h3>Courier starts from R120</h3><p>Aramex delivery starts from R120. The final courier amount can be higher outside the province.</p></div>
          <div><h3>Same-province timing</h3><p>Orders sent within the same province typically arrive within the same week. Courier timing can vary by destination.</p></div>
          <div><h3>Order and payment confirmation</h3><p>Message Sienna on WhatsApp to confirm your tub, delivery option, and payment details before the order is packed.</p></div>
        </div>
      </section>

      <section className="detail-section" aria-labelledby="collection-title">
        <div className="detail-section-copy">
          <p className="eyebrow">COLLECTION IN CENTURION</p>
          <h2 id="collection-title">Please arrange collection before you come through.</h2>
          <p>Collection is available in Eco Park, Centurion. Send a WhatsApp message first so the collection time can be confirmed.</p>
        </div>
        <div className="detail-callout">
          <div><h3>Collection point</h3><p>{collectionDetails.address}</p></div>
          <div><h3>Collection hours</h3><p>{collectionDetails.hours}. Please arrange your collection time on WhatsApp before travelling.</p></div>
          <div><h3>Need help choosing?</h3><p>Send a message with your hair routine or delivery question. Sienna will help you decide whether courier or collection makes the most sense.</p></div>
        </div>
      </section>

      <section className="detail-cta">
        <p className="eyebrow">READY WHEN YOU ARE</p>
        <h2>Order Sienna Shea Butter on WhatsApp.</h2>
        <p>Confirm your R180 200g tub, then arrange Aramex courier or Centurion collection directly with Sienna.</p>
        <a className="button button-dark" href={whatsappUrl} target="_blank" rel="noreferrer">Start your order <span aria-hidden="true">↗</span></a>
      </section>

      <footer>
        <Image src="/sienna-logo.jpg" alt="Sienna Shea Butter" width={100} height={100} />
        <p>Small-batch natural hair care, made with intention in South Africa. <span className="south-africa-flag" role="img" aria-label="South African flag">🇿🇦</span></p>
        <div className="footer-links"><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a><a href={whatsappUrl} target="_blank" rel="noreferrer">Order on WhatsApp ↗</a></div>
      </footer>
    </main>
  );
}
