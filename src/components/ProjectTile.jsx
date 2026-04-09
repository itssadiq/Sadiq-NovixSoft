import React from "react";
import Link from "next/link";

export default function ProjectTile({ project }) {
  const { title, service, year, image, href } = project;

  return (
    <Link
      href={href}
      className="group block w-full p-4 rounded-[32px] transition-all duration-500 hover:bg-white hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]"
    >
      {/* IMAGE CONTAINER */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-gray-100 mb-5">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
      </div>

      {/* TITLE & ARROW ROW */}
      <div className="flex items-start justify-between mb-2">
        <h3 className="type-h6 uppercase font-bold tracking-tight leading-tight max-w-[80%] text-[var(--color-black)]">
          {title}
        </h3>

        {/* ARROW CIRCLE */}
        <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center transition-colors duration-300 group-hover:bg-[var(--color-black)] group-hover:text-[var(--color-white)] group-hover:border-[var(--color-black)]">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </div>

      {/* METADATA ROW */}
      <div className="flex items-center justify-between">
        <span className="type-caption uppercase tracking-widest text-[var(--color-dim-grey)]">
          {service}
        </span>
        <span className="type-caption text-[var(--color-dim-grey)]">
          {year}
        </span>
      </div>
    </Link>
  );
}
