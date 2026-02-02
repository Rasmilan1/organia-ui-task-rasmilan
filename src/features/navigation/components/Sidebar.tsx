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
    <aside
      className="
        hidden flex-col
        w-18 min-h-screen
        bg-white
        border-r border-[#D9D9D9]
        items-center
        lg:flex
      "
    >
      {/* Logo */}
      <div
        className="
          flex
          w-full h-18
          mb-6
          border-b border-[#D9D9D9]
          items-center justify-center
        "
      >
        <Logo size={41} />
      </div>

      {/* Menu Items */}
      <nav
        className="
          flex flex-col
          w-full
          gap-1 items-center
        "
      >
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="
              flex flex-col
              w-full
              py-2
              text-[#001B3D]
              transition-colors
              items-center justify-center hover:bg-gray-100
            "
          >
            <span
              style={{ fontVariationSettings: "'FILL' 1" }}
              className="
                text-[20px]
                material-symbols-outlined
              "
            >
              {item.icon}
            </span>

            <span
              className="
                mt-1
                font-lato text-[12px] text-[#080808] font-semibold leading-tight
              "
            >
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
