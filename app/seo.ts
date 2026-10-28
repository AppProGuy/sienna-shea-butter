import type { Metadata } from "next";
import { business, instagramUrl, siteUrl } from "./site-data";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image: string;
  imageAlt: string;
  type?: "website" | "article";
  socialTitle?: string;
  socialDescription?: string;
};

// Every page sets its own canonical, Open Graph and Twitter fields so nothing is
// inherited from the root layout (which would point shares back at the homepage).
export function pageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  type = "website",
  socialTitle = title,
  socialDescription = description,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "en_ZA",
      url: path,
      siteName: "Sienna Shea Butter",
      title: socialTitle,
      description: socialDescription,
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: socialDescription,
      images: [image],
    },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@id": `${siteUrl}/#organization`,
  "@type": ["Organization", "LocalBusiness"],
  name: business.name,
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/sienna-logo.jpg`,
    width: 933,
    height: 907,
  },
  image: `${siteUrl}/media/hibiscus-shea-butter-hero.jpg`,
  telephone: business.telephone,
  priceRange: "R100–R180",
  description: "Small-batch Hibiscus Infused Shea Butter, handmade in Centurion, Gauteng, for natural, afro, coily, curly, mixed-texture, relaxed and kids’ hair care.",
  foundingDate: "2019",
  // Service-area business: the collection address is shared privately on WhatsApp.
  address: {
    "@type": "PostalAddress",
    addressLocality: business.locality,
    addressRegion: business.region,
    addressCountry: business.country,
  },
  areaServed: { "@type": "Country", name: "South Africa" },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: business.telephone,
    areaServed: { "@type": "Country", name: "South Africa" },
    availableLanguage: "en",
  },
  paymentAccepted: "EFT, Cash",
  founder: { "@id": `${siteUrl}/#mashudu` },
  sameAs: [instagramUrl],
};

export const founderSchema = {
  "@context": "https://schema.org",
  "@id": `${siteUrl}/#mashudu`,
  "@type": "Person",
  name: "Mashudu",
  jobTitle: "Founder",
  worksFor: { "@id": `${siteUrl}/#organization` },
  description: "Founder of Sienna Shea Butter, who handmakes each small batch in Centurion, South Africa.",
  sameAs: [instagramUrl],
};
