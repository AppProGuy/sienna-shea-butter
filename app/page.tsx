const whatsappMessage = encodeURIComponent("Hi Sienna Shea Butter! I'd love to order the Hibiscus Infused Shea Butter.");
const whatsappUrl = `https://wa.me/27607729916?text=${whatsappMessage}`;

const testimonials = [
  { quote: "My hair is so soft — and I have the worst hair.", source: "Verified customer message" },
  { quote: "It made detangling so easy.", source: "Verified customer message" },
  { quote: "I am so happy with the results of my hair. Definitely ordering another one.", source: "Verified customer message" },
];

export default function Home() {
  return (
    <main>
      <div className="announcement">Small-batch care for every crown</div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sienna Shea Butter home"><span className="brand-word">SIENNA</span><span className="brand-script">Shea Butter</span></a>
        <nav aria-label="Primary navigation"><a href="#about">Our butter</a><a href="#love">Customer love</a><a href="#order">How to order</a></nav>
        <a className="header-cta" href={whatsappUrl}>Order on WhatsApp</a>
      </header>
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">HIBISCUS-INFUSED SHEA BUTTER</p>
          <h1>Care that lets your hair feel like itself.</h1>
          <p className="hero-intro">Rich, long-lasting moisture for adults and children — whether your hair is natural, relaxed, coarse, or somewhere in between.</p>
          <div className="hero-actions"><a className="button button-dark" href={whatsappUrl}>Start your order <span aria-hidden="true">↗</span></a><a className="text-link" href="#about">Meet the butter <span aria-hidden="true">↓</span></a></div>
          <div className="trust-row" aria-label="Product highlights"><span><b>Small-batch</b> made</span><span><b>R180</b> per tub</span><span><b>Made to last</b> 1–2 months</span></div>
        </div>
        <div className="hero-visual"><div className="sun-disc" /><div className="hero-image-wrap"><img src="/hibiscus-shea-butter-lifestyle.png" alt="Sienna Shea Butter hibiscus-infused product jar" /></div><p className="image-note">A little ritual for your wash day.</p></div>
      </section>
      <section className="intro-band" id="about"><p className="eyebrow">MADE FOR THE WHOLE FAMILY</p><h2>One pot of rich, thoughtful care.</h2><p>Sienna Shea Butter was made for real hair routines — the wash days, protective styles, detangling moments, and in-between days that need a little softness.</p></section>
      <section className="product-section">
        <div className="product-photo"><img src="/hibiscus-shea-butter-lifestyle.png" alt="Sienna Shea Butter hibiscus-infused product jar" /></div>
        <div className="product-details"><p className="eyebrow">THE ORIGINAL</p><h2>Hibiscus Infused Shea Butter</h2><p className="price">R180 <span>per tub</span></p><p>A thick, nourishing butter created to go a long way in your routine. Customers often come back after one to two months because their tub lasts.</p><ul className="ingredient-list"><li>Shea butter</li><li>Hibiscus petals</li><li>Coconut, aloe vera &amp; vitamin E</li></ul><a className="button button-dark" href={whatsappUrl}>Order your tub <span aria-hidden="true">↗</span></a></div>
      </section>
      <section className="ritual-section"><div><p className="eyebrow">YOUR ROUTINE, YOUR WAY</p><h2>Made to show up for every texture.</h2></div><div className="ritual-grid"><article><span>01</span><h3>Natural hair</h3><p>For moisture-rich routines and soft, touchable finishes.</p></article><article><span>02</span><h3>Relaxed hair</h3><p>A rich layer of care for your everyday maintenance.</p></article><article><span>03</span><h3>Kids’ hair</h3><p>Made with gentle family care at the heart of every tub.</p></article><article><span>04</span><h3>Protective styles</h3><p>Bring a little softness to the time between wash days.</p></article></div></section>
      <section className="love-section" id="love"><div className="love-heading"><p className="eyebrow">CUSTOMER LOVE</p><h2>Real messages from real routines.</h2><p>These are the notes that keep Sienna growing, one family at a time.</p></div><div className="quote-grid">{testimonials.map((t) => <figure key={t.quote}><blockquote>“{t.quote}”</blockquote><figcaption>{t.source}</figcaption></figure>)}</div></section>
      <section className="order-section" id="order"><div className="order-copy"><p className="eyebrow">READY WHEN YOU ARE</p><h2>Your next good hair day starts with a WhatsApp.</h2><p>Send a message to order. Payment is available by EFT or cash; local delivery can be arranged, with courier delivery available further away.</p><a className="button button-light" href={whatsappUrl}>Message to order <span aria-hidden="true">↗</span></a></div><div className="order-steps" aria-label="How to order"><div><span>1</span><p>Message Sienna on WhatsApp</p></div><div><span>2</span><p>Confirm your order &amp; payment</p></div><div><span>3</span><p>Receive it by local delivery or courier</p></div></div></section>
      <footer><img src="/sienna-logo.jpg" alt="Sienna Shea Butter" /><p>Small-batch hair care made with intention.</p><a href={whatsappUrl}>Order on WhatsApp ↗</a></footer>
    </main>
  );
}
