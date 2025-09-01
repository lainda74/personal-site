'use client';

import { useScrollTimelineFallback } from "@/hooks/useReparseScrollTimeline";
import React from "react";

/**
 * This component acts as a Client Boundary. It wraps the server-rendered
 * project cards and applies the scroll animation fallback for browsers
 * that do not support CSS scroll-driven animations.
 */
export default function ClientCardStack({ children }: { children: React.ReactNode }) {
  // This hook uses the polyfill's JS API to animate the cards.
  // It only runs on the client and only in browsers that need the fallback.
  useScrollTimelineFallback({
    containerSelector: ".case-studies-timeline",
    cardSelector: ".project-card",
  });

  return (
    <div className="relative h-[300vh] case-studies-timeline">{children}</div>
  );
}
