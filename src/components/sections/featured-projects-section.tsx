import { AuditImage } from "@/components/dev/audit-image";
import { getFeaturedProjects } from "@/data/projects";
import { SERVICE_BY_SLUG } from "@/constants/services";
import { ROUTES } from "@/constants/routes";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { IMAGE_SIZES } from "@/lib/images";

const projectAuditIds: Record<string, string> = {
  "oliver-interior-paint": "project-interior-paint",
  "sherwood-basement": "project-basement-reno",
  "windermere-deck": "project-deck-build",
};

const projectGradients: Record<string, string> = {
  painters: "from-brand-100 via-brand-50 to-surface-100",
  renovators: "from-surface-100 via-brand-50 to-surface-50",
  "deck-fence": "from-brand-100 via-surface-50 to-surface-100",
  plumbers: "from-brand-50 via-surface-100 to-surface-50",
  landscapers: "from-brand-50 via-surface-50 to-surface-100",
  handyman: "from-brand-100 via-brand-50 to-surface-50",
};

export function FeaturedProjectsSection() {
  const projects = getFeaturedProjects(3);

  return (
    <Section className="bg-surface-0">
      <Container>
        <Reveal>
          <SectionHeader
            title="Recent projects across Edmonton"
            description="Real work from our team — from quick fixes to full transformations."
          />
        </Reveal>
        <StaggerGrid className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => {
            const service = SERVICE_BY_SLUG[project.serviceSlug];
            const gradient =
              projectGradients[project.serviceSlug] ?? "from-brand-50 to-surface-100";

            return (
              <StaggerItem key={project.slug}>
                <article className="card-interactive overflow-hidden">
                  <div
                    className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${gradient}`}
                  >
                    <AuditImage
                      auditId={projectAuditIds[project.slug] ?? "project-unknown"}
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      sizes={IMAGE_SIZES.card}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(28,25,23,0.35),transparent_55%)]" />
                    <Badge variant="brand" className="absolute left-4 top-4">
                      {service.name}
                    </Badge>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-heading-sm text-white">{project.title}</p>
                      <p className="mt-1 text-body-sm text-white/85">{project.location}</p>
                    </div>
                  </div>
                  <div className="p-7 md:p-8">
                    <p className="text-body-sm leading-relaxed text-ink-500">{project.caption}</p>
                    <p className="mt-3 text-caption text-ink-400">
                      Completed by Home Solution Services
                    </p>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
        <Reveal className="mt-14 text-center" delay={0.1}>
          <Button href={ROUTES.quote} size="lg">
            Get a quote for your project
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
