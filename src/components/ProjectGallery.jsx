import React from "react";

export default function ProjectGallery({ project }) {
  return (
    <section className="w-full bg-[var(--color-white)] pt-10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-[70%] aspect-video md:aspect-auto md:h-[600px] overflow-hidden bg-gray-100">
            <img
              src={project.images.main}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:flex-1 aspect-video md:aspect-auto md:h-[600px] overflow-hidden bg-gray-100">
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
