import type { Metadata } from "next";
import { HairCareGuide } from "../hair-care-guide";

export const metadata: Metadata = {
  title: "Highveld Winter Hair Care for Natural Hair | Sienna South Africa",
  description:
    "A simple, moisture-focused natural-hair routine for dry Highveld winter days, with practical ways to use a rich shea butter lightly.",
  alternates: { canonical: "/highveld-winter-hair-care" },
};

export default function HighveldWinterHairCarePage() {
  return (
    <HairCareGuide
      eyebrow="HIGHVELD WINTER HAIR CARE"
      title="Keep the routine simple when winter air makes hair feel drier."
      intro="Cool, dry winter weather can make a regular hair-care routine feel different. The answer is not necessarily more products: start with hydration, use a little rich butter where it is needed, and pay attention to how your own hair responds."
      path="/highveld-winter-hair-care"
      updatedAt="2026-09-05T00:00:00.000Z"
      image="/media/community-mens-hair.jpg"
      imageAlt="A Sienna customer sharing his cared-for hair"
      orderMessage="Hi Sienna Shea Butter! I read your Highveld winter hair-care guide and would like to order the Hibiscus Infused Shea Butter."
      steps={[
        { title: "Hydrate before butter", body: "Use water, freshly washed hair, or the leave-in step that already works for you. Sienna is a rich layer that helps seal in moisture; it is not a replacement for hydration." },
        { title: "Use a little on the driest areas", body: "Warm a small amount in your palms and smooth it through the lengths and ends. If one section feels drier, add a little there rather than coating the whole head." },
        { title: "Keep wash-day handling gentle", body: "Detangle patiently in sections, especially when hair feels dry or fragile. Avoid pulling, rushing, or very tight styling." },
        { title: "Store the jar away from heat", body: "Sienna is made with natural oils and can soften or melt in warm conditions. Keep the lid secure and store it somewhere cool and out of direct sun." },
      ]}
      questions={[
        { question: "Should I use more shea butter in winter?", answer: "Not automatically. Start with the same small amount after hydration, then add only if your lengths and ends still feel dry. Too much rich butter can leave hair feeling coated." },
        { question: "Can I use it between wash days?", answer: "Yes. Lightly mist or hydrate the area first if that suits your routine, then use a small amount of butter on the parts that need it." },
        { question: "Does cold weather damage natural hair?", answer: "Hair can feel different in dry or cold conditions, but hair care is individual. A gentle, hydration-first routine and less tension from styling are practical places to start. For ongoing scalp or hair concerns, speak to a qualified professional." },
      ]}
      related={[
        { href: "/how-to-use-shea-butter", title: "How to use shea butter", body: "A simple way to use a rich butter after hydration." },
        { href: "/loc-lco-shea-butter", title: "LOC and LCO layering", body: "See where shea butter can fit in a moisture-focused routine." },
      ]}
    />
  );
}
