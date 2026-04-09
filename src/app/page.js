import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProblemSolution from "@/components/ProblemSolution";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Works from "@/components/Works";

export default function Home() {
  return (
    <div className="bg-white min-h-screen pt-20">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <Hero />
      <Works />
      <ProblemSolution />
      <Services />
      <Process />
    </div>
  );
}
