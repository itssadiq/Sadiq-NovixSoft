import React from "react";
import Link from "next/link";

export default function CTAButton({ text, href = "#" }) {
  return (
    <Link href={href} className="group flex items-center focus:outline-none">
      {/* TEXT PILL */}
      <div className="relative z-0 flex items-center justify-center h-[46px] px-8 border border-white rounded-full bg-transparent transition-all duration-300 group-hover:bg-white group-hover:border-white">
        <span className="type-btn text-white! transition-colors duration-300 group-hover:text-black!">
          {text}
        </span>
      </div>

      {/* ICON CIRCLE */}
      <div className="relative z-10 -ml-4 flex items-center justify-center shrink-0 w-[46px] h-[46px] bg-white rounded-full transition-all duration-300 group-hover:bg-[var(--color-primary)]">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </div>
    </Link>
  );
}
