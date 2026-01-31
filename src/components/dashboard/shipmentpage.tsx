// "use client";

// import { useState } from "react";
// import DetailCard from "./DetailCard";
// import CustomTextField from "./CustomTextField";
// import dynamic from "next/dynamic";

// const MapPicker = dynamic(() => import("./LocationPicker"), {
//   ssr: false,
//   loading: () => (
//     <div className="h-40 w-full bg-gray-100 animate-pulse rounded-2xl flex items-center justify-center text-gray-400">
//       Loading Map...
//     </div>
//   ),
// });
// type Shipment = {
//   id: number;
// };

// export default function ShipmentTabs() {
//   const [tabs, setTabs] = useState<Shipment[]>([{ id: 1 }]);
//   const [activeTab, setActiveTab] = useState(1);

//   const addTab = () => {
//     const newId = tabs.length + 1;
//     setTabs([...tabs, { id: newId }]);
//     setActiveTab(newId);
//   };
//   const isActive = true;
//   return (
//     <div className="w-full bg-white rounded-[15px] ">
//       {/* Tabs header */}
//       <div className="flex items-center gap-4 ml-25">
//         {tabs.map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => setActiveTab(tab.id)}
//             className={`relative px-10 py-2 text-sm font-bold transition-all duration-200 ${
//               isActive
//                 ? "bg-[#001B3D] text-white z-10"
//                 : "bg-transparent text-[#001B3D] hover:bg-gray-200"
//             }`}
//             style={{
//               // Creating the trapezoid shape
//               clipPath: "polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)",
//               borderRadius: "12px 12px 0 0",
//               marginRight: "-15px", // Overlap for that seamless look
//             }}
//           >
//             T {String(tab.id).padStart(2, "0")}
//           </button>
//         ))}

//         <button
//           onClick={addTab}
//           className="ml-auto px-4 py-2 rounded-full bg-linear-to-r from-red-700 to-purple-700 text-white text-sm"
//         >
//           Add T
//         </button>
//       </div>

//       {/* Active tab content */}
//       {tabs.map(
//         (tab) =>
//           tab.id === activeTab && <ShipmentForm key={tab.id} tabId={tab.id} />,
//       )}
//     </div>
//   );
// }

// type Props = {
//   tabId: number;
// };

// function ShipmentForm({}: Props) {
//   const [lat, setLat] = useState("");
//   const [lng, setLng] = useState("");

//   return (
//     <div className="flex">
//       <div className="p-9">nn</div>
//       <div className="">
//         <div className="border rounded-xl p-4 space-y-6">
//           {/* Details 1 & 2 */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//   <DetailCard title="Details 1" className="w-full max-w-150">
//     <form className="grid grid-cols-2 gap-x-6 gap-y-4">
//       <CustomTextField
//         label="First Name"
//         placeholder="First Name"
//         required
//       />
//       <CustomTextField label="Last Name" placeholder="Last Name" />
//       <CustomTextField
//         label="Contact Person Name"
//         placeholder="Name"
//         required
//       />

//       {/* Contact Number Prefix */}
//       <div className="flex flex-col gap-1.5">
//         <label className="text-xs font-bold text-gray-500 ml-2">
//           Contact Number <span className="text-red-500">*</span>
//         </label>
//         <div className="flex border border-gray-300 rounded-full overflow-hidden focus-within:ring-1 focus-within:ring-blue-500 bg-white">
//           <select className="bg-gray-100 border-r border-gray-300 px-3 py-2 text-xs text-gray-600 outline-none">
//             <option>+ 94</option>
//           </select>
//           <input
//             type="tel"
//             className="w-full px-4 py-1.5 text-xs outline-none"
//           />
//         </div>
//       </div>

//       <div className="col-span-2 my-2 h-40 w-full rounded-2xl overflow-hidden border border-gray-200">
//         <MapPicker
//           setCoordinates={(latitude, longitude) => {
//             setLat(latitude.toFixed(6).toString());
//             setLng(longitude.toFixed(6).toString());
//           }}
//         />
//       </div>
//       <div className="grid grid-cols-2 gap-4">
//         <CustomTextField
//           label="Latitude"
//           value={lat}
//           placeholder="Select on map"
//           onChange={(e) => setLat(e.target.value)}
//         />
//         <CustomTextField
//           label="Longitude"
//           value={lng}
//           placeholder="Select on map"
//           onChange={(e) => setLng(e.target.value)}
//         />
//       </div>

//       {/* Province Select */}
//       <div className="flex flex-col gap-1.5">
//         <label className="text-xs font-bold text-gray-500 ml-2">
//           Province <span className="text-red-500">*</span>
//         </label>
//         <select className="w-full px-4 py-1.5 border border-gray-300 rounded-full text-xs text-gray-400 bg-white outline-none">
//           <option>Select the province</option>
//         </select>
//       </div>

//       <CustomTextField
//         label="District"
//         placeholder="District"
//         required
//       />
//       <CustomTextField label="City" placeholder="City" required />
//       <CustomTextField
//         label="Street / Lane"
//         placeholder="Street"
//         required
//       />
//       <CustomTextField
//         label="Address Note"
//         placeholder="Note"
//         required
//       />
//     </form>
//   </DetailCard>

//   <DetailCard title="Details 1" className="w-full max-w-150">
//     <form className="grid grid-cols-2 gap-x-6 gap-y-4">
//       <CustomTextField
//         label="First Name"
//         placeholder="First Name"
//         required
//       />
//       <CustomTextField label="Last Name" placeholder="Last Name" />
//       <CustomTextField
//         label="Contact Person Name"
//         placeholder="Name"
//         required
//       />

//       {/* Contact Number Prefix */}
//       <div className="flex flex-col gap-1.5">
//         <label className="text-xs font-bold text-gray-500 ml-2">
//           Contact Number <span className="text-red-500">*</span>
//         </label>
//         <div className="flex border border-gray-300 rounded-full overflow-hidden focus-within:ring-1 focus-within:ring-blue-500 bg-white">
//           <select className="bg-gray-100 border-r border-gray-300 px-3 py-2 text-xs text-gray-600 outline-none">
//             <option>+ 94</option>
//           </select>
//           <input
//             type="tel"
//             className="w-full px-4 py-1.5 text-xs outline-none"
//           />
//         </div>
//       </div>

//       <div className="col-span-2 my-2 h-40 w-full rounded-2xl overflow-hidden border border-gray-200">
//         <MapPicker
//           setCoordinates={(latitude, longitude) => {
//             setLat(latitude.toFixed(6).toString());
//             setLng(longitude.toFixed(6).toString());
//           }}
//         />
//       </div>
//       <div className="grid grid-cols-2 gap-4">
//         <CustomTextField
//           label="Latitude"
//           value={lat}
//           placeholder="Select on map"
//           onChange={(e) => setLat(e.target.value)}
//         />
//         <CustomTextField
//           label="Longitude"
//           value={lng}
//           placeholder="Select on map"
//           onChange={(e) => setLng(e.target.value)}
//         />
//       </div>

//       {/* Province Select */}
//       <div className="flex flex-col gap-1.5">
//         <label className="text-xs font-bold text-gray-500 ml-2">
//           Province <span className="text-red-500">*</span>
//         </label>
//         <select className="w-full px-4 py-1.5 border border-gray-300 rounded-full text-xs text-gray-400 bg-white outline-none">
//           <option>Select the province</option>
//         </select>
//       </div>

//       <CustomTextField
//         label="District"
//         placeholder="District"
//         required
//       />
//       <CustomTextField label="City" placeholder="City" required />
//       <CustomTextField
//         label="Street / Lane"
//         placeholder="Street"
//         required
//       />
//       <CustomTextField
//         label="Address Note"
//         placeholder="Note"
//         required
//       />
//     </form>
//   </DetailCard>
// </div>

// {/* Sub Details */}
// <DetailCard title="Sub Details" className="w-full">
//   <form className="space-y-6">
//     {/* Main Info Section */}
//     <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
//       <div className="md:col-span-2">
//         <CustomTextField
//           label="Name"
//           placeholder="Enter name"
//           required
//         />
//       </div>

//       <div className="md:col-span-2 flex flex-col gap-1.5">
//         <label className="text-xs font-bold text-gray-500 ml-2">
//           Type
//         </label>
//         <div className="relative">
//           <select className="w-full px-4 py-1.5 border border-gray-300 rounded-full text-xs text-gray-400 appearance-none bg-white outline-none">
//             <option>Select type</option>
//           </select>
//         </div>
//       </div>

//       <div className="md:col-span-2">
//         <CustomTextField
//           label="Total Value"
//           placeholder="Enter total value"
//         />
//       </div>

//       <div className="md:col-span-6">
//         <CustomTextField
//           label="Description"
//           placeholder="Enter description"
//         />
//       </div>
//     </div>

//     {/* Measurements Section */}
//     <div className="border border-gray-200 rounded-2xl p-5 bg-gray-50/30">
//       <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
//         <CustomTextField
//           label="Quantity"
//           placeholder="Enter quantity"
//           required
//         />
//         <CustomTextField label="Number" placeholder="Enter number" />
//         <CustomTextField
//           label="Weight (Kg)"
//           placeholder="Enter weight"
//         />
//         <CustomTextField
//           label="Height (m³)"
//           placeholder="Enter height"
//         />
//         <CustomTextField
//           label="Length (m)"
//           placeholder="Enter length"
//         />
//         <CustomTextField label="Width" placeholder="Enter width" />
//       </div>
//     </div>
//   </form>
// </DetailCard>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import CustomTextField from "./CustomTextField";
import DetailCard from "./DetailCard";

import dynamic from "next/dynamic";

const MapPicker = dynamic(() => import("./LocationPicker"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-gray-100 animate-pulse flex items-center justify-center text-xs text-gray-400">
      Loading Map...
    </div>
  ),
});

export default function ShipmentTabs() {
  const [tabs, setTabs] = useState([
    { id: 1 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ]);
  const [activeTab, setActiveTab] = useState(1);

  const addTab = () => {
    const newId = tabs.length + 1;
    setTabs([...tabs, { id: newId }]);
    setActiveTab(newId);
  };

  return (
    <div className="w-full bg-white">
      {/* Tabs header */}
      <div className="flex ">
        {/* Changed to items-end */}
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id; // Check actual state
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-12 py-3 text-sm font-bold transition-all duration-200 ${
                isActive
                  ? "bg-[#001B3D] text-white z-20" // Higher z-index for active tab
                  : "hover:bg-gray-300 z-10"
              }`}
              style={{
                clipPath: "polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)",
                marginBottom: "-1px", // Pulls the tab down to overlap the container border
                marginRight: "-12px",
              }}
            >
              T {String(tab.id).padStart(2, "0")}
            </button>
          );
        })}
        {/* The "Add T" button needs to stay on the baseline */}
        <button
          onClick={addTab}
          className="ml-auto mb-1 px-6 py-2 rounded-full bg-linear-to-r from-[#8B1D3B] to-[#1A2E4B] text-white text-xs"
        >
          Add T
        </button>
      </div>

      {/* Active tab content container */}
      <div className="border-2 border-[#001B3D] rounded-[18px] p-1 bg-white">
        {/* The rounded-tl-none makes the corner under the first tab sharp like Figma */}
        {tabs.map(
          (tab) =>
            tab.id === activeTab && (
              <ShipmentForm key={tab.id} tabId={tab.id} />
            ),
        )}
      </div>
    </div>
  );
}

type Props = {
  tabId: number; // Keep this as tabId since that's what your map is passing
};

function ShipmentForm({}: Props) {
  // Ensure tabId is used here
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const parsedLat = Number(lat);
  const parsedLng = Number(lng);

  return (
    <div className="flex">
      {/* Left Sidebar Tracker */}
      <div className="flex flex-col items-center w-24 py-4 border-r border-gray-100 relative">
        {/* The Vertical Line */}
        <div className="absolute top-10 bottom-10 w-0.5 bg-gray-100 -z-10"></div>

        <div className="flex flex-col gap-10">
          {/* Step 1: Done */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full border-2 border-green-500 bg-green-50 flex items-center justify-center text-green-500">
              <span className="material-symbols-outlined text-sm">check</span>
            </div>
            <span className="text-[10px] font-bold text-green-600">
              Location
            </span>
          </div>

          {/* Step 2: Active */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-md">
              <span className="material-symbols-outlined text-lg">
                inventory_2
              </span>
            </div>
            <span className="text-[10px] font-bold text-emerald-600">Sub1</span>
          </div>

          {/* Step 3: Pending */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center text-gray-300">
              <span className="material-symbols-outlined text-lg">person</span>
            </div>
            <span className="text-[10px] font-bold text-gray-400">Sub2</span>
          </div>
        </div>
      </div>

      {/* Forms Container */}
      <div className="flex-1 space-y-6">
        {/* Top Section: Side-by-Side Details Cards */}
        <div className="flex flex-row">
          {/* DetailCard 1 */}
          <div className="w-1/2">
            <DetailCard title="Details 1" className="w-full">
              <form className="grid grid-cols-2 gap-x-6 gap-y-4 ">
                <CustomTextField
                  label="First Name"
                  placeholder="First Name"
                  required
                />
                <CustomTextField label="Last Name" placeholder="Last Name" />
                <CustomTextField
                  label="Contact Person Name"
                  placeholder="Name"
                  required
                />

                {/* Contact Number Prefix */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-500 ml-2">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex border border-gray-300 rounded-full overflow-hidden focus-within:ring-1 focus-within:ring-blue-500 bg-white">
                    <select className="bg-gray-100 border-r border-gray-300 px-3 py-2 text-xs text-gray-600 outline-none">
                      <option>+ 94</option>
                    </select>
                    <input
                      type="tel"
                      className="w-full px-4 py-1.5 text-xs outline-none"
                    />
                  </div>
                </div>

                <div className="col-span-2 my-2 h-40 w-full rounded-2xl overflow-hidden border border-gray-200">
                  <MapPicker
                    lat={parsedLat}
                    lng={parsedLng}
                    onChange={(la, ln) => {
                      setLat(la.toFixed(6));
                      setLng(ln.toFixed(6));
                    }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <CustomTextField
                    label="Latitude"
                    value={lat}
                    placeholder="Select on map"
                    onChange={(e) => setLat(e.target.value)}
                  />
                  <CustomTextField
                    label="Longitude"
                    value={lng}
                    placeholder="Select on map"
                    onChange={(e) => setLng(e.target.value)}
                  />
                </div>

                {/* Province Select */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-500 ml-2">
                    Province <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full px-4 py-1.5 border border-gray-300 rounded-full text-xs text-gray-400 bg-white outline-none">
                    <option>Select the province</option>
                  </select>
                </div>

                <CustomTextField
                  label="District"
                  placeholder="District"
                  required
                />
                <CustomTextField label="City" placeholder="City" required />
                <CustomTextField
                  label="Street / Lane"
                  placeholder="Street"
                  required
                />
                <CustomTextField
                  label="Address Note"
                  placeholder="Note"
                  required
                />
              </form>
            </DetailCard>
          </div>

          {/* DetailCard 2 */}
          <div className="w-1/2">
            <DetailCard title="Details 1" className="w-full">
              <form className="grid grid-cols-2 gap-x-6 gap-y-4">
                <CustomTextField
                  label="First Name"
                  placeholder="First Name"
                  required
                />
                <CustomTextField label="Last Name" placeholder="Last Name" />
                <CustomTextField
                  label="Contact Person Name"
                  placeholder="Name"
                  required
                />

                {/* Contact Number Prefix */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-500 ml-2">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex border border-gray-300 rounded-full overflow-hidden focus-within:ring-1 focus-within:ring-blue-500 bg-white">
                    <select className="bg-gray-100 border-r border-gray-300 px-3 py-2 text-xs text-gray-600 outline-none">
                      <option>+ 94</option>
                    </select>
                    <input
                      type="tel"
                      className="w-full px-4 py-1.5 text-xs outline-none"
                    />
                  </div>
                </div>

                <div className="col-span-2 my-2 h-40 w-full rounded-2xl overflow-hidden border border-gray-200">
                  <MapPicker
                    lat={Number(lat)}
                    lng={Number(lng)}
                    onChange={(newLat, newLng) => {
                      setLat(newLat.toFixed(6));
                      setLng(newLng.toFixed(6));
                    }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <CustomTextField
                    label="Latitude"
                    value={lat}
                    placeholder="Select on map"
                    onChange={(e) => setLat(e.target.value)}
                  />
                  <CustomTextField
                    label="Longitude"
                    value={lng}
                    placeholder="Select on map"
                    onChange={(e) => setLng(e.target.value)}
                  />
                </div>

                {/* Province Select */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-500 ml-2">
                    Province <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full px-4 py-1.5 border border-gray-300 rounded-full text-xs text-gray-400 bg-white outline-none">
                    <option>Select the province</option>
                  </select>
                </div>

                <CustomTextField
                  label="District"
                  placeholder="District"
                  required
                />
                <CustomTextField label="City" placeholder="City" required />
                <CustomTextField
                  label="Street / Lane"
                  placeholder="Street"
                  required
                />
                <CustomTextField
                  label="Address Note"
                  placeholder="Note"
                  required
                />
              </form>
            </DetailCard>
          </div>

          <div className=""></div>
        </div>

        {/* Bottom Section: Full Width Sub Details */}
        <div className="w-ful">
          <DetailCard title="Sub Details" className="w-full">
            <form className="space-y-6">
              {/* Main Info Section */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                <div className="md:col-span-2">
                  <CustomTextField
                    label="Name"
                    placeholder="Enter name"
                    required
                  />
                </div>

                <div className="md:col-span-2 flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-500 ml-2">
                    Type
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-1.5 border border-gray-300 rounded-full text-xs text-gray-400 appearance-none bg-white outline-none">
                      <option>Select type</option>
                    </select>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <CustomTextField
                    label="Total Value"
                    placeholder="Enter total value"
                  />
                </div>

                <div className="md:col-span-6">
                  <CustomTextField
                    label="Description"
                    placeholder="Enter description"
                  />
                </div>
              </div>

              {/* Measurements Section */}
              <div className="border border-gray-200 rounded-2xl p-5 bg-gray-50/30">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  <CustomTextField
                    label="Quantity"
                    placeholder="Enter quantity"
                    required
                  />
                  <CustomTextField label="Number" placeholder="Enter number" />
                  <CustomTextField
                    label="Weight (Kg)"
                    placeholder="Enter weight"
                  />
                  <CustomTextField
                    label="Height (m³)"
                    placeholder="Enter height"
                  />
                  <CustomTextField
                    label="Length (m)"
                    placeholder="Enter length"
                  />
                  <CustomTextField label="Width" placeholder="Enter width" />
                </div>
              </div>
            </form>
          </DetailCard>
        </div>

        <button className="bg-[#001B3D] text-white ">hi</button>
      </div>
    </div>
  );
}
