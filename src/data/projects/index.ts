import type { Project } from "@/types/project";
import { publicImagePath } from "@/lib/images";

export const projects: Project[] = [
  {
    slug: "oliver-interior-paint",
    title: "Full interior repaint",
    serviceSlug: "painters",
    location: "Oliver, Edmonton",
    caption: "4-bed home, completed in 5 days",
    image: {
      src: publicImagePath("projects", "interior-paint.jpg"),
      alt: "Freshly painted living room in Oliver, Edmonton",
      width: 800,
      height: 600,
    },
    featured: true,
  },
  {
    slug: "sherwood-basement",
    title: "Basement development",
    serviceSlug: "renovators",
    location: "Sherwood Park",
    caption: "850 sq ft legal suite",
    image: {
      src: publicImagePath("projects", "basement-reno.jpg"),
      alt: "Finished basement development in Sherwood Park",
      width: 800,
      height: 600,
    },
    featured: true,
  },
  {
    slug: "windermere-deck",
    title: "Composite deck build",
    serviceSlug: "deck-fence",
    location: "Windermere",
    caption: "400 sq ft + railings",
    image: {
      src: publicImagePath("projects", "deck-build.jpg"),
      alt: "New composite deck in Windermere, Edmonton",
      width: 800,
      height: 600,
    },
    featured: true,
  },
];

export function getFeaturedProjects(limit = 3): Project[] {
  return projects.filter((p) => p.featured).slice(0, limit);
}
