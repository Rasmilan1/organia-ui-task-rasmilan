import React from "react";

interface CardProps {
  title: string;
  maxWidth?: string;
  minWidth?: string;
  className?: string; // 1. Added this to fix the TypeScript error
  children: React.ReactNode;
}

export default function DetailCard({
  title,
  className = "",
  children,
}: CardProps) {
  return (
    <div
      className={`
        overflow-hidden
        w-full 
        mx-auto
        bg-white
        border-black border-2 rounded-xl
        ${className}
      `}
    >
      {/* Heading */}
      <div
        className="
          h-9
          px-6 py-2
          text-white font-semibold text-[16px]
          bg-[#001f3f]
        "
      >
        {title}
      </div>

      {/* Content */}
      <div
        className="
          p-6
        "
      >
        {children}
      </div>
    </div>
  );
}
