import React from "react";
import Image from "next/image";
import Profile from "../../public/profile.png";

export default function AboutMe() {
  const expertise = [
    "10+ Projects Delivered",
    "1+ Year Agency Expertise",
    "100% On-Time Delivery",
    "<08 hrs Response Time",
  ];

  return (
    <section
      id="about-me"
      className="w-full bg-[var(--color-white)] pt-20 md:pt-32 pb-20 md:pb-32"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* SECTION HEADER - Global Standard Spacing */}
        <div className="flex items-center gap-4 mb-10 md:mb-16">
          <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center border border-gray-300">
            <div className="w-2 h-2 rounded-full bg-black"></div>
          </div>
          <h5 className="type-h5 tracking-tight uppercase font-bold text-[var(--color-black)]">
            About Me
          </h5>
        </div>

        {/* CONTENT WRAPPER */}
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-0">
          {/* COLUMN 1: IMAGE (20%) */}
          <div className="w-[75%] md:w-[50%] lg:w-[20%] mx-auto lg:mx-0 shrink-0 lg:pr-12">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[10px] bg-gray-100 border border-gray-100">
              <Image
                src={Profile}
                alt="Sadiq Ali"
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

          {/* COLUMN 2: BIO & LOCATION (55%) */}
          <div className="w-full lg:w-[55%] flex flex-col justify-between lg:px-12 pt-2">
            <div className="flex flex-col gap-4">
              <p className="type-body">
                I&apos;m a web developer partnering with digital agencies as a
                dedicated build resource. 1+ year of agency experience, 10+ live
                projects delivered clean, on time, and handed off without
                friction.
              </p>
              <p className="type-body">
                I treat every project like it has my name on it. Clear
                communication, no micromanagement needed, and work that holds up
                long after handoff. I&apos;m not here to close tickets, I&apos;m
                here to make your agency deliver.
              </p>
            </div>

            <div className="mt-6">
              <span className="type-body-small block !text-[var(--color-black)]">
                Based in
              </span>
              <span className="type-body !font-medium">Karachi, Pakistan</span>
            </div>
          </div>

          {/* THE SEPARATOR */}
          <div className="w-full h-[1px] lg:w-[1px] lg:h-auto lg:self-stretch bg-[var(--color-black)] my-10 lg:my-0 opacity-10 lg:opacity-100"></div>

          {/* COLUMN 3: EXPERTISE (25%) */}
          <div className="w-full lg:w-[25%] shrink-0 lg:pl-12 pt-2 flex flex-col">
            <h4 className="type-h4 mb-8">By the Numbers</h4>
            <div className="flex flex-wrap gap-2">
              {expertise.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-2 border border-[var(--color-black)] rounded-full flex items-center justify-center"
                >
                  <span className="type-body-small !text-[var(--color-black)]">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
