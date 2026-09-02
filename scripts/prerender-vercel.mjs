import { mkdir, writeFile } from "node:fs/promises";

const handler = (await import("../dist/server/index.js")).default;
const outputDirectory = new URL("../dist/client/", import.meta.url);
const pages = [
  { path: "/", output: "index.html" },
  { path: "/robots.txt", output: "robots.txt" },
  { path: "/sitemap.xml", output: "sitemap.xml" },
];

await mkdir(outputDirectory, { recursive: true });

for (const page of pages) {
  const response = await handler.fetch(new Request(`http://localhost${page.path}`));

  if (!response.ok) {
    throw new Error(`Could not prerender ${page.path}: ${response.status}`);
  }

  await writeFile(new URL(page.output, outputDirectory), await response.text());
}
