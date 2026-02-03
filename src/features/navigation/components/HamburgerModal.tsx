"use client";

import Logo from "@/utils/Logo";

type HamburgerModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function HamburgerModal({
  isOpen,
  onClose,
}: HamburgerModalProps) {
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
    <>
      <div
        onClick={onClose}
        className={`
          z-40
          bg-black/40
          transition-opacity
          fixed inset-0
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      <div
        className={`
          z-50
          h-full w-72
          bg-white
          transition-transform
          fixed top-0 left-0 transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div
          className="
            flex
            h-14
            px-4
            border-b
            items-center justify-between
          "
        >
          <Logo size={24} />
          <button
            onClick={onClose}
            className="
              text-2xl
              material-symbols-outlined
            "
          >
            close
          </button>
        </div>

        <nav
          className="
            flex flex-col
            py-2
          "
        >
          {menuItems.map((item) => (
            <button
              key={item.label}
              className="
                flex
                h-12
                px-4
                text-sm font-medium text-[#001B3D]
                transition-colors
                items-center gap-4 hover:bg-gray-100
              "
            >
              <span
                className="
                  text-xl
                  material-symbols-outlined
                "
              >
                {item.icon}
              </span>
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
