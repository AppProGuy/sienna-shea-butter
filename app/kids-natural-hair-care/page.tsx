import type { Metadata } from "next";
import { HairCareGuide } from "../hair-care-guide";

export const metadata: Metadata = {
  title: "Kids’ Natural Hair Care | Sienna Shea Butter South Africa",
  description: "A simple, gentle routine for kids’ afro, coily, curly and mixed-texture hair, with practical sectioning and moisture-care tips from Sienna Shea Butter.",
  alternates: { canonical: "/kids-natural-hair-care" },
};

export default function KidsNaturalHairCarePage() {
  return (
    <HairCareGuide
      eyebrow="KIDS’ NATURAL HAIR CARE"
      title="A simple routine for kids’ afro and mixed-texture hair."
      intro="A calm routine, a little water and patient sectioning can make care days feel easier. This guide is for everyday cosmetic hair care, not for treating scalp or skin conditions."
      image="/media/community-parent-child-product.jpg"
      imageAlt="A parent and child holding Sienna Shea Butter"
      steps={[
        { title: "Start with damp hair", body: "After washing or a light mist, work on hair that feels hydrated rather than dry. This gives you a gentler base for detangling and styling." },
        { title: "Work in small sections", body: "Divide hair into manageable sections. Begin at the ends with fingers or a wide-tooth comb, then slowly work upward." },
        { title: "Use a small amount", body: "Warm a tiny amount of butter between your palms, then smooth it through the lengths and ends. Add only if the hair needs more." },
        { title: "Keep the finish comfortable", body: "Style without pulling too tightly. Give the hair and scalp a break if a style feels sore or uncomfortable." },
      ]}
      questions={[
        { question: "How much should I use on kids’ hair?", answer: "Start with a very small amount. Sienna is thick, so a little can go a long way—especially on shorter or finer hair." },
        { question: "Can I use it on a baby?", answer: "The formula contains essential and fragrance oils. For babies, or children with eczema or very sensitive skin, speak to a healthcare professional first and use a product specifically appropriate for them." },
        { question: "What if my child’s scalp is itchy or sore?", answer: "Stop using any product that causes discomfort and speak with a qualified healthcare professional for persistent itching, soreness, flakes or hair loss." },
      ]}
      related={[
        { href: "/how-to-use-shea-butter", title: "How to use shea butter", body: "A simple moisture-sealing routine for wash days and in-between care." },
        { href: "/mixed-texture-hair-care", title: "Mixed-texture hair care", body: "A flexible approach when different parts of the hair need different amounts." },
      ]}
    />
  );
}
