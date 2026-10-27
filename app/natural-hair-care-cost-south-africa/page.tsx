import type { Metadata } from "next";
import { HairCareGuide } from "../hair-care-guide";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "What Natural Hair Care Costs in South Africa | Sienna Shea Butter",
  description: "A clear look at Sienna Hibiscus Infused Shea Butter prices (250 ml R180, 125 ml R100), how long a jar may last, courier costs and free collection in Centurion.",
  path: "/natural-hair-care-cost-south-africa",
  image: "/media/community-three-jars.jpg",
  imageAlt: "Three jars of Sienna Shea Butter",
  type: "article",
});

export default function NaturalHairCareCostSouthAfricaPage() {
  return (
    <HairCareGuide
      eyebrow="SIMPLE, CLEAR PRICING"
      title="Two jar sizes, a small amount at a time."
      intro="Sienna Hibiscus Infused Shea Butter is R180 for a 250 ml jar or R100 for a 125 ml jar. Because it is intentionally thick, customers often tell us the 250 ml jar lasts around one to two months when used a little at a time; how long it lasts depends on hair length, density and routine."
      path="/natural-hair-care-cost-south-africa"
      updatedAt="2026-10-27T00:00:00.000Z"
      image="/media/community-three-jars.jpg"
      imageAlt="Three jars of Sienna Shea Butter"
      orderMessage="Hi Sienna Shea Butter! I read your pricing guide and would like to order the Hibiscus Infused Shea Butter (250 ml R180 or 125 ml R100)."
      steps={[
        { title: "Start with the product price", body: "The 250 ml jar of Hibiscus Infused Shea Butter is R180 and the 125 ml jar is R100. There is no subscription or required bundle." },
        { title: "Use a small amount", body: "A little goes a long way with a thick butter. Depending on how often and how much you use, the 250 ml jar may last around one to two months; the 125 ml jar roughly half as long." },
        { title: "Choose collection or courier", body: "Collection in Eco Park, Centurion is free by arrangement. Nationwide Aramex courier delivery is available and starts from R120; the final courier cost can vary by destination." },
        { title: "Confirm before paying", body: "Message Sienna on WhatsApp to confirm availability, delivery or collection, and the final amount. Payment is currently by EFT or cash." },
      ]}
      questions={[
        { question: "How much is Sienna Shea Butter?", answer: "The Hibiscus Infused Shea Butter is R180 for a 250 ml jar and R100 for a 125 ml jar." },
        { question: "How long does one jar last?", answer: "Because the butter is thick, customers commonly say the 250 ml jar lasts around one to two months. Your result will vary with the amount used, hair length, density and routine." },
        { question: "How much is delivery in South Africa?", answer: "Aramex courier delivery starts from R120 and can vary by destination. Collection in Eco Park, Centurion is free by arrangement." },
        { question: "How can I pay?", answer: "Sienna currently accepts EFT and cash. Confirm the order details on WhatsApp before paying." },
      ]}
      related={[
        { href: "/hibiscus-infused-shea-butter", title: "Meet the Hibiscus Infused Shea Butter", body: "Ingredients, the 250 ml and 125 ml sizes, and the product details." },
        { href: "/delivery-and-collection", title: "Delivery and collection", body: "How nationwide Aramex delivery and free collection work." },
      ]}
    />
  );
}
