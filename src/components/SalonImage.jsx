import React, { useState } from 'react';

export default function SalonImage({ src, alt, fallbackSrc, className = '' }) {
  const [imageState, setImageState] = useState('primary');
  const imageSrc = imageState === 'fallback' ? fallbackSrc : src;

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-[#3B3022] via-[#211C16] to-[#14110E] ${className}`}>
      {imageState === 'unavailable' ? (
        <div className="absolute inset-0 flex items-center justify-center border border-[#C5A059]/20 px-4 text-center">
          <span className="text-[10px] uppercase tracking-[0.18em] text-[#D8B46C]/80">Image coming soon</span>
        </div>
      ) : (
        <img
          src={imageSrc}
          alt={alt}
          loading="lazy"
          onError={() => {
            if (imageState === 'primary' && fallbackSrc) {
              setImageState('fallback');
            } else {
              setImageState('unavailable');
            }
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  );
}
