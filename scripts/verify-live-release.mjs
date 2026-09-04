import { indexNowKey, publicPaths, siteUrl } from "./search-discovery-config.mjs";

const failures = [];

async function expectStatus(url, expectedStatus) {
  let response;
  try {
    response = await fetch(url, { redirect: "manual" });
  } catch (error) {
    failures.push(`${url} could not be reached: ${error.message}`);
    return;
  }

  if (response.status !== expectedStatus) {
    failures.push(`${url} returned ${response.status}, expected ${expectedStatus}`);
  }
}

async function expectRedirect(url, destination) {
  let response;
  try {
    response = await fetch(url, { redirect: "manual" });
  } catch (error) {
    failures.push(`${url} could not be reached: ${error.message}`);
    return;
  }

  const location = response.headers.get("location");
  const resolvedLocation = location ? new URL(location, url).href : null;
  if (response.status !== 308 || resolvedLocation !== destination) {
    failures.push(`${url} did not permanently redirect to ${destination}`);
  }
}

await Promise.all(publicPaths.map((path) => expectStatus(`${siteUrl}${path}`, 200)));
await Promise.all([
  expectStatus(`${siteUrl}/robots.txt`, 200),
  expectStatus(`${siteUrl}/sitemap.xml`, 200),
  expectStatus(`${siteUrl}/llms.txt`, 200),
  expectStatus(`${siteUrl}/${indexNowKey}.txt`, 200),
]);

await expectRedirect(`https://www.${new URL(siteUrl).host}/`, `${siteUrl}/`);
await expectRedirect(`${siteUrl}/hibiscus-infused-shea-butter/`, `${siteUrl}/hibiscus-infused-shea-butter`);

if (failures.length > 0) {
  console.error("Live release verification failed:\n- " + failures.join("\n- "));
  process.exit(1);
}

console.log(`Live release verified: ${publicPaths.length} storefront pages plus search-discovery files are healthy.`);
