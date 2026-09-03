import type { MetadataRoute } from "next";
import { siteUrl } from "./site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/how-to-use-shea-butter`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/kids-natural-hair-care`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/mixed-texture-hair-care`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
