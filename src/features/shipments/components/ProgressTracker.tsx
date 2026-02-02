export default function ProgressTracker() {
  const steps = [
    { label: "Location", icon: "location_on", completed: true },
    { label: "Sub1", icon: "inventory_2", completed: true },
    { label: "Sub2", icon: "box_edit", completed: false },
    { label: "Sub3", icon: "person", completed: false },
  ];

  return (
    <div className="w-full p-4 md:w-64 md:p-2">
      <div className="flex relative justify-between md:flex-col md:gap-10">
        {/* LINE */}
        <div
          className="
            z-0 h-0.5 bg-gray-200 absolute top-3 left-6 right-6
            md:w-0.5 md:h-auto md:left-3 md:right-auto md:top-6 md:bottom-6
          "
        />

        {steps.map(({ label, icon, completed }) => (
          <div
            key={label}
            className="z-10 flex flex-col items-center gap-2 md:flex-row md:items-center md:gap-4"
          >
            {/* CIRCLE */}
            <div className="flex w-6 h-6 bg-white rounded-full relative items-center justify-center shrink-0">
              <div className="flex w-6 h-6 bg-[#E4EAF6] rounded-full items-center justify-center">
                {completed && (
                  <span className="text-green-500 text-[10px] font-bold">✓</span>
                )}
              </div>
            </div>

            {/* ICON AND LABEL */}
            <div className="flex flex-col items-center md:flex-row md:items-center md:gap-3">
              <div
                className={`
                  p-3 md:p-2 
                  bg-[#EBF1FF] rounded-xl md:rounded-lg 
                  shrink-0 flex items-center justify-center
                `}
              >
                <span
                  className={`
                    flex material-symbols-outlined
                    text-2xl md:text-xl
                    ${completed ? "text-green-500" : "text-slate-400"}
                  `}
                >
                  {icon}
                </span>
              </div>

              {/* Responsive Text */}
              <span
                className={`
                  text-[10px] md:text-xs font-bold whitespace-nowrap
                  ${completed ? "text-green-500" : "text-slate-400"}
                `}
              >
                {label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}