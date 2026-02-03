"use client";

import Logo from "@/utils/Logo";
import { usePathname, useRouter } from "next/navigation";


export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

const menuItems = [
  { icon: "home", label: "Home", path: "/dashboard" },
  { icon: "compare_arrows", label: "Menu 2", path: "/shipments" },
  { icon: "bus_alert", label: "Menu 3", path: "/menu-3" },
  { icon: "groups_3", label: "Menu 4", path: "/menu-4" },
  { icon: "local_shipping", label: "Menu 5", path: "/menu-5" },
  { icon: "delivery_truck_speed", label: "Menu 6", path: "/menu-6" },
  { icon: "notes", label: "Menu 7", path: "/menu-7" },
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
            onClick={() => item.path && router.push(item.path)}
            className={`
              flex flex-col
              w-full
              py-2
              text-[#001B3D]
              transition-colors
              items-center justify-center hover:bg-gray-100
              ${pathname === item.path ? "bg-gray-100 text-blue-600" : "text-[#001B3D]"}`}  >
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
