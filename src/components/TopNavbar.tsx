"use client";
import { useState } from "react";

export default function TopNavbar() {
  const [activeTab, setActiveTab] = useState<"Main" | "Sub">("Sub");

  return (
    <nav className="flex flex-col bg-white border-b border-[#D9D9D9]">
      {/* Top Row */}
      <div className="flex items-center justify-between h-11.25 border-b border-[#D9D9D9]">
        <div className="flex items-center justify-between flex-1 px-6 h-full">
          <span className="font-semibold">Main Title</span>
          <span className="material-symbols-outlined text-[#001B3D]">
            notifications_unread
          </span>
        </div>

        {/* Profile Section */}
        <div className="flex items-center h-full">
          <div className="flex items-center h-full px-4 gap-2 border-l border-[#D9D9D9]">
            <span className="material-symbols-outlined text-[#001B3D]">
              account_circle
            </span>
            <span className="whitespace-nowrap text-sm font-medium">
              John Smith
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex items-center px-6 h-11.25">
        <div className="flex items-center gap-3">
          {/* Main Button */}
          <button
            onClick={() => setActiveTab("Main")}
            className={`text-lg transition-colors ${
              activeTab === "Main"
                ? "text-[#000817] font-bold"
                : "text-[#8E8E8E] font-medium hover:text-gray-600"
            }`}
          >
            Main
          </button>

          {/* Separator */}
          <span className="text-black text-xl font-light select-none">
            {">"}
          </span>

          {/* Sub Button */}
          <button
            onClick={() => setActiveTab("Sub")}
            className={`text-xl transition-colors ${
              activeTab === "Sub"
                ? "text-[#000817] font-bold"
                : "text-[#8E8E8E] font-medium hover:text-gray-600"
            }`}
          >
            Sub
          </button>
        </div>
      </div>
    </nav>
  );
}
