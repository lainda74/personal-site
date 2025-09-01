"use client";
import { useEffect } from "react";

interface ScrollFallbackOptions {
  selector: string;
  range?: [number, number]; // like animation-range entry% → exit%
  keyframes: Keyframe[];
}

export function useScrollFallback({
  selector,
  range = [0, 1], // full page scroll by default
  keyframes,
}: ScrollFallbackOptions) {
  useEffect(() => {
    if ("animationTimeline" in document.documentElement.style) {
      // Native support → let CSS handle it
      return;
    }

    const elements = document.querySelectorAll<HTMLElement>(selector);
    const [start, end] = range;

    elements.forEach((el) => {
      const timeline = new (window as any).ScrollTimeline({
        source: document.scrollingElement,
        orientation: "block",
        scrollOffsets: [
          { target: document.scrollingElement, edge: "start", threshold: start },
          { target: document.scrollingElement, edge: "start", threshold: end },
        ],
      });

      el.animate(keyframes, {
        duration: 1, // maps 0 → 1 to scroll range
        fill: "both",
        timeline,
      });
    });
  }, [selector, range, keyframes]);
}
