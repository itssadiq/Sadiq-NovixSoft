"use client";
import React, { useState } from "react";
import { FaLinkedinIn, FaChevronRight } from "react-icons/fa6";
import SocialLink from "./SocialLink";

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviewsData = [
    {
      id: 1,
      text: "'Great work Sadiq Ali Very proud of you' -- ' Amazing work buddy Proud of you' -- 'Nice revamp Sadiq Ali The client likes it 👍'",
      name: "Haider Raza",
      role: "Founder - Team Adver (Different comments across delivered projects)",
    },
    {
      id: 2,
      text: "It's all You. Your progress and understanding is going at an amazing pace. great execution, Sadiq.",
      name: "Muhammad Aun",
      role: "Account Manager - Team Adver",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviewsData.length);
  };

  return (
    <section
      id="reviews"
      // RULE: Standardized Section Padding
      className="w-full bg-[var(--color-white)] pt-20 md:pt-32 pb-20 md:pb-32"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* MAIN WRAPPER */}
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-0">
          {/* COLUMN 1: LEFT BOX (25%) */}
          <div className="w-[75%] md:w-[60%] lg:w-[25%] mx-auto lg:mx-0 shrink-0 lg:pr-10">
            <div className="w-full h-full rounded-[24px] bg-[var(--color-primary)] p-8 flex flex-col items-center justify-center text-center">
              <h3 className="type-h4 mb-6 italic">
                Recognised by the people who matter most. Consistent praise from
                the agency founder and leadership judge for yourself
              </h3>

              <div className="flex flex-col items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.15em] font-bold opacity-70">
                  See live comments on
                </span>

                <div className="bg-black text-white hover:bg-white hover:text-black rounded-full transition-all duration-300">
                  <SocialLink href="#" label="LinkedIn" icon={FaLinkedinIn} />
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2: REVIEWS CONTENT (75%) */}
          <div className="flex-1 lg:pl-16 flex flex-col justify-start py-2">
            {/* SECTION HEADER - Aligned with Rule: mb-10 md:mb-16 */}
            <div className="flex items-center gap-4 mb-10 md:mb-16">
              <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center border border-gray-300">
                <div className="w-2 h-2 rounded-full bg-black"></div>
              </div>
              <h5 className="type-h5 tracking-tight uppercase font-bold text-[var(--color-black)]">
                Clients Speak to me
              </h5>
            </div>

            {/* THE "GRID STACK" */}
            <div className="relative w-full pr-14 md:pr-20 grid grid-cols-1 grid-rows-1">
              {reviewsData.map((review, index) => (
                <div
                  key={review.id}
                  className={`
                    col-start-1 row-start-1 flex flex-col transition-all duration-500 ease-in-out
                    ${index === activeIndex ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 translate-x-10 pointer-events-none"}
                  `}
                >
                  <blockquote className="max-w-[850px] mb-8">
                    <p className="type-body-large text-[18px] md:text-[22px] leading-relaxed text-[var(--color-dim-grey)] italic">
                      &quot;{review.text}&quot;
                    </p>
                  </blockquote>

                  <div className="flex flex-col">
                    <span className="type-h4 !text-[18px] font-bold">
                      {review.name}
                    </span>
                    <span className="type-caption uppercase text-[var(--color-dim-grey)] font-bold mt-1 tracking-[0.15em] text-[10px]">
                      {review.role}
                    </span>
                  </div>
                </div>
              ))}

              {/* Navigation Arrow */}
              {reviewsData.length > 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-100 hover:bg-black flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 z-10 cursor-pointer"
                  aria-label="Next review"
                >
                  <FaChevronRight className="text-xl" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
