"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import ProjectShowcase from "@/components/ProjectShowcase";
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
      <section className="w-full bg-[var(--color-white)] pt-20 md:pt-32 pb-20 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col gap-24 md:gap-32">
          {projectsData.map((project) => (
            <ProjectShowcase key={project.id} project={project} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WorkPage;
