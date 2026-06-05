export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  external?: boolean;
}

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}
