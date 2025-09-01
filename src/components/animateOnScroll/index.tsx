"use client";
import { useScrollFallback } from "@/hooks/useScrollFallback";

export function AnimateOnScroll({ children }: { children: React.ReactNode }) {
  useScrollFallback({
    selector: ".animate-on-scroll",
    range: [0, 1], // animate only between 20%–40% of scroll
    keyframes: [
      { transform: "scaleX(1)", borderRadius: "0rem" },
      { transform: "scaleX(0.8)", borderRadius: "10rem" }, // subtle effect now visible
    ],
  });
  return <>{children}</>;
}
