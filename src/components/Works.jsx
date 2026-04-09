import React from "react";
import ProjectTile from "./ProjectTile";

export default function Works() {
  const featuredProjects = [
    {
      id: 101,
      title: "Dlux Car Wash",
      service: "Detailing Business",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800",
      href: "#",
    },
    {
      id: 102,
      title: "Nova Real Estate",
      service: "Property Listing",
      year: "2024",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
      href: "#",
    },
  ];

  return (
    <section id="works" className="w-full bg-[var(--color-white)] py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* SECTION HEADER */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center border border-gray-300">
            <div className="w-2 h-2 rounded-full bg-black"></div>
          </div>
          <h5 className="type-h5 tracking-tight uppercase font-bold">
            Selected Works
          </h5>
        </div>

        {/* TILES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 mb-20 -mx-4">
          {featuredProjects.map((project) => (
            <ProjectTile key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
