"use client";

import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const email = "devsadiqali@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center font-sans px-4 relative overflow-hidden selection:bg-[#82ff1c] selection:text-black">
      {/* Background ambient glow using brand color #82ff1c */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#82ff1c]/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl w-full text-center">
        {/* Status Badge */}
        <div className="mb-10 flex items-center gap-3 bg-neutral-900/80 border border-neutral-800 px-5 py-2 rounded-full backdrop-blur-md">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#82ff1c] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#82ff1c]"></span>
          </div>
          <span className="font-medium text-sm text-neutral-300 uppercase tracking-widest">
            Coming Soon
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-none mb-6">
          Future <br />
          <span className="text-neutral-600">in progress.</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-neutral-400 max-w-xl mb-12 leading-relaxed">
          We are crafting a digital experience that defines the next standard.
          Get in touch directly for exclusive access.
        </p>

        {/* Email Copy Button */}
        <button
          onClick={handleCopy}
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-[#82ff1c] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_#82ff1c]"
        >
          <span>{email}</span>

          {/* Icon switches between Copy and Checkmark */}
          <div className="relative w-5 h-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute top-0 left-0 w-5 h-5 transition-all duration-300 ${copied ? "opacity-0 scale-50" : "opacity-40 group-hover:opacity-100 scale-100"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute top-0 left-0 w-5 h-5 transition-all duration-300 ${copied ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>

          {/* Feedback Tooltip */}
          <span
            className={`absolute -top-12 left-1/2 -translate-x-1/2 bg-neutral-800 text-[#82ff1c] text-xs font-bold py-2 px-4 rounded-lg border border-neutral-700 transition-all duration-200 ${copied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
          >
            Copied!
          </span>
        </button>
      </div>

      <footer className="absolute bottom-6 text-neutral-800 text-xs tracking-wider uppercase">
        &copy; {new Date().getFullYear()} Nyx.
      </footer>
    </main>
  );
}
