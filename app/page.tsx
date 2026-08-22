const whatsappMessage = encodeURIComponent("Hi Sienna Shea Butter! I'd love to order the Hibiscus Infused Shea Butter.");
const whatsappUrl = `https://wa.me/27607729916?text=${whatsappMessage}`;

const testimonials = [
  { quote: "Absolutely love the new Sienna. My hair is so soft.", source: "Mukonie" },
  { quote: "I absolutely love your product. It makes this hair so soft.", source: "Zandi" },
  { quote: "The pot of gold has finally arrived.", source: "Mukonie" },
  { quote: "This thing works like magic — my hair has never looked and felt richer.", source: "Solly" },
  { quote: "My hair is super soft and fluffy after unplaiting. It’s that butter, baby.", source: "Sunnyboi" },
  { quote: "Made the detangling so easy.", source: "Tshiwe" },
  { quote: "I am so happy with the results of my hair. Definitely ordering another one.", source: "Lab Felicity" },
  { quote: "I’m consistent with the butter and the compliments I’m getting are amazing.", source: "Nomsa Xhamvu" },
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
          <div className="hero-actions"><a className="button button-dark" href={whatsappUrl}>Start your order <span aria-hidden="true">↗</span></a><a className="text-link" href="#about">Meet the butter <span aria-hidden="true">↓</span></a></div>
          <div className="trust-row" aria-label="Product highlights"><span><b>Small-batch</b> made</span><span><b>R180</b> per tub</span><span><b>Made to last</b> 1–2 months</span></div>
        </div>
        <div className="hero-visual"><div className="sun-disc" /><div className="hero-image-wrap"><img src="/hibiscus-shea-butter-lifestyle.png" alt="Sienna Shea Butter hibiscus-infused product jar" /></div></div>
      </section>
      <section className="intro-band" id="about"><p className="eyebrow">MADE FOR THE WHOLE FAMILY</p><h2>One pot of rich, thoughtful care.</h2><p>Sienna Shea Butter was made for real hair routines — the wash days, protective styles, detangling moments, and in-between days that need a little softness.</p></section>
      <section className="product-section">
        <div className="product-photo"><img src="/hibiscus-shea-butter-lifestyle.png" alt="Sienna Shea Butter hibiscus-infused product jar" /></div>
        <div className="product-details"><p className="eyebrow">THE ORIGINAL</p><h2>Hibiscus Infused Shea Butter</h2><p className="price">R180 <span>per tub</span></p><p>A thick, nourishing butter created to go a long way in your routine. Customers often come back after one to two months because their tub lasts.</p><ul className="ingredient-list"><li>Butyrospermum parkii butter (shea butter)</li><li>Herbal-infused Cocos nucifera oil</li><li>Olea europaea oil</li><li>Vitamin E</li><li>Arrowroot powder</li><li>Essential oils</li><li>Fragrance oil</li></ul><a className="button button-dark" href={whatsappUrl}>Order your tub <span aria-hidden="true">↗</span></a></div>
      </section>
      <section className="ritual-section"><div><p className="eyebrow">YOUR ROUTINE, YOUR WAY</p><h2>Made to show up for every texture.</h2></div><div className="ritual-grid"><article><span>01</span><h3>Natural hair</h3><p>For moisture-rich routines and soft, touchable finishes.</p></article><article><span>02</span><h3>Relaxed hair</h3><p>A rich layer of care for your everyday maintenance.</p></article><article><span>03</span><h3>Kids’ hair</h3><p>Made with gentle family care at the heart of every tub.</p></article><article><span>04</span><h3>Protective styles</h3><p>Bring a little softness to the time between wash days.</p></article></div></section>
      <section className="grid grid-cols-2 bg-[#e8e0d0] max-md:grid-cols-1" id="care"><div className="min-h-[650px] overflow-hidden max-md:min-h-[430px]"><img className="h-full w-full object-cover" src="/hair-care-ritual.png" alt="Illustration of a woman caring for her natural coily hair" /></div><div className="px-[clamp(24px,6vw,100px)] py-[clamp(65px,8vw,110px)]"><p className="eyebrow">HOW TO CARE FOR MY HAIR</p><h2>Keep your care simple.</h2><p className="max-w-[520px] text-[17px] leading-7">Hair has its own language. Start with hydration, use a little butter to seal it in, and adjust the amount to what your hair loves.</p><div className="my-8 grid gap-2 border-y border-[#afb0a1] py-5 text-[14px] leading-6"><p><b>1. Start damp</b> after washing or lightly misting.</p><p><b>2. Warm a little</b> between your palms.</p><p><b>3. Smooth through</b> the mid-lengths and ends.</p><p><b>4. Style gently</b> in the way that feels good for you.</p></div><div className="border-t border-[#afb0a1]"><details className="border-b border-[#afb0a1] py-4"><summary className="cursor-pointer font-semibold">How much should I use?</summary><p className="pt-3 text-sm leading-6">Start with a pea-sized amount. This butter is rich, so it is easy to add more if your hair needs it.</p></details><details className="border-b border-[#afb0a1] py-4"><summary className="cursor-pointer font-semibold">When should I use shea butter?</summary><p className="pt-3 text-sm leading-6">Use it after water, leave-in conditioner, or another hydrating step. Think of butter as the finishing layer that helps keep your routine feeling soft.</p></details><details className="border-b border-[#afb0a1] py-4"><summary className="cursor-pointer font-semibold">How do I detangle more gently?</summary><p className="pt-3 text-sm leading-6">Work in sections on damp hair. Use a wide-tooth comb or your fingers, begin at the ends, and move upward slowly.</p></details><details className="border-b border-[#afb0a1] py-4"><summary className="cursor-pointer font-semibold">Can I use it with braids or twists?</summary><p className="pt-3 text-sm leading-6">Yes — use a small amount on the lengths and ends when preparing or refreshing a protective style. Keep styles comfortable rather than tight.</p></details><details className="border-b border-[#afb0a1] py-4"><summary className="cursor-pointer font-semibold">What if my hair feels heavy?</summary><p className="pt-3 text-sm leading-6">Use less next time and focus on the ends. Every head is different; if your scalp feels irritated, stop using the product and seek professional advice.</p></details></div></div></section>
      <section className="love-section" id="love"><div className="love-heading"><p className="eyebrow">CUSTOMER LOVE</p><h2>Real messages from real routines.</h2><p>These are the notes that keep Sienna growing, one family at a time.</p></div><div className="testimonial-window" style={{ marginLeft: 0, marginRight: 0 }}><div className="testimonial-track" style={{ animationDuration: "28s" }}>{[...testimonials, ...testimonials].map((t, index) => <figure key={`${t.quote}-${index}`}><blockquote>“{t.quote}”</blockquote><figcaption>{t.source}</figcaption></figure>)}</div></div></section>
      <section className="order-section" id="order"><div className="order-copy"><p className="eyebrow">READY WHEN YOU ARE</p><h2>Your next good hair day starts with a WhatsApp.</h2><p>Send a message to order. Payment is available by EFT or cash; local delivery can be arranged, with courier delivery available further away.</p><a className="button button-light" href={whatsappUrl}>Message to order <span aria-hidden="true">↗</span></a></div><div className="order-steps" aria-label="How to order"><div><span>1</span><p>Message Sienna on WhatsApp</p></div><div><span>2</span><p>Confirm your order &amp; payment</p></div><div><span>3</span><p>Receive it by local delivery or courier</p></div></div></section>
      <footer><img src="/sienna-logo.jpg" alt="Sienna Shea Butter" /><p>Small-batch hair care made with intention.</p><a href={whatsappUrl}>Order on WhatsApp ↗</a></footer>
    </main>
  );
}
