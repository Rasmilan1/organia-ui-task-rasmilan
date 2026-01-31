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
      className={`mx-auto bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm ${className}`}
    >
      {/* Heading */}
      <div className="bg-[#001f3f] text-white px-6 py-2 h-9 font-semibold text-[16px]">
        {title}
      </div>

      {/* Content */}
      <div className="p-6">{children}</div>
    </div>
  );
}
