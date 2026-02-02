export default function ShipmentPageHeader() {
  return (
    <div
      className="
        flex flex-col
        w-full
        bg-white
        border-b border-[#D9D9D9]
      "
    >
      {/* Status btns */}
      <div
        className="
          flex
          min-h-12.5
          px-4 py-2
          border-b border-[#D9D9D9]
          items-center justify-between
          md:h-14 md:px-6
        "
      >
        <div
          className="
            flex overflow-x-auto
            items-center gap-2 no-scrollbar
            md:gap-4
          "
        >
          <div
            className="
              flex
              min-w-30 h-8
              px-3 py-1
              text-white text-xs
              bg-[#001B3D]
              rounded-full
              items-center gap-2
              md:w-44 md:text-sm
            "
          >
            <span
              className="
                text-[14px] text-[#ADADAD]
                material-symbols-outlined shrink-0
                md:text-sm
              "
            >
              radio_button_checked
            </span>
            <span
              className="
                text-[13px] font-bold whitespace-nowrap
                md:text-[15px]
              "
            >
              S - 01
            </span>
            <span
              className="
                flex
                w-4 h-4
                ml-auto
                text-[10px]
                bg-red-500
                rounded-full
                items-center justify-center shrink-0
                md:w-5 md:h-5 md:text-xs
              "
            >
              $
            </span>
          </div>

          <span
            className="
              text-gray-400 text-sm
              shrink-0
              md:text-base
            "
          >
            »
          </span>

          <div
            className="
              flex
              min-w-30 h-8
              px-3 py-1
              text-[#001B3D] text-xs
              bg-[#E9EEF5]
              rounded-full
              items-center gap-2
              md:w-44 md:text-sm
            "
          >
            <span
              className="
                text-[14px] text-orange-400
                material-symbols-outlined shrink-0
                md:text-sm
              "
            >
              location_on
            </span>
            <span
              className="
                text-[13px] font-bold whitespace-nowrap
                md:text-[15px]
              "
            >
              S - 02
            </span>
            <span
              className="
                flex
                w-4 h-4
                ml-auto
                text-white text-[10px]
                bg-red-500
                rounded-full
                items-center justify-center shrink-0
                md:w-5 md:h-5 md:text-xs
              "
            >
              $
            </span>
          </div>
        </div>

        <span
          className="
            ml-2
            text-gray-600 text-xl
            cursor-pointer
            material-symbols-outlined hover:text-black
          "
        >
          sync_alt
        </span>
      </div>

      <div
        className="
          flex
          h-8
          px-4
          items-center gap-2
          md:h-10 md:px-6
        "
      >
        <span
          className="
            text-base
            material-symbols-outlined
            md:text-lg
          "
        >
          chevron_right
        </span>
        <span
          className="
            font-bold text-[#000817] text-[10px] tracking-wide
            uppercase
            md:text-xs
          "
        >
          Main Details
        </span>
      </div>
    </div>
  );
}
