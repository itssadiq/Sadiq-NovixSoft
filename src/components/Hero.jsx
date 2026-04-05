import React from "react";
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
    // Reduced gap-10 to gap-4 on mobile
    <div className="w-full max-h-[100dvh] flex flex-col gap-4 md:gap-10 bg-[var(--color-white)]">
      {/* MAIN HERO CONTENT */}
      {/* Tighter top padding on mobile (pt-4) */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-6 flex flex-col justify-start pt-4 md:pt-10">
        <div className="max-w-[900px]">
          {/* Reduced H1 size and bottom margin on mobile */}
          <h1 className="type-h1 text-[28px] md:text-[40px] tracking-[-0.02em] leading-[1.1] mb-3 md:mb-5">
            Crafting Experiences: UI/UX
            <br className="hidden md:block" /> Designer Passionate About
            Seamless.
          </h1>

          {/* Reduced Paragraph text size and bottom margin on mobile */}
          <p className="type-body-large text-[14px] md:text-[18px] text-[var(--color-dim-grey)] max-w-2xl leading-relaxed mb-6 md:mb-8">
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

      {/* BOTTOM WRAPPER */}
      <div className="w-full flex flex-col">
        {/* STATS SECTION */}
        <section className="w-full border-t border-[var(--color-black)]">
          <div className="max-w-[1400px] mx-auto w-full px-6 flex flex-col md:flex-row">
            {/* Added gap-y-5 for mobile rows, reduced py to py-4 on mobile */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-5 md:gap-y-0 py-4 md:py-9 md:pr-12 md:border-r border-[var(--color-black)]">
              <div className="flex flex-col gap-1">
                <span className="text-[28px] md:text-[32px] font-medium text-[var(--color-black)] leading-none tracking-tight">
                  08
                </span>
                <span className="type-body-small text-[12px] md:text-[14px] text-[var(--color-dim-grey)]">
                  Years of Experience
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[28px] md:text-[32px] font-medium text-[var(--color-black)] leading-none tracking-tight">
                  125+
                </span>
                <span className="type-body-small text-[12px] md:text-[14px] text-[var(--color-dim-grey)]">
                  Projects Completed
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[28px] md:text-[32px] font-medium text-[var(--color-black)] leading-none tracking-tight">
                  25
                </span>
                <span className="type-body-small text-[12px] md:text-[14px] text-[var(--color-dim-grey)]">
                  Happy Clients
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[28px] md:text-[32px] font-medium text-[var(--color-black)] leading-none tracking-tight">
                  12
                </span>
                <span className="type-body-small text-[12px] md:text-[14px] text-[var(--color-dim-grey)]">
                  Award Win
                </span>
              </div>
            </div>

            {/* Reduced py to py-4 on mobile */}
            <div className="py-4 md:py-8 md:pl-16 flex items-center justify-start md:min-w-[280px]">
              <ActionButton
                text="Download My CV"
                icon={<span className="text-xl leading-none">🔖</span>}
              />
            </div>
          </div>
        </section>

        {/* MARQUEE SECTION */}
        {/* Reduced py to py-3 on mobile */}
        <section className="relative w-full bg-[var(--color-black)] overflow-hidden py-3 md:py-6 flex items-center select-none">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[var(--color-black)] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[var(--color-black)] to-transparent z-10 pointer-events-none"></div>

          <div className="animate-scroll">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="flex items-center shrink-0"
                aria-hidden={i === 1 ? "true" : "false"}
              >
                {marqueeItems.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-[14px] md:text-base text-[var(--color-white)] font-medium whitespace-nowrap">
                      {item}
                    </span>

                    <span className="flex items-center justify-center mx-5 text-[var(--color-primary)] text-sm leading-none">
                      ✦
                    </span>
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
