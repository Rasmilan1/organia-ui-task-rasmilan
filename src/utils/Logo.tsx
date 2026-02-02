interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 60, className = "" }: LogoProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`
        relative flex gap-[8%] ${className}
      `}
    >
      <div
        className="
          flex flex-col flex-1
          gap-[8%]
        "
      >
        <div
          className="
            h-[65%] w-full
            bg-[#001B3D]
            rounded-[15%]
          "
        />
        <div
          className="
            h-[35%] w-full
            bg-[#001B3D]
            rounded-[15%]
          "
        />
      </div>

      <div
        className="
          flex flex-col flex-1
          gap-[8%]
        "
      >
        <div
          className="
            h-[35%] w-full
            bg-[#001B3D]
            rounded-[15%]
          "
        />
        <div
          className="
            h-[65%] w-full
            bg-[#001B3D]
            rounded-[15%]
          "
        />
      </div>
    </div>
  );
}
