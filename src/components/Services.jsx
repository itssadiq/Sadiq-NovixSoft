import React from "react";
import Link from "next/link";
import CTAButton from "./CTAButton";

export default function Services() {
  const services = [
    {
      title: "Website Development",
      description:
        "Clean, responsive websites built for performance, scalability, and client-ready delivery.",
      timeline: "1–2 weeks",
    },
    {
      title: "Landing Pages",
      description:
        "Conversion-focused pages designed for campaigns, ads, and lead generation.",
      timeline: "48–72 hrs",
    },
    {
      title: "WordPress Development",
      description:
        "Custom WordPress builds with flexible structure and easy content management.",
      timeline: "3–7 days",
    },
    {
      title: "Website Redesign",
      description:
        "Improving structure, UI, and performance for a more modern experience.",
      timeline: "1–2 weeks",
    },
    {
      title: "Ongoing Support",
      description:
        "Reliable support for updates, fixes, and continuous improvements.",
      timeline: "Ongoing",
    },
  ];

  return (
    <section
      id="services"
      className="w-full bg-[var(--color-white)] pt-20 md:pt-32 pb-0"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* SECTION HEADER - Standardized Heading Gap: mb-10 md:mb-16 */}
        <div className="flex flex-col gap-6 mb-10 md:mb-16">
          <div className="flex items-center gap-4">
            <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center border border-gray-300">
              <div className="w-2 h-2 rounded-full bg-black"></div>
            </div>
            <h5 className="type-h5 tracking-tight uppercase font-bold text-[var(--color-black)]">
              My Primary Services
            </h5>
          </div>

          {/* INTRO PARAGRAPH */}
          <p className="type-body-large text-[var(--color-dim-grey)] max-w-2xl leading-relaxed">
            Flexible development across WordPress and custom builds. Designed
            for agency workflows, with client-ready revisions.
          </p>
        </div>

        {/* SERVICES LIST */}
        <div className="flex flex-col border-t border-black/10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group w-full border-b border-black/10 py-10 transition-colors hover:bg-gray-50/50"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12">
                <div className="w-full md:w-[25%] shrink-0">
                  <h3 className="type-h3">{service.title}</h3>
                </div>

                <div className="w-full md:w-[50%]">
                  <p className="type-body text-[var(--color-dim-grey)] md:text-[var(--color-black)]">
                    {service.description}
                  </p>
                </div>

                <div className="w-full md:w-[15%] flex md:justify-end">
                  <span className="type-body font-medium">
                    [ {service.timeline} ]
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- BLACK CTA BAR - Consistent with Works Layout --- */}
      <div className="w-full bg-[var(--color-black)] py-4 mt-20 md:mt-32">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-0">
          <CTAButton text="Need Support on a Project?" href="#contact" />

          {/* Note: If you want to add social links here too, the container is already prepared */}
        </div>
      </div>
    </section>
  );
}
