import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { getAllBlogPosts, getBlogPost } from "@/data/blog/posts";
import { ROUTES } from "@/constants/routes";
import { ctaNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Container, Section } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllBlogPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: ROUTES.blog.detail(slug),
    keywords: post.keywords,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <Section className="pt-16">
      <Container narrow>
        <nav aria-label="Breadcrumb" className="mb-6 text-caption text-ink-500">
          <Link href={ROUTES.home} className="hover:text-brand-700">
            Home
          </Link>
          <span aria-hidden> / </span>
          <Link href={ROUTES.blog.index} className="hover:text-brand-700">
            Blog
          </Link>
          <span aria-hidden> / </span>
          <span className="text-ink-700">{post.title}</span>
        </nav>

        <p className="font-mono text-[11px] uppercase tracking-wider text-ink-400">
          {new Date(post.date).toLocaleDateString("en-CA", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {post.readingMinutes} min read
        </p>
        <h1 className="mt-3 text-balance text-display-sm text-pine-950">{post.title}</h1>
        <p className="mt-4 text-body-lg text-ink-600">{post.excerpt}</p>

        <div className="mt-10 space-y-5 text-body-md leading-relaxed text-ink-700">
          {post.body.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border bg-surface-50 p-6">
          <h2 className="text-heading-sm text-pine-950">Need help with your project?</h2>
          <p className="mt-2 text-body-sm text-ink-600">
            Request a free quote from {siteConfig.name} — or call{" "}
            <a href={`tel:${siteConfig.phone.tel}`} className="font-medium text-brand-700">
              {siteConfig.phone.display}
            </a>
            .
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href={ctaNavigation.primary.href}>{ctaNavigation.primary.label}</Button>
            <Button href={ctaNavigation.secondary.href} variant="secondary">
              {ctaNavigation.secondary.label}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
