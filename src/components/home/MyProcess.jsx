import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

export default function Process() {
  const steps = [
    {
      id: "1.",
      title: "Discovery & Strategy",
      description:
        "We start by understanding your business, goals, and target audience. This phase includes research, competitor analysis, and defining the project scope to ensure a clear direction.",
    },
    {
      id: "2.",
      title: "Wireframing & UX Design",
      description:
        "Before jumping into visuals, I create wireframes to map out the structure and user flow. This ensures an intuitive and seamless experience for visitors.",
    },
    {
      id: "3.",
      title: "Visual Design & Branding",
      description:
        "This is where your website comes to life. Using your brand identity, I design a visually compelling interface with the perfect balance of aesthetics and usability.",
    },
    {
      id: "4.",
      title: "Development & Implementation",
      description:
        "Once the design is approved, I build your website using modern, responsive technologies. I ensure that it's optimized for speed, SEO, and a flawless user experience across all devices.",
    },
  ];

  return (
    <section className="w-full px-1 md:px-2 pt-8 md:pt-10 pb-12 md:pb-16 max-w-[1400px] mx-auto">
      {/* --- SECTION HEADER --- */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10">
        <h2 className="text-white text-3xl md:text-5xl font-semibold whitespace-nowrap">
          My Process
        </h2>

        {/* Connector Line */}
        <div className="h-[2px] bg-[#1a1a1a] w-full md:flex-grow"></div>

        {/* CTA Button - Added whitespace-nowrap to prevent 3-line stacking */}
        <div className="mt-2 md:mt-0">
          <Button href="/contact" className="whitespace-nowrap">
            Let's get started
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>

      {/* --- PROCESS STEPS --- */}
      <div className="flex flex-col gap-4 md:gap-6">
        {steps.map((step) => (
          <div key={step.id} className="bg-[#121212] rounded-[1rem] p-6 md:p-8">
            {/* items-start ensures the heading and paragraph align at the top */}
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-10">
              {/* Left Side: ID + Title + Line */}
              {/* We use a fixed width (45%) so the paragraph always starts at the same spot */}
              <div className="flex items-center gap-3 w-full md:w-[45%] shrink-0">
                <span className="text-[var(--color-accent)] text-xl md:text-2xl font-medium">
                  {step.id}
                </span>
                <h3 className="text-white text-xl md:text-2xl font-medium whitespace-nowrap">
                  {step.title}
                </h3>

                {/* Connecting Line - flex-grow makes it show on every card */}
                <div className="hidden md:block flex-grow h-[1.5px] bg-[#262626] ml-4"></div>
              </div>

              {/* Mobile-only divider */}
              <div className="block md:hidden h-[1px] bg-[#1a1a1a] w-full -mt-2"></div>

              {/* Right Side: Description */}
              <div className="w-full">
                {/* md:pt-1/2 aligns the text baseline with the heading baseline */}
                <p className="text-[#8A8A8A] text-base md:text-lg leading-relaxed md:pt-1">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
