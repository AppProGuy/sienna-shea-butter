import Image from "next/image";
import { instagramUrl, whatsappUrl } from "./site-data";

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

type HairCareGuideProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  steps: GuideStep[];
  questions: GuideQuestion[];
  related: GuideLink[];
};

export function HairCareGuide({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  steps,
  questions,
  related,
}: HairCareGuideProps) {
  return (
    <main className="guide-page">
      <header className="guide-header">
        <a className="brand" href="/" aria-label="Sienna Shea Butter home">
          <span className="brand-word">SIENNA</span>
          <span className="brand-script">Shea Butter</span>
          <span className="brand-origin"><span aria-hidden="true">🇿🇦</span> Made in South Africa</span>
        </a>
        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Order on WhatsApp</a>
      </header>

      <section className="guide-hero">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <a className="button button-dark" href={whatsappUrl} target="_blank" rel="noreferrer">Order the 200g butter <span aria-hidden="true">↗</span></a>
        </div>
        <figure>
          <Image src={image} alt={imageAlt} width={1080} height={1280} sizes="(max-width: 800px) 88vw, 42vw" priority />
        </figure>
      </section>

      <section className="guide-content" aria-labelledby="guide-steps-title">
        <div className="guide-intro">
          <p className="eyebrow">A SIMPLE ROUTINE</p>
          <h2 id="guide-steps-title">Start small and listen to your hair.</h2>
          <p>Sienna is a rich cosmetic hair butter. Use it after hydration, begin with a little, and adjust for your hair length, density and routine.</p>
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
        <div className="footer-links"><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a><a href={whatsappUrl} target="_blank" rel="noreferrer">Order on WhatsApp ↗</a></div>
      </footer>
    </main>
  );
}
