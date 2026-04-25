import React from "react";
import Link from "next/link";

export default function CTAButton({ text, href = "#" }) {
  return (
    <Link href={href} className="group flex items-center focus:outline-none">
      {/* TEXT PILL ONLY */}
      <div className="relative z-0 flex items-center justify-center h-[46px] px-6 border border-white rounded-full bg-transparent transition-all duration-300 group-hover:bg-white group-hover:border-white">
        <span className="type-btn text-white! transition-colors duration-300 group-hover:text-black!">
          {text}
        </span>
      </div>
    </Link>
  );
}
