import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { HeroRotator } from "@/components/site/HeroRotator";
import { ApproachIntro } from "@/components/site/ApproachIntro";
import { ServicePillars } from "@/components/site/ServicePillars";
import { MasterCoach } from "@/components/site/MasterCoach";
import { Newsletter } from "@/components/site/Newsletter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ActionEDGE — Strategy, People & Culture Transformation" },
      {
        name: "description",
        content:
          "ActionEDGE partners with Caribbean leaders to translate strategy into results, develop high-performing people, and build cultures that drive sustainable growth.",
      },
      { property: "og:title", content: "ActionEDGE — Strategy, People & Culture" },
      {
        property: "og:description",
        content: "Turning clarity into execution — and potential into measurable success.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell>
      <HeroRotator />
      <ApproachIntro />
      <ServicePillars />
      <MasterCoach />
      <Newsletter />
    </PageShell>
  );
}
