// サイト全体で使用する型定義

export interface SiteData {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface PricingPlan {
  title: string;
  description: string;
  price: number;
  devCount: string;
  support: string;
  update: string;
  action: string;
  link: string;
}

export interface ClientTestimonial {
  index: number;
  name: string;
  role: string;
  comment: string;
}

export interface NavigationItem {
  href: string;
  label: string;
}

export interface SocialLink {
  name: string;
  src: string;
  link: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface PerformanceMetric {
  label: string;
  value: string;
  color: string;
}

export interface LighthouseScore {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
}

export interface BoltSiteConfig {
  siteName: string;
  tagline: string;
  baseUrl: string;
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  social: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    youtube?: string;
  };
}

export interface SEOProps {
  title: string;
  description: string;
  url: string;
  image?: {
    src: string;
    alt: string;
  };
  frontmatter?: Record<string, any>;
  robots?: string;
}

export interface ComponentProps {
  className?: string;
  id?: string;
  "data-translate"?: string;
}

export interface ButtonProps extends ComponentProps {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface CardProps extends ComponentProps {
  title?: string;
  description?: string;
  image?: string;
  price?: number;
  features?: string[];
}
