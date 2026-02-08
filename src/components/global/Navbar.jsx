"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Instagram, Facebook, Linkedin, X } from "lucide-react";
import Button from "../ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Blog", href: "/journal" },
  ];

  return (
    // Changed to absolute so it sits OVER the Hero without pushing it down
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      {/* Added responsive padding (px-6, md:px-12) so it doesn't stick to screen edges */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-8 h-24 flex items-center justify-between">
        {/* --- LOGO --- */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 border border-[#262626] rounded-lg flex items-center justify-center transition-colors group-hover:border-[#404040]">
            <div className="w-2.5 h-2.5 bg-[var(--color-accent)] rotate-45 rounded-[1px]"></div>
          </div>
          <span className="text-xl font-semibold text-white tracking-tight">
            Sadiq Ali
          </span>
        </Link>

        {/* --- DESKTOP & TABLET NAVIGATION --- */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[var(--color-text-link)] hover:text-white transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Button href="/contact">Contact Me</Button>
        </div>

        {/* --- MOBILE HAMBURGER --- */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
        >
          <span className="block w-6 h-[1px] bg-white" />
          <span className="block w-6 h-[1px] bg-white" />
        </button>
      </div>

      {/* --- MOBILE SIDE DRAWER SYSTEM --- */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-500 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Subtle Blurred Overlay */}
        <div
          className={`absolute inset-0 bg-black/20 backdrop-blur-[2px] transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Side Drawer (80% width) */}
        <div
          className={`absolute top-0 right-0 h-full w-[80%] bg-[#0d0d0d] border-l border-[#1a1a1a] transition-transform duration-500 ease-[cubic-bezier(0.32,0,0.67,0)] flex flex-col p-8 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-16">
            <span className="text-lg font-semibold text-white">Menu</span>
            <button onClick={() => setIsOpen(false)} className="text-white">
              <X size={28} strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-4xl font-semibold text-white tracking-tight"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-10">
            <Link
              href="/contact"
              className="text-2xl font-medium text-[var(--color-accent)]"
              onClick={() => setIsOpen(false)}
            >
              Contact me →
            </Link>

            <div className="flex gap-6 pb-4">
              <Link
                href="#"
                className="text-[#8A8A8A] hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="#"
                className="text-[#8A8A8A] hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href="#"
                className="text-[#8A8A8A] hover:text-white transition-colors"
              >
                <Facebook size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
