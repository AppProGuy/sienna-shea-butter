import type { Metadata } from "next";
import "./globals.css";
import { founderSchema, organizationSchema } from "./seo";
import { siteUrl } from "./site-data";
import { VercelAnalytics } from "./vercel-analytics";

// Site-wide defaults only. Each page sets its own title, description, canonical
// and social metadata through pageMetadata().
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Sienna Shea Butter",
  robots: { index: true, follow: true },
  verification: {
    google: "HD-l42mE_-6SijHhtJIMKpwqnMvMhL6uh9Lp-WtQpIU",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }} />
        {children}
        <VercelAnalytics />
      </body>
    </html>
  );
}
