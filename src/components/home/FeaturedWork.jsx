import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button"; // Import the new component

export default function FeaturedWork() {
  const projects = [
    {
      title: "Scarlet",
      category: "Modern Agency",
      bgColor: "#B54434",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Lens",
      category: "Filmmaking Studio",
      bgColor: "#00AFD7",
      image:
        "https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Ozone",
      category: "E-Commerce",
      bgColor: "#1E1E1E",
      image:
        "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Apex",
      category: "Architecture",
      bgColor: "#EAB308",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  return (
    <section className="w-full px-1 md:px-2 pb-20 max-w-[1400px] mx-auto">
      {/* --- THE GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            category={project.category}
            bgColor={project.bgColor}
            image={project.image}
          />
        ))}
      </div>

      {/* --- SEE MORE WORK BUTTON --- */}
      {/* Uses the reusable Button component now */}
      <div className="flex justify-center">
        <Button href="/work">
          See More Work
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
}
