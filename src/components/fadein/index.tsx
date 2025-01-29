"use client";
import { useEffect, useState, useRef } from "react";

const FadeIn = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true); // Set visibility only once
          observer.disconnect(); // Stop observing after it appears
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

export default FadeIn;
