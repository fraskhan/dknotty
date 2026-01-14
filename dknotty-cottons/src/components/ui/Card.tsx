"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, hover = false, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-brand-cream rounded-2xl",
          hover && "transition-shadow duration-200 hover:shadow-md",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };
