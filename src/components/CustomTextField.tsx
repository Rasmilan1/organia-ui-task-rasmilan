import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  containerClassName?: string;
}

export default function CustomTextField({
  label,
  required = false,
  containerClassName = "",
  ...props
}: InputProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${containerClassName}`}>
      <label className="text-xs font-bold text-gray-500 ml-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        {...props}
        className={`w-full px-4 py-1.5 border border-gray-300 rounded-full text-xs outline-none focus:ring-1 focus:ring-blue-400 placeholder-gray-400 ${props.className}`}
      />
    </div>
  );
}
