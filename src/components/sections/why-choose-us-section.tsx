import Link from "next/link";
import { whyChooseUsBenefits } from "@/data/content/homepage";
import { ROUTES } from "@/constants/routes";
import { Container, Section } from "@/components/ui/container";
import { Icon, benefitIconName } from "@/components/ui/icons";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { MagneticButton } from "@/components/motion/magnetic-button";

const comparison = [
  { feature: "Vetted pros", google: false, national: "Partial", ehc: true },
  { feature: "Edmonton-focused", google: false, national: false, ehc: true },
  { feature: "Free for homeowners", google: true, national: true, ehc: true },
  { feature: "Curated matches", google: false, national: false, ehc: true },
] as const;

export function WhyChooseUsSection() {
  return (
    <Section>
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal variant="fade-up">
              <p className="section-eyebrow">Why choose us</p>
              <h2 className="section-title text-balance text-left">
                Why Edmonton homeowners choose us
              </h2>
              <p className="mt-4 text-body-lg text-ink-500">
                We built the hiring experience we wished existed — local, vetted, and
                designed around your peace of mind.
              </p>
            </Reveal>
            <StaggerGrid className="mt-8 space-y-6">
              {whyChooseUsBenefits.map((benefit) => (
                <StaggerItem key={benefit.title}>
                  <div className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-transform duration-300 hover:scale-105">
                      <Icon name={benefitIconName(benefit.icon)} size={20} />
                    </span>
                    <div>
                      <h3 className="text-heading-sm text-ink-900">{benefit.title}</h3>
                      <p className="mt-1 text-body-sm text-ink-500">{benefit.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
            <Reveal className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center" delay={0.1}>
              <MagneticButton href={ROUTES.quote}>Get Free Quotes</MagneticButton>
              <Link href={ROUTES.vetting} className="btn-link">
                Learn about our vetting process →
              </Link>
            </Reveal>
          </div>

          <Reveal variant="scale" delay={0.12}>
            <div className="card overflow-hidden transition-shadow duration-300 hover:shadow-card-hover">
              <div className="border-b border-border-subtle bg-ink-950 px-6 py-4">
                <p className="text-label-md font-medium text-white">Compare your options</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[320px] text-left text-body-sm">
                  <thead>
                    <tr className="border-b border-border-subtle bg-surface-50">
                      <th className="px-6 py-3 font-medium text-ink-500" scope="col" />
                      <th className="px-4 py-3 font-medium text-ink-500" scope="col">
                        Google
                      </th>
                      <th className="px-4 py-3 font-medium text-ink-500" scope="col">
                        Lead sites
                      </th>
                      <th className="px-4 py-3 font-medium text-brand-700" scope="col">
                        EHC
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row) => (
                      <tr key={row.feature} className="border-b border-border-subtle last:border-0">
                        <th className="px-6 py-4 font-medium text-ink-900" scope="row">
                          {row.feature}
                        </th>
                        <td className="px-4 py-4 text-center text-ink-400">
                          {row.google ? "✓" : "—"}
                        </td>
                        <td className="px-4 py-4 text-center text-ink-500">
                          {typeof row.national === "string" ? row.national : row.national ? "✓" : "—"}
                        </td>
                        <td className="px-4 py-4 text-center font-medium text-brand-700">✓</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
