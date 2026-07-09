import Link from "next/link";
import { whyChooseUsBenefits } from "@/data/content/homepage";
import { ROUTES } from "@/constants/routes";
import { Container, Section } from "@/components/ui/container";
import { Icon, benefitIconName } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";

const comparison = [
  { feature: "Free on-site quote", franchise: false, independent: true, us: true },
  { feature: "Fixed-price estimate", franchise: true, independent: false, us: true },
  { feature: "Licensed & insured", franchise: true, independent: false, us: true },
  { feature: "Same crew start-to-finish", franchise: false, independent: true, us: true },
  { feature: "Local Edmonton team", franchise: false, independent: true, us: true },
  { feature: "Response within 24h", franchise: false, independent: false, us: true },
] as const;

export function WhyChooseUsSection() {
  return (
    <Section id="why-us" className="bg-surface-50">
      <Container>
        <Reveal variant="fade-up">
          <p className="section-eyebrow">Why Edmonton chooses us</p>
          <h2 className="section-title mt-3.5 text-left">
            Built for accountability,<br className="hidden sm:block" /> not just availability
          </h2>
        </Reveal>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Benefit list — styled cards */}
          <StaggerGrid className="space-y-3">
            {whyChooseUsBenefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="group flex items-start gap-4 rounded-xl border border-border bg-surface-0 p-5 shadow-sm transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:border-brass-200 hover:shadow-card">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pine-950 transition-all duration-300 group-hover:scale-105 group-hover:bg-pine-800">
                    <Icon name={benefitIconName(benefit.icon)} size={18} className="text-brass-400" />
                  </span>
                  <div>
                    <p className="font-semibold text-pine-950">{benefit.title}</p>
                    <p className="mt-0.5 text-[13.5px] text-ink-600">{benefit.description}</p>
                  </div>
                  {/* Gold check accent */}
                  <Icon name="check" size={16} className="ml-auto mt-0.5 shrink-0 text-pine-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>

          {/* Comparison table */}
          <Reveal variant="fade-up" delay={0.1} className="min-w-0">
            <div className="overflow-hidden rounded-xl border border-border bg-surface-0 shadow-card">
              <div className="border-b border-border bg-pine-950 px-6 py-4">
                <p className="font-mono text-[11px] uppercase tracking-wider text-brass-400">
                  Compare your options
                </p>
              </div>
              <div className="overflow-x-auto overscroll-x-contain hide-scrollbar">
                <table className="w-full min-w-[480px] border-collapse text-[13.5px]">
                  <thead>
                    <tr className="border-b border-border bg-surface-50">
                      <th className="px-4 py-3.5 text-left font-mono text-[11px] uppercase tracking-wide text-ink-500" scope="col" />
                      <th className="px-4 py-3.5 font-mono text-[11px] uppercase tracking-wide text-pine-700" scope="col">
                        Home Solution
                      </th>
                      <th className="px-4 py-3.5 font-mono text-[11px] uppercase tracking-wide text-ink-400" scope="col">
                        Franchise
                      </th>
                      <th className="px-4 py-3.5 font-mono text-[11px] uppercase tracking-wide text-ink-400" scope="col">
                        Independent
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row) => (
                      <tr key={row.feature} className="border-b border-border/50 transition-colors hover:bg-surface-50">
                        <th className="px-4 py-3.5 text-left font-medium text-ink-900" scope="row">
                          {row.feature}
                        </th>
                        <td className="bg-pine-50/60 px-4 py-3.5 text-center font-semibold text-pine-950">
                          {row.us ? (
                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-pine-700">
                              <Icon name="check" size={13} className="text-white" />
                            </span>
                          ) : (
                            <span className="text-ink-300">—</span>
                          )}
                        </td>
                        <td className="px-4 py-3.5 text-center text-ink-400">
                          {row.franchise ? <Icon name="check" size={16} className="mx-auto text-ink-400" /> : "—"}
                        </td>
                        <td className="px-4 py-3.5 text-center text-ink-400">
                          {row.independent ? <Icon name="check" size={16} className="mx-auto text-ink-400" /> : "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10 flex flex-wrap items-center gap-4" delay={0.12}>
          <Button href={ROUTES.quote}>Get Free Quotes</Button>
          <Link href={ROUTES.vetting} className="btn-link">
            Learn about our vetting process →
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
