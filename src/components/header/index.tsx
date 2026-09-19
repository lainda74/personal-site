"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Articles", href: "#articles" },
  { label: "About", href: "#about" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-2 inset-x-0 z-50 lg:px-0 px-10 lg:w-4/5 2xl:w-3/5 w-full mx-auto">
      <div className="rounded-2xl bg-[#f9f6f5]/80 backdrop-blur-md border border-black/5 shadow-sm">
        <div className="flex items-center justify-between lg:justify-start gap-20 h-16 px-6">
          <Link href="#" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Lalinda"
              width={40}
              height={40}
              className="rounded-full object-cover"
              priority
            />
          </Link>
          <nav className="hidden lg:flex items-center justify-start gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-primaryText opacity-70 hover:opacity-100 transition-opacity text-left"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4 ml-auto">
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white text-sm font-medium rounded-full px-5 py-2 hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              See Resume
            </Link>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="lg:hidden flex flex-col items-center justify-center gap-1.5 w-8 h-8"
            >
              <span
                className={`block w-6 h-0.5 bg-primaryText transition-transform ${
                  isMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-primaryText transition-opacity ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-primaryText transition-transform ${
                  isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="lg:hidden flex flex-col gap-1 px-6 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-primaryText opacity-70 hover:opacity-100 transition-opacity py-2 text-left"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
