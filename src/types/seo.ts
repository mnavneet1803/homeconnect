import type { Metadata } from "next";

export interface PageMetadata {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
  ogImage?: string;
}

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export type JsonLdGraph = Record<string, unknown> | Record<string, unknown>[];

export type SiteMetadata = Metadata;
