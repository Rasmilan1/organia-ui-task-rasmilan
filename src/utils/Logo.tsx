interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 60, className = "" }: LogoProps) {
  return (
    <div
      className={`relative flex gap-[8%] ${className}`}
      style={{ width: size, height: size }}
    >
      <div className="flex flex-col flex-1 gap-[8%]">
        <div className="bg-[#001B3D] h-[65%] w-full rounded-[15%]" />
        <div className="bg-[#001B3D] h-[35%] w-full rounded-[15%]" />
      </div>

      <div className="flex flex-col flex-1 gap-[8%]">
        <div className="bg-[#001B3D] h-[35%] w-full rounded-[15%]" />
        <div className="bg-[#001B3D] h-[65%] w-full rounded-[15%]" />
      </div>
    </div>
  );
}
