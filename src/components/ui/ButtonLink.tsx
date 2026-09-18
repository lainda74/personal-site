import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export default function ButtonLink({
  href,
  children,
  className,
  target,
  rel,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={cn(
        "bg-btnBg text-btnText relative overflow-hidden font-semibold py-4 px-6 rounded-lg transition-all hover:opacity-90 active:scale-[0.98] inline-flex items-center justify-center transition-all hover:bg-btnBg group border border-btnBgHover",
        className
      )}
    >
      <span className="w-[100%] h-32 rounded bg-btnBgHover absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
      <span className="relative w-full text-center text-black transition-colors duration-300 ease-in-out group-hover:text-btnText">{children}</span>
    </Link>
  );
}
