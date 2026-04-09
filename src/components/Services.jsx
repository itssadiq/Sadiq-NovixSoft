import React from "react";

export default function Services() {
  const services = [
    {
      title: "Landing Page",
      description:
        "Services can be quickly accessed by clients through a sleek and targeted landing page.",
      timeline: "From 15 days",
    },
    {
      title: "Business website",
      description:
        "Company's website provides a comprehensive overview of the products or services offered.",
      timeline: "From 24 days",
    },
    {
      title: "Your request",
      description:
        "Let's collaborate and delve into your project together. We will go over the specifics and formulate a plan to bring it to fruition.",
      timeline: "Let's discuss",
    },
  ];

  return (
    <section id="services" className="w-full bg-[var(--color-white)] py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* SECTION HEADER */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center border border-gray-300">
            <div className="w-2 h-2 rounded-full bg-black"></div>
          </div>
          <h5 className="type-h5 tracking-tight uppercase font-bold text-[var(--color-black)]">
            My Primary Service
          </h5>
        </div>

        {/* SERVICES LIST */}
        <div className="flex flex-col">
          {/* Top Border for the first item */}
          <div className="w-full h-[1px] bg-gray-100"></div>

          {services.map((service, index) => (
            <div
              key={index}
              className="group w-full border-b border-gray-100 py-10 transition-colors duration-300 hover:bg-gray-50/50"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12">
                {/* LEFT: Title */}
                <div className="w-full md:w-[25%] shrink-0">
                  <h3 className="type-h3">{service.title}</h3>
                </div>

                {/* CENTER: Description */}
                <div className="w-full md:w-[45%]">
                  <p className="type-body">{service.description}</p>
                </div>

                {/* RIGHT: Timeline Metadata */}
                <div className="w-full md:w-[20%] flex md:justify-end">
                  <span className="type-body">[ {service.timeline} ]</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
