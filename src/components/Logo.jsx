import React from 'react';

export default function Logo({ className, scrolled }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* House Shape Outline */}
        <path
          d="M100 20L180 80V170H20V80L100 20Z"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={scrolled ? "text-wood-primary" : "text-white"}
        />
        
        {/* "Nhà Gỗ" Text */}
        <text
          x="100"
          y="105"
          textAnchor="middle"
          className={`font-display font-bold text-[32px] ${scrolled ? "fill-wood-dark" : "fill-white"}`}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Nhà Gỗ
        </text>
        
        {/* "coffee" Text */}
        <text
          x="100"
          y="140"
          textAnchor="middle"
          className={`text-[24px] ${scrolled ? "fill-brick" : "fill-white/80"}`}
          style={{ fontFamily: "'Dancing Script', cursive", fontStyle: 'italic' }}
        >
          coffee
        </text>

        {/* Small Coffee Bean Detail */}
        <circle cx="100" cy="55" r="5" className={scrolled ? "fill-brick" : "fill-white"} />
      </svg>
    </div>
  );
}
