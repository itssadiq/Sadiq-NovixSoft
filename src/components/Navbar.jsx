"use client";
import { useState } from "react";
import Link from "next/link";
import ActionButton from "./ActionButton";
import Image from "next/image";
import Profile from "../../public/profile.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Updated navigation items
  const navItems = ["About Me", "Works", "Services", "Reviews"];

  // Updated helper to determine link destination as anchors on homepage
  const getHref = (item) => {
    return `/#${item.toLowerCase().replace(" ", "-")}`;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* LEFT: Identity */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden border border-gray-200">
            <Image
              src={Profile}
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="type-h4 leading-none !not-italic">Sadiq Ali</span>
            <span className="type-caption uppercase !not-italic text-gray-400 leading-none mt-1">
              Web Developer
            </span>
          </div>
        </Link>

        {/* CENTER: Links (Desktop only, >1024px) */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item}
              href={getHref(item)}
              className="type-nav-link !not-italic group relative py-1"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[var(--color-black)] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </Link>
          ))}
        </div>

        {/* RIGHT: Desktop Button & Mobile/Tablet Hamburger */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <ActionButton
              text="Let's Talk"
              icon={<span className="text-xl leading-none">👋</span>}
              href="/contact"
            />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ease-out ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ease-out ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ease-out ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* MOBILE / TABLET DROPDOWN MENU */}
      <div
        className={`lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 px-6 py-6 flex flex-col gap-2 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible pointer-events-none"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item}
            href={getHref(item)}
            onClick={() => setIsOpen(false)}
            className="type-nav-link !not-italic py-3 border-b border-gray-50 flex w-full"
          >
            <span className="relative group block w-fit pb-0.5">
              {item}
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[var(--color-black)] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </span>
          </Link>
        ))}

        <div className="mt-4 flex self-start">
          <ActionButton
            text="Let's Talk"
            icon={<span className="text-xl leading-none">👋</span>}
            href="/contact"
          />
        </div>
      </div>
    </nav>
  );
}
