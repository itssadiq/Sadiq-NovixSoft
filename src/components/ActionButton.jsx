import React from "react";
import Link from "next/link";

export default function ActionButton({ text, icon, href }) {
  const containerClasses =
    "group flex items-center focus:outline-none cursor-pointer";

  // The visual content is pulled into a variable to keep the code clean
  const buttonContent = (
    <>
      {/* --- TEXT PILL --- */}
      <div className="relative z-0 flex items-center justify-center h-[40px] px-5 border border-[var(--color-black)] rounded-full bg-[var(--color-white)] transition-colors duration-300 group-hover:bg-[var(--color-black)]">
        <span className="type-btn text-[var(--color-black)] transition-colors duration-300 group-hover:text-[var(--color-white)]">
          {text}
        </span>
      </div>

      {/* --- ICON CIRCLE (OUTSIDE) --- */}
      <div className="relative z-10 -ml-4 flex items-center justify-center shrink-0 w-[40px] h-[40px] overflow-hidden border border-[var(--color-black)] rounded-full bg-[var(--color-black)] text-[var(--color-white)] transition-colors duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-black)]">
        {icon}
      </div>
    </>
  );

  // If an href is provided, render a Link; otherwise, render a button
  if (href) {
    return (
      <Link href={href} className={containerClasses}>
        {buttonContent}
      </Link>
    );
  }

  return <button className={containerClasses}>{buttonContent}</button>;
}
