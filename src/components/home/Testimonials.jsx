"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      quote:
        "David completely transformed our website! His attention to detail and user experience expertise made our site not only beautiful but also highly functional. Since launching, our traffic has increased, and customers are staying longer.",
      name: "Sarah L.",
      role: "E-commerce Business Owner",
      rating: "4.9/5",
      image: "https://i.pravatar.cc/150?u=sarah",
    },
    {
      quote:
        "Working with David was a game-changer. He understood our brand vision perfectly and created a website that not only looks amazing but also performs exceptionally well. His professionalism and creativity are unmatched!",
      name: "Michael T.",
      role: "Startup Founder",
      rating: "4.9/5",
      image: "https://i.pravatar.cc/150?u=michael",
    },
    {
      quote:
        "David's web design skills are top-notch! He built a stunning, mobile-friendly site for us that loads fast and ranks well on Google. Our clients love the new design, and we've seen a boost in leads. Thank you, David!",
      name: "Emily R.",
      role: "Marketing Director",
      rating: "4.9/5",
      image: "https://i.pravatar.cc/150?u=emily",
    },
    {
      quote:
        "The final product exceeded my expectations. David is a true professional who delivers high-quality work on time. I'll definitely be working with him again to grow my brand presence.",
      name: "John D.",
      role: "Tech Lead",
      rating: "5.0/5",
      image: "https://i.pravatar.cc/150?u=john",
    },
    {
      quote:
        "David is an exceptional designer. He took our rough ideas and turned them into a polished, professional website that has significantly improved our brand image.",
      name: "Jessica W.",
      role: "Creative Director",
      rating: "4.8/5",
      image: "https://i.pravatar.cc/150?u=jessica",
    },
  ];

  const logos = ["Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Desktop shows 3 cards, Mobile shows 1
      setMaxIndex(mobile ? testimonials.length - 1 : testimonials.length - 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [testimonials.length]);

  const nextSlide = () => {
    if (currentIndex < maxIndex) setCurrentIndex(currentIndex + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <section className="w-full px-1 md:px-2 pt-8 md:pt-10 pb-12 md:pb-16 max-w-[1400px] mx-auto">
      {/* --- HEADER WITH MARQUEE --- */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12 overflow-hidden">
        <h2 className="text-white text-3xl md:text-5xl font-semibold whitespace-nowrap">
          My Clients
        </h2>
        <div className="h-[2px] bg-[#1a1a1a] w-full md:flex-grow"></div>

        <div className="relative flex overflow-hidden py-2 w-full md:max-w-xl">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"></div>
                <span className="text-[#8A8A8A] text-xl font-bold italic tracking-tighter uppercase opacity-50">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- TESTIMONIALS SLIDER AREA --- */}
      <div className="relative group px-0 md:px-12">
        {/* SUBTLE BLUR EFFECTS (Desktop Only) */}
        <div className="hidden md:block absolute left-12 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/40 to-transparent z-10 pointer-events-none" />
        <div className="hidden md:block absolute right-12 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0d0d0d] via-[#0d0d0d]/40 to-transparent z-10 pointer-events-none" />

        {/* NAVIGATION ARROWS */}
        {currentIndex > 0 && (
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1a1a1a]/90 border border-[#262626] flex items-center justify-center text-white hover:bg-[#262626] transition-all"
          >
            <ChevronLeft size={32} strokeWidth={1.5} />
          </button>
        )}

        {currentIndex < maxIndex && (
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1a1a1a]/90 border border-[#262626] flex items-center justify-center text-white hover:bg-[#262626] transition-all"
          >
            <ChevronRight size={32} strokeWidth={1.5} />
          </button>
        )}

        {/* CARDS MASK */}
        <div className="overflow-hidden">
          <div
            className="flex gap-0 md:gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (isMobile ? 100 : 33.333)}%)`,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="w-full shrink-0 md:shrink md:min-w-[calc(33.333%-16px)] bg-[#121212] rounded-[1rem] p-4 md:p-6 flex flex-col justify-between min-h-[380px]"
              >
                <p className="text-[#bfbfbf] text-lg">"{t.quote}"</p>

                <div className="mt-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-[#262626] shrink-0">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 w-full">
                        <h4 className="text-white font-medium whitespace-nowrap">
                          {t.name}
                        </h4>
                        <div className="h-[1px] bg-[#262626] flex-grow"></div>
                        <div className="flex items-center gap-1 shrink-0">
                          <span className="text-white text-sm">{t.rating}</span>
                          <Star
                            size={14}
                            fill="var(--color-accent)"
                            className="text-[var(--color-accent)]"
                          />
                        </div>
                      </div>
                      <p className="text-[#8A8A8A] text-xs mt-1">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
