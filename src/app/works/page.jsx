"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import ProjectShowcase from "@/components/ProjectShowcase";
import CTAButton from "@/components/CTAButton";
import { projectsData } from "../../data/projects";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";

const WorkPage = () => {
  const workPlatforms = [
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      href: "https://linkedin.com/in/yourprofile",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://instagram.com/yourprofile",
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--color-white)]">
      <Navbar />

      <PageHero
        badgeText="My Works"
        title="Checkout my latest and creative works."
        ribbonText="Check my creativity"
        platforms={workPlatforms}
      />

      {/* PROJECTS LIST SECTION */}
      <section className="w-full bg-[var(--color-white)] pt-20 md:pt-32 pb-0">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col gap-24 md:gap-32">
          {projectsData.map((project) => (
            <ProjectShowcase key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* BOTTOM RIBBON - Added mb-20 md:mb-32 to prevent merging with Footer */}
      <div className="w-full bg-[var(--color-black)] py-4 mt-20 md:mt-32 mb-20 md:mb-32">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between">
          <CTAButton text="Let's Build Together" href="/contact" />
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default WorkPage;
