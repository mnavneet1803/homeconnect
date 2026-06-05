import { cn } from "@/lib/utils/cn";
import type { SVGProps } from "react";

export type IconName =
  | "wrench"
  | "paintbrush"
  | "home"
  | "layers"
  | "zap"
  | "droplets"
  | "sparkles"
  | "tree"
  | "fence"
  | "shield-check"
  | "clipboard-list"
  | "users"
  | "check-circle"
  | "gift"
  | "map-pin"
  | "ban"
  | "calendar"
  | "phone"
  | "menu"
  | "x"
  | "chevron-down"
  | "arrow-right"
  | "star"
  | "check"
  | "lock"
  | "clock";

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

const paths: Record<IconName, React.ReactNode> = {
  wrench: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
    />
  ),
  paintbrush: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.37 2.63L14 7l-1.59-1.59a2 2 0 00-2.82 0L8 7l9 9 1.59-1.59a2 2 0 000-2.82L17 10l4.37-4.37a2.12 2.12 0 10-3-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 8l-5 5v4h4l5-5" />
    </>
  ),
  home: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  ),
  layers: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
    />
  ),
  zap: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  ),
  droplets: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0L12 2.69z"
    />
  ),
  sparkles: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 3v4M3 5h4M6 17v4M4 19h4M13 3l1.5 4.5L19 9l-4.5 1.5L13 15l-1.5-4.5L7 9l4.5-1.5L13 3zM18 14l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"
    />
  ),
  tree: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22v-7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 22h8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15c-3-2.5-5-5-5-8a5 5 0 0110 0c0 3-2 5.5-5 8z" />
    </>
  ),
  fence: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6v14M8 6v14M12 6v14M16 6v14M20 6v14M2 10h20M2 16h20"
    />
  ),
  "shield-check": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  ),
  "clipboard-list": (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path strokeLinecap="round" d="M9 12h6M9 16h6" />
    </>
  ),
  users: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
    />
  ),
  "check-circle": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  ),
  gift: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M12 22V12M12 12H7.5a2.5 2.5 0 010-5C11 7 12 12 12 12zM12 12h4.5a2.5 2.5 0 000-5C13 7 12 12 12 12zM12 7V2" />
    </>
  ),
  "map-pin": (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  ban: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
    />
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path strokeLinecap="round" d="M16 2v4M8 2v4M3 10h18" />
    </>
  ),
  phone: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
    />
  ),
  menu: (
    <>
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  x: (
    <>
      <path strokeLinecap="round" d="M18 6L6 18M6 6l12 12" />
    </>
  ),
  "chevron-down": (
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
  ),
  "arrow-right": (
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
  ),
  star: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  ),
  check: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  ),
  lock: (
    <>
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path strokeLinecap="round" d="M7 11V7a5 5 0 0110 0v4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" d="M12 6v6l4 2" />
    </>
  ),
};

export function Icon({ name, size = 20, className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      aria-hidden="true"
      className={cn("shrink-0", className)}
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

/** Map service icon string to IconName */
export function serviceIconName(icon: string): IconName {
  const map: Record<string, IconName> = {
    wrench: "wrench",
    paintbrush: "paintbrush",
    home: "home",
    layers: "layers",
    zap: "zap",
    droplets: "droplets",
    sparkles: "sparkles",
    tree: "tree",
    fence: "fence",
    "shield-check": "shield-check",
  };
  return map[icon] ?? "wrench";
}

export function benefitIconName(icon: string): IconName {
  const map: Record<string, IconName> = {
    "shield-check": "shield-check",
    gift: "gift",
    "map-pin": "map-pin",
    ban: "ban",
    calendar: "calendar",
    "check-circle": "check-circle",
    clock: "clock",
    tree: "tree",
    sparkles: "sparkles",
    zap: "zap",
    "clipboard-list": "clipboard-list",
    users: "users",
  };
  return map[icon] ?? "check-circle";
}

export function stepIconName(icon: string): IconName {
  const map: Record<string, IconName> = {
    "clipboard-list": "clipboard-list",
    users: "users",
    "check-circle": "check-circle",
  };
  return map[icon] ?? "check-circle";
}
