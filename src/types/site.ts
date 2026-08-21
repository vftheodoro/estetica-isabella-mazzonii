export type ServiceIcon =
  | "droplet"
  | "sparkle"
  | "leaf"
  | "heart"
  | "face"
  | "zap";

export type Service = {
  slug: string;
  title: string;
  description: string;
  category?: string;
  image?: string;
  benefits: string[];
  duration?: string;
  price: number;
  packagePrice: number;
  featured?: boolean;
  icon: ServiceIcon;
};

export type Testimonial = {
  quote: string;
  label: string;
};

export type InstagramPost = {
  id: string;
  image: string;
  caption: string;
  tag: string;
};
