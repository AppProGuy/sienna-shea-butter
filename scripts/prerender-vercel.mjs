import { mkdir, writeFile } from "node:fs/promises";
import { publicPaths } from "./search-discovery-config.mjs";

const handler = (await import("../dist/server/index.js")).default;
const outputDirectory = new URL("../dist/client/", import.meta.url);
const pages = [
  ...publicPaths.map((path) => ({ path: path || "/", output: path ? `${path.slice(1)}/index.html` : "index.html" })),
  { path: "/robots.txt", output: "robots.txt" },
  { path: "/sitemap.xml", output: "sitemap.xml" },
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

// Vercel serves dist/client/404.html for unknown static paths.
const notFound = await handler.fetch(new Request("http://localhost/__sienna-not-found__"));
if (notFound.status !== 404) {
  throw new Error(`Expected the not-found page to return 404, got ${notFound.status}`);
}
await writeFile(new URL("404.html", outputDirectory), await notFound.text());
