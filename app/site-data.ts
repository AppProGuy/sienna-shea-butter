export const siteUrl = "https://siennashea.co.za";

export const productPath = "/hibiscus-infused-shea-butter";
export const productUrl = `${siteUrl}${productPath}`;
export const deliveryPath = "/delivery-and-collection";
export const deliveryUrl = `${siteUrl}${deliveryPath}`;

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
  address: "80 Clearwater Complex, Lemonwood Street, Eco Park, Centurion",
  hours: "09:00–18:00",
  courier: "Aramex",
  courierFrom: "R120",
} as const;

export const whatsappMessage = encodeURIComponent(
  "Hi Sienna Shea Butter! I'd love to order the Hibiscus Infused Shea Butter."
);

export const whatsappUrl = `https://wa.me/27607729916?text=${whatsappMessage}`;

export const instagramUrl =
  "https://www.instagram.com/_sienna_shea_butter_?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==";
