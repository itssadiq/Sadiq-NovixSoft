import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-white min-h-screen pt-20">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="max-w-[1400px] mx-auto px-6 pt-10 pb-16">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <h1 className="type-h1 leading-[1.1] mb-8">
            Crafting Experiences: UI/UX <br />
            Designer Passionate About Seamless.
          </h1>

          {/* Subtext */}
          <p className="type-body-large max-w-2xl mb-10 leading-relaxed">
            I'm currently working as UI UX Designer at framer, where my team and
            also I are on a mission to create the most intelligent and
            user-friendly learning platform in the world.
          </p>

          {/* Hire Me Button */}
          <button className="flex items-center gap-4 pl-6 pr-1 py-1 rounded-full border border-black hover:bg-gray-50 transition-all group">
            <span className="type-btn !not-italic text-lg">Hire Me</span>
            <span className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-xl">
              👨‍💻
            </span>
          </button>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="border-t border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row">
          {/* Stats Grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-200 border-b md:border-b-0 border-gray-200 md:border-r">
            {/* Stat 1 */}
            <div className="p-6 md:p-10 flex flex-col gap-1">
              <span className="type-h2 md:text-[40px] !not-italic">08</span>
              <span className="type-body-small !not-italic text-gray-500">
                Years of Experience
              </span>
            </div>

            {/* Stat 2 */}
            <div className="p-6 md:p-10 flex flex-col gap-1">
              <span className="type-h2 md:text-[40px] !not-italic">125+</span>
              <span className="type-body-small !not-italic text-gray-500">
                Projects Completed
              </span>
            </div>

            {/* Stat 3 */}
            <div className="p-6 md:p-10 flex flex-col gap-1">
              <span className="type-h2 md:text-[40px] !not-italic">25</span>
              <span className="type-body-small !not-italic text-gray-500">
                Happy Clients
              </span>
            </div>

            {/* Stat 4 */}
            <div className="p-6 md:p-10 flex flex-col gap-1">
              <span className="type-h2 md:text-[40px] !not-italic">12</span>
              <span className="type-body-small !not-italic text-gray-500">
                Award Win
              </span>
            </div>
          </div>

          {/* Download CV (Right side on Desktop) */}
          <div className="p-6 md:p-10 flex items-center justify-center md:justify-end md:w-[300px]">
            <button className="flex items-center gap-3 pl-5 pr-1 py-1 rounded-full border border-black hover:bg-gray-50 transition-all w-full md:w-auto justify-between md:justify-start">
              <span className="type-btn !not-italic">Download My CV</span>
              <span className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                {/* Simple Tag Icon */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                  <line x1="7" y1="7" x2="7.01" y2="7"></line>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* --- MARQUEE SECTION --- */}
      <section className="bg-black py-6 overflow-hidden">
        <div className="animate-scroll flex gap-8 md:gap-12 whitespace-nowrap">
          {/* We repeat the content to ensure smooth infinite scroll */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 md:gap-12">
              {[
                "Website Design",
                "Branding",
                "Mobile App Design",
                "UI Design",
                "UX Design",
                "Strategy",
                "Visual Design",
                "Wireframing",
                "Prototyping",
              ].map((text) => (
                <div key={text} className="flex items-center gap-8 md:gap-12">
                  <span className="type-h5 !text-white/80 !not-italic text-xl md:text-2xl">
                    {text}
                  </span>
                  <span className="text-[var(--color-primary)] text-xl md:text-2xl">
                    ✦
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
