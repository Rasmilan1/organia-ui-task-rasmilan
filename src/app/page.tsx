// import Menu2Header from "@/features/shipments/components/shipmentpage_header";
// import DashboardLayout from "@/layout/DashboardLayout";
// import ShipmentTabs from "./(general)/shipments/page";

// export default function Home() {
//   return (
//     <DashboardLayout>
//      <Menu2Header/>
//      <div className="bg-gray-200 p-5"> <ShipmentTabs /></div>  
 

//     </DashboardLayout>

//   );
// }



import { redirect } from "next/navigation";

export default function Home() {
  redirect("home");
}
