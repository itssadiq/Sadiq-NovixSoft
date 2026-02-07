import ProjectCard from "@/components/ui/ProjectCard";

export default function FeaturedWork() {
  // Data for the projects
  // You can easily add more here later
  const projects = [
    {
      title: "Scarlet",
      category: "Modern Agency",
      bgColor: "#B54434", // The Red color
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop", // Placeholder
    },
    {
      title: "Lens",
      category: "Filmmaking Studio",
      bgColor: "#00AFD7", // The Blue color
      image:
        "https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=1000&auto=format&fit=crop", // Placeholder
    },
    {
      title: "Ozone",
      category: "E-Commerce",
      bgColor: "#1E1E1E", // Dark Grey
      image:
        "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Apex",
      category: "Architecture",
      bgColor: "#EAB308", // Yellow/Gold
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  return (
    <section className="w-full px-6 md:px-12 pb-20 max-w-[1400px] mx-auto">
      {/* Optional Heading for the section */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-medium text-white mb-4">
          Selected Work
        </h2>
      </div>

      {/* --- THE GRID --- */}
      {/* 
          grid-cols-1 : 1 column on Mobile
          md:grid-cols-2 : 2 columns on Tablet (md) and Desktop 
          gap-8 / gap-10 : Spacing between cards
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-16">
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
    </section>
  );
}
