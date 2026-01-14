"use client";

import { Section } from "@/components/ui/Section";
import { Logo } from "@/components/icons/Logo";
import { BRAND } from "@/lib/constants";

export function About() {
  return (
    <Section id="about" background="cream">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text content */}
        <div className="text-center lg:text-left">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-brown mb-6">
            Handmade with Love & Care
          </h2>

          {/* Brand story */}
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            At {BRAND.name}, every creation is crafted with passion and dedication. 
            We believe in the beauty of handmade artistry—each stitch carefully placed, 
            each piece uniquely made just for you. Our crochet creations bring warmth 
            and joy to homes across {BRAND.location} and beyond.
          </p>

          {/* Gratitude message */}
          <div className="bg-white/60 rounded-2xl p-6 mb-6 border border-brand-beige">
            <p className="text-brand-brown italic">
              "Your purchase brightened our day! We put a lot of love and care into 
              our creations, and we're so grateful for your support."
            </p>
          </div>

          {/* Custom order highlight */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-brand-brown text-white">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
            <span className="font-medium">Dream It, We'll Crochet It</span>
          </div>
        </div>

        {/* Decorative element with logo */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Background decorative circles */}
            <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-brand-light-brown/20 blur-xl" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-brand-soft-blue/20 blur-xl" />
            
            {/* Main decorative card with logo */}
            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="flex flex-col items-center gap-6">
                <Logo size="xl" />
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-brand-brown mb-1">
                    {BRAND.name}
                  </h3>
                  <p className="text-brand-light-brown text-sm">
                    {BRAND.tagline}
                  </p>
                </div>
                
                {/* Decorative yarn elements */}
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-brand-light-brown" />
                  <div className="w-3 h-3 rounded-full bg-brand-brown" />
                  <div className="w-3 h-3 rounded-full bg-brand-soft-blue" />
                  <div className="w-3 h-3 rounded-full bg-brand-beige" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
