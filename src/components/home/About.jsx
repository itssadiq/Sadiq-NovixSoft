import { ArrowUpRight } from "lucide-react";
import Button from "../ui/Button";

export default function About() {
  const stats = [
    { value: "12+", label: "Years of Experience" },
    { value: "40+", label: "Projects Completed" },
    { value: "30+", label: "Satisfied Clients" },
  ];

  return (
    // Reduced pt-2 on mobile for tighter hierarchy, kept md:pt-10 for desktop
    <section className="w-full px-1 md:px-2 pt-2 md:pt-10 pb-12 md:pb-16 max-w-[1400px] mx-auto flex flex-col gap-12 md:gap-20">
      {/* --- HEADING SECTION --- */}
      <h2 className="text-4xl leading-[1.05] md:text-5xl lg:text-6xl font-semibold tracking-tight w-full md:w-[80%]">
        <span className="text-white">
          I stay ahead of trends, integrating the latest design principles and
          technologies
        </span>{" "}
        <span className="text-[#8A8A8A]">
          to help businesses establish a strong online presence.
        </span>
      </h2>

      {/* --- STATS & BUTTON SECTION --- */}
      <div className="flex flex-col md:flex-row md:items-center w-full">
        <div className="flex flex-col md:flex-row md:items-center w-full md:w-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center"
            >
              {/* The Stat Item */}
              <div className="flex items-center gap-2 py-4 md:py-0 whitespace-nowrap">
                <span className="text-[var(--color-accent)] font-semibold text-sm md:text-base">
                  {stat.value}
                </span>
                <span className="text-[#8A8A8A] text-xs md:text-sm font-medium">
                  {stat.label}
                </span>
              </div>

              {/* 
                 CONNECTOR LINES (Inside Loop)
                 - Mobile: Shows after every item
                 - Desktop: Only shows between item 1-2 and 2-3 (fixed width)
              */}
              <div
                className={`
                h-[1px] bg-[#262626] w-full md:mx-6
                ${index === stats.length - 1 ? "md:hidden" : "md:w-12 lg:w-20"}
              `}
              ></div>
            </div>
          ))}
        </div>

        {/* 
           MAIN CONNECTOR (Outside Loop)
           - Fills the remaining space on desktop to connect directly to the button
        */}
        <div className="hidden md:block flex-grow h-[1px] bg-[#262626] mr-6"></div>

        {/* Reusable Button Component */}
        <div className="mt-8 md:mt-0">
          <Button href="/about">
            More about me
            <ArrowUpRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
