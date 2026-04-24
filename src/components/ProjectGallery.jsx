import React from "react";

export default function ProjectGallery({ project }) {
  return (
    <section className="w-full bg-[var(--color-white)] pt-10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Main Image: Increased height (h-[500px]) on mobile, 70% width and h-[600px] on desktop */}
          <div className="w-full md:w-[70%] md:h-[600px] overflow-hidden bg-gray-100">
            <img
              src={project.images.main}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Secondary Image: Hidden on mobile, visible and filling remainder on desktop */}
          <div className="hidden md:block md:flex-1 aspect-video md:aspect-auto md:h-[600px] overflow-hidden bg-gray-100">
            <img
              src={project.images.secondary}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
