import React from "react";
import Link from "next/link";

export default function ProjectShowcase({ project }) {
  const metaItems = [
    { label: "CLIENT", value: project.client },
    { label: "TOOLS", value: project.tools },
    { label: "YEAR", value: project.year },
    { label: "SERVICE", value: project.service },
  ];

  return (
    <Link
      href={`/projects/${project.id}`}
      className="group block w-full cursor-pointer"
    >
      <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
        {/* LEFT CONTENT (30% Width) */}
        <div className="w-full lg:w-[30%] flex flex-col justify-between">
          <div>
            <h2 className="type-h3 mb-4">{project.title}</h2>
            <p className="type-body text-[var(--color-dim-grey)] leading-relaxed mb-10 max-w-sm">
              {project.description}
            </p>
          </div>

          {/* METADATA TABLE */}
          <div className="flex flex-col">
            {metaItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between py-4 border-b border-black"
              >
                <span className="type-caption tracking-[0.15em] font-semibold text-[var(--color-dim-grey)] text-[10px]">
                  {item.label}
                </span>
                <span className="type-body text-[14px] font-medium text-[var(--color-black)]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT: SINGLE IMAGE (70% Width) */}
        <div className="w-full lg:w-[70%]">
          <div className="w-full relative overflow-hidden bg-gray-50">
            {/* MOBILE IMAGE: 1:1 Square Ratio (aspect-square) */}
            <div className="block md:hidden w-full aspect-square">
              <img
                src={project.images.mobile || project.images.main}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* DESKTOP/TABLET IMAGE: 16:9 Video Ratio (aspect-video) */}
            <div className="hidden md:block w-full aspect-video">
              <img
                src={project.images.main}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
