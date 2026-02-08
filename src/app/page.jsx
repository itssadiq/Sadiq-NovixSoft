import Hero from "../components/home/Hero";
import FeaturedWork from "../components/home/FeaturedWork"; // Import the section
import About from "@/components/home/About";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 md:gap-20">
      <Hero />
      <FeaturedWork />
      <About />

      {/* Other sections... */}
      <div className="h-20"></div>
    </div>
  );
}
