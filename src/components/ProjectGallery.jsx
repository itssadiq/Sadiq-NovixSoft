import React from "react";

export default function ProjectGallery({ project }) {
  return (
    <section className="w-full bg-[var(--color-white)] pt-10">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Full width container */}
        <div className="w-full overflow-hidden bg-gray-50">
          <img
            src={project.images.main}
            alt={project.title}
            className="w-full h-auto block"
          />
        </div>
      </div>
    </section>
  );
}
