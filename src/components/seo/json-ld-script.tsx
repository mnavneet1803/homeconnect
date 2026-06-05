import type { JsonLdGraph } from "@/types/seo";

interface JsonLdScriptProps {
  data: JsonLdGraph;
}

/** Renders JSON-LD structured data — use in Server Components only */
export function JsonLdScript({ data }: JsonLdScriptProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
