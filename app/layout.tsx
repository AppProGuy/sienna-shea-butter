import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://sienna-shea-butter.magnanimiss.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Shea Butter for Natural Hair | Sienna South Africa",
  description: "Shop Sienna hibiscus-infused shea butter for afro, coily, curly, mixed-texture, relaxed and kids’ hair. R180 per tub. Order on WhatsApp in South Africa.",
  applicationName: "Sienna Shea Butter",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "/",
    siteName: "Sienna Shea Butter",
    title: "Sienna Shea Butter for Natural & Family Hair Care",
    description: "Small-batch hibiscus-infused shea butter for soft, manageable hair. Order on WhatsApp in South Africa.",
    images: [{ url: "/media/hibiscus-shea-butter-hero.jpg", width: 1400, height: 1400, alt: "Sienna Hibiscus Infused Shea Butter" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sienna Shea Butter for Natural & Family Hair Care",
    description: "Small-batch hibiscus-infused shea butter for soft, manageable hair.",
    images: ["/media/hibiscus-shea-butter-hero.jpg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-ZA"><body>{children}</body></html>;
}
