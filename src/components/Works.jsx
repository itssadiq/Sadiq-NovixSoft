import React from "react";
import ProjectShowcase from "./ProjectShowcase";
import { projectsData } from "../data/projects";

// ICONS
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import CTAButton from "./CTAButton";
import SocialLink from "./SocialLink";

export default function Works() {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <section
      id="works"
      className="w-full bg-[var(--color-white)] pt-20 md:pt-32 pb-0"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* SECTION HEADER */}
        <div className="flex items-center gap-4 mb-20 md:mb-32">
          <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center border border-gray-300">
            <div className="w-2 h-2 rounded-full bg-black"></div>
          </div>
          <h5 className="type-h5 tracking-tight uppercase font-bold text-[var(--color-black)]">
            Selected Works
          </h5>
        </div>

        {/* PROJECTS LIST */}
        <div className="flex flex-col gap-32 md:gap-48 mb-20 md:mb-32">
          {featuredProjects.map((project) => (
            <ProjectShowcase key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="w-full bg-[var(--color-black)] py-4 mt-12">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          <CTAButton text="View All Projects" href="#contact" />

          <div className="flex items-center gap-6">
            <span className="text-white text-[13px] font-medium">
              check my creativity
            </span>

            <div className="flex items-center gap-3">
              <SocialLink href="#" label="LinkedIn" icon={FaLinkedinIn} />
              <SocialLink href="#" label="Instagram" icon={FaInstagram} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
