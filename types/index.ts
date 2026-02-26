// Common types used across the application

export interface NavLink {
  href: string;
  label: string;
}

export interface Stat {
  num: string;
  label: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceContent {
  id: string;
  icon: string;
  title: string;
  description: string;
  points: string[];
}

export interface Value {
  icon: string;
  title: string;
  subtitle: string;
}

export interface PricingPlan {
  name: string;
  amount: string;
  period?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonVariant: 'outline' | 'solid';
  buttonText: string;
}

export interface Story {
  quote: string;
  author: string;
  role: string;
  initials: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinks {
  services: FooterLink[];
  company: FooterLink[];
  resources: FooterLink[];
}
