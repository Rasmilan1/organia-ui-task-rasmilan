"use client";
import { useState } from "react";
import Tabbar from "@/features/shipments/components/tabbar";
import ShipmentForm from "@/features/shipments/components/ShipmentForm";
import ShipmentPageHeader from "@/features/shipments/components/ShipmentPageHeader";

export default function ShipmentPage() {
  const [tabs, setTabs] = useState(["T 01", "T 02", "T 03"]);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const [formData, setFormData] = useState<Record<string, unknown>>({});

  const addTab = () => {
    const nextIndex = tabs.length + 1;
    const newTab = `T ${String(nextIndex).padStart(2, "0")}`;
    setTabs([...tabs, newTab]);
    setActiveTab(newTab);
  };

  const handleFormSubmit = (tabId: string, data: unknown) => {
    setFormData({ ...formData, [tabId]: data });
    console.log("Saved data for", tabId, data);
  };

  return (
    <div
      className="
        w-full
        bg-[#E4EAF6]
      "
    >
      <ShipmentPageHeader />

      <div
        className="
          max-w-full
          p-2
        "
      >
        {/* TABBAR */}
        <Tabbar
          tabs={tabs}
          active={activeTab}
          onTabClick={setActiveTab}
          onAddTab={addTab}
        />

        {/* CONTENT */}
        <div
          className="
            w-full
            p-2
            bg-white
            border-2 border-[#001B3D] rounded-2xl
            shadow-lg
          "
        >
          <ShipmentForm
            key={activeTab}
            tabId={activeTab}
            onSubmit={(data) => handleFormSubmit(activeTab, data)}
          />
        </div>
      </div>
    </div>
  );
}
