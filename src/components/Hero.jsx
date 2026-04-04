import React from "react";

// --- REUSABLE BUTTON COMPONENT ---
// hoverMode "primary" perfectly mimics your screenshot's lime-green hover effect
import ActionButton from "./ActionButton";

export default function Hero() {
  const marqueeItems = [
    "Website Design",
    "Branding",
    "Mobile App Design",
    "UI Design",
    "UX Design",
    "Strategy",
    "Visual Design",
    "Wireframing",
    "Prototyping",
  ];

  return (
    <div className="w-full max-h-[100dvh] flex flex-col gap-10 bg-[var(--color-white)]">
      {/* --- MAIN HERO CONTENT --- */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-6 flex flex-col justify-start pt-8 md:pt-10">
        <div className="max-w-[900px]">
          <h1 className="type-h1 tracking-[-0.02em] leading-[1.1] mb-5">
            Crafting Experiences: UI/UX
            <br className="hidden md:block" /> Designer Passionate About
            Seamless.
          </h1>

          <p className="type-body-large text-[var(--color-dim-grey)] max-w-2xl leading-relaxed mb-8">
            I'm currently working as UI UX Designer at framer, where my team and
            also I are on a mission to create the most intelligent and
            user-friendly learning platform in the world.
          </p>

          <ActionButton
            text="Hire Me"
            hoverMode="primary"
            icon={<span className="text-xl leading-none">👨‍💼</span>}
          />
        </div>
      </main>

      {/* --- BOTTOM WRAPPER --- */}
      <div className="w-full flex flex-col">
        {/* --- STATS SECTION --- */}
        {/* Added solid black top border line */}
        <section className="w-full border-t border-[var(--color-black)]">
          <div className="max-w-[1400px] mx-auto w-full px-6 flex flex-col md:flex-row">
            {/* Added solid black vertical separator line & restored py to balance it */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-x-4 py-6 md:py-8 md:pr-12 md:border-r border-[var(--color-black)]">
              <div className="flex flex-col gap-1">
                <span className="text-[40px] md:text-[44px] font-medium text-[var(--color-black)] leading-none tracking-tight">
                  08
                </span>
                <span className="type-body-small text-[var(--color-dim-grey)]">
                  Years of Experience
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[40px] md:text-[44px] font-medium text-[var(--color-black)] leading-none tracking-tight">
                  125+
                </span>
                <span className="type-body-small text-[var(--color-dim-grey)]">
                  Projects Completed
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[40px] md:text-[44px] font-medium text-[var(--color-black)] leading-none tracking-tight">
                  25
                </span>
                <span className="type-body-small text-[var(--color-dim-grey)]">
                  Happy Clients
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[40px] md:text-[44px] font-medium text-[var(--color-black)] leading-none tracking-tight">
                  12
                </span>
                <span className="type-body-small text-[var(--color-dim-grey)]">
                  Award Win
                </span>
              </div>
            </div>

            {/* Download CV Button Area */}
            <div className="py-6 md:py-8 md:pl-16 flex items-center justify-start md:min-w-[280px]">
              <ActionButton
                text="Download My CV"
                icon={<span className="text-xl leading-none">🔖</span>}
              />
            </div>
          </div>
        </section>

        {/* --- MARQUEE SECTION --- */}
        {/* Taller slider (py-5), stars completely centered, white text */}
        <section className="w-full bg-[var(--color-black)] overflow-hidden py-5 flex items-center select-none">
          {/* Placing animate-scroll on the PARENT prevents the snap and creates a perfect loop */}
          <div className="animate-scroll">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="flex items-center shrink-0"
                aria-hidden={i === 1 ? "true" : "false"}
              >
                {marqueeItems.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-[var(--color-white)] type-body-500 font-medium whitespace-nowrap">
                      {item}
                    </span>
                    <SparkleIcon className="w-4 h-4 mx-8 text-[var(--color-primary)]" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

// Sparkle SVG Component
function SparkleIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0L13.8814 8.11856L22 10L13.8814 11.8814L12 20L10.1186 11.8814L2 10L10.1186 8.11856L12 0Z" />
    </svg>
  );
}
