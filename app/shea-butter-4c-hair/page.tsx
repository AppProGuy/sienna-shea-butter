import type { Metadata } from "next";
import { HairCareGuide } from "../hair-care-guide";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "How to Use Shea Butter on 4C Hair | Sienna South Africa",
  description: "A step-by-step guide to using shea butter on 4C hair: hydrate first, use a small amount, work in sections and refresh between wash days. From Sienna, Centurion.",
  path: "/shea-butter-4c-hair",
  image: "/media/community-three-week-update.jpg",
  imageAlt: "A Sienna customer showing her natural 4C hair",
  type: "article",
});

export default function SheaButter4cHairPage() {
  return (
    <HairCareGuide
      eyebrow="SHEA BUTTER FOR 4C HAIR"
      title="How to use shea butter on 4C hair, one section at a time."
      intro="4C hair is tightly coiled, often shrinks a lot and can feel dry quickly. A rich shea butter can be a useful part of the routine, but only when it is used in the right place: after water, in small amounts, and with patient handling."
      path="/shea-butter-4c-hair"
      updatedAt="2026-10-27T00:00:00.000Z"
      publishedAt="2026-10-27T00:00:00.000Z"
      image="/media/community-three-week-update.jpg"
      imageAlt="A Sienna customer showing her natural 4C hair"
      orderMessage="Hi Sienna Shea Butter! I read your 4C hair guide and would like to order the Hibiscus Infused Shea Butter."
      sections={[
        {
          heading: "Why 4C hair often feels dry",
          body: (
            <>
              <p>Tightly coiled strands have many bends and twists. The natural oils from the scalp travel down a coil more slowly than down a straight strand, so the lengths and ends can feel dry even when the scalp does not. Each bend is also a point where hair can tangle, which is why rough detangling and dry combing tend to cause frustration.</p>
              <p>None of this means 4C hair is difficult or needs to be fixed. It means the routine works best when it focuses on two things: keeping water in the hair for longer, and handling the hair gently enough that it stays comfortable to manage.</p>
            </>
          ),
        },
        {
          heading: "Where shea butter fits",
          body: (
            <>
              <p>Shea butter is a rich, occlusive layer. On its own it does not add water to hair; it helps slow down how quickly the water you have already added evaporates. That is why the order matters. Apply a butter to dry 4C hair and it tends to sit on the surface and feel waxy. Apply it to damp, hydrated hair and it can help the hair feel softer for longer.</p>
              <p>If you already follow a layering method, shea butter usually sits at the end. Our <a href="/loc-lco-shea-butter">LOC and LCO guide</a> explains the options. If you prefer something simpler, water or a leave-in conditioner followed by a little butter is enough for many people.</p>
            </>
          ),
        },
        {
          heading: "How much to use on 4C hair",
          body: (
            <>
              <p>Sienna is deliberately thick, so begin with about a pea-sized amount per section, warmed between your palms until it softens. Dense 4C hair may need a little more in total than looser textures, but it is still easier to add than to remove. If your hair feels heavy, greasy or coated by the next day, use less on the following wash day rather than switching products straight away.</p>
              <p>Concentrate on the mid-lengths and ends, which are the oldest and usually driest parts of each strand. There is no need to pack butter onto the scalp. If you want to understand why the same amount can feel different on different heads, read <a href="/shea-butter-hair-porosity">shea butter and hair porosity</a>.</p>
            </>
          ),
        },
        {
          heading: "Refreshing between wash days",
          body: (
            <>
              <p>Between wash days, 4C hair often responds better to a light refresh than to more and more butter. Mist the hair with water or a water-based leave-in, let it absorb for a minute, then smooth a very small amount of butter over the ends or over any section that still feels dry. Twists, braids and other protective styles can be refreshed the same way—focus on the lengths and avoid soaking the base of the style.</p>
              <p>At night, a satin bonnet or pillowcase helps reduce friction. If your hair feels coated after several refreshes, it may be time for a wash day rather than another layer.</p>
            </>
          ),
        },
        {
          heading: "What shea butter will not do",
          body: (
            <>
              <p>It is worth being clear. Shea butter is a cosmetic product. It can help 4C hair feel softer and more manageable, and it can make detangling feel easier when used on damp hair. It does not make hair grow, change your curl pattern, or treat hair loss, breakage caused by a medical condition, or any scalp condition. If you notice thinning, bald patches, soreness or persistent itching, speak to a qualified healthcare professional.</p>
              <p>Sienna is handmade in Centurion by founder Mashudu, who began making it for her own natural hair. It is available in a 250 ml jar for R180 and a 125 ml jar for R100. See the full ingredient list on the <a href="/hibiscus-infused-shea-butter">product page</a>, or read about <a href="/delivery-and-collection">delivery and free collection in Eco Park, Centurion</a>.</p>
            </>
          ),
        },
      ]}
      stepsTitle="A simple 4C wash-day routine."
      stepsIntro="Adjust the amounts to your own hair. The order—water first, butter last, gentle hands throughout—is what matters most."
      steps={[
        { title: "Wash and condition in sections", body: "Divide the hair into four to eight sections before washing. Condition generously so there is plenty of slip, and keep each section twisted or clipped as you finish it." },
        { title: "Detangle while the hair is wet", body: "Use fingers or a wide-tooth comb and start at the ends, working up towards the roots. Take your time on any knots instead of pulling through them." },
        { title: "Apply a leave-in, then a little butter", body: "On damp hair, add your leave-in or water-based product. Then warm a pea-sized amount of Sienna and smooth it over the mid-lengths and ends of that section." },
        { title: "Style without tension", body: "Twist, braid or band each section in a way that feels comfortable. Very tight styles can stress the hairline, so keep the tension light." },
      ]}
      questions={[
        { question: "Can I use shea butter on dry 4C hair?", answer: "You can, but it usually works better on damp hair. Shea butter helps hold in moisture that is already there; on dry hair it tends to sit on top and feel heavy. Mist the hair lightly first." },
        { question: "How often should I apply shea butter to 4C hair?", answer: "Most people apply it on wash day and then lightly on the ends when refreshing during the week. Let your hair guide you: if it feels coated, use less or apply less often." },
        { question: "Will shea butter make my 4C hair grow?", answer: "No. Shea butter is a cosmetic product and Sienna does not claim to grow hair. It can help hair feel softer and more manageable. For thinning or hair loss, see a qualified healthcare professional." },
        { question: "Which size should I try first?", answer: "The 125 ml jar (R100) is a good way to see how your hair responds. The 250 ml jar (R180) is better value if you already know you like a rich butter." },
      ]}
      related={[
        { href: "/how-to-use-shea-butter", title: "How to use shea butter", body: "The basic hydrate, warm and smooth routine for every texture." },
        { href: "/hibiscus-for-hair", title: "Hibiscus for hair", body: "What hibiscus can and can’t do in a hair-care routine—honestly." },
      ]}
    />
  );
}
