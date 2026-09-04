import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const mediaDirectory = path.resolve("public/media");
const outputDirectory = path.join(mediaDirectory, "optimized");
const widths = [400, 800];
const sourcePattern = /\.(?:jpe?g|png)$/i;

await mkdir(outputDirectory, { recursive: true });

const images = (await readdir(mediaDirectory)).filter((file) => sourcePattern.test(file));

for (const file of images) {
  const input = path.join(mediaDirectory, file);
  const base = path.basename(file, path.extname(file));

  for (const width of widths) {
    const pipeline = sharp(input).rotate().resize({ width, fit: "inside" });

    await pipeline.clone().avif({ quality: 50, effort: 4 }).toFile(
      path.join(outputDirectory, `${base}-${width}.avif`),
    );

    await pipeline.clone().webp({ quality: 72, effort: 4 }).toFile(
      path.join(outputDirectory, `${base}-${width}.webp`),
    );
  }
}

console.log(`Generated ${images.length * widths.length * 2} responsive image assets.`);
