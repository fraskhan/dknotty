import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-2 block text-sm font-medium text-brand-dark"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={cn(
            "w-full rounded-lg border bg-white px-4 py-3 text-brand-dark placeholder:text-brand-dark/50",
            "transition-colors duration-200",
            "focus:border-brand-brown focus:outline-none focus:ring-2 focus:ring-brand-brown/20",
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
              : "border-brand-beige",
            className
          )}
          {...props}
        />
        {error && (
          <p
            id={`${inputId}-error`}
            className="mt-1 text-sm text-red-500"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
