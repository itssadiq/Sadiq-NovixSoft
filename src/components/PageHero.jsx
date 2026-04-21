import React from "react";
import SocialLink from "./SocialLink";

export default function PageHero({ badgeText, title, ribbonText, platforms }) {
  return (
    <section className="w-full bg-[var(--color-white)] pt-32 overflow-hidden">
      {/* TOP CONTENT */}
      <div className="max-w-[1400px] mx-auto px-6 pb-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 lg:gap-0">
          {/* LEFT: HEADING */}
          <div className="max-w-[600px]">
            {/* Status Dot Badge - Your mb-2 preserved */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center border border-gray-300">
                <div className="w-2 h-2 rounded-full bg-black"></div>
              </div>
              {/* type-h6 preserved */}
              <h5 className="type-h6 tracking-tight uppercase font-bold">
                {badgeText}
              </h5>
            </div>

            <h1 className="type-h1 tracking-tight">{title}</h1>
          </div>

          {/* RIGHT: DECORATIVE TRIANGLES (Reduced size and adjusted position) */}
          <div className="hidden lg:flex items-end">
            <div className="flex items-end gap-2">
              {/* Light Grey Triangle (Points Down-Right) */}
              <div
                className="w-30 h-30 bg-gray-100"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
              ></div>

              {/* Primary Green Triangle (Points Up-Right) */}
              <div
                className="w-30 h-30 bg-[var(--color-primary)]"
                style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
              ></div>

              {/* Dark Grey Triangle (Points Down-Right) */}
              <div
                className="w-30 h-30 bg-[var(--color-dim-grey)]"
                style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM RIBBON */}
      <div className="w-full bg-[var(--color-black)] py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-0">
          {/* Ribbon Text */}
          <p className="type-body-small-500 !text-white uppercase tracking-[0.05em] max-w-[450px] leading-relaxed">
            {ribbonText}
          </p>

          {/* Platform Pills */}
          <div className="flex flex-wrap items-center gap-3">
            {platforms?.map((platform, index) => (
              <SocialLink
                key={index}
                href={platform.href || "#"}
                label={platform.name}
                icon={platform.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
