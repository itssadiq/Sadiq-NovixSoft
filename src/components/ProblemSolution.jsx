import React from "react";
import Image from "next/image";
import Profile from "../../public/profile.png";

export default function ProblemSolution() {
  const problems = [
    "Lack of ownership",
    "Unreliable timelines",
    "Inconsistent communication",
    "Poorly structured builds",
    "Difficult client handoffs",
  ];

  const solutions = [
    "Full project ownership",
    "Predictable delivery timelines",
    "Clear, consistent updates",
    "Clean, scalable builds",
    "Client-ready handoff",
  ];

  return (
    <section
      id="problem-solution"
      className="w-full bg-[var(--color-white)] py-24"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* SECTION HEADER */}
        <div className="flex items-center gap-4 mb-20">
          <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center border border-gray-300">
            <div className="w-2 h-2 rounded-full bg-black"></div>
          </div>
          <h5 className="type-h5 tracking-tight uppercase font-bold text-[var(--color-black)]">
            Built for Agency Workflows
          </h5>
        </div>

        {/* CONTENT WRAPPER - items-stretch allows the separator to be full height */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
          {/* COLUMN 1: IMAGE (Centered on mobile, Left on desktop) */}
          <div className="w-full lg:w-[300px] shrink-0 flex justify-center lg:justify-start">
            <div className="relative aspect-[4/5] w-[220px] md:w-[260px] lg:w-[300px] overflow-hidden rounded-[32px] bg-gray-100 border border-gray-100 shadow-sm">
              <Image
                src={Profile}
                alt="Profile"
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

          {/* COLUMN 2: THE LISTICLES WITH FULL-SIZE SEPARATOR */}
          <div className="flex-1 flex flex-col sm:flex-row items-stretch gap-0">
            {/* PROBLEM LIST - justify-center aligns content vertically on desktop */}
            <div className="flex-1 flex flex-col justify-center pb-10 sm:pb-0 sm:pr-10 lg:pr-16">
              <h4 className="type-h6 uppercase tracking-widest font-bold mb-10 text-[var(--color-black)]">
                Common Issues
              </h4>
              <ul className="flex flex-col gap-6 md:gap-8">
                {problems.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CrossIcon className="w-4 h-4 text-black mt-1 shrink-0" />
                    <span className="type-body-large leading-tight text-[var(--color-black)] font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FULL SIZE SEPARATOR */}
            <div className="w-full h-[1px] sm:w-[1px] sm:h-auto bg-black opacity-20 sm:opacity-100 my-10 sm:my-0"></div>

            {/* SOLUTION LIST - justify-center aligns content vertically on desktop */}
            <div className="flex-1 flex flex-col justify-center pt-10 sm:pt-0 sm:pl-10 lg:pl-16">
              <h4 className="type-h6 uppercase tracking-widest font-bold mb-10 text-[var(--color-black)]">
                How I work
              </h4>
              <ul className="flex flex-col gap-6 md:gap-8">
                {solutions.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckIcon className="w-4 h-4 text-black mt-1 shrink-0" />
                    <span className="type-body-large leading-tight text-[var(--color-black)] font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- MINIMAL BLACK ICONS --- */

function CrossIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}

function CheckIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}
