"use client";

import { useEffect, useRef, useState } from "react";
import { ResponsiveImage } from "./responsive-image";

type CommunityPhoto = {
  src: string;
  alt: string;
};

function PhotoGroup({ photos, duplicate = false }: { photos: CommunityPhoto[]; duplicate?: boolean }) {
  return (
    <div className="community-photo-group" aria-hidden={duplicate || undefined}>
      {photos.map((photo) => (
        <figure className="community-photo" key={`${duplicate ? "duplicate-" : ""}${photo.src}`}>
          <ResponsiveImage
            src={photo.src}
            alt={duplicate ? "" : photo.alt}
            width={780}
            height={980}
            sizes="(max-width: 640px) 226px, 268px"
            loading="lazy"
          />
        </figure>
      ))}
    </div>
  );
}

export function CommunityPhotoCarousel({ photos }: { photos: CommunityPhoto[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const lastFrameRef = useRef<number | null>(null);
  const positionRef = useRef(0);
  const loopDistanceRef = useRef(0);
  const manualPausedRef = useRef(false);
  const hoverPausedRef = useRef(false);
  const reducedMotionRef = useRef(false);
  const [manualPaused, setManualPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    const firstGroup = groupRef.current;
    if (!track || !firstGroup) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      reducedMotionRef.current = motionQuery.matches;
      if (motionQuery.matches) {
        positionRef.current = 0;
        track.style.transform = "translate3d(0, 0, 0)";
      }
    };
    const measure = () => {
      const styles = window.getComputedStyle(track);
      const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
      loopDistanceRef.current = firstGroup.getBoundingClientRect().width + gap;
    };
    const resetFrameClock = () => {
      lastFrameRef.current = null;
    };
    const tick = (timestamp: number) => {
      const lastFrame = lastFrameRef.current;
      lastFrameRef.current = timestamp;

      const shouldMove =
        !document.hidden &&
        !manualPausedRef.current &&
        !hoverPausedRef.current &&
        !reducedMotionRef.current &&
        loopDistanceRef.current > 0;

      if (shouldMove && lastFrame !== null) {
        // Cap delayed frames so returning from a background tab never causes a speed burst.
        const elapsed = Math.min(timestamp - lastFrame, 50);
        positionRef.current =
          (positionRef.current + (88 * elapsed) / 1000) % loopDistanceRef.current;
        track.style.transform = `translate3d(${-positionRef.current}px, 0, 0)`;
      }

      frameRef.current = window.requestAnimationFrame(tick);
    };

    updateMotionPreference();
    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(firstGroup);
    motionQuery.addEventListener("change", updateMotionPreference);
    document.addEventListener("visibilitychange", resetFrameClock);
    frameRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
      resizeObserver.disconnect();
      motionQuery.removeEventListener("change", updateMotionPreference);
      document.removeEventListener("visibilitychange", resetFrameClock);
    };
  }, []);

  const toggleMotion = () => {
    const nextPaused = !manualPausedRef.current;
    manualPausedRef.current = nextPaused;
    lastFrameRef.current = null;
    setManualPaused(nextPaused);
  };

  const pauseForPointer = () => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      hoverPausedRef.current = true;
    }
  };

  const resumeForPointer = () => {
    hoverPausedRef.current = false;
    lastFrameRef.current = null;
  };

  return (
    <div className="community-carousel">
      <div className="community-photo-controls">
        <button
          className="community-motion-toggle"
          type="button"
          aria-pressed={manualPaused}
          onClick={toggleMotion}
        >
          <span aria-hidden="true">{manualPaused ? "▶" : "Ⅱ"}</span>
          {manualPaused ? "Play photos" : "Pause photos"}
        </button>
      </div>
      <div
        className="community-photo-window"
        role="region"
        aria-label="Scrolling customer photo gallery"
        onPointerEnter={pauseForPointer}
        onPointerLeave={resumeForPointer}
      >
        <div className="community-photo-track" ref={trackRef}>
          <div ref={groupRef} className="community-photo-measure">
            <PhotoGroup photos={photos} />
          </div>
          <PhotoGroup photos={photos} duplicate />
        </div>
      </div>
    </div>
  );
}
