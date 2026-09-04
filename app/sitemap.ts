import type { MetadataRoute } from "next";
import { pageLastModified, siteUrl } from "./site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: pageLastModified.home, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/hibiscus-infused-shea-butter`, lastModified: pageLastModified.product, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/delivery-and-collection`, lastModified: pageLastModified.delivery, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/how-to-use-shea-butter`, lastModified: pageLastModified.howToUse, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/kids-natural-hair-care`, lastModified: pageLastModified.kids, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/mixed-texture-hair-care`, lastModified: pageLastModified.mixedTexture, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/shea-butter-relaxed-hair`, lastModified: pageLastModified.relaxed, changeFrequency: "monthly", priority: 0.75 },
    { url: `${siteUrl}/shea-butter-hair-porosity`, lastModified: pageLastModified.porosity, changeFrequency: "monthly", priority: 0.75 },
    { url: `${siteUrl}/loc-lco-shea-butter`, lastModified: pageLastModified.locLco, changeFrequency: "monthly", priority: 0.75 },
    { url: `${siteUrl}/highveld-winter-hair-care`, lastModified: pageLastModified.highveldWinter, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/natural-hair-care-cost-south-africa`, lastModified: pageLastModified.costGuide, changeFrequency: "monthly", priority: 0.7 },
  ];
}
