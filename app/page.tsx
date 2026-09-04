import Image from "next/image";
import { CommunityPhotoCarousel } from "./community-photo-carousel";
import { ResponsiveImage } from "./responsive-image";
import { homepageWhatsAppUrl, instagramUrl, productPath, siteUrl, whatsappUrl } from "./site-data";

const testimonials = [
  { quote: "Absolutely love the new Sienna. My hair is so soft.", source: "Mukonie" },
  { quote: "I absolutely love your product. It makes this hair so soft.", source: "Zandi" },
  { quote: "This thing works like magic — my hair has never looked and felt richer.", source: "Solly" },
  { quote: "My hair is super soft and fluffy after unplaiting. It’s that butter, baby.", source: "Sunnyboi" },
  { quote: "Made the detangling so easy.", source: "Tshiwe" },
  { quote: "I am so happy with the results of my hair. Definitely ordering another one.", source: "Lab Felicity" },
  { quote: "I’m consistent with the butter and the compliments I’m getting are amazing.", source: "Nomsa Xhamvu" },
];

const communityPhotos = [
  { src: "/media/community-child-sienna-shea-butter.jpg", alt: "A smiling child holding a tub of Sienna Shea Butter" },
  { src: "/media/community-customer-jar.jpg", alt: "A Sienna customer holding her shea butter jar" },
  { src: "/media/community-product-in-hands.jpg", alt: "A customer holding a labelled jar of Sienna Shea Butter" },
  { src: "/media/community-customer-chef.jpg", alt: "A customer proudly showing her Sienna Shea Butter" },
  { src: "/media/community-kids-hairstyle.jpg", alt: "A child wearing a neat natural hairstyle" },
  { src: "/media/community-natural-hair.jpg", alt: "A customer showing her full natural hair" },
  { src: "/media/community-parent-child-product.jpg", alt: "A parent and child holding their Sienna Shea Butter" },
  { src: "/media/community-soft-hair.jpg", alt: "A customer showing her soft natural hair" },
  { src: "/media/community-three-jars.jpg", alt: "A customer collecting three jars of Sienna Shea Butter" },
  { src: "/media/community-workplace-jar.jpg", alt: "A customer holding Sienna Shea Butter at work" },
  { src: "/media/community-product-closeup.jpg", alt: "A close-up of Sienna Shea Butter in a customer’s hand" },
  { src: "/media/community-man-product.jpg", alt: "A male customer showing his Sienna Shea Butter" },
  { src: "/media/community-baby-jar.jpg", alt: "A young child holding a jar of Sienna Shea Butter" },
  { src: "/media/community-hot-oil-care.jpg", alt: "A customer sharing her moisturised hair after a hot-oil care session" },
  { src: "/media/community-three-week-update.jpg", alt: "A customer sharing her hair progress after three weeks" },
  { src: "/media/community-smiling-customer.jpg", alt: "A smiling customer holding her Sienna Shea Butter" },
  { src: "/media/community-mens-hair.jpg", alt: "A customer showing his moisturised natural hair" },
  { src: "/media/community-mother-daughter.jpg", alt: "A mother and daughter smiling with their natural hair" },
];

const faqs = [
  {
    question: "How much shea butter should I use on natural hair?",
    answer: "Start with a pea-sized amount and add more only if needed. Sienna is a rich, thick hair butter, so a little goes a long way.",
  },
  {
    question: "When should I use shea butter in my hair routine?",
    answer: "Apply a small amount after water, leave-in conditioner, or another hydrating step. The butter works best as a finishing layer that helps seal in moisture.",
  },
  {
    question: "Can I use it for kids’ afro or mixed-texture hair?",
    answer: "Many families use a small amount as part of a simple hair-care routine for afro, curly, coily, and mixed-texture hair. Patch test first, avoid the eyes, and stop use if irritation occurs. For babies or children with eczema or very sensitive skin, speak to a healthcare professional first.",
  },
  {
    question: "How do I detangle thick or coarse hair more gently?",
    answer: "Work in sections on damp hair. Add slip with your preferred conditioner, begin at the ends with your fingers or a wide-tooth comb, and move upward slowly.",
  },
  {
    question: "Can I use it with braids, twists, or other protective styles?",
    answer: "Yes. Smooth a small amount over the lengths and ends while preparing or refreshing the style. Keep the style comfortable rather than tight.",
  },
  {
    question: "Is Sienna a black hair treatment?",
    answer: "Sienna is a cosmetic hair butter for moisture-focused care, not a medical treatment. If your scalp is sore, inflamed, or persistently itchy, stop use and speak to a healthcare professional.",
  },
  {
    question: "How long does a 200g tub last?",
    answer: "Because Sienna is thick, a 200g tub can last about one to two months depending on hair length, density, and how often you use it.",
  },
  {
    question: "Can I use it on my skin?",
    answer: "Some customers choose to use a small amount on their skin. Patch test first, avoid the eyes and broken or irritated skin, and stop use if irritation occurs.",
  },
  {
    question: "Can men use it for hair or beards?",
    answer: "Yes. Use a small amount as part of a hair or beard grooming routine. Patch test first and avoid the mouth and eyes.",
  },
  {
    question: "Does it melt in hot weather?",
    answer: "It can soften or melt in warm conditions because it is made with natural oils. Store it in a cool, dry place. Once cooled, it can still be used as intended.",
  },
  {
    question: "Can it heal alopecia or treat hair loss?",
    answer: "No. Sienna is a cosmetic hair butter, not a medical treatment or cure for alopecia, hair loss, or scalp conditions. Speak to a qualified healthcare professional for those concerns.",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@id": `${siteUrl}/#organization`,
  "@type": "Organization",
  name: "Sienna Shea Butter",
  url: siteUrl,
  logo: `${siteUrl}/sienna-logo.jpg`,
  telephone: "+27 60 772 9916",
  description: "South African small-batch hibiscus-infused shea butter for natural, afro, coily, curly, mixed-texture, relaxed, and kids’ hair care.",
  foundingDate: "2019",
  areaServed: { "@type": "Country", name: "South Africa" },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: "+27 60 772 9916",
    areaServed: { "@type": "Country", name: "South Africa" },
    availableLanguage: "en",
  },
  founder: { "@id": `${siteUrl}/#mashudu` },
  sameAs: [instagramUrl],
};

const founderSchema = {
  "@context": "https://schema.org",
  "@id": `${siteUrl}/#mashudu`,
  "@type": "Person",
  name: "Mashudu",
  jobTitle: "Founder",
  worksFor: { "@id": `${siteUrl}/#organization` },
  description: "Founder of Sienna Shea Butter, a South African small-batch hair-care brand.",
  sameAs: [instagramUrl],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="announcement">Small-batch natural hair care made in South Africa</div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sienna Shea Butter home">
          <span className="brand-word">SIENNA</span>
          <span className="brand-script">Shea Butter</span>
          <span className="brand-origin"><span aria-hidden="true">🇿🇦</span> Made in South Africa</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#butter">Our butter</a>
          <a href="#story">Our story</a>
          <a href="/how-to-use-shea-butter">Hair care</a>
          <a href="#love">Customer love</a>
        </nav>
        <a className="header-cta" href={homepageWhatsAppUrl} target="_blank" rel="noreferrer">Order on WhatsApp</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">HIBISCUS-INFUSED SHEA BUTTER</p>
          <h1>Shea butter for soft, manageable natural hair.</h1>
          <p className="hero-intro">Rich, small-batch moisture care for afro, coily, curly, mixed-texture and relaxed hair — made for adults, children and everyday family routines.</p>
          <div className="hero-actions">
            <a className="button button-dark" href={homepageWhatsAppUrl} target="_blank" rel="noreferrer">Order for R180 <span aria-hidden="true">↗</span></a>
            <a className="text-link" href={productPath}>Meet the butter <span aria-hidden="true">↗</span></a>
          </div>
          <div className="trust-row" aria-label="Product highlights">
            <span><b>Small-batch</b> made</span>
            <span><b>200g</b> per tub</span>
            <span><b>Rich texture</b> a little goes far</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="sun-disc" />
          <div className="hero-image-wrap"><ResponsiveImage src="/media/hibiscus-shea-butter-hero.jpg" alt="A jar of Sienna Hibiscus Infused Shea Butter" width={1000} height={1500} sizes="(max-width: 640px) 245px, (max-width: 980px) 290px, 31vw" priority /></div>
        </div>
      </section>

      <section className="intro-band" id="butter">
        <p className="eyebrow">FOR THE WHOLE FAMILY</p>
        <h2>One pot. Many hair stories.</h2>
        <p>Sienna Shea Butter was created for real routines: wash days, kids’ hair, dry ends, detangling, protective styles, beard care and the days between.</p>
      </section>

      <section className="product-section">
        <div className="product-photo"><ResponsiveImage src="/media/hibiscus-shea-butter-hero.jpg" alt="A jar of Sienna Hibiscus Infused Shea Butter" width={1000} height={1500} sizes="(max-width: 980px) 82vw, 42vw" /></div>
        <div className="product-details">
          <p className="eyebrow">THE ORIGINAL</p>
          <h2>Hibiscus Infused Shea Butter</h2>
          <p className="price">R180 <span>per 200g tub</span></p>
          <p>A thick, nourishing hair butter created to go a long way. Warm a small amount between your palms, then smooth it over damp, hydrated hair to help seal in moisture.</p>
          <h3 className="ingredients-heading">What’s inside</h3>
          <ul className="ingredient-list">
            <li>Butyrospermum parkii butter (shea butter)</li>
            <li>Herbal-infused Cocos nucifera oil</li>
            <li>Olea europaea oil</li>
            <li>Vitamin E</li>
            <li>Arrowroot powder</li>
            <li>Essential oils</li>
            <li>Fragrance oil</li>
          </ul>
          <a className="button button-dark" href={homepageWhatsAppUrl} target="_blank" rel="noreferrer">Order your tub <span aria-hidden="true">↗</span></a>
          <a className="product-details-link" href={productPath}>View full product details <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="community-section" aria-labelledby="community-title">
        <div className="community-heading">
          <p className="eyebrow">THE SIENNA COMMUNITY</p>
          <h2 id="community-title">Real people. Real hair. Real love.</h2>
          <p>From children’s wash days to men’s cuts, family hair care and natural styles, every photo is part of the story.</p>
        </div>
        <CommunityPhotoCarousel photos={communityPhotos} />
      </section>

      <section className="hair-types-section">
        <div><p className="eyebrow">CARE FOR EVERY TEXTURE</p><h2>Find your way to use it.</h2></div>
        <div className="hair-types-grid">
          <article><span>01</span><h3>Afro, coily &amp; curly</h3><p>Seal in moisture after water or leave-in care, then style as usual.</p><a href="/how-to-use-shea-butter">Read the guide ↗</a></article>
          <article><span>02</span><h3>Mixed-texture hair</h3><p>Begin with a tiny amount, concentrating on the driest lengths and ends.</p><a href="/mixed-texture-hair-care">Read the guide ↗</a></article>
          <article><span>03</span><h3>Kids’ hair</h3><p>Use a little at a time for sectioning, detangling and everyday styling.</p><a href="/kids-natural-hair-care">Read the guide ↗</a></article>
          <article><span>04</span><h3>Relaxed &amp; protective styles</h3><p>Bring softness to dry ends, braids, twists and in-between days.</p><a href="/shea-butter-relaxed-hair">Read the guide ↗</a></article>
        </div>
      </section>

      <section className="story-section" id="story">
        <div className="founder-portrait">
          <ResponsiveImage src="/media/sienna-founder-ceo-v2.jpg" alt="Mashudu, founder of Sienna Shea Butter" width={1280} height={1600} sizes="(max-width: 980px) 82vw, 38vw" />
          <p>Mashudu — founder of Sienna Shea Butter</p>
        </div>
        <div className="story-copy">
          <p className="eyebrow">OUR ORIGIN STORY</p>
          <h2>It began with a sensitive scalp and a wooden spoon.</h2>
          <p className="story-lede">“I didn’t start it as a business. I wanted to make my own hair products.”</p>
          <p>In 2016, after years of relaxed hair and the burning, itchy feeling that came with it, Mashudu cut her hair and began learning what her natural texture needed.</p>
          <p>By 2019, she had researched natural-hair care, spoken to people already making products, and bought her first shea butter and oils. With no mixer, Mashudu blended that first batch over the stove with a wooden spoon.</p>
          <p>Her colleagues noticed how soft, shiny and moisturised her hair looked. Samples became requests to buy. Those customers shared Sienna with friends and family, growing a community of women, men, children, beard-care customers and barbers who appreciated softer, well-cared-for hair.</p>
          <p className="story-signoff">Today, Sienna is still growing the same way it began: one real recommendation at a time.</p>
        </div>
        <div className="early-days">
          <div className="early-days-heading"><p className="eyebrow">THE EARLY DAYS</p><p>From hand-mixed batches and handwritten packages to the jar you know today.</p></div>
          <figure className="early-photo early-photo-wide"><ResponsiveImage src="/media/community-sienna-bag.jpg" alt="An early Sienna order in simple paper packaging" width={1000} height={968} sizes="(max-width: 640px) 46vw, 27vw" /></figure>
          <figure className="early-photo"><ResponsiveImage src="/media/community-early-gift-wrap.jpg" alt="Early Sienna Shea Butter gift wrapping" width={1000} height={888} sizes="(max-width: 640px) 46vw, 27vw" /></figure>
          <figure className="early-photo"><ResponsiveImage src="/media/community-handwritten-packages.jpg" alt="Sienna orders wrapped by hand with personal messages" width={752} height={1000} sizes="(max-width: 640px) 46vw, 27vw" /></figure>
        </div>
      </section>

      <section className="care-section" id="care">
        <div className="care-copy">
          <p className="eyebrow">HOW TO CARE FOR MY HAIR</p>
          <h2>Simple moisture care for natural hair.</h2>
          <p>Hair has its own language. Start with hydration, use a little butter to seal it in, and adjust the amount to what your hair loves.</p>
          <div className="care-steps">
            <p><b>1. Start damp</b> after washing or lightly misting.</p>
            <p><b>2. Warm a little</b> between your palms.</p>
            <p><b>3. Smooth through</b> the mid-lengths and ends.</p>
            <p><b>4. Style gently</b> in the way that feels good for you.</p>
          </div>
          <div className="faq-list">
            {faqs.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="love-section" id="love">
        <div className="love-heading">
          <div><p className="eyebrow">CUSTOMER LOVE</p><h2>Words shared with Sienna.</h2></div>
          <p>These are real customer messages, shared under the names shown in the original WhatsApp and social posts.</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => <figure key={testimonial.source}><blockquote>“{testimonial.quote}”</blockquote><figcaption>{testimonial.source}</figcaption></figure>)}
        </div>
      </section>

      <section className="order-section" id="order">
        <div className="order-copy">
          <p className="eyebrow">READY WHEN YOU ARE</p>
          <h2>Order Sienna Shea Butter on WhatsApp.</h2>
          <p>Order your R180 200g tub on WhatsApp. Pay by EFT or cash. Aramex courier starts from R120; same-province orders typically arrive within the same week, while other destinations may cost more. Free collection in Eco Park, Centurion can be arranged on WhatsApp.</p>
          <a className="button button-light" href={homepageWhatsAppUrl} target="_blank" rel="noreferrer">Message to order <span aria-hidden="true">↗</span></a>
          <a className="order-details-link" href="/delivery-and-collection">Delivery &amp; collection details <span aria-hidden="true">↗</span></a>
          <p className="order-hours">WhatsApp ordering hours: Monday–Friday, 09:00–18:00</p>
        </div>
        <div className="order-steps" aria-label="How to order">
          <div><span>1</span><p>Message Sienna on WhatsApp</p></div>
          <div><span>2</span><p>Confirm your order and payment</p></div>
          <div><span>3</span><p>Choose Aramex courier or collection</p></div>
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
