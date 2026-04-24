import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectHero from "@/components/ProjectHero";

export default async function ProjectPage({ params }) {
  const { id } = await params;

  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--color-white)]">
      <Navbar />

      <ProjectHero project={project} />

      {/* PROJECT DESCRIPTION SECTION */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-[800px]">
            <p className="type-body-large text-[var(--color-dim-grey)] leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
