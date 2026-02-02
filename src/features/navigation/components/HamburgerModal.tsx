"use client";

import { useState } from "react";
import Logo from "@/utils/Logo";

export default function HamburgerModal() {
  const [isOpen, setIsOpen] = useState(false);

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
      {/* --- Top Navbar (Mobile Only) --- */}
      <header className="lg:hidden flex items-center justify-between px-6 h-18 bg-white border-b border-[#D9D9D9] fixed top-0 w-full z-40">
        <Logo size={35} />
        <button 
          onClick={() => setIsOpen(true)}
          className="text-[#001B3D]"
        >
          <span className="material-symbols-outlined text-[32px]">menu</span>
        </button>
      </header>

      {/* --- Hamburger Modal Overlay --- */}
      <div 
        className={`
          fixed inset-0 z-50 bg-white transition-all duration-300 ease-in-out
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 h-18 border-b border-[#D9D9D9]">
          <Logo size={35} />
          <button 
            onClick={() => setIsOpen(false)}
            className="text-[#001B3D]"
          >
            <span className="material-symbols-outlined text-[32px]">close</span>
          </button>
        </div>

        {/* Modal Content */}
        <nav className="flex flex-col p-6 gap-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors border border-transparent hover:border-gray-200"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-[#001B3D]">
                  {item.icon}
                </span>
              </div>
              <span className="text-lg font-semibold text-[#080808]">
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* --- Standard Sidebar (Desktop Only) --- */}
      <aside className="hidden lg:flex flex-col w-18 min-h-screen bg-white border-r border-[#D9D9D9] items-center fixed left-0 top-0">
        <div className="flex w-full h-18 mb-6 border-b border-[#D9D9D9] items-center justify-center">
          <Logo size={41} />
        </div>
        <nav className="flex flex-col w-full gap-1 items-center">
          {menuItems.map((item, index) => (
            <button key={index} className="flex flex-col w-full py-2 hover:bg-gray-100 transition-colors items-center">
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              <span className="mt-1 text-[12px] font-semibold">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}