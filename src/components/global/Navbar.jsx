"use client";

import { useState, useEffect } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Blog", href: "/journal" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // High-performance scroll check
      const offset = window.scrollY;
      if (offset > 120) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    if (isOpen) {
      // Calculate scrollbar width only if not a touch device to prevent tablet jitter
      const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      if (!hasTouch && scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <>
      <DesktopNavbar links={navLinks} />
      <MobileNavbar
        links={navLinks}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isScrolled={isScrolled}
      />
    </>
  );
}
