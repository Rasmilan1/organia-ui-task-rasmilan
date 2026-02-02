import React from "react";

interface CardProps {
  title: string;
  maxWidth?: string;
  minWidth?: string;
  className?: string;
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
        bg-white
        border-black border rounded-xl
        ${className}
      `}
    >
      {/* Heading */}
      <div
        className="
          px-4 py-1.5
          text-white font-semibold text-sm
          bg-[#001f3f]
        "
      >
        {title}
      </div>

      {/* Content */}
      <div
        className="
          p-4
        "
      >
        {children}
      </div>
    </div>
  );
}
