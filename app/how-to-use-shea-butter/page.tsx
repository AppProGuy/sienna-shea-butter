import type { Metadata } from "next";
import { HairCareGuide } from "../hair-care-guide";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "How to Use Shea Butter on Natural Hair | Sienna South Africa",
  description: "Learn how to use a small amount of rich shea butter after hydration for afro, coily, curly, mixed-texture and relaxed hair. Order Sienna Shea Butter on WhatsApp.",
  path: "/how-to-use-shea-butter",
  image: "/media/community-product-closeup.jpg",
  imageAlt: "A close-up of Sienna Shea Butter in a customer’s hand",
  type: "article",
});

export default function HowToUseSheaButterPage() {
  return (
    <HairCareGuide
      eyebrow="HOW TO USE SHEA BUTTER"
      title="Use less, after hydration, and let your hair lead."
      intro="Sienna Hibiscus Infused Shea Butter is a thick, moisture-focused cosmetic hair butter. It is made to be used in small amounts as part of a simple natural-hair routine."
      path="/how-to-use-shea-butter"
      updatedAt="2026-10-27T00:00:00.000Z"
      image="/media/community-product-closeup.jpg"
      imageAlt="A close-up of Sienna Shea Butter in a customer’s hand"
      orderMessage="Hi Sienna Shea Butter! I read your guide on how to use shea butter and would like to order the Hibiscus Infused Shea Butter."
      steps={[
        { title: "Hydrate first", body: "Begin on damp hair after washing, lightly misting, or applying your preferred leave-in product. Butter helps seal in moisture; it does not replace water." },
        { title: "Warm a pea-sized amount", body: "Sienna is rich and thick. Start with a pea-sized amount, warm it between your palms and add more only if your hair needs it." },
        { title: "Smooth through lengths and ends", body: "Apply gently from the middle of the hair toward the ends. This keeps the amount focused where hair commonly feels dry." },
        { title: "Style softly", body: "Use it before braids, twists, a wash-and-go, or as a light finish between wash days. Avoid pulling styles too tight." },
      ]}
      questions={[
        { question: "How long does a jar last?", answer: "Because the butter is thick, the 250 ml jar can last roughly one to two months depending on hair length, density and how often it is used. The 125 ml jar lasts roughly half as long." },
        { question: "Can I use it on my skin?", answer: "Some customers choose to use a small amount on their skin. Patch test first, avoid the eyes and broken or irritated skin, and stop use if irritation occurs." },
        { question: "Can men use it on hair or beards?", answer: "Yes. A small amount can be used as part of a hair or beard grooming routine. Patch test first and avoid the mouth and eyes." },
        { question: "Does it melt in hot weather?", answer: "It can soften or melt in warm conditions because it is made with natural oils. Store it in a cool, dry place. When cooled, the butter can still be used as intended." },
        { question: "Can Sienna heal alopecia or treat hair loss?", answer: "No. Sienna is a cosmetic hair butter, not a medical treatment or cure for alopecia, hair loss or scalp conditions. Speak to a qualified healthcare professional for those concerns." },
      ]}
      related={[
        { href: "/loc-lco-shea-butter", title: "LOC and LCO layering", body: "See where a thick butter can fit in a hydration-first routine." },
        { href: "/shea-butter-4c-hair", title: "Shea butter on 4C hair", body: "A step-by-step routine for tightly coiled hair, from wash day to refresh." },
      ]}
    />
  );
}
