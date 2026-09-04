export const siteUrl = "https://siennashea.co.za";

export const productPath = "/hibiscus-infused-shea-butter";
export const productUrl = `${siteUrl}${productPath}`;
export const deliveryPath = "/delivery-and-collection";
export const deliveryUrl = `${siteUrl}${deliveryPath}`;

// Update these dates only when the corresponding page content materially changes.
// They are intentionally not build timestamps: search engines use sitemap dates as
// a freshness signal.
export const pageLastModified = {
  home: "2026-09-05T00:00:00.000Z",
  product: "2026-09-05T00:00:00.000Z",
  delivery: "2026-09-05T00:00:00.000Z",
  howToUse: "2026-09-05T00:00:00.000Z",
  kids: "2026-09-05T00:00:00.000Z",
  mixedTexture: "2026-09-05T00:00:00.000Z",
  relaxed: "2026-09-05T00:00:00.000Z",
  porosity: "2026-09-05T00:00:00.000Z",
  locLco: "2026-09-05T00:00:00.000Z",
  highveldWinter: "2026-09-05T00:00:00.000Z",
  costGuide: "2026-09-05T00:00:00.000Z",
} as const;

export const product = {
  name: "Sienna Hibiscus Infused Shea Butter",
  shortName: "Hibiscus Infused Shea Butter",
  price: "180",
  currency: "ZAR",
  weight: "200g",
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
  "Hi Sienna Shea Butter! I would like to order the R180 200g Hibiscus Infused Shea Butter."
);

export const deliveryWhatsAppUrl = whatsappOrderUrl(
  "Hi Sienna Shea Butter! I have a delivery or collection question about the Hibiscus Infused Shea Butter."
);

export const instagramUrl =
  "https://www.instagram.com/_sienna_shea_butter_/";
