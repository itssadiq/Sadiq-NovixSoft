import Hero from "../components/home/Hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      {/* Hero Section */}
      <Hero />
      {/* Other sections will go here later (Work, Services, etc.) */}
      <div className="h-20"></div> {/* Spacer for now */}
    </div>
  );
}
