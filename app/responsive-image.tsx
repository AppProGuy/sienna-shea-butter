type ResponsiveImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
};

const widths = [400, 800] as const;

function imageBase(src: string) {
  return src.replace(/^\/media\//, "").replace(/\.[^.]+$/, "");
}

function srcSet(src: string, extension: "avif" | "webp") {
  const base = imageBase(src);
  return widths
    .map((width) => `/media/optimized/${base}-${width}.${extension} ${width}w`)
    .join(", ");
}

/**
 * Vinext exports this project as static files, so Next's runtime image optimiser
 * is deliberately disabled. This component provides the equivalent responsive
 * AVIF/WebP delivery from checked-in static assets, with the original JPEG as a
 * safe fallback.
 */
export function ResponsiveImage({
  src,
  alt,
  width,
  height,
  sizes,
  priority = false,
  loading,
}: ResponsiveImageProps) {
  const imageLoading = priority ? "eager" : loading ?? "lazy";

  return (
    <picture className="responsive-image">
      <source type="image/avif" srcSet={srcSet(src, "avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet(src, "webp")} sizes={sizes} />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={imageLoading}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
      />
    </picture>
  );
}
