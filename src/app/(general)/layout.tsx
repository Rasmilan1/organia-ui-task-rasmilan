"use client";

import Sidebar from "@/features/navigation/components/Sidebar";
import TopNavbar from "@/features/navigation/components/TopNavbar";
import React from "react";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <TopNavbar />
        <main className="overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
