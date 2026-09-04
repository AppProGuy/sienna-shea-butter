import type { Metadata } from "next";
import { HairCareGuide } from "../hair-care-guide";

export const metadata: Metadata = {
  title: "Shea Butter and Hair Porosity | Sienna South Africa",
  description:
    "Learn how to adjust a rich shea butter routine for hair that feels easily weighed down, thirsty, or different from section to section.",
  alternates: { canonical: "/shea-butter-hair-porosity" },
};

export default function SheaButterHairPorosityPage() {
  return (
    <HairCareGuide
      eyebrow="SHEA BUTTER & HAIR POROSITY"
      title="Use your hair’s response—not a label—to guide the amount."
      intro="Porosity is one way people describe how hair takes in and holds moisture, but one head of hair can respond differently in different places. With a rich butter, hydration first and a small starting amount are the useful constants."
      path="/shea-butter-hair-porosity"
      updatedAt="2026-09-05T00:00:00.000Z"
      image="/media/community-natural-hair.jpg"
      imageAlt="A customer showing her natural hair"
      orderMessage="Hi Sienna Shea Butter! I read your hair-porosity guide and would like to order the Hibiscus Infused Shea Butter."
      steps={[
        { title: "Start with damp, hydrated hair", body: "Whether hair tends to dry quickly or feels easily coated, water or your preferred leave-in step gives the butter something to seal in." },
        { title: "Use less on hair that feels weighed down", body: "If your hair feels coated or flat after a routine, reduce the amount next time and keep it mainly on the ends." },
        { title: "Build only where hair feels dry", body: "If certain sections feel drier, smooth a little more there instead of applying the same amount across the whole head." },
        { title: "Change one thing at a time", body: "Keep notes over a few wash days: the amount used, where it was applied, and how the hair felt. That is more useful than forcing a one-size-fits-all routine." },
      ]}
      questions={[
        { question: "Is the float test a reliable way to find hair porosity?", answer: "A glass-of-water float test is often shared online, but it cannot capture every factor that affects how hair behaves. Your hair’s response to a gentle routine over time is more useful for choosing the amount of butter." },
        { question: "Can shea butter feel too heavy on some hair?", answer: "It can if too much is used at once, because Sienna is intentionally thick and rich. Start with a small amount on damp hair and focus on the lengths and ends." },
        { question: "What if different parts of my hair need different amounts?", answer: "That is normal. Use more only on the areas that feel drier and use a lighter touch where hair is softer or easily coated." },
      ]}
      related={[
        { href: "/mixed-texture-hair-care", title: "Mixed-texture hair care", body: "A flexible routine when different sections need different amounts." },
        { href: "/loc-lco-shea-butter", title: "LOC and LCO layering", body: "See where a thick butter can fit after hydration." },
      ]}
    />
  );
}
