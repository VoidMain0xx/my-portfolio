
import AboutusSection from "@/components/AboutusSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

import ProjectSection from "@/components/ProjectSection";
import EmailSection from "@/components/EmailSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto px-12 py-4">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
     <HeroSection />
     <AboutusSection />
     <ProjectSection />
     <EmailSection />
     </div>
    </main>
  );
}
