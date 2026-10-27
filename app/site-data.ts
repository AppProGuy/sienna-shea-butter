export const siteUrl = "https://siennashea.co.za";

export const productPath = "/hibiscus-infused-shea-butter";
export const productUrl = `${siteUrl}${productPath}`;
export const deliveryPath = "/delivery-and-collection";
export const deliveryUrl = `${siteUrl}${deliveryPath}`;

// Update these dates only when the corresponding page content materially changes.
// They are intentionally not build timestamps: search engines use sitemap dates as
// a freshness signal.
export const pageLastModified = {
  home: "2026-10-27T00:00:00.000Z",
  product: "2026-10-27T00:00:00.000Z",
  delivery: "2026-10-27T00:00:00.000Z",
  howToUse: "2026-10-27T00:00:00.000Z",
  kids: "2026-09-05T00:00:00.000Z",
  mixedTexture: "2026-09-05T00:00:00.000Z",
  relaxed: "2026-09-05T00:00:00.000Z",
  porosity: "2026-09-05T00:00:00.000Z",
  locLco: "2026-09-05T00:00:00.000Z",
  highveldWinter: "2026-09-05T00:00:00.000Z",
  costGuide: "2026-10-27T00:00:00.000Z",
  fourCHair: "2026-10-27T00:00:00.000Z",
  hibiscusForHair: "2026-10-27T00:00:00.000Z",
  summerSkincare: "2026-10-27T00:00:00.000Z",
} as const;

export const product = {
  name: "Sienna Hibiscus Infused Shea Butter",
  shortName: "Hibiscus Infused Shea Butter",
  currency: "ZAR",
  sizes: [
    { label: "250 ml", millilitres: 250, price: "180" },
    { label: "125 ml", millilitres: 125, price: "100" },
  ],
  image: "/media/hibiscus-shea-butter-hero.jpg",
  imageAlt: "A jar of Sienna Hibiscus Infused Shea Butter with a gold lid",
  description:
    "A thick, small-batch shea butter blend for moisture-focused natural and family hair-care routines.",
} as const;

export const collectionDetails = {
  area: "Eco Park, Centurion",
  hours: "Monday–Friday, 09:00–18:00",
  courier: "Aramex",
  courierFrom: "R120",
} as const;

export const business = {
  name: "Sienna Shea Butter",
  locality: "Centurion",
  region: "Gauteng",
  country: "ZA",
  telephone: "+27 60 772 9916",
  // Shown as text only. Not marked up as AggregateRating: the reviews live on the
  // Google Business Profile, and self-hosted review markup is not eligible.
  googleRating: "5.0",
  googleReviewCount: 21,
} as const;

export function whatsappOrderUrl(message: string) {
  return `https://wa.me/27607729916?text=${encodeURIComponent(message)}`;
}

export const whatsappUrl = whatsappOrderUrl(
  "Hi Sienna Shea Butter! I'd love to order the Hibiscus Infused Shea Butter."
);

export const homepageWhatsAppUrl = whatsappOrderUrl(
  "Hi Sienna Shea Butter! I found you through your website and would love to order the Hibiscus Infused Shea Butter."
);

export const productWhatsAppUrl = whatsappOrderUrl(
  "Hi Sienna Shea Butter! I would like to order the Hibiscus Infused Shea Butter (250 ml R180 or 125 ml R100)."
);

export const deliveryWhatsAppUrl = whatsappOrderUrl(
  "Hi Sienna Shea Butter! I have a delivery or collection question about the Hibiscus Infused Shea Butter."
);

export const instagramUrl =
  "https://www.instagram.com/_sienna_shea_butter_/";
