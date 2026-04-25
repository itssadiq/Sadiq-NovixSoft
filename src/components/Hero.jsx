"use client";
import React, { useEffect, useState } from "react";
import ActionButton from "./ActionButton";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const marqueeItems = [
    "WordPress Builds",
    "WooCommerce Stores",
    "MERN Applications",
    "Landing Pages",
    "Website Redesigns",
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
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-6 flex flex-col justify-start pt-4 md:pt-8">
        <div className="max-w-[900px]">
          <h1
            className={`type-h1 text-[28px] md:text-[40px] tracking-[-0.02em] leading-[1.1] mb-3 ${revealClasses("delay-0")}`}
          >
            Web Development Partner for
            <br className="hidden md:block" /> Digital Agencies
          </h1>

          <p
            className={`type-body-large text-[14px] md:text-[18px] text-[var(--color-dim-grey)] max-w-2xl leading-relaxed mb-5 ${revealClasses("delay-150")}`}
          >
            I&apos;m Sadiq, a web developer helping agencies deliver client
            projects on tight deadlines. Delivered 10+ live projects across
            multiple industries from build to deployment using WordPress,
            WooCommerce & MERN stack to build production-ready websites.
          </p>

          <div className={revealClasses("delay-300")}>
            <ActionButton
              text="See My Work"
              hoverMode="primary"
              href="#works"
            />
          </div>
        </div>
      </main>

      {/* BOTTOM WRAPPER */}
      <div className={`w-full flex flex-col ${revealClasses("delay-500")}`}>
        {/* REVIEW SECTION (REPLACED STATS) */}
        <section className="w-full border-t border-[var(--color-black)]">
          <div className="max-w-[1400px] mx-auto w-full px-6 flex flex-col md:flex-row">
            {/* Review Content */}
            <div className="flex-1 py-5 md:pr-12 md:border-r border-[var(--color-black)] flex flex-col justify-center">
              {/* ADDED LINE HERE */}
              <span className="type-caption uppercase tracking-wider mb-2 block text-[var(--color-dim-grey)]">
                Don&apos;t just take my word for it
              </span>

              <blockquote className="max-w-[700px]">
                <p className="type-h5 italic">
                  “It&apos;s all You. Your progress and understanding is going
                  at an amazing pace. Great execution, Sadiq.”
                </p>
                <footer className="flex flex-col">
                  <span className="type-body-500 text-[var(--color-black)] font-semibold">
                    Muhammad Aun
                  </span>
                  <span className="type-body-small uppercase">
                    Account Manager — Team Adver
                  </span>
                </footer>
              </blockquote>
            </div>

            {/* Action Button Area */}
            <div className="py-6 md:pl-16 flex items-center justify-start md:min-w-[320px]">
              <ActionButton text="Let's Build Together" href="/contact" />
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
                    <span className="flex items-center justify-center mx-5 text-[var(--color-white)] text-sm leading-none">
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
