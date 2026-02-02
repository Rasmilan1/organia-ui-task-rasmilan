"use client";
import Logo from "@/utils/Logo";
import { useState } from "react";

export default function TopNavbar({}) {
  const [activeTab, setActiveTab] = useState("Sub");

  return (
    <nav
      className="
        flex flex-col
        w-full
        bg-white
        border-b border-[#D9D9D9]
      "
    >
      {/* Top */}
      <div
        className="
          flex
          min-h-11.25
          border-b border-[#D9D9D9]
          items-center justify-between
          md:h-12
        "
      >
        <div
          className="
            flex flex-1
            h-full
            items-center justify-between
          "
        >
          <div
            className="
              flex
              h-full
              items-center
            "
          >
            <div
              className="
                flex
                h-full
                px-4 mr-4
                border-r border-[#D9D9D9]
                items-center
                lg:hidden
              "
            >
              <Logo size={24} />
            </div>

            <span
              className="
                max-w-37.5
                ml-2
                font-semibold text-sm
                truncate
                md:max-w-none md:text-base
                lg:ml-6
              "
            >
              Main Title
            </span>
          </div>

          <span
            className="
              pr-4
              text-[#001B3D] text-[20px]
              cursor-pointer
              material-symbols-outlined
              md:pr-6 md:text-2xl
            "
          >
            notifications_unread
          </span>
        </div>

        {/* Profile */}
        <div
          className="
            flex
            h-full
            items-center
          "
        >
          <div
            className="
              flex
              h-full
              px-3
              border-l border-[#D9D9D9]
              cursor-pointer transition-colors
              items-center gap-2 hover:bg-gray-50
              md:px-4
            "
          >
            <span
              className="
                text-[#001B3D] text-[20px]
                material-symbols-outlined
                md:text-2xl
              "
            >
              account_circle
            </span>
            <span
              className="
                hidden
                whitespace-nowrap text-xs font-medium
                sm:block
                md:text-sm
              "
            >
              John Smith
            </span>
          </div>
        </div>
      </div>

      <div
        className="
          flex
          min-h-10
          items-center
          md:h-11
        "
      >
        <div
          className="
            flex
            h-full
            px-4 mr-4
            border-r border-[#D9D9D9]
            cursor-pointer
            items-center hover:bg-gray-50
            lg:hidden
          "
        >
          <span
            className="
              text-[#001B3D] text-[24px]
              material-symbols-outlined
            "
          >
            menu
          </span>
        </div>

        <div
          className="
            flex
            ml-2
            items-center gap-2
            md:ml-0 md:gap-3
            lg:ml-6
          "
        >
          <button
            onClick={() => setActiveTab("Main")}
            className={`
              text-sm
              transition-colors
              md:text-lg
              ${
                activeTab === "Main"
                  ? "text-[#000817] font-bold"
                  : "text-[#8E8E8E] font-medium hover:text-gray-600"
              }
            `}
          >
            Main
          </button>

          <span
            className="
              text-black text-sm font-light
              select-none
              md:text-xl
            "
          >
            {">"}
          </span>

          <button
            onClick={() => setActiveTab("Sub")}
            className={`
              text-sm
              transition-colors
              md:text-xl
              ${
                activeTab === "Sub"
                  ? "text-[#000817] font-bold"
                  : "text-[#8E8E8E] font-medium hover:text-gray-600"
              }
            `}
          >
            Sub
          </button>
        </div>
      </div>
    </nav>
  );
}
