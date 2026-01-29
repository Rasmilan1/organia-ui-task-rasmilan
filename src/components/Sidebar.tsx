import Logo from "@/utils/Logo";

export default function Sidebar() {
  return (
    <aside className="w-18 min-h-screen bg-white flex flex-col items-center border-r border-[#D9D9D9]">
      {/* logo */}
      <div className="w-full h-18 flex items-center justify-center border-b border-[#D9D9D9] mb-6">
        <Logo size={34} />
      </div>
    </aside>
  );
}
