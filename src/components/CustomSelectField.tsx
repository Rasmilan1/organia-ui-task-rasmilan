import React from "react";

type Option = {
  label: string;
  value: string | number;
};

interface CustomSelectFieldProps {
  label: string;
  required?: boolean;
  containerClassName?: string;
  error?: string;
  variant: "select" | "select-input";

  options: Option[];
  selectProps?: React.SelectHTMLAttributes<HTMLSelectElement>;

  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export default function CustomSelectField({
  label,
  required = false,
  containerClassName = "",
  variant,
  options,
  error,
  selectProps,
  inputProps,
}: CustomSelectFieldProps) {
  return (
    <div
      className={`
        flex flex-col
        gap-1.5 ${containerClassName}
      `}
    >
      <label
        className="
          ml-2
          text-xs font-bold text-gray-500
        "
      >
        {label}{" "}
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

      {variant === "select" && (
        <select
          className={`
            w-full
            px-4 py-1.5
            text-xs
            border border-gray-300 rounded-full
            outline-none focus:ring-1 focus:ring-blue-400 ${selectProps?.className || ""}
            sm:text-xs
            md:py-1
          `}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}

      {variant === "select-input" && (
        <div
          className="
            flex overflow-hidden
            bg-white
            border border-gray-300 rounded-full
            focus-within:ring-1 focus-within:ring-blue-400
          "
        >
          <select
            className={`
              w-1/3
              p-1
              text-xs
              bg-gray-100
              border-r border-gray-300
              outline-none ${selectProps?.className || ""}
            `}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          <input
            className={`
              w-2/3
              px-4 py-1.5
              text-sm
              outline-none ${inputProps?.className || ""}
              md:py-1
            `}
          />
        </div>
      )}

      {/* ERROR MESSAGE */}
      {error && (
        <p
          className="
            ml-2
            text-red-500 text-xs
            -mt-1
          "
        >
          {error}
        </p>
      )}
    </div>
  );
}
