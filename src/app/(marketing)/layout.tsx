import { Header, Footer } from "@/components/layout";
import { StickyCtaBar } from "@/components/layout/sticky-cta";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-toast focus:rounded-lg focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Header />
      <main
        id="main-content"
        className="pb-[calc(var(--sticky-cta-height)+env(safe-area-inset-bottom))] md:pb-0"
      >
        {children}
      </main>
      <Footer />
      <StickyCtaBar />
    </>
  );
}
