"use client";

import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

// Detect Safari + version
function isBuggySafari(): boolean {
  if (typeof navigator === "undefined") return false;

  const ua = navigator.userAgent;
  const isSafari =
    /^((?!chrome|android).)*safari/i.test(ua) &&
    !/crios/i.test(ua) &&
    !/fxios/i.test(ua);

  if (!isSafari) return false;

  // Extract Safari major.minor version
  const match = ua.match(/Version\/(\d+)\.(\d+)/);
  if (!match) return true; // fallback: assume buggy

  const major = parseInt(match[1], 10);
  const minor = parseInt(match[2], 10);

  // Safari 17.4 and up has the lazy bug
  if (major === 17 && minor >= 4) return true;
  if (major > 17) return true;

  return false;
}

export default function SafeImage(props: ImageProps) {
  const [forceEager, setForceEager] = useState(false);

  useEffect(() => {
    if (isBuggySafari()) {
      setForceEager(true);
    }
  }, []);

  return (
    <Image
      {...props}
      alt=''
      // Force eager for buggy Safari
      priority={forceEager || props.priority}
      loading={forceEager ? "eager" : props.loading ?? "lazy"}
    />
  );
}
