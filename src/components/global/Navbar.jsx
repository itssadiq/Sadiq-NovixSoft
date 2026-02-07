"use client";

import { useState } from "react";
import Link from "next/link";
// 1. Import the icons
import { Instagram, Facebook, Linkedin } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[var(--color-background)]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-50">
          {/* --- LOGO --- */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 border border-[#262626] rounded-lg flex items-center justify-center transition-colors group-hover:border-[#404040]">
              <div className="w-2.5 h-2.5 bg-[var(--color-accent)] rotate-45 rounded-[1px]"></div>
            </div>
            <span className="text-xl font-semibold text-white tracking-tight">
              Nyx
            </span>
          </Link>

          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              <Link
                href="/about"
                className="text-[var(--color-text-link)] hover:text-white transition-colors text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="/work"
                className="text-[var(--color-text-link)] hover:text-white transition-colors text-sm font-medium"
              >
                Work
              </Link>
              <Link
                href="/blog"
                className="text-[var(--color-text-link)] hover:text-white transition-colors text-sm font-medium"
              >
                Blog
              </Link>
            </div>

            {/* Desktop Contact Button */}
            <Link
              href="/contact"
              className="bg-[#262626] text-white text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-300 hover:bg-[var(--color-accent)] hover:text-black"
            >
              Contact me
            </Link>
          </div>

          {/* --- MOBILE HAMBURGER --- */}
          {/* We keep your custom animated lines here because they look better than a static icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 z-50 cursor-pointer"
          >
            <span
              className={`block w-6 h-[1px] bg-white transition-transform duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1px] bg-white transition-transform duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-[1px]" : ""
              }`}
            />
          </button>
        </div>

        {/* --- MOBILE MENU OVERLAY --- */}
        <div
          className={`fixed inset-0 bg-[var(--color-background)] z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out md:hidden h-[100dvh] ${
            isOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-10"
          }`}
        >
          {/* Menu Links */}
          <div className="flex flex-col items-center gap-8">
            <Link
              href="/about"
              className="text-3xl text-[var(--color-text-link)] hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/work"
              className="text-3xl text-[var(--color-text-link)] hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Work
            </Link>
            <Link
              href="/blog"
              className="text-3xl text-[var(--color-text-link)] hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="bg-[#262626] text-white text-xl font-medium px-8 py-3 rounded-full transition-all duration-300 mt-4 hover:bg-[var(--color-accent)] hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              Contact me
            </Link>
          </div>

          {/* --- SOCIAL ICONS (Bottom) --- */}
          <div className="absolute bottom-12 flex gap-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C2C2C2] hover:text-white transition-colors duration-300"
            >
              <Instagram strokeWidth={1.5} size={24} />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C2C2C2] hover:text-white transition-colors duration-300"
            >
              <Facebook strokeWidth={1.5} size={24} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C2C2C2] hover:text-white transition-colors duration-300"
            >
              <Linkedin strokeWidth={1.5} size={24} />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
