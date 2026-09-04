import type { Metadata } from "next";
import { HairCareGuide } from "../hair-care-guide";

export const metadata: Metadata = {
  title: "Mixed-Texture Hair Care | Sienna Shea Butter South Africa",
  description: "A flexible moisture-care routine for mixed-texture, curly, coily and afro hair, including simple ways to use a rich shea butter without weighing hair down.",
  alternates: { canonical: "/mixed-texture-hair-care" },
};

export default function MixedTextureHairCarePage() {
  return (
    <HairCareGuide
      eyebrow="MIXED-TEXTURE HAIR CARE"
      title="Care that can flex with every texture."
      intro="Mixed-texture hair can ask for different things in different places. Start with hydration, use the smallest amount of butter that feels right, and focus on the parts that need it most."
      path="/mixed-texture-hair-care"
      updatedAt="2026-09-05T00:00:00.000Z"
      image="/media/community-mother-daughter.jpg"
      imageAlt="A mother and daughter smiling with their natural hair"
      orderMessage="Hi Sienna Shea Butter! I read your mixed-texture hair-care guide and would like to order the Hibiscus Infused Shea Butter."
      steps={[
        { title: "Notice the driest areas", body: "The crown, ends and tighter curls may need more attention than looser sections. There is no need to use the same amount everywhere." },
        { title: "Add water first", body: "Use butter after water, a leave-in conditioner or another hydrating step. It works as a finishing layer to help maintain the moisture already in the hair." },
        { title: "Warm, then smooth", body: "Rub a small amount between your palms before applying. Smooth through the mid-lengths and ends rather than loading the roots." },
        { title: "Adjust on the next wash day", body: "If hair feels heavy, use less next time. If the ends still feel dry, add a little more only where needed." },
      ]}
      questions={[
        { question: "Will shea butter make my hair thin?", answer: "Sienna is a cosmetic hair butter designed to help hair feel softer and moisturised. It is not designed to thin hair; individual results and routines vary." },
        { question: "Can I use it on relaxed hair?", answer: "Yes. Start with a small amount and concentrate on dry lengths and ends, especially after a hydrating step." },
        { question: "Can I use it with braids or twists?", answer: "Yes. Use a little on the lengths and ends when preparing or refreshing a style. Keep protective styles comfortable rather than tight." },
      ]}
      related={[
        { href: "/how-to-use-shea-butter", title: "How to use shea butter", body: "See the simple order of hydration, a little butter and gentle styling." },
        { href: "/kids-natural-hair-care", title: "Kids’ natural hair care", body: "A calmer routine for wash days, sections and tender hair." },
      ]}
    />
  );
}
