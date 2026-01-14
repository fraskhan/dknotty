import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
}

export function Card({
  children,
  hover = false,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-brand-cream rounded-2xl p-6 md:p-8",
        hover && "transition-shadow duration-200 hover:shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
