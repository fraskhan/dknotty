import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeMap = {
  sm: 32,
  md: 48,
  lg: 64,
  xl: 96,
};

export function Logo({ size = "md", className }: LogoProps) {
  const dimension = sizeMap[size];

  return (
    <svg
      width={dimension}
      height={dimension}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("flex-shrink-0", className)}
      aria-label="D' Knotty Cottons Logo - Black cat on yarn ball"
    >
      {/* Yarn Ball */}
      <circle cx="50" cy="58" r="35" fill="#D4A574" />
      
      {/* Yarn texture lines */}
      <path
        d="M20 50 Q35 45, 50 50 T80 50"
        stroke="#8B7355"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M18 60 Q35 55, 50 60 T82 60"
        stroke="#8B7355"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M20 70 Q35 65, 50 70 T80 70"
        stroke="#8B7355"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M25 80 Q40 75, 55 80 T75 80"
        stroke="#8B7355"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Vertical yarn curves */}
      <path
        d="M35 28 Q30 50, 35 88"
        stroke="#8B7355"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M65 28 Q70 50, 65 88"
        stroke="#8B7355"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Cat Body - sitting on yarn */}
      <ellipse cx="50" cy="30" rx="18" ry="15" fill="#333333" />
      
      {/* Cat Head */}
      <circle cx="50" cy="12" r="12" fill="#333333" />
      
      {/* Cat Ears */}
      <path d="M40 5 L38 -5 L46 2 Z" fill="#333333" />
      <path d="M60 5 L62 -5 L54 2 Z" fill="#333333" />
      
      {/* Inner Ears */}
      <path d="M41 4 L40 -2 L45 3 Z" fill="#D4A574" />
      <path d="M59 4 L60 -2 L55 3 Z" fill="#D4A574" />
      
      {/* Cat Eyes */}
      <ellipse cx="45" cy="11" rx="2.5" ry="3" fill="#A3C4D9" />
      <ellipse cx="55" cy="11" rx="2.5" ry="3" fill="#A3C4D9" />
      <circle cx="45" cy="11" r="1" fill="#333333" />
      <circle cx="55" cy="11" r="1" fill="#333333" />
      
      {/* Cat Nose */}
      <path d="M50 15 L48 17 L52 17 Z" fill="#D4A574" />
      
      {/* Cat Whiskers */}
      <line x1="35" y1="14" x2="44" y2="15" stroke="#555" strokeWidth="0.5" />
      <line x1="35" y1="17" x2="44" y2="17" stroke="#555" strokeWidth="0.5" />
      <line x1="56" y1="15" x2="65" y2="14" stroke="#555" strokeWidth="0.5" />
      <line x1="56" y1="17" x2="65" y2="17" stroke="#555" strokeWidth="0.5" />
      
      {/* Cat Tail - curled around yarn */}
      <path
        d="M68 30 Q85 25, 80 45 Q75 60, 60 65"
        stroke="#333333"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Cat Front Paws */}
      <ellipse cx="42" cy="40" rx="5" ry="4" fill="#333333" />
      <ellipse cx="58" cy="40" rx="5" ry="4" fill="#333333" />
    </svg>
  );
}
