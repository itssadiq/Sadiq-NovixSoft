import Hero from "../components/home/Hero";
import FeaturedWork from "../components/home/FeaturedWork"; // Import the section

export default function Home() {
  return (
    <div className="flex flex-col gap-10 md:gap-20">
      <Hero />
      <FeaturedWork />

      {/* Other sections... */}
      <div className="h-20"></div>
    </div>
  );
}
