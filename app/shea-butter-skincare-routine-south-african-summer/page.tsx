import type { Metadata } from "next";
import { HairCareGuide } from "../hair-care-guide";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Shea Butter Skincare Routine for South African Summer | Sienna",
  description: "How to use a rich shea butter lightly in hot South African weather: night-time use on dry areas, sunscreen first by day, and storing your jar so it does not melt.",
  path: "/shea-butter-skincare-routine-south-african-summer",
  image: "/media/community-product-in-hands.jpg",
  imageAlt: "A customer holding a labelled jar of Sienna Shea Butter",
  type: "article",
});

export default function SummerSkincareRoutinePage() {
  return (
    <HairCareGuide
      eyebrow="SUMMER SKINCARE WITH SHEA BUTTER"
      title="A shea butter skincare routine for South African summer."
      intro="Summer in South Africa means heat, strong sun and, on the Highveld, afternoon storms. A rich butter can still have a place in your routine—it just needs to be used more lightly, at the right time of day, and alongside sun protection rather than instead of it."
      path="/shea-butter-skincare-routine-south-african-summer"
      updatedAt="2026-10-27T00:00:00.000Z"
      publishedAt="2026-10-27T00:00:00.000Z"
      image="/media/community-product-in-hands.jpg"
      imageAlt="A customer holding a labelled jar of Sienna Shea Butter"
      orderMessage="Hi Sienna Shea Butter! I read your summer skincare guide and would like to order the Hibiscus Infused Shea Butter."
      sections={[
        {
          heading: "A note before you start",
          body: (
            <>
              <p>Sienna Hibiscus Infused Shea Butter was made as a hair butter. Some customers also choose to use a small amount on their skin, and this guide is for them. The formula contains essential oils and fragrance oil, so patch test on a small area first, keep it away from your eyes and from broken or irritated skin, and stop if you notice redness or discomfort.</p>
              <p>If you have eczema, very sensitive or acne-prone skin, or you are thinking of using it on a baby, speak to a qualified healthcare professional first. Shea butter is a cosmetic moisturiser; it does not treat skin conditions, stretch marks, dark marks or sunburn.</p>
            </>
          ),
        },
        {
          heading: "Why summer calls for a lighter touch",
          body: (
            <>
              <p>In winter, a thick butter can feel comforting on dry skin. In summer, the same amount can feel heavy and sticky, especially in humid coastal heat in Durban or on a hot afternoon in Pretoria. Sweat and a rich layer of butter do not mix well, and a heavy layer under clothing can feel uncomfortable.</p>
              <p>The answer is usually not to stop altogether but to use less, to use it where skin actually feels dry, and to shift it to the evening when you are cooler and not heading out into the sun.</p>
            </>
          ),
        },
        {
          heading: "Sunscreen comes first",
          body: (
            <>
              <p>This is the most important part of any South African summer routine. Shea butter is not a sunscreen and should never be relied on for sun protection. During the day, use a broad-spectrum sunscreen as directed on its label, reapply after swimming or sweating, and add a hat and shade during the strongest midday sun.</p>
              <p>If you like a little butter in the morning, keep it to small dry areas such as the backs of the hands or elbows, let it absorb, and apply your sunscreen as the product instructs. On a hot day, many people find it simpler to save the butter for the evening.</p>
            </>
          ),
        },
        {
          heading: "Where a little butter makes sense",
          body: (
            <>
              <p>Summer skin is rarely dry all over, so be selective. Places that often still feel dry or rough in warm weather include:</p>
              <ul>
                <li>Heels and the soles of the feet, especially after a season in sandals.</li>
                <li>Elbows and knees.</li>
                <li>Hands, particularly after frequent washing or swimming.</li>
                <li>Cuticles and the skin around the nails.</li>
              </ul>
              <p>Most people prefer lighter products on the face in summer. If you choose to use any butter on your face, use the tiniest amount and only after a patch test, and avoid it if you are prone to breakouts.</p>
            </>
          ),
        },
        {
          heading: "Keep your jar cool",
          body: (
            <>
              <p>Sienna is made with natural butters and oils, so it softens and can melt in summer heat—a car dashboard or a sunny windowsill is enough. Store it with the lid closed in a cool, dry cupboard. If it melts, let it cool and set again; it can still be used as intended, though the texture may be slightly different. Use clean, dry hands so water does not get into the jar.</p>
              <p>Summer also tends to mean swimming and more wash days, so you may find yourself reaching for the butter for your hair too. Our <a href="/how-to-use-shea-butter">how-to-use guide</a> covers the hair routine, the <a href="/shea-butter-4c-hair">4C hair guide</a> goes section by section, and the <a href="/highveld-winter-hair-care">Highveld winter guide</a> is there when the weather turns. Sienna is handmade by Mashudu in Centurion and comes in a 250 ml jar for R180 or a 125 ml jar for R100—see <a href="/delivery-and-collection">delivery and free collection</a>.</p>
            </>
          ),
        },
      ]}
      stepsTitle="A simple summer routine."
      stepsIntro="Keep it light, keep it targeted, and let sunscreen do the job only sunscreen can do."
      steps={[
        { title: "Morning: cleanse and protect", body: "Wash with your usual gentle cleanser and apply a broad-spectrum sunscreen as directed. Skip the butter on areas that will be in the sun, or keep it to a tiny amount on dry hands." },
        { title: "After a shower: pat, don’t rub", body: "Pat skin mostly dry with a towel so it is still slightly damp. A thin layer of butter on damp skin spreads more easily, so you need less." },
        { title: "Evening: target the dry spots", body: "Warm a small amount between your palms and press it onto heels, elbows, knees or hands. Cotton socks overnight can help on dry heels." },
        { title: "Adjust for heat and humidity", body: "On very hot or humid days, use less or skip it. If skin feels greasy or you notice irritation or breakouts, stop using it on that area." },
      ]}
      questions={[
        { question: "Can I use shea butter instead of sunscreen?", answer: "No. Shea butter is not a sunscreen and does not provide reliable sun protection. Use a broad-spectrum sunscreen as directed on its label." },
        { question: "Can I put shea butter on sunburn?", answer: "We do not recommend using Sienna on sunburnt or broken skin. For sunburn, follow guidance from a pharmacist or healthcare professional." },
        { question: "Will shea butter clear dark marks or stretch marks?", answer: "No. Sienna is a cosmetic moisturiser and does not treat dark marks, stretch marks or any skin condition." },
        { question: "What should I do if the jar melts?", answer: "Let it cool in a shaded, cool spot until it sets again. It can still be used as intended. Store it away from direct sun and heat." },
      ]}
      related={[
        { href: "/hibiscus-infused-shea-butter", title: "Meet the Hibiscus Infused Shea Butter", body: "Ingredients, sizes, prices and how to order." },
        { href: "/hibiscus-for-hair", title: "Hibiscus for hair", body: "What hibiscus can and can’t do—an honest look." },
      ]}
    />
  );
}
