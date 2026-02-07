"use client";

import Link from "next/link";
import { Twitter, Instagram, Linkedin, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full min-h-[calc(100vh-80px)] flex flex-col justify-between px-1 md:px-6 pt-8 md:pt-10 pb-40 md:pb-16 max-w-[1400px] mx-auto">
      {/* --- TOP SECTION: PROFILE & TEXT --- */}
      <div className="flex flex-col items-start gap-8 md:gap-6 w-full">
        {/* 1. Profile Pill */}
        <div className="flex items-center gap-4">
          <div className="w-[70px] h-[70px] min-w-[70px] rounded-full bg-[#F59E0B] overflow-hidden flex items-end justify-center border border-[#262626]">
            <div className="w-[48px] h-[48px] bg-[#2a1b05] rounded-t-full opacity-80"></div>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-white text-base font-medium">David Smith</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="text-[#8A8A8A] hover:text-white transition-colors"
              >
                <Twitter size={14} />
              </a>
              <a
                href="#"
                className="text-[#8A8A8A] hover:text-white transition-colors"
              >
                <Instagram size={14} />
              </a>
              <a
                href="#"
                className="text-[#8A8A8A] hover:text-white transition-colors"
              >
                <Linkedin size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* 2. Main Typography */}
        <div className="flex flex-col gap-6 w-full">
          <h1 className="text-4xl leading-[1.05] md:text-5xl lg:text-6xl font-semibold text-white tracking-tight w-full break-words">
            I Design Websites That Captivate, Convert, and Elevate Your Brand.
          </h1>

          <p className="text-[#8A8A8A] text-lg md:text-base md:max-w-lg leading-relaxed font-medium">
            With 12 years of experience in web design, I specialize in crafting
            visually stunning, user-friendly, and high-converting websites.
          </p>
        </div>
      </div>

      {/* --- BOTTOM SECTION: CTA & STATUS --- */}
      <div className="flex flex-col md:flex-row items-start md:items-center w-full gap-4 md:gap-0">
        {/* CTA Button */}
        <Link
          href="/contact"
          className="group flex items-center gap-2 bg-[var(--color-accent)] text-black rounded-full font-bold transition-transform hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(130,255,28,0.4)] px-8 py-4 text-md md:text-sm whitespace-nowrap"
        >
          <Zap
            className="group-hover:scale-110 transition-transform"
            fill="currentColor"
            size={20}
          />
          Start Your Project
        </Link>

        {/* The Connector Line */}
        <div className="w-full md:flex-grow h-[1px] bg-[#262626] md:mx-6"></div>

        {/* Status Indicator */}
        <div className="flex items-center gap-2 whitespace-nowrap">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-accent)]"></span>
          </span>
          <span className="text-[#C2C2C2] text-xs md:text-sm font-medium">
            Available for work
          </span>
        </div>
      </div>
    </section>
  );
}
