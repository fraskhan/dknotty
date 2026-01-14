"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

const variantStyles = {
  primary:
    "bg-brand-brown text-brand-cream hover:bg-brand-light-brown focus:ring-brand-brown",
  secondary:
    "bg-brand-cream text-brand-brown border border-brand-brown hover:bg-brand-beige focus:ring-brand-brown",
  outline:
    "bg-transparent text-brand-brown border border-brand-brown hover:bg-brand-cream focus:ring-brand-brown",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    // Render as anchor if href is provided
    if (href) {
      return (
        <a href={href} className={combinedClassName}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
