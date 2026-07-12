import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { getAllBlogPosts } from "@/data/blog/posts";
import { ROUTES } from "@/constants/routes";
import { ctaNavigation } from "@/config/navigation";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Edmonton home services tips — maintenance checklists, furniture assembly prep, and move-out cleaning advice.",
  path: ROUTES.blog.index,
});

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <Section className="pt-16">
      <Container>
        <SectionHeader
          title="Edmonton home services blog"
          description="Practical tips for Capital Region homeowners — maintenance, assembly, and turnover cleaning."
          align="left"
          className="mx-0 text-left"
        />

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="flex h-full flex-col rounded-xl border border-border bg-surface-0 p-6 shadow-sm transition-shadow hover:shadow-card">
                <p className="font-mono text-[11px] uppercase tracking-wider text-ink-400">
                  {new Date(post.date).toLocaleDateString("en-CA", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}{" "}
                  · {post.readingMinutes} min read
                </p>
                <h2 className="mt-3 text-heading-sm text-pine-950">
                  <Link href={ROUTES.blog.detail(post.slug)} className="hover:text-pine-700">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-body-sm leading-relaxed text-ink-600">
                  {post.excerpt}
                </p>
                <Link
                  href={ROUTES.blog.detail(post.slug)}
                  className="mt-5 text-label-md font-semibold text-pine-700"
                >
                  Read article →
                </Link>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <Button href={ctaNavigation.primary.href}>{ctaNavigation.primary.label}</Button>
        </div>
      </Container>
    </Section>
  );
}
