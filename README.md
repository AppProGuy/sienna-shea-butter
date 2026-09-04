# Sienna Shea Butter

A mobile-first, WhatsApp-led website for Sienna Shea Butter, a South African small-batch hair-care brand.

## Live website

[siennashea.co.za](https://siennashea.co.za)

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal.

## Quality checks

```bash
npm run media:optimize
npm run lint
npm run build
```

Run `npm run media:optimize` whenever a new JPEG or PNG is added to
`public/media`. It produces the responsive AVIF and WebP versions used by the
site. Do not remove the original image: it remains the fallback for browsers
that do not support modern formats.

## Search and measurement

- `robots.txt` and `sitemap.xml` are generated at the site root.
- `llms.txt` is a concise, factual reference for AI systems that choose to read it;
  it is supplementary and does not replace crawlable pages, a sitemap or third-party proof.
- The preferred public URL is `https://siennashea.co.za`; the Vercel
  configuration redirects `www` to that URL and removes trailing slashes after
  deployment.
- Page-specific WhatsApp messages identify whether an enquiry came from the
  homepage, product page, delivery page, or a hair-care guide.
- Verify the domain in Google Search Console and Bing Webmaster Tools, submit
  the sitemap, and only then add analytics with an approved privacy approach.
- After a production release, run `npm run indexnow:submit` once to notify
  IndexNow-participating search engines of the changed URLs. Confirm first that
  the hosted key file at the site root is publicly reachable.
- Run `npm run verify:live` after that release. It checks every storefront page,
  search-discovery file, and the preferred URL redirects before IndexNow is sent.
- The detailed action plan and founder decisions are in
  [SEO-IMPLEMENTATION-TODO.md](./SEO-IMPLEMENTATION-TODO.md).

## Technology

- Next.js and React
- TypeScript
- Tailwind CSS
- OpenAI Sites / Vinext hosting output

The website includes SEO metadata and structured data, responsive layouts, accessible motion controls, a WhatsApp ordering flow, product information, founder story, searchable hair-care guides, customer photos, and testimonials.
