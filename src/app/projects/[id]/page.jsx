import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectHero from "@/components/ProjectHero";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectDescription from "@/components/ProjectDescription";
import CTAButton from "@/components/CTAButton"; // Imported CTAButton

// --- DYNAMIC SEO OPTIMIZATION ---
export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found | Sadiq Ali",
    };
  }

  return {
    title: `${project.title} — Sadiq Ali`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      url: `https://sadiq.novixsoft.com/projects/${id}`,
      siteName: "Sadiq Ali Portfolio",
      images: [
        {
          url: project.images.mobile,
          width: 1200,
          height: 900,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.images.main],
    },
  };
}

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

      {/* BOTTOM RIBBON: NEXT STEPS */}
      <div className="w-full bg-[var(--color-black)] py-4 mb-20 mt-10">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-row md:flex-row items-center justify-center md:justify-end gap-6">
          <CTAButton text="Explore More Work" href="/works" />
          <CTAButton text="Contact Now" href="/contact" />
        </div>
      </div>

      <Footer />
    </main>
  );
}
