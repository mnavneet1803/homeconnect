import { getFeaturedProjects } from "@/data/projects";
import { SERVICE_BY_SLUG } from "@/constants/services";
import { ROUTES } from "@/constants/routes";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { HoverCard } from "@/components/motion/hover-card";
import { MagneticButton } from "@/components/motion/magnetic-button";

const projectGradients: Record<string, string> = {
  painters: "from-teal-400/30 via-brand-100 to-surface-100",
  renovators: "from-indigo-400/20 via-brand-50 to-surface-50",
  "deck-fence": "from-emerald-400/25 via-brand-100 to-surface-100",
  plumbers: "from-cyan-400/20 via-brand-50 to-surface-50",
  landscapers: "from-green-400/20 via-brand-50 to-surface-50",
  handyman: "from-brand-400/20 via-brand-50 to-surface-50",
};

export function FeaturedProjectsSection() {
  const projects = getFeaturedProjects(3);

  return (
    <Section className="bg-surface-0">
      <Container>
        <Reveal>
          <SectionHeader
            title="Recent projects across Edmonton"
            description="Real work from vetted pros in our network — from quick fixes to full transformations."
          />
        </Reveal>
        <StaggerGrid className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => {
            const service = SERVICE_BY_SLUG[project.serviceSlug];
            const gradient =
              projectGradients[project.serviceSlug] ?? "from-brand-100 to-surface-100";

            return (
              <StaggerItem key={project.slug}>
                <HoverCard as="article" className="group card-interactive overflow-hidden">
                  <div
                    className={`relative aspect-[4/3] bg-gradient-to-br ${gradient} transition-transform duration-500 group-hover:scale-[1.02]`}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,15,20,0.4),transparent_50%)]" />
                    <Badge variant="brand" className="absolute left-4 top-4">
                      {service.name}
                    </Badge>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-heading-sm text-white">{project.title}</p>
                      <p className="mt-1 text-body-sm text-white/80">{project.location}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-body-sm text-ink-500">{project.caption}</p>
                    <p className="mt-2 text-caption text-ink-400">
                      Matched via Edmonton Home Connect
                    </p>
                  </div>
                </HoverCard>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
        <Reveal className="mt-12 text-center" delay={0.1}>
          <MagneticButton href={ROUTES.quote} size="lg">
            Get matched for your project
          </MagneticButton>
        </Reveal>
      </Container>
    </Section>
  );
}
