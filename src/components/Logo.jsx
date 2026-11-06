import React from 'react';

/**
 * Official "The Cabello Room" Brand Logo
 * Displays the authentic official brand logo provided by the salon:
 * TCR interlocking monogram with "THE CABELLO ROOM" wordmark.
 */
export default function Logo({ 
  variant = "horizontal", // "full" | "horizontal" | "icon"
  size = "md",            // "sm" | "md" | "lg"
  className = "" 
}) {
  const iconSizes = {
    sm: "h-9 w-auto",
    md: "h-11 sm:h-12 w-auto",
    lg: "h-16 w-auto"
  };

  if (variant === "full") {
    return (
      <div className={`inline-flex items-center select-none group ${className}`}>
        <img 
          src="/logo.png" 
          alt="The Cabello Room" 
          className={`${iconSizes[size]} object-contain brightness-105 group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_2px_10px_rgba(197,160,89,0.2)]`}
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3.5 select-none group ${className}`}>
      <img 
        src="/logo.png" 
        alt="The Cabello Room Logo" 
        className={`${iconSizes[size]} object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_2px_8px_rgba(197,160,89,0.25)]`}
      />
      {variant === "horizontal" && (
        <span className="font-serif text-lg sm:text-xl tracking-[0.22em] font-medium text-[#FDFBF7] uppercase group-hover:text-[#D8B46C] transition-colors leading-none">
          The Cabello Room
        </span>
      )}
    </div>
  );
}
