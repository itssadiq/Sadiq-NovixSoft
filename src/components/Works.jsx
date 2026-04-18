import React from "react";
import ProjectShowcase from "./ProjectShowcase";
import { projectsData } from "../data/projects";

export default function Works() {
  return (
    <section
      id="works"
      className="w-full bg-[var(--color-white)] py-20 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col gap-32 md:gap-48">
        {projectsData.map((project) => (
          <ProjectShowcase key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
