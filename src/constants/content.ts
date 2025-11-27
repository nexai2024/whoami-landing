import { Testimonial, Feature, PricingTier, FAQ } from '../types';

export const testimonials: Testimonial[] = [
  {
    quote: "WhoAmI turned my Instagram bio into a $12K/month funnel. I can't believe I was just using a link list before.",
    name: "Sarah Chen",
    niche: "Business Coach",
    avatar: "SC"
  },
  {
    quote: "My email list grew 4x in 60 days. The micro-course feature is insane—people binge my content without leaving.",
    name: "Marcus Rodriguez",
    niche: "Fitness Creator",
    avatar: "MR"
  },
  {
    quote: "Finally, a tool that doesn't make my audience click away. Lead capture + checkout in one place = game changer.",
    name: "Priya Malhotra",
    niche: "Design Educator",
    avatar: "PM"
  }
];

export const features: Feature[] = [
  {
    icon: "GraduationCap",
    title: "Micro-Courses",
    description: "Host short lessons directly in your bio link. Keep followers engaged without sending them to YouTube or Teachable."
  },
  {
    icon: "Gift",
    title: "Lead Magnets",
    description: "Gate content to capture emails instantly. Templates, guides, checklists—delivered right after opt-in."
  },
  {
    icon: "TrendingUp",
    title: "Funnels & Campaigns",
    description: "Drag-and-drop micro-funnel steps that nurture and convert. Turn cold followers into warm buyers."
  },
  {
    icon: "CreditCard",
    title: "Native Checkout",
    description: "1-click checkout without leaving your profile. Accept payments via Stripe or PayPal seamlessly."
  },
  {
    icon: "Users",
    title: "CRM & Segments",
    description: "See who watched, downloaded, or purchased—then follow up with targeted campaigns."
  },
  {
    icon: "BarChart3",
    title: "Analytics",
    description: "Track impressions, sign-ups, completion rates, and revenue. Know exactly what's working."
  }
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: [
      "2 Bio Pages",
      "1 micro-funnel",
      "1 lead magnet",
      "1 email capture form",
     "1000 leads",
      "Basic analytics",
      "Email capture",
      "WhoAmI subdomain"
    ],
    cta: "Start Free"
  },
  {
    name: "Creator",
    price: "$29",
    period: "/month",
    features: [
      "10 Bio Pages",
      "10 funnels & lead magnets",
      "10 email capture forms",
      "5 micro-courses",
      "Campaign Automations",
      "5000 leads",
      "Native checkout (Stripe/PayPal)",
      "Advanced analytics",
      "Custom domain",
      "Remove WhoAmI branding"
    ],
    cta: "Start Free",
    isPopular: true,
    badge: "Most Popular"
  },
  {
    name: "Pro",
    price: "$79",
    period: "/month",
    features: [
      "Everything in Creator",
      "Unlimited Bio Pages",
      "Unlimited funnels & lead magnets",
      "Unlimited email captures",
      "CRM segments & tagging",
      "A/B testing",
      "Priority support",
      "White-label option"
    ],
    cta: "Start Free",
    badge: "Founders Price"
  }
];

export const faqs: FAQ[] = [
  {
    question: "Can I keep my current domain/username?",
    answer: "Yes! You can use your existing custom domain or choose a free WhoAmI subdomain (yourname.whoami.link). Custom domains are available on Creator and Pro plans."
  },
  {
    question: "Does it replace Linktree/Stan/Beacons?",
    answer: "Yes, and it does more. Unlike traditional link-in-bio tools, WhoAmI includes native funnels, micro-courses, lead capture, checkout, and CRM—so you're not just listing links, you're building a conversion machine."
  },
  {
    question: "Can I sell courses/products directly?",
    answer: "Absolutely. WhoAmI has native checkout powered by Stripe and PayPal. Sell digital products, coaching sessions, courses, or memberships without redirecting to another platform."
  },
  {
    question: "Does it integrate with Stripe/PayPal?",
    answer: "Yes. Connect your Stripe or PayPal account in seconds. We handle the checkout flow, you keep 100% of your revenue (minus payment processor fees)."
  },
  {
    question: "What about email—do I still need Mailchimp?",
    answer: "For basic email capture and segmentation, WhoAmI's built-in CRM is enough. You can export contacts anytime. If you want advanced automation, you can integrate with Mailchimp, ConvertKit, or Zapier."
  },
  {
    question: "Is there a free plan?",
    answer: "Yes! The free plan includes 1 micro-funnel, 1 lead magnet, basic analytics, and email capture. Perfect for getting started. No credit card required."
  },
  {
    question: "How fast is setup?",
    answer: "Most creators are live in under 10 minutes. Pick a template, connect your socials, add your content, and publish. That's it."
  },
  {
    question: "Do I own my audience/data?",
    answer: "100%. You own all contacts, data, and content. Export your list anytime, no lock-in. Your audience is yours, forever."
  }
];

export const comparisonData = [
  { feature: "Built-in Funnels", typical: false, whoami: true },
  { feature: "Micro-Courses (Native)", typical: false, whoami: true },
  { feature: "Lead Capture", typical: "Requires ESP", whoami: "Built-in" },
  { feature: "Checkout", typical: "External", whoami: "Native 1-click" },
  { feature: "Drop-off Rate", typical: "High", whoami: "Low" },
  { feature: "CRM & Segments", typical: false, whoami: true }
];

export const trustLogos = [
  "Coach Academy",
  "Creator Labs",
  "Digital Nomad HQ",
  "Fitness Collective",
  "Design Squad",
  "Mindset Masters"
];
