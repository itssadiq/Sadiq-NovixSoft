import { ArrowUpRight } from "lucide-react"; // Changed icon
import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button";

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <div className="flex justify-center">
        <Button href="/work">
          See More Work
          {/* ArrowUpRight starts at 45deg, rotates another 45deg to point right (90deg total) */}
          <ArrowUpRight
            size={20}
            className="transition-transform duration-300 group-hover:rotate-45"
          />
        </Button>
      </div>
    </section>
  );
}
