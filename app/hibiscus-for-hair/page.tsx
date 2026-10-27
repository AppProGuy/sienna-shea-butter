import type { Metadata } from "next";
import { HairCareGuide } from "../hair-care-guide";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Hibiscus for Hair: What It Can and Can’t Do | Sienna South Africa",
  description: "An honest look at hibiscus in hair care: why it is used, what a hibiscus-infused butter can offer, and the growth and medical claims we do not make.",
  path: "/hibiscus-for-hair",
  image: "/media/hibiscus-shea-butter-hero.jpg",
  imageAlt: "A jar of Sienna Hibiscus Infused Shea Butter",
  type: "article",
});

export default function HibiscusForHairPage() {
  return (
    <HairCareGuide
      eyebrow="HIBISCUS FOR HAIR"
      title="Hibiscus for hair: what it can and can’t do."
      intro="Hibiscus is one of the most talked-about ingredients in natural hair care, and it is part of the name of our butter. That is exactly why we want to be straightforward about it: what hibiscus brings to a routine, and what it does not."
      path="/hibiscus-for-hair"
      updatedAt="2026-10-27T00:00:00.000Z"
      publishedAt="2026-10-27T00:00:00.000Z"
      image="/media/hibiscus-shea-butter-hero.jpg"
      imageAlt="A jar of Sienna Hibiscus Infused Shea Butter"
      orderMessage="Hi Sienna Shea Butter! I read your hibiscus guide and would like to order the Hibiscus Infused Shea Butter."
      sections={[
        {
          heading: "Why hibiscus shows up in hair care",
          body: (
            <>
              <p>Hibiscus flowers and leaves have been used in home hair-care traditions in parts of Africa, India and the Caribbean for a long time—often steeped in oil, brewed as a rinse, or blended into a paste. The leaves and petals contain mucilage, a slippery, gel-like substance that is released in water. In rinses and masks, that slip is part of why people like how hibiscus preparations feel on hair.</p>
              <p>Tradition is a good reason to be curious about an ingredient. It is not, on its own, evidence that the ingredient does any particular thing to the hair or scalp.</p>
            </>
          ),
        },
        {
          heading: "What the evidence does and doesn’t say",
          body: (
            <>
              <p>You will find many websites claiming that hibiscus makes hair grow faster, stops hair loss, or treats dandruff. The research usually cited behind those claims is limited: mostly laboratory and animal studies using concentrated extracts, not people using a hair butter at home. That kind of research can be interesting, but it does not show that hibiscus grows human hair or treats any condition.</p>
              <p>So we do not make those claims. Sienna Hibiscus Infused Shea Butter is a cosmetic product. It does not grow hair, prevent hair loss, or treat alopecia, dandruff, eczema or any scalp condition. If you are worried about thinning, shedding or an itchy, sore scalp, a qualified healthcare professional is the right person to see.</p>
            </>
          ),
        },
        {
          heading: "What hibiscus does in Sienna",
          body: (
            <>
              <p>In Sienna, hibiscus is part of the herbal infusion in the coconut oil, which is then blended with shea butter, olive oil, vitamin E, arrowroot powder, essential oils and fragrance oil. You can see the full list on the <a href="/hibiscus-infused-shea-butter">product page</a>. An oil infusion is gentle and traditional; it is part of the character of the blend that Mashudu developed for her own natural hair and still handmakes in small batches in Centurion.</p>
              <p>Honestly, most of what you feel when you use Sienna—the richness, the softness on damp hair, the way a little seals in moisture—comes from the shea butter and oils. That is the job a butter does well, and it is what our customers describe: hair that feels softer, more moisturised and easier to manage.</p>
            </>
          ),
        },
        {
          heading: "How to judge any “miracle” ingredient",
          body: (
            <>
              <p>When a product promises growth, regrowth or a cure, it is worth asking a few questions:</p>
              <ul>
                <li>Was the research done on people, using the product the way you would use it?</li>
                <li>Is the claim about how hair feels (softer, easier to detangle) or about changing how the body works (growth, healing)? Cosmetics can honestly offer the first, not the second.</li>
                <li>Are before-and-after photos explained? Length can look different because of shrinkage, styling, lighting and less breakage from gentler handling.</li>
              </ul>
              <p>Gentle handling, comfortable styles, hydration and patience often make more visible difference to how hair looks and feels than any single ingredient.</p>
            </>
          ),
        },
        {
          heading: "Getting the most from a hibiscus-infused butter",
          body: (
            <>
              <p>Treat it like any rich butter: use it after water or a leave-in, start with a pea-sized amount, and focus on the lengths and ends. Our <a href="/how-to-use-shea-butter">how-to-use guide</a> covers the basics, and the <a href="/shea-butter-4c-hair">4C hair guide</a> goes section by section for tightly coiled hair. Because the formula contains essential and fragrance oils, patch test first and stop if anything feels uncomfortable.</p>
              <p>Sienna comes in a 250 ml jar for R180 and a 125 ml jar for R100, with free collection in Eco Park, Centurion or courier delivery—see <a href="/delivery-and-collection">delivery and collection</a>.</p>
            </>
          ),
        },
      ]}
      stepsTitle="Using a hibiscus-infused butter well."
      steps={[
        { title: "Patch test first", body: "Apply a small amount to the inside of your arm and wait 24 hours. The blend contains essential and fragrance oils, which some people are sensitive to." },
        { title: "Hydrate the hair", body: "Use freshly washed or lightly misted hair, or your usual leave-in. The butter seals in moisture; it does not replace it." },
        { title: "Use a little on lengths and ends", body: "Warm a pea-sized amount in your palms and smooth it where hair feels driest. Add more only if needed." },
        { title: "Judge by feel, over time", body: "Notice how your hair feels after a few wash days—softness, ease of detangling, how long moisture lasts—and adjust the amount from there." },
      ]}
      questions={[
        { question: "Does hibiscus make hair grow?", answer: "There is no good evidence that hibiscus in a hair product grows human hair, and Sienna does not claim to. It is a cosmetic butter that helps hair feel softer and more moisturised." },
        { question: "Can hibiscus treat dandruff or an itchy scalp?", answer: "We do not claim that Sienna treats dandruff or any scalp condition. Persistent flaking, itching or soreness should be checked by a qualified healthcare professional." },
        { question: "Will hibiscus colour my hair?", answer: "Sienna is not a hair dye and is not designed to change hair colour." },
        { question: "Is the hibiscus the main ingredient?", answer: "No. Shea butter is the main ingredient. Hibiscus is part of the herbal infusion in the coconut oil, alongside olive oil, vitamin E, arrowroot powder, essential oils and fragrance oil." },
      ]}
      related={[
        { href: "/shea-butter-4c-hair", title: "Shea butter on 4C hair", body: "A step-by-step routine for tightly coiled hair." },
        { href: "/loc-lco-shea-butter", title: "LOC and LCO layering", body: "See where a thick butter can fit after hydration." },
      ]}
    />
  );
}
