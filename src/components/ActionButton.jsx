import React from "react";
import Link from "next/link";

export default function ActionButton({ text, href }) {
  const containerClasses =
    "group flex items-center focus:outline-none cursor-pointer";

  // Visual content: Now only containing the text pill
  const buttonContent = (
    <div className="relative z-0 flex items-center justify-center h-[40px] px-6 border border-[var(--color-black)] rounded-full bg-[var(--color-white)] transition-colors duration-300 group-hover:bg-[var(--color-black)]">
      <span className="type-btn text-[var(--color-black)] transition-colors duration-300 group-hover:text-[var(--color-white)]">
        {text}
      </span>
    </div>
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
