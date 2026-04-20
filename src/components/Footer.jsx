import React from "react";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    { name: "Behance", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Dribbble", href: "#" },
  ];

  return (
    <footer className="w-full bg-[var(--color-black)] text-white pt-12 pb-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-10 lg:gap-0">
          {/* LEFT SECTION */}
          <div className="max-w-[600px]">
            <span className="type-body-small !text-[var(--color-dim-grey)] mb-3 block uppercase tracking-wider">
              Are you Interested in working with me ?
            </span>
            <h2 className="type-h2 !text-white text-[30px] md:text-[36px] leading-[1.1] mb-8">
              Creativity A New Shape & Form With{" "}
              <br className="hidden md:block" />
              Sadiq Portfolio Template
            </h2>

            <div className="flex flex-col gap-4">
              {/* Email Link */}
              <div className="flex flex-col gap-1">
                <span className="type-caption uppercase tracking-wider !text-[var(--color-dim-grey)] !text-[10px]">
                  Send a message
                </span>
                <a
                  href="mailto:alexander@example.io"
                  className="type-body-large !text-white font-bold transition-colors duration-300 hover:!text-[var(--color-primary)] w-fit"
                >
                  alexander@example.io
                </a>
              </div>

              {/* WhatsApp Link */}
              <div className="flex flex-col gap-1">
                <span className="type-caption uppercase tracking-wider !text-[var(--color-dim-grey)] !text-[10px]">
                  Let&apos;s Chat
                </span>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-body-large !text-white font-bold transition-colors duration-300 hover:!text-[var(--color-primary)] flex items-center gap-2 w-fit"
                >
                  +123 456 7890
                  <span className="text-[9px] border border-white/20 px-2 py-0.5 rounded-full font-medium uppercase tracking-tighter">
                    WhatsApp
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex flex-col gap-8 lg:text-right lg:items-end">
            <div className="flex flex-col gap-1">
              <span className="type-caption !text-[var(--color-dim-grey)] block lg:mt-1">
                41°24&apos;12.2&quot;N / 2°10&apos;26.5&quot;E
              </span>
              <span className="type-body !text-white font-medium">
                Remote from Dubai UAE
              </span>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex items-center lg:justify-end gap-2 type-body !text-white font-medium transition-colors duration-300 hover:!text-[var(--color-primary)]"
                >
                  {link.name}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[var(--color-dim-grey)] group-hover:!text-[var(--color-primary)] transition-colors duration-300"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
          <p className="type-body-small !text-white/50">
            Copyright © 2025 Sadiq. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 type-body-small-500 uppercase tracking-widest text-[10px]">
            <span className="text-[var(--color-dim-grey)] lowercase">
              work by <span className="text-white capitalize">Onmix.</span>
            </span>
            <span className="text-[var(--color-dim-grey)] lowercase">
              powered by <span className="text-white capitalize">Framer.</span>
            </span>
            <span className="w-1 h-1 rounded-full bg-white/10"></span>
            <Link
              href="#"
              className="text-white hover:!text-[var(--color-primary)] transition-colors"
            >
              404
            </Link>
            <span className="w-1 h-1 rounded-full bg-white/10"></span>
            <Link
              href="#"
              className="text-white hover:!text-[var(--color-primary)] transition-colors"
            >
              Licensing
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
