import type { Metadata } from "next";
import { HairCareGuide } from "../hair-care-guide";

export const metadata: Metadata = {
  title: "What Natural Hair Care Costs in South Africa | Sienna Shea Butter",
  description:
    "A clear look at the Sienna Hibiscus Infused Shea Butter price, how long a 200g tub may last, courier costs and free collection in Centurion.",
  alternates: { canonical: "/natural-hair-care-cost-south-africa" },
};

export default function NaturalHairCareCostSouthAfricaPage() {
  return (
    <HairCareGuide
      eyebrow="SIMPLE, CLEAR PRICING"
      title="One 200g tub, a small amount at a time."
      intro="Sienna Hibiscus Infused Shea Butter is R180 for a 200g tub. Because it is intentionally thick, customers often tell us a tub lasts around one to two months when used a little at a time; how long it lasts depends on hair length, density and routine."
      path="/natural-hair-care-cost-south-africa"
      updatedAt="2026-09-05T00:00:00.000Z"
      image="/media/community-three-jars.jpg"
      imageAlt="Three jars of Sienna Shea Butter"
      orderMessage="Hi Sienna Shea Butter! I read your pricing guide and would like to order the R180 200g Hibiscus Infused Shea Butter."
      steps={[
        { title: "Start with the product price", body: "A 200g tub of Hibiscus Infused Shea Butter is R180. There is no subscription or required bundle." },
        { title: "Use a small amount", body: "A little goes a long way with a thick butter. Depending on how often and how much you use, a tub may last around one to two months." },
        { title: "Choose collection or courier", body: "Collection in Eco Park, Centurion is free by arrangement. Nationwide Aramex courier delivery is available and starts from R120; the final courier cost can vary by destination." },
        { title: "Confirm before paying", body: "Message Sienna on WhatsApp to confirm availability, delivery or collection, and the final amount. Payment is currently by EFT or cash." },
      ]}
      questions={[
        { question: "How much is Sienna Shea Butter?", answer: "The Hibiscus Infused Shea Butter is R180 for a 200g tub." },
        { question: "How long does one tub last?", answer: "Because the butter is thick, customers commonly say it lasts around one to two months. Your result will vary with the amount used, hair length, density and routine." },
        { question: "How much is delivery in South Africa?", answer: "Aramex courier delivery starts from R120 and can vary by destination. Collection in Eco Park, Centurion is free by arrangement." },
        { question: "How can I pay?", answer: "Sienna currently accepts EFT and cash. Confirm the order details on WhatsApp before paying." },
      ]}
      related={[
        { href: "/hibiscus-infused-shea-butter", title: "Meet the Hibiscus Infused Shea Butter", body: "Ingredients, 200g size, and the product details." },
        { href: "/delivery-and-collection", title: "Delivery and collection", body: "How nationwide Aramex delivery and free collection work." },
      ]}
    />
  );
}
