import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectHero from "@/components/ProjectHero";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectDescription from "@/components/ProjectDescription";

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[var(--color-white)]">
      <Navbar />
      <ProjectHero project={project} />
      <ProjectGallery project={project} />
      <ProjectDescription project={project} />
      <Footer />
    </main>
  );
}
