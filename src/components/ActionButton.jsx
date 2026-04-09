import React from "react";

export default function ActionButton({ text, icon }) {
  return (
    <button className="group flex items-center focus:outline-none cursor-pointer">
      {/* --- TEXT PILL --- */}
      {/* Sits underneath the icon, bg goes black on hover */}
      <div className="relative z-0 flex items-center justify-center h-[40px] px-5 border border-[var(--color-black)] rounded-full bg-[var(--color-white)] transition-colors duration-300 group-hover:bg-[var(--color-black)]">
        <span className="type-btn text-[var(--color-black)] transition-colors duration-300 group-hover:text-[var(--color-white)]">
          {text}
        </span>
      </div>

      {/* --- ICON CIRCLE (OUTSIDE) --- */}
      {/* -ml-4 pulls the circle left to overlap the text pill's right padding perfectly */}
      <div className="relative z-10 -ml-4 flex items-center justify-center shrink-0 w-[40px] h-[40px] overflow-hidden border border-[var(--color-black)] rounded-full bg-[var(--color-black)] text-[var(--color-white)] transition-colors duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-black)]">
        {icon}
      </div>
    </button>
  );
}
