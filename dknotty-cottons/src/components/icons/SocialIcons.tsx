import {
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface IconProps {
  size?: number;
  className?: string;
}

export function InstagramIcon({ size = 24, className }: IconProps) {
  return (
    <Instagram
      size={size}
      className={cn("text-brand-brown", className)}
      aria-hidden="true"
    />
  );
}

export function FacebookIcon({ size = 24, className }: IconProps) {
  return (
    <Facebook
      size={size}
      className={cn("text-brand-brown", className)}
      aria-hidden="true"
    />
  );
}

export function EmailIcon({ size = 24, className }: IconProps) {
  return (
    <Mail
      size={size}
      className={cn("text-brand-brown", className)}
      aria-hidden="true"
    />
  );
}

export function PhoneIcon({ size = 24, className }: IconProps) {
  return (
    <Phone
      size={size}
      className={cn("text-brand-brown", className)}
      aria-hidden="true"
    />
  );
}

export function LocationIcon({ size = 24, className }: IconProps) {
  return (
    <MapPin
      size={size}
      className={cn("text-brand-brown", className)}
      aria-hidden="true"
    />
  );
}

export function WebsiteIcon({ size = 24, className }: IconProps) {
  return (
    <Globe
      size={size}
      className={cn("text-brand-brown", className)}
      aria-hidden="true"
    />
  );
}
