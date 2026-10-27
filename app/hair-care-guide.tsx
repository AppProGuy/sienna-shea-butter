import Image from "next/image";
import type { ReactNode } from "react";
import { ResponsiveImage } from "./responsive-image";
import { instagramUrl, siteUrl, whatsappOrderUrl, whatsappUrl } from "./site-data";
import { TrackedCta } from "./tracked-cta";

/* eslint-disable @next/next/no-html-link-for-pages */

type GuideStep = {
  title: string;
  body: string;
};

type GuideQuestion = {
  question: string;
  answer: string;
};

type GuideLink = {
  href: string;
  title: string;
  body: string;
};

type GuideSection = {
  heading: string;
  body: ReactNode;
};

type HairCareGuideProps = {
  eyebrow: string;
  title: string;
  intro: string;
  path: string;
  updatedAt: string;
  publishedAt?: string;
  image: string;
  imageAlt: string;
  orderMessage: string;
  sections?: GuideSection[];
  stepsTitle?: string;
  stepsIntro?: string;
  steps: GuideStep[];
  questions: GuideQuestion[];
  related: GuideLink[];
};

function formatDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-ZA", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(isoDate));
}

export function HairCareGuide({
  eyebrow,
  title,
  intro,
  path,
  updatedAt,
  publishedAt,
  image,
  imageAlt,
  orderMessage,
  sections,
  stepsTitle = "Start small and listen to your hair.",
  stepsIntro = "Sienna is a rich cosmetic hair butter. Use it after hydration, begin with a little, and adjust for your hair length, density and routine.",
  steps,
  questions,
  related,
}: HairCareGuideProps) {
  const guideWhatsAppUrl = whatsappOrderUrl(orderMessage);
  const pageUrl = `${siteUrl}${path}`;
  const guideSchema = {
    "@context": "https://schema.org",
    "@id": `${pageUrl}#guide`,
    "@type": "Article",
    headline: title,
    description: intro,
    mainEntityOfPage: pageUrl,
    image: `${siteUrl}${image}`,
    ...(publishedAt ? { datePublished: publishedAt } : {}),
    dateModified: updatedAt,
    inLanguage: "en-ZA",
    author: { "@id": `${siteUrl}/#mashudu` },
    publisher: { "@id": `${siteUrl}/#organization` },
    articleSection: eyebrow,
  };
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
      { "@type": "ListItem", position: 2, name: title, item: pageUrl },
    ],
  };

  return (
    <main className="guide-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(guideSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <header className="guide-header">
        <a className="brand" href="/" aria-label="Sienna Shea Butter home">
          <span className="brand-word">SIENNA</span>
          <span className="brand-script">Shea Butter</span>
          <span className="brand-origin"><span aria-hidden="true">🇿🇦</span> Made in South Africa</span>
        </a>
        <TrackedCta className="header-cta" target="_blank" rel="noreferrer" href={guideWhatsAppUrl} events={["whatsapp_click", "order_click"]}>Order on WhatsApp</TrackedCta>
      </header>

      <section className="guide-hero">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <p className="guide-byline">Written by Mashudu, founder of Sienna Shea Butter · Updated {formatDate(updatedAt)}</p>
          <TrackedCta className="button button-dark" target="_blank" rel="noreferrer" href={guideWhatsAppUrl} events={["whatsapp_click", "order_click"]}>Order on WhatsApp · from R100 <span aria-hidden="true">↗</span></TrackedCta>
        </div>
        <figure>
          <ResponsiveImage src={image} alt={imageAlt} width={1080} height={1280} sizes="(max-width: 800px) 88vw, 42vw" priority />
        </figure>
      </section>

      {sections && sections.length > 0 && (
        <article className="guide-article">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body}
            </section>
          ))}
          <aside className="guide-article-cta">
            <p>Questions about your routine, or ready to order the 250 ml (R180) or 125 ml (R100) jar? Mashudu answers personally on WhatsApp.</p>
            <TrackedCta className="button button-dark" target="_blank" rel="noreferrer" href={guideWhatsAppUrl} events={["whatsapp_click", "order_click"]}>Chat on WhatsApp <span aria-hidden="true">↗</span></TrackedCta>
          </aside>
        </article>
      )}

      <section className="guide-content" aria-labelledby="guide-steps-title">
        <div className="guide-intro">
          <p className="eyebrow">A SIMPLE ROUTINE</p>
          <h2 id="guide-steps-title">{stepsTitle}</h2>
          <p>{stepsIntro}</p>
        </div>
        <ol className="guide-steps">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{step.title}</h3><p>{step.body}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section className="guide-questions" aria-labelledby="guide-questions-title">
        <div>
          <p className="eyebrow">COMMON QUESTIONS</p>
          <h2 id="guide-questions-title">Practical answers for everyday care.</h2>
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

      <section className="guide-related" aria-labelledby="related-guides-title">
        <p className="eyebrow">MORE FROM SIENNA</p>
        <h2 id="related-guides-title">Keep exploring hair care.</h2>
        <div>
          {related.map((item) => (
            <a href={item.href} key={item.href}>
              <h3>{item.title} <span aria-hidden="true">↗</span></h3>
              <p>{item.body}</p>
            </a>
          ))}
        </div>
      </section>

      <footer>
        <Image src="/sienna-logo.jpg" alt="Sienna Shea Butter" width={100} height={100} />
        <p>Small-batch natural hair care, made with intention in South Africa. <span className="south-africa-flag" role="img" aria-label="South African flag">🇿🇦</span></p>
        <div className="footer-links"><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a><TrackedCta target="_blank" rel="noreferrer" href={whatsappUrl} events={["whatsapp_click", "order_click"]}>Order on WhatsApp ↗</TrackedCta></div>
      </footer>
    </main>
  );
}
