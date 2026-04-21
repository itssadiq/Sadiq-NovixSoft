import React from "react";
import Link from "next/link";
import CTAButton from "./CTAButton";

export default function Services() {
  const services = [
    {
      title: "WordPress & WooCommerce",
      description:
        "WordPress sites and WooCommerce stores built clean, structured for scale, and handed off ready to launch.",
      timeline: "3–7 days",
    },
    {
      title: "MERN Stack Development",
      description:
        "Custom web applications for clients who need something built beyond a template.",
      timeline: "As per project scope",
    },
    {
      title: "Landing Pages & Redesigns",
      description:
        "High-converting landing pages and full site redesigns WordPress or custom, faster load, sharper UI, better results.",
      timeline: "2-7 days",
    },
    {
      title: "Ongoing Support",
      description:
        "Whatever your client needs, whenever you need it no lock-ins, just results.",
      timeline: "Flexible",
    },
  ];

  return (
    <section
      id="services"
      className="w-full bg-[var(--color-white)] pt-20 md:pt-32 pb-0"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* SECTION HEADER - Standardized Spacing */}
        <div className="flex flex-col gap-6 mb-10 md:mb-16">
          <div className="flex items-center gap-4">
            <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center border border-gray-300">
              <div className="w-2 h-2 rounded-full bg-black"></div>
            </div>
            <h5 className="type-h5 tracking-tight uppercase font-bold text-[var(--color-black)]">
              My Primary Services
            </h5>
          </div>

          <p className="type-body-large text-[var(--color-dim-grey)] max-w-2xl leading-relaxed">
            Flexible development across WordPress and custom builds. Designed
            for agency workflows, with client-ready revisions.
          </p>
        </div>

        {/* SERVICES LIST */}
        <div className="flex flex-col border-t border-[var(--color-black)]">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full border-b border-[var(--color-black)] py-10"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-12">
                <div className="w-full md:w-[25%] shrink-0">
                  <h3 className="type-h3">{service.title}</h3>
                </div>

                <div className="w-full md:w-[50%]">
                  <p className="type-body text-[var(--color-dim-grey)] md:text-[var(--color-black)]">
                    {service.description}
                  </p>
                </div>

                <div className="w-full md:w-[15%] flex md:justify-end">
                  <span className="type-body font-medium text-[var(--color-black)]">
                    [ {service.timeline} ]
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BLACK CTA BAR - Consistent with Works Ribbon Rule */}
      <div className="w-full bg-[var(--color-black)] py-4 mt-20 md:mt-32">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between">
          <CTAButton text="Need Support on a Project?" href="#contact" />
        </div>
      </div>
    </section>
  );
}
