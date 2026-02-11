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
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);

    // Industry-standard Anti-Shake Logic using Theme Vars
    if (isOpen) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
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
