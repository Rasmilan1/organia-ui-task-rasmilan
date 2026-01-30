import Sidebar from "@/components/Sidebar";
import TopNavbar from "@/components/TopNavbar";
import React, { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
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
