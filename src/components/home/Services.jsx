import { Clock } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "1.",
      title: "Custom Web Design",
      price: "$2,500",
      duration: "3-6 weeks",
      description:
        "I design sleek, user-friendly websites tailored to your brand's identity and goals. From wireframes to final launch, every detail is crafted to ensure a seamless user experience and high engagement.",
      features: [
        "Unique, responsive design",
        "Mobile & SEO-friendly structure",
        "Optimized for speed & performance",
        "Designed for conversions & engagement",
      ],
    },
    {
      id: "2.",
      title: "Landing Page Design",
      price: "$1,200",
      duration: "1-3 weeks",
      description:
        "A high-impact landing page designed to capture leads, drive sales, or promote your campaign. Built with a conversion-focused strategy to maximize your ROI.",
      features: [
        "Clean, persuasive design",
        "Fast-loading & mobile-friendly",
        "A/B testing & conversion optimization",
        "Seamless lead capture integration",
      ],
    },
    {
      id: "3.",
      title: "Website Redesign & Optimization",
      price: "$2,000",
      duration: "2-5 weeks",
      description:
        "Revamp your outdated website with a fresh, modern design that enhances user experience and boosts performance. I analyze and refine key elements to improve engagement, speed, and conversions.",
      features: [
        "Modern & responsive redesign",
        "UI/UX improvements for better navigation",
        "SEO optimization for better rankings",
        "Speed & performance enhancements",
      ],
    },
  ];

  const marqueeItems = [
    "Web Design",
    "Web Development",
    "Branding",
    "Visual Identity",
    "UI/UX Design",
  ];

  return (
    <section className="w-full px-1 md:px-2 pt-8 md:pt-10 pb-12 md:pb-16 max-w-[1400px] mx-auto">
      {/* --- SECTION HEADER --- 
          Mobile: flex-col (Title then Line then Marquee)
          Desktop: flex-row (Title --- Marquee)
      */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10 overflow-hidden">
        <h2 className="text-white text-3xl md:text-5xl font-semibold whitespace-nowrap">
          My Services
        </h2>

        {/* The horizontal line that adapts to screen size */}
        <div className="h-[1px] bg-[#1a1a1a] w-full md:flex-grow md:min-w-[40px]"></div>

        {/* Marquee Row */}
        <div className="relative flex overflow-hidden py-2 w-full md:max-w-md lg:max-w-xl">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"></div>
                <span className="text-[#8A8A8A] text-sm md:text-base font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- SERVICES LIST --- */}
      <div className="flex flex-col gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-[#121212] border border-[#1a1a1a] rounded-[1.5rem] p-6 md:p-8"
          >
            {/* Top Row: Info & Stats */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4 mb-8 md:mb-12">
              {/* Title & ID */}
              <div className="flex items-center gap-3 flex-grow">
                <span className="text-[var(--color-accent)] text-2xl font-medium">
                  {service.id}
                </span>
                <h3 className="text-white text-2xl md:text-3xl font-medium">
                  {service.title}
                </h3>
                {/* Desktop-only connecting line */}
                <div className="hidden md:block flex-grow h-[1px] bg-[#1a1a1a] mx-6"></div>
              </div>

              {/* Price & Duration */}
              <div className="flex items-center gap-4 text-[#8A8A8A] text-sm md:text-base whitespace-nowrap">
                <span>
                  Starts at{" "}
                  <span className="text-#bfbfbf font-medium">
                    {service.price}
                  </span>
                </span>
                <div className="w-1 h-1 rounded-full bg-[#262626]"></div>
                <div className="flex items-center gap-2">
                  <Clock size={16} strokeWidth={1.5} />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Mobile-only divider line after the price/duration row */}
              <div className="block md:hidden h-[1px] bg-[#1a1a1a] w-full mt-2"></div>
            </div>

            {/* Bottom Content Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
              {/* Description */}
              <div className="md:pl-8">
                <p className="text-[#8A8A8A] text-base md:text-lg leading-relaxed max-w-lg">
                  {service.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="flex flex-col gap-4 md:gap-5">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-[#bfbfbf] text-base md:text-lg font-medium"
                  >
                    <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
