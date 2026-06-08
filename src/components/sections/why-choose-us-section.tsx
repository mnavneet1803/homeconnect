import Link from "next/link";
import { whyChooseUsBenefits } from "@/data/content/homepage";
import { ROUTES } from "@/constants/routes";
import { Container, Section } from "@/components/ui/container";
import { Icon, benefitIconName } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";

const comparison = [
  { feature: "Own in-house team", google: false, national: false, ehc: true },
  { feature: "Edmonton-focused", google: false, national: false, ehc: true },
  { feature: "Free quotes", google: true, national: true, ehc: true },
  { feature: "Direct accountability", google: false, national: false, ehc: true },
] as const;

export function WhyChooseUsSection() {
  return (
    <Section className="bg-surface-0">
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal variant="fade-up">
              <p className="section-eyebrow">Why choose us</p>
              <h2 className="section-title text-balance text-left">
                Why Edmonton homeowners choose us
              </h2>
              <p className="mt-5 text-body-lg text-ink-500">
                We built the contractor experience we wished existed — local, accountable,
                and designed around your peace of mind.
              </p>
            </Reveal>
            <StaggerGrid className="mt-10 space-y-7">
              {whyChooseUsBenefits.map((benefit) => (
                <StaggerItem key={benefit.title}>
                  <div className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                      <Icon name={benefitIconName(benefit.icon)} size={20} />
                    </span>
                    <div>
                      <h3 className="text-heading-sm text-ink-900">{benefit.title}</h3>
                      <p className="mt-2 text-body-sm leading-relaxed text-ink-500">{benefit.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
            <Reveal className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center" delay={0.1}>
              <Button href={ROUTES.quote}>Get Free Quotes</Button>
              <Link href={ROUTES.vetting} className="btn-link">
                Learn about our vetting process →
              </Link>
            </Reveal>
          </div>

          <Reveal variant="fade-up" delay={0.1}>
            <div className="card overflow-hidden">
              <div className="border-b border-border-subtle bg-brand-900 px-6 py-5">
                <p className="text-label-md font-medium text-white">Compare your options</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[320px] text-left text-body-sm">
                  <thead>
                    <tr className="border-b border-border-subtle bg-surface-50">
                      <th className="px-6 py-4 font-medium text-ink-500" scope="col" />
                      <th className="px-4 py-4 font-medium text-ink-500" scope="col">
                        Google
                      </th>
                      <th className="px-4 py-4 font-medium text-ink-500" scope="col">
                        Lead sites
                      </th>
                      <th className="px-4 py-4 font-medium text-brand-700" scope="col">
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
                          {row.national ? "✓" : "—"}
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
