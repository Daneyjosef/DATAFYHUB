import type { LucideIcon } from "lucide-react";

export type Duration = "daily" | "weekly" | "monthly" | "annually";

export interface SpacePricing {
  daily?: number;
  weekly?: number;
  monthly?: number;
  annually?: number;
  hourly?: number;
}

export interface Space {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  startingPriceLabel: string;
  pricing: SpacePricing;
  popular?: boolean;
}

export interface Amenity {
  id: string;
  emoji: string;
  name: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface BookingFormValues {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  notes?: string;
}

export interface BookingData {
  spaceId: string;
  duration: Duration;
  date?: Date;
  dateRange?: { from?: Date; to?: Date };
  details: BookingFormValues;
  total: number;
}
