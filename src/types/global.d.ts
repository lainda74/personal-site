export {};

type ScrollTimelineConstructor = new (options?: {
  source?: Element | Document | null;
  orientation?: "block" | "inline";
  scrollOffsets?: {
    target?: Element | Document | null;
    edge?: "start" | "end";
    threshold?: number;
  }[];
}) => AnimationTimeline;

declare global {
  interface Window {
    ScrollTimeline?: ScrollTimelineConstructor;
  }
}
