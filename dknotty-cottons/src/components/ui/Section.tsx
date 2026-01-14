import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children: React.ReactNode;
  background?: "cream" | "white" | "warm";
  className?: string;
}

const backgroundStyles = {
  cream: "bg-brand-cream",
  white: "bg-white",
  warm: "bg-brand-beige",
};

export function Section({
  id,
  children,
  background = "white",
  className,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        backgroundStyles[background],
        className
      )}
      {...props}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
