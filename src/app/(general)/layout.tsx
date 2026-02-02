"use client";

import Sidebar from "@/features/navigation/components/Sidebar";
import TopNavbar from "@/features/navigation/components/TopNavbar";
import Menu2Header from "@/features/shipments/components/ShipmentPageHeader";
import React from "react";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        flex
        min-h-screen
      "
    >
      <Sidebar />

      <div
        className="
          flex-1 flex flex-col
        "
      >
        <TopNavbar />
        <Menu2Header />
        <main
          className="
            flex-1 overflow-y-auto
          "
        >
          {children}
        </main>
      </div>
    </div>
  );
}
