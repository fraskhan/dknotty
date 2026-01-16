"use client";

import { Logo } from "@/components/icons/Logo";
import { BRAND, NAV_ITEMS } from "@/lib/constants";
import {
  InstagramIcon,
  FacebookIcon,
  EmailIcon,
  PhoneIcon,
  LocationIcon,
  WebsiteIcon,
} from "@/components/icons/SocialIcons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const contactLinks = [
    {
      icon: <EmailIcon size={18} className="text-brand-cream" />,
      label: "Email",
      value: BRAND.email,
      href: `mailto:${BRAND.email}`,
    },
    {
      icon: <PhoneIcon size={18} className="text-brand-cream" />,
      label: "Phone",
      value: BRAND.phone,
      href: `tel:${BRAND.phone.replace(/-/g, "")}`,
    },
    {
      icon: <WebsiteIcon size={18} className="text-brand-cream" />,
      label: "Website",
      value: BRAND.website,
      href: `https://${BRAND.website}`,
    },
    {
      icon: <LocationIcon size={18} className="text-brand-cream" />,
      label: "Location",
      value: BRAND.location,
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <InstagramIcon size={20} className="text-brand-cream" />,
      label: "Instagram",
      href: `https://instagram.com/${BRAND.instagram.replace("@", "")}`,
    },
    {
      icon: <FacebookIcon size={20} className="text-brand-cream" />,
      label: "Facebook",
      href: `https://facebook.com/${BRAND.facebook}`,
    },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-brand-brown text-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Logo size="sm" className="brightness-0 invert" />
              <div>
                <h3 className="text-xl font-semibold">{BRAND.name}</h3>
                <p className="text-brand-beige text-sm">{BRAND.tagline}</p>
              </div>
            </div>
            <p className="text-brand-beige text-sm max-w-md">
              Handcrafted with love in {BRAND.location}. Every stitch tells a story, 
              every creation is made just for you.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-brand-beige hover:text-brand-cream transition-colors text-sm"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              {contactLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center gap-2 text-brand-beige hover:text-brand-cream transition-colors text-sm"
                    aria-label={`${item.label}: ${item.value}`}
                  >
                    {item.icon}
                    <span>{item.value}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Social icons */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-sm">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-light-brown/20 hover:bg-brand-light-brown/40 transition-colors"
                    aria-label={item.label}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-brand-light-brown/30">
          <p className="text-center text-brand-beige text-sm">
            © {currentYear} {BRAND.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
