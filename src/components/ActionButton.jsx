import React from "react";
import Link from "next/link";

// Added "...props" to collect any extra attributes like target="_blank"
export default function ActionButton({ text, href, ...props }) {
  const containerClasses =
    "group flex items-center focus:outline-none cursor-pointer";

  const buttonContent = (
    <div className="relative z-0 flex items-center justify-center h-[40px] px-6 border border-[var(--color-black)] rounded-full bg-[var(--color-white)] transition-colors duration-300 group-hover:bg-[var(--color-black)]">
      <span className="type-btn text-[var(--color-black)] transition-colors duration-300 group-hover:text-[var(--color-white)]">
        {text}
      </span>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={containerClasses}
        {...props} // This passes target="_blank" to the actual link
        rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button className={containerClasses} {...props}>
      {buttonContent}
    </button>
  );
}
