import Link from "next/link";
import { X, Instagram, Linkedin, Facebook } from "lucide-react";
import Button from "../ui/Button";

export default function MobileNavbar({ links, isOpen, setIsOpen, isScrolled }) {
  const Hamburger = () => (
    <div className="flex flex-col gap-1.5 p-2 cursor-pointer group">
      <span className="block w-6 h-[1px] bg-[var(--color-text-main)] group-hover:bg-[var(--color-accent)] transition-colors" />
      <span className="block w-6 h-[1px] bg-[var(--color-text-main)] group-hover:bg-[var(--color-accent)] transition-colors" />
    </div>
  );

  return (
    <>
      {/* 1. Static Top Bar */}
      <div className="md:hidden absolute top-0 left-0 w-full z-40 px-6 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 border border-[var(--color-surface-3)] rounded-lg flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-[var(--color-accent)] rotate-45 rounded-[1px]" />
          </div>
          <span className="text-xl font-semibold text-[var(--color-text-main)]">
            Sadiq Ali
          </span>
        </Link>
        <button onClick={() => setIsOpen(true)} className="cursor-pointer">
          <Hamburger />
        </button>
      </div>

      {/* 2. Sticky Toggle - Fixed within Content Grid */}
      <div className="fixed top-6 left-0 w-full pointer-events-none z-[60]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex justify-end">
          <button
            onClick={() => setIsOpen(true)}
            className={`pointer-events-auto bg-[var(--color-background)]/90 border border-[var(--color-surface-2)] backdrop-blur-md rounded-full p-2 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer shadow-2xl ${
              isScrolled && !isOpen
                ? "translate-y-0 opacity-100 scale-100"
                : "-translate-y-28 opacity-0 scale-75"
            }`}
          >
            <Hamburger />
          </button>
        </div>
      </div>

      {/* 3. The Side Drawer - Optimized for Tablet Stability */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-500 ${isOpen ? "visible" : "invisible"}`}
      >
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-700 ${isOpen ? "opacity-100" : "opacity-0"} cursor-pointer`}
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`absolute inset-y-0 right-0 h-full w-[85%] md:max-w-[400px] bg-[var(--color-background)] border-l border-[var(--color-surface-2)] transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] will-change-transform flex flex-col p-8 md:p-12 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Header */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="text-[var(--color-text-main)] hover:rotate-90 transition-transform duration-500 cursor-pointer"
            >
              <X size={32} strokeWidth={1.5} />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-5 md:gap-7 mt-12">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-3xl md:text-4xl font-semibold text-[var(--color-text-main)] tracking-tight hover:text-[var(--color-accent)] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Bottom Branding & CTA */}
          <div className="mt-auto flex flex-col gap-10">
            <div>
              <Button href="/contact" onClick={() => setIsOpen(false)}>
                Contact Me
              </Button>
            </div>

            <div className="flex gap-6 pb-4">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-main)] transition-colors"
                >
                  <Icon size={24} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
