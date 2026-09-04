import type { Metadata } from "next";
import { HairCareGuide } from "../hair-care-guide";

export const metadata: Metadata = {
  title: "LOC vs LCO: Where Does Shea Butter Fit? | Sienna South Africa",
  description:
    "A simple, hydration-first guide to LOC and LCO routines, including where a thick shea butter can fit for afro, coily and curly hair.",
  alternates: { canonical: "/loc-lco-shea-butter" },
};

export default function LocLcoSheaButterPage() {
  return (
    <HairCareGuide
      eyebrow="LOC & LCO ROUTINES"
      title="Where does shea butter fit in LOC or LCO? After hydration."
      intro="LOC and LCO are names for layering routines people use on textured hair. Whichever order you prefer, the useful principle is simple: begin with hydration, then use a small amount of Sienna as the richer layer that helps seal it in."
      path="/loc-lco-shea-butter"
      updatedAt="2026-09-05T00:00:00.000Z"
      image="/media/community-hot-oil-care.jpg"
      imageAlt="A customer sharing moisturised hair after a care routine"
      orderMessage="Hi Sienna Shea Butter! I read your LOC and LCO guide and would like to order the Hibiscus Infused Shea Butter."
      steps={[
        { title: "Begin with water or hydration", body: "Use freshly washed or lightly misted hair, or begin with the leave-in product that works in your existing routine. Butter is not a substitute for the hydrating step." },
        { title: "Choose the order your hair prefers", body: "Some people use liquid, oil, cream; others use liquid, cream, oil. There is no need to force one method if a simple version of another already feels good for your hair." },
        { title: "Use Sienna as the richer sealing layer", body: "Warm a small amount between your palms and apply it mainly to the mid-lengths and ends after hydration. Add more only where it is needed." },
        { title: "Keep the routine easy to repeat", body: "A routine that feels comfortable and manageable is more valuable than a complicated sequence. If hair feels coated, use less butter on the next wash day." },
      ]}
      questions={[
        { question: "Is shea butter the oil or cream step in LOC?", answer: "Sienna is a thick butter blend rather than a light oil or traditional cream. Think of it as a richer layer used after hydration, then adjust the amount for your own hair." },
        { question: "Do I need both LOC and LCO products?", answer: "No. These are optional routine frameworks, not rules. A simple hydration step followed by a small amount of butter can be enough for many everyday routines." },
        { question: "What if the routine leaves my hair feeling coated?", answer: "Use less butter next time, focus it on the ends, and make sure the hair has been hydrated first. Build-up concerns can also be discussed with a hair-care professional." },
      ]}
      related={[
        { href: "/how-to-use-shea-butter", title: "How to use shea butter", body: "A straightforward step-by-step routine for a rich butter." },
        { href: "/shea-butter-hair-porosity", title: "Shea butter and porosity", body: "Learn how to adjust the amount to how your hair responds." },
      ]}
    />
  );
}
