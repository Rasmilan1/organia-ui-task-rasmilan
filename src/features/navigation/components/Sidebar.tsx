import Logo from "@/utils/Logo";

export default function Sidebar() {
  const menuItems = [
    { icon: "home", label: "Home" },
    { icon: "compare_arrows", label: "Menu 2" },
    { icon: "bus_alert", label: "Menu 3" },
    { icon: "groups_3", label: "Menu 4" },
    { icon: "local_shipping", label: "Menu 5" },
    { icon: "delivery_truck_speed", label: "Menu 6" },
    { icon: "notes", label: "Menu 7" },
  ];

  return (
    <aside className="w-18 min-h-screen bg-white flex flex-col items-center border-r border-[#D9D9D9]">
      {/* Logo */}
      <div className="w-full h-18 flex items-center justify-center border-b border-[#D9D9D9] mb-6">
        <Logo size={41} />
      </div>

      {/* Menu Items */}
      <nav className="flex flex-col gap-1 w-full items-center">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="flex flex-col items-center justify-center w-full py-2 text-[#001B3D] hover:bg-gray-100 transition-colors group"
          >
            <span
              className="material-symbols-outlined text-[20px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {item.icon}
            </span>
            <span className="font-lato text-[12px] text-[#080808] font-semibold leading-tight mt-1">
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
