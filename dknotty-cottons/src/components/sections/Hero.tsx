"use client";

import { BRAND } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-cream via-white to-brand-beige"
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-brand-light-brown blur-3xl" />
        <div className="absolute top-40 right-20 w-48 h-48 rounded-full bg-brand-soft-blue blur-3xl" />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full bg-brand-brown blur-3xl" />
        <div className="absolute bottom-20 right-1/3 w-24 h-24 rounded-full bg-brand-light-brown blur-2xl" />
      </div>

      {/* Yarn ball decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute -top-10 -right-10 w-64 h-64 text-brand-light-brown opacity-20"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <circle cx="50" cy="50" r="45" />
          <path
            d="M20 50 Q50 20 80 50 Q50 80 20 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M30 30 Q50 50 70 30"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M30 70 Q50 50 70 70"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        <svg
          className="absolute -bottom-16 -left-16 w-80 h-80 text-brand-brown opacity-10"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <circle cx="50" cy="50" r="45" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            {/* Location badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-beige/50 text-brand-brown text-sm font-medium mb-6">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {BRAND.location}
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-brown leading-tight mb-6">
              Crafted with Love,{" "}
              <span className="text-brand-light-brown">Just for You</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Discover unique handmade crochet creations or imagine your custom
              piece. Every stitch tells a story of love and craftsmanship.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="primary" size="lg" href="#products">
                Browse Creations
              </Button>
              <Button variant="secondary" size="lg" href="#contact">
                Contact Us
              </Button>
            </div>

            {/* Tagline */}
            <p className="mt-8 text-sm text-brand-brown/70 font-medium">
              {BRAND.tagline} • {BRAND.name}
            </p>
          </div>

          {/* Product preview images - Desktop only */}
          <div className="hidden lg:block relative">
            <div className="relative w-full h-[500px]">
              {/* Main featured image */}
              <div className="absolute top-0 right-0 w-72 h-72 rounded-2xl bg-brand-cream shadow-lg overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-brand-light-brown/20 to-brand-beige flex items-center justify-center">
                  <span className="text-brand-brown/40 text-sm">Product Preview</span>
                </div>
              </div>
              
              {/* Secondary image */}
              <div className="absolute top-32 left-0 w-56 h-56 rounded-2xl bg-brand-beige shadow-lg overflow-hidden transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-brand-soft-blue/20 to-brand-cream flex items-center justify-center">
                  <span className="text-brand-brown/40 text-sm">Product Preview</span>
                </div>
              </div>
              
              {/* Third image */}
              <div className="absolute bottom-0 right-16 w-48 h-48 rounded-2xl bg-white shadow-lg overflow-hidden transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-brand-cream to-brand-light-brown/10 flex items-center justify-center">
                  <span className="text-brand-brown/40 text-sm">Product Preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
