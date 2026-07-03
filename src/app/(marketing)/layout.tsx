import { Header, Footer } from "@/components/layout";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { StickyCtaBar } from "@/components/layout/sticky-cta";
import { FloatingCta } from "@/components/layout/floating-cta";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-x-clip">
      <ScrollProgress />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-toast focus:rounded-lg focus:bg-pine-700 focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to main content
      </a>
      <Header />
      <main
        id="main-content"
        className="min-w-0 overflow-x-clip pb-[calc(var(--sticky-cta-height)+env(safe-area-inset-bottom,0px)+0.5rem)] md:pb-0"
      >
        {children}
      </main>
      <Footer />
      <StickyCtaBar />
      <FloatingCta />
    </div>
  );
}
