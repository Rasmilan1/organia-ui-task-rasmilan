import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  containerClassName?: string;
  error?: string;
}

export default function CustomTextField({
  label,
  required = false,
  containerClassName = "",
  error,
  ...props
}: InputProps) {
  return (
    <div
      className={`
        flex flex-col
        gap-1 ${containerClassName}
      `}
    >
      <label
        className="
          ml-2
          text-xs font-bold text-gray-500
        "
      >
        {label}
        {required && (
          <span
            className="
              text-red-500
            "
          >
            *
          </span>
        )}
      </label>
      <input
        {...props}
        value={props.value ?? ""}
        className={`
          w-full
          px-4 py-1.5
          text-sm placeholder-gray-400
          border border-gray-300 rounded-full
          outline-none focus:ring-1 focus:ring-blue-400 ${props.className || ""}
          md:py-1
        `}
      />

      {error && (
        <p
          className="
            ml-2
            text-red-500 text-[0.5rem]
          "
        >
          {error}
        </p>
      )}
    </div>
  );
}
