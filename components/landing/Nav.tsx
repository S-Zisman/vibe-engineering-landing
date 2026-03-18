"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(9,8,10,0.94)] backdrop-blur-[12px] border-b border-[var(--border-accent)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <span className="font-mono text-accent-bright font-bold text-sm tracking-[0.15em]">
          VIBE_ENG
        </span>
      </div>
    </nav>
  );
}
