import { mkdir, writeFile } from "node:fs/promises";

const handler = (await import("../dist/server/index.js")).default;
const outputDirectory = new URL("../dist/client/", import.meta.url);
const pages = [
  { path: "/", output: "index.html" },
  { path: "/robots.txt", output: "robots.txt" },
  { path: "/sitemap.xml", output: "sitemap.xml" },
  { path: "/hibiscus-infused-shea-butter", output: "hibiscus-infused-shea-butter/index.html" },
  { path: "/delivery-and-collection", output: "delivery-and-collection/index.html" },
  { path: "/how-to-use-shea-butter", output: "how-to-use-shea-butter/index.html" },
  { path: "/kids-natural-hair-care", output: "kids-natural-hair-care/index.html" },
  { path: "/mixed-texture-hair-care", output: "mixed-texture-hair-care/index.html" },
];

await mkdir(outputDirectory, { recursive: true });

for (const page of pages) {
  const response = await handler.fetch(new Request(`http://localhost${page.path}`));

  if (!response.ok) {
    throw new Error(`Could not prerender ${page.path}: ${response.status}`);
  }

  const output = new URL(page.output, outputDirectory);
  await mkdir(new URL(".", output), { recursive: true });
  await writeFile(output, await response.text());
}
