import { Zap, Monitor, Layout, Building2, Globe, Users } from "lucide-react";
import type { Space, Amenity, Testimonial } from "./types";

export const SITE = {
  name: "Datafy Hub",
  tagline: "Where Professionalism Meets Fun",
  address: "9th Floor, Cocoa House, Dugbe, Ibadan",
  phones: ["+234 707 241 2697", "+234 707 314 8525"],
  email: "hub@datafy.ng",
  hours: "Monday – Friday, 9AM – 5PM",
};

export const SPACES: Space[] = [
  {
    id: "flexi-desk",
    name: "Flexi Desk",
    icon: Zap,
    description:
      "Pay-as-you-go daily or weekly access. Perfect for freelancers.",
    startingPriceLabel: "From ₦5,500/day",
    pricing: { daily: 5500, weekly: 22000 },
    popular: true,
  },
  {
    id: "assigned-desk",
    name: "Assigned Desk",
    icon: Monitor,
    description:
      "Your dedicated desk with monthly commitment. Includes locker storage.",
    startingPriceLabel: "From ₦75,000/mo",
    pricing: { monthly: 75000 },
  },
  {
    id: "standalone-desk",
    name: "Standalone Desk",
    icon: Layout,
    description:
      "Premium individual desk with the best locations and personal workspace.",
    startingPriceLabel: "From ₦8,000/day",
    pricing: { daily: 8000, weekly: 32000, monthly: 115000 },
  },
  {
    id: "private-office",
    name: "Private Office",
    icon: Building2,
    description: "Furnished private office for teams or individuals.",
    startingPriceLabel: "From ₦20,000/day",
    pricing: { daily: 20000, monthly: 200000 },
  },
  {
    id: "virtual-office",
    name: "Virtual Office",
    icon: Globe,
    description: "Professional business address and mail handling.",
    startingPriceLabel: "From ₦250,000/yr",
    pricing: { annually: 250000 },
  },
  {
    id: "training-room",
    name: "Training/Meeting Room",
    icon: Users,
    description:
      "Hourly/daily rental with high-speed internet for workshops.",
    startingPriceLabel: "From ₦30,000/hr",
    pricing: { hourly: 30000, daily: 150000 },
  },
];

export const AMENITIES: Amenity[] = [
  {
    id: "wifi",
    emoji: "⚡",
    name: "High-Speed Internet",
    description: "Seamless streaming and uploads, always on",
  },
  {
    id: "meeting-rooms",
    emoji: "🖥️",
    name: "Meeting Rooms",
    description: "Dedicated rooms for collaboration and presentations",
  },
  {
    id: "printing",
    emoji: "🖨️",
    name: "Printing Services",
    description: "Professional print, scan, and copy on demand",
  },
  {
    id: "events",
    emoji: "🎤",
    name: "Event Space",
    description: "Host workshops, networking events, and tech talks",
  },
  {
    id: "lockers",
    emoji: "🔐",
    name: "Locker Storage",
    description: "Secure personal storage for your belongings",
  },
  {
    id: "email",
    emoji: "📧",
    name: "Email Services",
    description: "Professional email hosting support",
  },
  {
    id: "slack",
    emoji: "💬",
    name: "Community Slack",
    description: "Stay connected with the Datafy Hub community",
  },
  {
    id: "break-area",
    emoji: "☕",
    name: "Break Area",
    description: "Relax and recharge between sessions",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Datafy Hub completely changed how I work. The energy, the views, the internet speed — unmatched in Ibadan.",
    name: "Temi A.",
    role: "Product Designer",
  },
  {
    quote:
      "I closed two major deals from the meeting rooms here. Worth every naira.",
    name: "Chidi O.",
    role: "Startup Founder",
  },
  {
    quote:
      "The community here is everything. I came for a desk, I found a whole network.",
    name: "Aisha B.",
    role: "Software Engineer",
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Spaces", href: "#spaces" },
  { label: "Amenities", href: "#amenities" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];
