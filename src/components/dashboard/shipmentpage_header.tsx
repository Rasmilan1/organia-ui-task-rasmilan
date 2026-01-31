export default function Menu2Header() {
  return (
    <div className="h-24.25 w-full bg-white border-b border-[#D9D9D9] flex flex-col">
      {/* Status btns */}
      <div className="h-[65%] flex items-center justify-between px-6 border-b border-[#D9D9D9]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-[#001B3D] text-white px-3 rounded-[18px] text-sm w-45.75 h-[28.54px]">
            <span className="material-symbols-outlined text-sm text-[#ADADAD]">
              radio_button_checked
            </span>
            <span className="text-[15px] font-bold">S - 01</span>
            <span className="ml-auto bg-red-500 rounded-full w-[19.75px] h-[19.75px] flex items-center justify-center text-sm">
              $
            </span>
          </div>

          <span className="text-gray-400">»</span>

          <div className="flex items-center gap-2 bg-[#E9EEF5] text-[#001B3D] px-3 text-sm rounded-[18px] w-45.75 h-[28.54px]">
            <span className="material-symbols-outlined text-sm text-orange-400">
              location_on
            </span>
            <span className="text-[15px] font-bold">S - 02</span>
            <span className="ml-auto bg-red-500 text-white rounded-full w-[19.75px] h-[19.75px] flex items-center justify-center text-sm">
              $
            </span>
          </div>
        </div>

        <span className="material-symbols-outlined cursor-pointer text-gray-600 hover:text-black">
          sync_alt
        </span>
      </div>

      <div className="h-[35%] flex items-center px-6 gap-2">
        <span className="material-symbols-outlined text-lg">chevron_right</span>
        <span className="font-bold text-[#000817] text-sm uppercase tracking-wide">
          Main Details
        </span>
      </div>
    </div>
  );
}
