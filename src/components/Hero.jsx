"use client";
import React, { useEffect, useState } from "react";
import ActionButton from "./ActionButton";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const marqueeItems = [
    "Website Development",
    "Website Redesign",
    "Landing Pages",
    "Custom Builds",
    "WordPress Builds",
    "Ongoing Support",
  ];

  // Animation helper class
  const revealClasses = (delay) => `
    transition-all duration-700 ease-out 
    ${delay} 
    ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
  `;

  return (
    <div className="w-full max-h-[100dvh] flex flex-col gap-4 md:gap-10 bg-[var(--color-white)] overflow-hidden">
      {/* MAIN HERO CONTENT */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-6 flex flex-col justify-start pt-4 md:pt-10">
        <div className="max-w-[900px]">
          <h1
            className={`type-h1 text-[28px] md:text-[40px] tracking-[-0.02em] leading-[1.1] mb-3 md:mb-5 ${revealClasses("delay-0")}`}
          >
            Web Development Partner for Agencies
            <br className="hidden md:block" /> that Needs Fast, Reliable Client
            Delivery
          </h1>

          <p
            className={`type-body-large text-[14px] md:text-[18px] text-[var(--color-dim-grey)] max-w-2xl leading-relaxed mb-6 md:mb-8 ${revealClasses("delay-150")}`}
          >
            Freelance developer helping agencies avoid delays, messy builds, and
            constant back-and-forth delivering clean, scalable websites
            (WordPress & custom) with fast turnaround and smooth handoffs.
          </p>

          <div className={revealClasses("delay-300")}>
            <ActionButton
              text="View My Work"
              hoverMode="primary"
              icon={<span className="text-xl leading-none">🔖</span>}
            />
          </div>
        </div>
      </main>

      {/* BOTTOM WRAPPER */}
      <div className={`w-full flex flex-col ${revealClasses("delay-500")}`}>
        {/* STATS SECTION */}
        <section className="w-full border-t border-[var(--color-black)]">
          <div className="max-w-[1400px] mx-auto w-full px-6 flex flex-col md:flex-row">
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-5 md:gap-y-0 py-4 md:py-9 md:pr-12 md:border-r border-[var(--color-black)]">
              <div className="flex flex-col gap-1">
                <span className="text-[28px] font-medium text-[var(--color-black)] leading-none tracking-tight">
                  10+
                </span>
                <span className="type-body-small text-[12px] md:text-[14px] text-[var(--color-dim-grey)]">
                  Projects Delivered
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[28px] font-medium text-[var(--color-black)] leading-none tracking-tight">
                  48-72 hrs
                </span>
                <span className="type-body-small text-[12px] md:text-[14px] text-[var(--color-dim-grey)]">
                  Avg. Delivery Time
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[28px] font-medium text-[var(--color-black)] leading-none tracking-tight">
                  {"<08 hrs"}
                </span>
                <span className="type-body-small text-[12px] md:text-[14px] text-[var(--color-dim-grey)]">
                  Response Time
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[28px] font-medium text-[var(--color-black)] leading-none tracking-tight">
                  100%
                </span>
                <span className="type-body-small text-[12px] md:text-[14px] text-[var(--color-dim-grey)]">
                  On Time Delivery
                </span>
              </div>
            </div>

            <div className="py-4 md:py-8 md:pl-16 flex items-center justify-start md:min-w-[280px]">
              <ActionButton
                text="Let's Work Together"
                icon={<span className="text-xl leading-none">👨‍💼</span>}
              />
            </div>
          </div>
        </section>

        {/* MARQUEE SECTION */}
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
