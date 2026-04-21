import React from "react";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Brief & Build",
      description:
        "Share the requirements, scope, and goals. I get to work immediately, building clean & structured site from day one",
    },
    {
      number: "02",
      title: "Review & Refine",
      description:
        "You review, I refine. Fast revision turnaround, clear communication, no back & forth headaches.",
    },
    {
      number: "03",
      title: "Test & Deliver",
      description:
        "Fully tested, performance optimized & client-ready. Clean files, zero loose ends.",
    },
  ];

  return (
    <section
      id="process"
      className="w-full bg-[var(--color-white)] pt-20 md:pt-32 pb-20 md:pb-32"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* SECTION HEADER - Global Standard Spacing */}
        <div className="flex items-center gap-4 mb-10 md:mb-16">
          <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center border border-gray-300">
            <div className="w-2 h-2 rounded-full bg-black"></div>
          </div>
          <h5 className="type-h5 tracking-tight uppercase font-bold text-[var(--color-black)]">
            Work Process
          </h5>
        </div>

        {/* PROCESS GRID - Standardized Border to match Services/Works */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[var(--color-black)]">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col gap-6 pt-10 pb-12 md:pb-0 
                ${index !== 0 ? "border-t md:border-t-0 md:border-l" : ""} 
                ${index === 1 ? "md:px-8 lg:px-12" : ""}
                ${index === 2 ? "md:pl-8 lg:pl-12" : ""}
                ${index === 0 ? "md:pr-8 lg:pr-12" : ""}
                border-[var(--color-black)]
              `}
            >
              {/* STEP NUMBER */}
              <span className="type-h2">{step.number}</span>

              {/* STEP TITLE */}
              <h4 className="type-h3">{step.title}</h4>

              {/* STEP DESCRIPTION */}
              <p className="type-body text-[var(--color-dim-grey)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
