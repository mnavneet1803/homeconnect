import Link from "next/link";
import { whyChooseUsBenefits } from "@/data/content/homepage";
import { ROUTES } from "@/constants/routes";
import { Container, Section } from "@/components/ui/container";
import { Icon, benefitIconName } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

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
    <Section id="why-us">
      <Container>
        <Reveal variant="fade-up">
          <p className="section-eyebrow">Why Edmonton chooses us</p>
          <h2 className="section-title text-left">
            Built for accountability, not just availability
          </h2>
        </Reveal>

        <div className="mt-12 grid min-w-0 items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <ul className="min-w-0 space-y-0">
            {whyChooseUsBenefits.map((benefit) => (
              <li
                key={benefit.title}
                className="flex gap-3.5 border-b border-dashed border-border py-4 first:pt-0"
              >
                <span className="mt-0.5 flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-pine-950">
                  <Icon name={benefitIconName(benefit.icon)} size={15} className="text-brass-400" />
                </span>
                <div>
                  <p className="text-[15.5px] font-semibold text-pine-950">{benefit.title}</p>
                  <p className="text-sm text-ink-600">{benefit.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <Reveal variant="fade-up" delay={0.1} className="min-w-0">
            <div className="card overflow-hidden p-5 shadow-card">
              <p className="mb-3.5 font-mono text-xs uppercase tracking-wider text-ink-500">
                Compare your options
              </p>
              <div className="overflow-x-auto overscroll-x-contain hide-scrollbar">
                <table className="w-full min-w-[520px] border-collapse text-[13.5px]">
                  <thead>
                    <tr className="border-b border-paper-deep">
                      <th className="px-2.5 py-3 text-left font-mono text-[11.5px] uppercase tracking-wide text-ink-500" scope="col" />
                      <th className="px-2.5 py-3 font-mono text-[11.5px] uppercase tracking-wide text-pine-700" scope="col">
                        Home Solution
                      </th>
                      <th className="px-2.5 py-3 font-mono text-[11.5px] uppercase tracking-wide text-ink-500" scope="col">
                        Big-box franchise
                      </th>
                      <th className="px-2.5 py-3 font-mono text-[11.5px] uppercase tracking-wide text-ink-500" scope="col">
                        Independent handyman
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row) => (
                      <tr key={row.feature} className="border-b border-paper-deep hover:bg-paper/40">
                        <th className="px-2.5 py-3 text-left font-medium text-ink-900" scope="row">
                          {row.feature}
                        </th>
                        <td className="rounded-md bg-paper-deep px-2.5 py-3 text-center font-semibold text-pine-950">
                          {row.us ? <Icon name="check" size={16} className="mx-auto text-pine-700" /> : "—"}
                        </td>
                        <td className="px-2.5 py-3 text-center text-ink-500">
                          {row.franchise ? <Icon name="check" size={16} className="mx-auto text-pine-700" /> : "—"}
                        </td>
                        <td className="px-2.5 py-3 text-center text-ink-500">
                          {row.independent ? <Icon name="check" size={16} className="mx-auto text-pine-700" /> : "—"}
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
