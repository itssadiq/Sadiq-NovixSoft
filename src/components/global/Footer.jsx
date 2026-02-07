import Link from "next/link";
import {
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full pt-12 pb-6 px-6 md:px-12 max-w-[1400px] mx-auto">
      {/* --- 1. PROFILE & BIO --- */}
      {/* Increased margin-bottom from mb-6 to mb-10 for breathing room */}
      <div className="flex flex-col gap-3 mb-10 max-w-lg">
        <div className="w-[65px] h-[65px] min-w-[65px] rounded-full bg-[#F59E0B] overflow-hidden flex items-end justify-center">
          <div className="w-[45px] h-[45px] bg-[#2a1b05] rounded-t-full opacity-80"></div>
        </div>

        <p className="text-base text-[var(--color-text-secondary)] leading-snug">
          <span className="text-white font-semibold">I'm David Smith,</span> a
          web designer with 12 years of experience crafting modern,
          high-performing websites.
        </p>
      </div>

      {/* --- 2. MAIN CTA SECTION --- */}
      {/* Increased margin-bottom from mb-8 to mb-12 */}
      <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-12 gap-4 md:gap-0">
        <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight whitespace-nowrap">
          Let's Work Together!
        </h2>

        {/* Connector Line */}
        <div className="hidden md:block h-[1px] bg-[#262626] flex-grow mx-6 mt-1.5"></div>

        <Link
          href="/contact"
          className="group flex items-center gap-2 bg-[var(--color-accent)] text-black px-5 py-2.5 rounded-full text-sm md:text-base font-bold transition-transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(130,255,28,0.4)]"
        >
          Let's Talk
          <ArrowRight
            className="w-4 h-4 transition-transform group-hover:-rotate-45"
            strokeWidth={2.5}
          />
        </Link>
      </div>

      {/* --- 3. CONTACT INFO SECTION --- */}
      {/* Increased margin-bottom from mb-8 to mb-12 */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 text-[var(--color-text-link)] w-full text-sm">
        {/* ROW 1: Socials */}
        <div className="flex items-center gap-3 py-2 md:py-0">
          <a href="#" className="hover:text-white transition-colors">
            <Twitter size={18} strokeWidth={1.5} />
          </a>
          <span className="text-[var(--color-accent)] font-bold text-lg">
            •
          </span>
          <a href="#" className="hover:text-white transition-colors">
            <Instagram size={18} strokeWidth={1.5} />
          </a>
          <span className="text-[var(--color-accent)] font-bold text-lg">
            •
          </span>
          <a href="#" className="hover:text-white transition-colors">
            <Linkedin size={18} strokeWidth={1.5} />
          </a>
        </div>

        {/* Separators */}
        <div className="block md:hidden w-full h-[1px] bg-[#262626]"></div>
        <div className="hidden md:block w-full h-[1px] bg-[#262626] mx-4 flex-grow"></div>

        {/* ROW 2: Email */}
        <a
          href="mailto:hello@david.design"
          className="flex items-center gap-2 hover:text-white transition-colors py-2 md:py-0 whitespace-nowrap"
        >
          <Mail
            className="text-[var(--color-accent)] fill-[var(--color-accent)]"
            size={18}
            strokeWidth={0}
          />
          <span>hello@david.design</span>
        </a>

        {/* Separators */}
        <div className="block md:hidden w-full h-[1px] bg-[#262626]"></div>
        <div className="hidden md:block w-full h-[1px] bg-[#262626] mx-4 flex-grow"></div>

        {/* ROW 3: Phone */}
        <a
          href="tel:1234567890"
          className="flex items-center gap-2 hover:text-white transition-colors py-2 md:py-0 whitespace-nowrap"
        >
          <Phone
            className="text-[var(--color-accent)] fill-[var(--color-accent)]"
            size={18}
            strokeWidth={0}
          />
          <span>(123) 456-7890</span>
        </a>
      </div>

      {/* --- 4. NAVIGATION PILL --- */}
      {/* Increased margin-bottom from mb-6 to mb-8 */}
      <div className="w-full bg-[#121212] border border-[#1A1A1A] rounded-[32px] py-2.5 px-6 mb-8">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:gap-x-8">
          {["Home", "About", "Work", "Blog", "Contact", "404"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-[#8A8A8A] hover:text-white text-xs md:text-sm font-medium transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>

      {/* --- 5. COPYRIGHT --- */}
      <div className="border-t border-[#262626] pt-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 text-[10px] md:text-xs text-[#525252]">
        <p>
          Designed in <span className="text-white font-medium">Framer</span> By{" "}
          <span className="text-white font-medium">Thaer</span>
        </p>
        <p>© Copyright 2025</p>
      </div>
    </footer>
  );
}
