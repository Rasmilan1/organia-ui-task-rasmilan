import Menu2Header from "@/components/dashboard/shipmentpage_header";
import ShipmentTabs from "@/components/dashboard/shipmentpage";
import DashboardLayout from "@/layout/DashboardLayout";

export default function Home() {
  return (
    <DashboardLayout>
     <Menu2Header/>
     <div className="bg-gray-200 p-5"> <ShipmentTabs /></div>  
 

    </DashboardLayout>

  );
}
