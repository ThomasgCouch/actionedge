import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { HeroRotator } from "@/components/site/HeroRotator";
import { ApproachIntro } from "@/components/site/ApproachIntro";
import { ServicePillars } from "@/components/site/ServicePillars";
import { MasterCoach } from "@/components/site/MasterCoach";
import { Newsletter, Footer } from "@/components/site/Newsletter";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroRotator />
        <ApproachIntro />
        <ServicePillars />
        <MasterCoach />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
