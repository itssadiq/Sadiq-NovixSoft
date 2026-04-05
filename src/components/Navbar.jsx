"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ActionButton from "./ActionButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Identity */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden border border-gray-200">
            {/* Placeholder for your avatar */}
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="type-h5 leading-none !not-italic">Sadiq Ali</span>
            <span className="type-caption uppercase !not-italic text-gray-400 leading-none mt-1">
              UI UX Designer
            </span>
          </div>
        </div>

        {/* Center: Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {["About Me", "Works", "Articles", "Reviews"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="type-nav-link hover:text-[var(--color-primary)] transition-colors !not-italic"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right: Button (Desktop) & Menu (Mobile) */}
        <div className="flex items-center gap-4">
          {/* Desktop Button */}
          <ActionButton
            text="Let's Talk"
            icon={<span className="text-xl leading-none">👋</span>}
          />

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span
              className={`w-6 h-0.5 bg-black transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-black transition-all ${isOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-black transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-lg">
          {["About Me", "Works", "Articles", "Reviews"].map((item) => (
            <Link
              key={item}
              href="#"
              className="type-nav-link !not-italic py-2 border-b border-gray-50"
            >
              {item}
            </Link>
          ))}
          <Link
            href="#contact"
            className="flex items-center justify-between pl-5 pr-1 py-1 rounded-full border border-black mt-2"
          >
            <span className="type-btn !not-italic">Let's Talk</span>
            <span className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-lg">
              👋
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
}
