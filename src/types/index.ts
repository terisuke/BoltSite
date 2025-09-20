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

// i18n関連の型定義
export type Locales = 'ja' | 'en' | 'zh' | 'es';

export interface Translation {
  nav: {
    home: string;
    services: string;
    pricing: string;
    about: string;
    contact: string;
    free_consultation: string;
    features: string;
    performance: string;
    faq: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta_primary: string;
    cta_secondary: string;
    guarantee: string;
  };
  services: {
    title: string;
    subtitle: string;
    overview: string;
    pricing: string;
    features: string;
    performance: string;
    dx_package: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    basic: {
      name: string;
      price: string;
      period: string;
      description: string;
    };
    pro: {
      name: string;
      price: string;
      period: string;
      description: string;
    };
    enterprise: {
      name: string;
      price: string;
      period: string;
      description: string;
    };
  };
  footer: {
    description: string;
    services: string;
    support: string;
    contact: string;
    faq: string;
    flow: string;
    company: string;
    partner_program: string;
    partner_description: string;
    partner_link: string;
    copyright: string;
    privacy: string;
    terms: string;
  };
  cta: {
    title: string;
    subtitle: string;
    fast_site: string;
    fast_description: string;
    start_now: string;
    free_consultation: string;
    contact: string;
    guarantees: {
      initial_cost: string;
      delivery: string;
      pagespeed: string;
      refund: string;
    };
  };
  common: {
    email: string;
    phone: string;
    address: string;
    loading: string;
    error: string;
    success: string;
  };
}
