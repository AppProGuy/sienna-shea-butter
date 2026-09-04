import type { Metadata } from "next";
import { HairCareGuide } from "../hair-care-guide";

export const metadata: Metadata = {
  title: "Can You Use Shea Butter on Relaxed Hair? | Sienna South Africa",
  description:
    "A practical guide to using a small amount of shea butter on relaxed hair, with tips for dry lengths, ends and gentle everyday styling.",
  alternates: { canonical: "/shea-butter-relaxed-hair" },
};

export default function SheaButterRelaxedHairPage() {
  return (
    <HairCareGuide
      eyebrow="RELAXED HAIR CARE"
      title="Yes, shea butter can fit into a relaxed-hair routine—use it lightly."
      intro="Sienna is a rich cosmetic hair butter. For relaxed hair, begin with a small amount after hydration and concentrate on the lengths and ends instead of applying a heavy layer everywhere."
      path="/shea-butter-relaxed-hair"
      updatedAt="2026-09-05T00:00:00.000Z"
      image="/media/community-soft-hair.jpg"
      imageAlt="A Sienna customer showing soft, cared-for hair"
      orderMessage="Hi Sienna Shea Butter! I read your relaxed-hair guide and would like to order the Hibiscus Infused Shea Butter."
      steps={[
        { title: "Start with hydration", body: "Use butter after water, a leave-in product, or another hydration step that already works for your hair. Butter helps seal in moisture; it does not replace it." },
        { title: "Keep the amount small", body: "Warm a pea-sized amount between your palms. A thick butter can feel heavy if too much is used at once, so it is easier to add a little than to take it away." },
        { title: "Focus on dry lengths and ends", body: "Smooth lightly through the areas that feel driest. You do not need to coat the roots or every strand with the same amount." },
        { title: "Let comfort guide the routine", body: "Avoid tight styling and stop using any product that causes irritation. If hair or scalp concerns persist, speak to a qualified healthcare professional." },
      ]}
      questions={[
        { question: "Will shea butter thin relaxed hair?", answer: "Sienna is a cosmetic hair butter for softness and moisture-focused care. It is not designed to thin hair. Start with a small amount and adjust the routine to how your hair feels." },
        { question: "Can I use it after a relaxer?", answer: "Follow the instructions and after-care guidance from your salon or product first. When your hair is ready for its regular routine, use a small amount on the lengths and ends after hydration." },
        { question: "Can I use it with a protective style?", answer: "Yes. Use a little on dry lengths and ends when preparing or refreshing braids, twists or another comfortable protective style." },
      ]}
      related={[
        { href: "/how-to-use-shea-butter", title: "How to use shea butter", body: "A simple hydration-first routine for wash days and in-between care." },
        { href: "/shea-butter-hair-porosity", title: "Shea butter and hair porosity", body: "Find a lighter or richer approach based on how your hair responds." },
      ]}
    />
  );
}
