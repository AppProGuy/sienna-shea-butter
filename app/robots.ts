import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://sienna-shea-butter.magnanimiss.chatgpt.site/sitemap.xml",
  };
}
