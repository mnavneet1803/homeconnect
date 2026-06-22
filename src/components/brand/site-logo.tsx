import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils/cn";

interface SiteLogoProps {
  className?: string;
  imageClassName?: string;
  /** Rendered logo height in pixels */
  height?: number;
  priority?: boolean;
  linked?: boolean;
  onClick?: () => void;
}

export function SiteLogo({
  className,
  imageClassName,
  height = 40,
  priority = false,
  linked = true,
  onClick,
}: SiteLogoProps) {
  const { logo } = siteConfig.brand;

  const image = (
    <Image
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      priority={priority}
      className={cn("h-auto w-auto max-w-none", imageClassName)}
      style={{ height, width: "auto" }}
    />
  );

  if (!linked) {
    return <span className={cn("inline-flex shrink-0 items-center", className)}>{image}</span>;
  }

  return (
    <Link
      href={ROUTES.home}
      onClick={onClick}
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label={`${siteConfig.name} home`}
    >
      {image}
    </Link>
  );
}
