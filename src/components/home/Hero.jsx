"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Zap, Facebook } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const socials = [
    {
      Icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61587245489278",
    },
    { Icon: Instagram, href: "https://www.instagram.com/devsadiqali/" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/dev-sadiq-ali" },
  ];

  // 1. Container variant to orchestrate children stagger
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // 2. Item variant for the "Swift and Slow" glide
  const itemVars = {
    initial: { opacity: 0, y: 25 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        ease: [0.19, 1, 0.22, 1], // Premium Exponential Ease
      },
    },
  };

  return (
    <motion.section
      variants={containerVars}
      initial="initial"
      animate="animate"
      className="w-full max-w-[1400px] mx-auto px-1 md:px-2 pt-8 md:pt-10 pb-12 md:pb-16 flex flex-col justify-between min-h-[75dvh] md:min-h-[calc(100vh-80px)] xl:min-h-fit xl:gap-24"
    >
      {/* --- TOP SECTION: PROFILE & TEXT --- */}
      <div className="flex flex-col items-start gap-8 md:gap-6 w-full">
        {/* 1. Profile Pill */}
        <motion.div variants={itemVars} className="flex items-center gap-4">
          <div className="w-[70px] h-[70px] min-w-[70px] rounded-full overflow-hidden border border-[#262626] relative">
            <Image
              src="/profile.jpg"
              alt="Sadiq Ali's Profile Picture"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-white text-2xl font-medium">Sadiq Ali</h3>
            <div className="flex gap-3">
              {socials.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  className="text-[#8A8A8A] hover:text-white transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 2. Main Typography */}
        <motion.h1
          variants={itemVars}
          className="text-4xl leading-[1.05] md:text-5xl lg:text-7xl font-semibold text-white tracking-tight w-full break-words"
        >
          I Design Websites That Captivate, <br className="hidden lg:block" />{" "}
          Convert, and Elevate Your Brand.
        </motion.h1>

        {/* 3. Paragraph */}
        <motion.p
          variants={itemVars}
          className="text-[#8A8A8A] text-lg md:text-base md:max-w-lg leading-relaxed font-medium"
        >
          With 12 years of experience in web design, I specialize in crafting
          visually stunning, user-friendly, and high-converting websites.
        </motion.p>
      </div>

      {/* --- BOTTOM SECTION: CTA & STATUS --- */}
      <motion.div
        variants={itemVars}
        className="flex flex-col md:flex-row items-start md:items-center w-full gap-4 md:gap-0 mt-auto md:mt-0 pt-10"
      >
        {/* CTA Button */}
        <Link
          href="/contact"
          className="group flex items-center gap-2 bg-[var(--color-accent)] text-black rounded-full font-bold transition-colors duration-300 hover:bg-white px-6 py-4 text-lg whitespace-nowrap"
        >
          <Zap
            className="group-hover:scale-110 transition-transform"
            fill="currentColor"
            size={16}
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
      </motion.div>
    </motion.section>
  );
}
