import React from "react";
import Link from "next/link";

export default function ProjectHero({ project }) {
  if (!project) return null;

  const details = [
    { label: "Client", value: project.client },
    { label: "Tools", value: project.tools },
    { label: "Year", value: project.year },
    { label: "Service", value: project.service },
  ];

  return (
    <section className="w-full bg-[var(--color-white)] pt-32 overflow-hidden">
      {/* TOP CONTENT */}
      <div className="max-w-[1400px] mx-auto px-6 pb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          {/* LEFT: BADGE & TITLE */}
          <div className="max-w-[800px]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center border border-gray-300">
                <div className="w-2 h-2 rounded-full bg-[var(--color-black)]"></div>
              </div>
              <h5 className="type-h6 tracking-tight uppercase font-bold">
                My Works
              </h5>
            </div>
            <h1 className="type-h1 tracking-tight">{project.title}</h1>
          </div>

          {/* RIGHT: BACK LINK (Slight upscale hover effect) */}
          <div className="mb-2">
            <Link
              href="/works"
              className="type-body font-medium inline-block transition-transform duration-300 hover:scale-105"
            >
              [ Back to Work ]
            </Link>
          </div>
        </div>
      </div>

      {/* BOTTOM RIBBON: PROJECT METADATA */}
      <div className="w-full bg-[var(--color-black)] py-10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
            {details.map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                <span className="type-caption uppercase tracking-tight font-bold">
                  {item.label}
                </span>
                <span className="type-body-large !text-[var(--color-white)]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
