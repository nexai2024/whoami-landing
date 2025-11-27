export interface Testimonial {
  quote: string;
  name: string;
  niche: string;
  avatar: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  isPopular?: boolean;
  badge?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
