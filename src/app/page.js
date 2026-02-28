import React from "react";

export default function ComingSoon() {
  return (
    // h-screen + overflow-hidden to prevent any scrolling
    <div className="h-screen flex flex-col bg-white overflow-hidden font-sans">
      {/* --- Main Content Section --- */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        {/* Badge: Grey pill with nested dot */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EEEEEE] mb-8">
          <div className="w-5 h-5 rounded-full bg-[#D1D1D1] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-black"></div>
          </div>
          <span className="type-body-small-500 !text-black !not-italic">
            Coming Soon
          </span>
        </div>

        {/* Heading: Using type-h1 variable */}
        <h1 className="max-w-4xl mb-4 leading-tight !not-italic tracking-tight">
          Something great is on its <br className="hidden md:block" />
          way! We are almost there ❤️
        </h1>

        {/* Subtext: Using type-body variable */}
        <p className="type-body max-w-2xl mb-12 !not-italic">
          Our website is currently undergoing scheduled maintenance. We{" "}
          <br className="hidden md:block" /> should be back shortly.
        </p>

        {/* Visual Graphic: Side-by-side layout */}
        <div className="flex items-center justify-center gap-2 w-full">
          {/* Left Triangle (Light Grey #EFEFEF) */}
          <div className="w-24 h-24 md:w-36 md:h-36">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              className="w-full h-full transform scale-x-[-1]"
            >
              <path d="M0 0 H100 L0 100 Z" fill="#EFEFEF" />
            </svg>
          </div>

          {/* Profile Image Circle */}
          <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full border-[3px] border-black overflow-hidden bg-neutral-100 flex-shrink-0">
            <img
              src="/profile.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Triangle (Dim Grey Variable) */}
          <div className="w-24 h-24 md:w-36 md:h-36">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
              <path d="M0 0 H100 L0 100 Z" fill="var(--color-dim-grey)" />
            </svg>
          </div>
        </div>
      </main>

      {/* --- Footer Wrapper --- */}
      <div className="w-full mt-auto">
        {/* Full-width Black Footer bar */}
        <footer className="bg-black text-white py-6 md:py-4 px-6 md:px-12 w-full flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 border-b-[40px] border-white">
          {/* Contact Info (Left) */}
          <div className="text-center md:text-left">
            <p className="type-caption !text-white/50 mb-1 !not-italic">
              Contact us for Any Inquiry
            </p>
            <p className="type-h5 !text-white !not-italic">
              devsadiqali@gmail.com
            </p>
          </div>

          {/* Social Links (Right) */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span className="type-body-small-500 !text-white/80 !not-italic uppercase tracking-widest text-[11px]">
              More Inquiry
            </span>

            <div className="flex flex-wrap justify-center gap-3">
              <SocialBtn
                href="https://www.instagram.com/devsadiqali/"
                icon={<IconInstagram />}
                label="Instagram"
              />
              <SocialBtn
                href="https://www.facebook.com/profile.php?id=61587245489278"
                icon={<IconFacebook />}
                label="Facebook"
              />
              <SocialBtn
                href="https://www.linkedin.com/in/dev-sadiq-ali/"
                icon={<IconLinkedin />}
                label="LinkedIn"
              />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Social Button with exact hover state logic
function SocialBtn({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      className="group flex items-center gap-2 px-4 py-2 border border-white/80 rounded-full bg-transparent hover:bg-white transition-all duration-300"
    >
      <span className="text-white group-hover:text-black transition-colors duration-300">
        {icon}
      </span>
      <span className="type-btn !text-white group-hover:!text-black !not-italic transition-colors duration-300">
        {label}
      </span>
    </a>
  );
}

// Icons (Set to currentColor to support hover transition)
const IconInstagram = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.247 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.061 1.365-.333 2.632-1.308 3.608-.975.975-2.242 1.247-3.607 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.061-2.633-.333-3.608-1.308-.975-.975-1.247-2.242-1.308-3.607-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.247 3.607-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.28-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const IconFacebook = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);

const IconLinkedin = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);
