import React from "react";
import SocialLink from "./SocialLink";

export default function PageHero({
  badgeText,
  title,
  ribbonText,
  platforms,
  isContact = false, // Added this prop to switch layouts
  contactData, // Added to pass email, phone, location dynamically
}) {
  return (
    <section className="w-full bg-[var(--color-white)] pt-32 overflow-hidden">
      {/* TOP CONTENT */}
      <div className="max-w-[1400px] mx-auto px-6 pb-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 lg:gap-0">
          {/* LEFT: HEADING */}
          <div className="max-w-[600px]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center border border-gray-300">
                <div className="w-2 h-2 rounded-full bg-black"></div>
              </div>
              <h5 className="type-h6 tracking-tight uppercase font-bold">
                {badgeText}
              </h5>
            </div>
            <h1 className="type-h1 tracking-tight">{title}</h1>
          </div>
        </div>
      </div>

      {/* BOTTOM RIBBON */}
      <div className="w-full bg-[var(--color-black)] py-10 md:py-12">
        <div className="max-w-[1400px] mx-auto px-6">
          {isContact ? (
            /* --- CONTACT PAGE LAYOUT --- */
            <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0">
              {/* Left Group: Email & Phone */}
              <div className="flex flex-col md:flex-row gap-10 md:gap-24">
                {/* Email */}
                <div className="flex flex-col gap-1">
                  <span className="type-caption !text-[var(--color-dim-grey)] !text-[10px] uppercase tracking-wider">
                    Send a message
                  </span>
                  <a
                    href={`mailto:${contactData?.email}`}
                    className="type-body font-bold !text-white transition-transform duration-300 hover:scale-105"
                  >
                    {contactData?.email}
                  </a>
                </div>
                {/* Phone */}
                <div className="flex flex-col gap-1">
                  <span className="type-caption !text-[var(--color-dim-grey)] !text-[10px] uppercase tracking-wider">
                    Contact me (WhatsApp)
                  </span>
                  <a
                    href={`https://wa.me/+923002454781`}
                    target="_blank"
                    className="type-body font-bold !text-white transition-transform duration-300 hover:scale-105"
                  >
                    {contactData?.phone}
                  </a>
                </div>
              </div>

              {/* Right Group: Location */}
              <div className="flex flex-col gap-1 md:text-right">
                <span className="type-caption !text-[var(--color-dim-grey)] !text-[10px] uppercase tracking-wider">
                  {contactData?.coords}
                </span>
                <span className="type-body font-bold !text-white">
                  {contactData?.location}
                </span>
              </div>
            </div>
          ) : (
            /* --- STANDARD WORKS LAYOUT --- */
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-0">
              <p className="type-body-small-500 !text-white uppercase tracking-[0.05em] max-w-[450px] leading-relaxed">
                {ribbonText}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {platforms?.map((platform, index) => (
                  <SocialLink
                    key={index}
                    href={platform.href || "#"}
                    label={platform.name}
                    icon={platform.icon}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
