const siteUrl = "https://siennashea.co.za";
const key = "9a187191-630a-434b-98b8-3087b3d1890d";

const paths = [
  "",
  "/hibiscus-infused-shea-butter",
  "/delivery-and-collection",
  "/how-to-use-shea-butter",
  "/kids-natural-hair-care",
  "/mixed-texture-hair-care",
  "/shea-butter-relaxed-hair",
  "/shea-butter-hair-porosity",
  "/loc-lco-shea-butter",
  "/highveld-winter-hair-care",
  "/natural-hair-care-cost-south-africa",
];

const payload = {
  host: new URL(siteUrl).host,
  key,
  keyLocation: `${siteUrl}/${key}.txt`,
  urlList: paths.map((path) => `${siteUrl}${path}`),
};

if (process.argv.includes("--dry-run")) {
  console.log(JSON.stringify(payload, null, 2));
  process.exit(0);
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});

if (!response.ok) {
  const body = await response.text();
  throw new Error(`IndexNow submission failed (${response.status}): ${body}`);
}

console.log(`IndexNow accepted ${payload.urlList.length} Sienna Shea Butter URLs (${response.status}).`);
