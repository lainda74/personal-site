"use client";
import { useEffect } from "react";

type Options = {
  containerSelector: string;
  cardSelector: string;
};

export function useScrollTimelineFallback({
  containerSelector,
  cardSelector,
}: Options) {
  useEffect(() => {
    // If CSS scroll timelines are supported, do nothing.
    if ("animationTimeline" in document.documentElement.style) return;

    const ScrollTl = window.ScrollTimeline;
    if (!ScrollTl) return; // polyfill not available (or failed to load)

    const container = document.querySelector<HTMLElement>(containerSelector);
    if (!container) return;

    const applied = new WeakSet<Element>();
    const activeAnims: Animation[] = [];

    const applyTo = (el: HTMLElement) => {
      if (applied.has(el)) return;
      applied.add(el);

      // Read your per-card CSS vars if you use them (e.g. --start: "0%"; --end: "100%")
      const styles = getComputedStyle(el);
      const pct = (v: string) => {
        const n = parseFloat(v);
        return Number.isFinite(n) ? n / 100 : 0;
      };
      const start = pct(styles.getPropertyValue("--start") || "0%");
      const end = pct(styles.getPropertyValue("--end") || "100%");

      const timeline = new ScrollTl({
        source: document.scrollingElement,
        orientation: "block",
        scrollOffsets: [
          { target: container, edge: "start", threshold: start },
          { target: container, edge: "start", threshold: end },
        ],
      });

      const anim = el.animate(
        [
          { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
          {
            offset: 0.8,
            transform: "scale(1)",
            filter: "blur(0px)",
            opacity: 1,
          },
          { transform: "scale(0.9)", opacity: 1, filter: "blur(2px)" },
        ],
        { duration: 1, fill: "both", timeline }
      );

      activeAnims.push(anim);
    };

    // Apply to existing cards
    document.querySelectorAll<HTMLElement>(cardSelector).forEach(applyTo);

    // Watch for cards added later (Suspense/lazy, infinite lists, etc.)
    const mo = new MutationObserver((muts) => {
      for (const m of muts) {
        m.addedNodes.forEach((n) => {
          if (!(n instanceof HTMLElement)) return;
          if (n.matches?.(cardSelector)) applyTo(n);
          n.querySelectorAll?.(cardSelector).forEach((el) =>
            applyTo(el as HTMLElement)
          );
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      activeAnims.forEach((a) => a.cancel());
    };
  }, [containerSelector, cardSelector]);
}
