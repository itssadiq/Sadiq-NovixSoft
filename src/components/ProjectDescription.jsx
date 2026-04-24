import React from "react";
import ActionButton from "./ActionButton";

export default function ProjectDescription({ project }) {
  // Features data usually comes from your project object,
  // but I'll use a fallback structure based on your screenshot
  const features = project.features || [];

  return (
    <section className="w-full bg-[var(--color-white)] py-10">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* CENTERED CONTENT BOX (approx 70% of 1400px) */}
        <div className="max-w-[900px] mx-auto">
          {/* TOP ROW: CAPTION & BUTTON */}
          <div className="flex items-center justify-between mb-10">
            <span className="type-caption !text-[var(--color-black)] uppercase tracking-tight font-bold">
              See this project live!
            </span>
            <ActionButton
              text="Visit Website"
              icon={<span className="text-xl leading-none">🔗</span>}
              href={project.liveUrl || "#"}
            />
          </div>

          {/* TITLE & MAIN DESCRIPTION */}
          <div className="flex flex-col gap-6 mb-10">
            <h2 className="type-h2">{project.fullTitle || project.title}</h2>
            <p className="type-body !text-[var(--color-dim-grey)]">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* KEY FEATURES SECTION */}
          <div className="flex flex-col gap-8">
            <h4 className="type-h3">Key Features:</h4>
            <ul className="flex flex-col gap-0">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="mt-2.5 w-1 h-1 rounded-full bg-[var(--color-dim-grey)] shrink-0"></span>
                  <p className="type-body !text-[var(--color-dim-grey)]">
                    <strong className="font-bold">{feature.label}:</strong>{" "}
                    {feature.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
