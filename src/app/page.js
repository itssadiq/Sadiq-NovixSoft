import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-white min-h-screen pt-20">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <Hero />
    </div>
  );
}
