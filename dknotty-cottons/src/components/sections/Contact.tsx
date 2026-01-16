"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";
import {
  InstagramIcon,
  FacebookIcon,
  EmailIcon,
  PhoneIcon,
  LocationIcon,
  WebsiteIcon,
} from "@/components/icons/SocialIcons";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateForm(data: ContactFormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!validateEmail(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required";
  }

  return errors;
}

function ContactInfo() {
  const contactItems = [
    {
      icon: <InstagramIcon size={20} />,
      label: "Instagram",
      value: BRAND.instagram,
      href: `https://instagram.com/${BRAND.instagram.replace("@", "")}`,
    },
    {
      icon: <FacebookIcon size={20} />,
      label: "Facebook",
      value: BRAND.facebook,
      href: `https://facebook.com/${BRAND.facebook}`,
    },
    {
      icon: <EmailIcon size={20} />,
      label: "Email",
      value: BRAND.email,
      href: `mailto:${BRAND.email}`,
    },
    {
      icon: <PhoneIcon size={20} />,
      label: "Phone",
      value: BRAND.phone,
      href: `tel:${BRAND.phone.replace(/-/g, "")}`,
    },
    {
      icon: <WebsiteIcon size={20} />,
      label: "Website",
      value: BRAND.website,
      href: `https://${BRAND.website}`,
    },
    {
      icon: <LocationIcon size={20} />,
      label: "Location",
      value: BRAND.location,
      href: null,
    },
  ];

  return (
    <div className="space-y-4">
      {contactItems.map((item) => (
        <div key={item.label} className="flex items-center gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-cream">
            {item.icon}
          </div>
          <div>
            <p className="text-sm text-gray-500">{item.label}</p>
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-brand-brown hover:text-brand-light-brown transition-colors font-medium"
                aria-label={`${item.label}: ${item.value}`}
              >
                {item.value}
              </a>
            ) : (
              <p className="text-brand-brown font-medium">{item.value}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}


function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormState({ isSubmitting: true, isSuccess: false, error: null });

    try {
      // MVP: Console log the submission
      console.log("Contact form submission:", formData);

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Success
      setFormState({ isSubmitting: false, isSuccess: true, error: null });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        error: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Input
        label="Name"
        name="name"
        type="text"
        placeholder="Your name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        disabled={formState.isSubmitting}
        required
      />

      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="your@email.com"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        disabled={formState.isSubmitting}
        required
      />

      <Textarea
        label="Message"
        name="message"
        placeholder="Tell us about your custom order or inquiry..."
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        disabled={formState.isSubmitting}
        rows={5}
        required
      />

      {formState.isSuccess && (
        <div
          className="rounded-lg bg-green-50 border border-green-200 p-4 text-green-700"
          role="alert"
        >
          Thank you for your message! We'll get back to you soon.
        </div>
      )}

      {formState.error && (
        <div
          className="rounded-lg bg-red-50 border border-red-200 p-4 text-red-700"
          role="alert"
        >
          {formState.error}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={formState.isSubmitting}
      >
        {formState.isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

export function Contact() {
  return (
    <Section id="contact" background="cream">
      {/* Section headline */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-brand-brown mb-4">
          Find Us Here
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have a question or want to place a custom order? We'd love to hear from you!
        </p>
      </div>

      {/* Two-column layout */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Contact info */}
        <div>
          <h3 className="text-xl font-semibold text-brand-brown mb-6">
            Get in Touch
          </h3>
          <ContactInfo />

          {/* Decorative element */}
          <div className="mt-8 p-6 bg-white rounded-2xl border border-brand-beige">
            <p className="text-brand-brown italic text-center">
              "We respond within 24 hours. Can't wait to create something special for you!"
            </p>
          </div>
        </div>

        {/* Contact form */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-brand-brown mb-6">
            Send Us a Message
          </h3>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
