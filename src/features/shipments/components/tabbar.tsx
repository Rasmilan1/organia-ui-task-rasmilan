import React, { useRef } from "react";

const BAR_HEIGHT = 44;
type TabProps = {
  text: string;
  isActive: boolean;
  onClick: () => void;
  activeColor: string;
  height: number;
};

function Tab({ text, isActive, onClick, activeColor, height }: TabProps) {
  return (
    <div
      className={`
        flex
        h-full
        items-center
        ${isActive ? "z-10" : ""}
      `}
    >
      {/* LEFT CURVE */}
      {isActive && (
        <svg
          width={height}
          height={height}
          viewBox="0 0 100 100"
          style={{ marginRight: "-1px" }}
        >
          <path d="M100 25 C100 50 80 100 0 100 L100 100" fill={activeColor} />
        </svg>
      )}

      {/* BODY */}
      <button
        onClick={onClick}
        style={{ backgroundColor: isActive ? activeColor : "transparent" }}
        className={`
          flex
          h-full
          px-6
          text-sm font-bold
          rounded-t-2xl
          items-center
          sm:w-35
          md:w-45
          lg:w-55
          ${isActive ? "text-white" : "text-gray-600"}
        `}
      >
        {text}
      </button>

      {/* RIGHT CURVE */}
      {isActive && (
        <svg
          width={height}
          height={height}
          viewBox="0 0 100 100"
          style={{ marginLeft: "-1px" }}
        >
          <path d="M0 20 C0 50 20 100 100 100 L0 100 Z" fill={activeColor} />
        </svg>
      )}
    </div>
  );
}

type TabbarProps = {
  tabs: string[];
  active: string;
  onTabClick: (tab: string) => void;
  onAddTab: () => void;
};

export default function Tabbar({
  tabs,
  active,
  onTabClick,
  onAddTab,
}: TabbarProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const isFirstTabActive = active === tabs[0];

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 140;
    scrollRef.current.scrollBy({
      left: dir === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="
        w-full
      "
    >
      <div
        className="
          flex
        "
      >
        {/* LEFT CURVE */}
        <svg
          width={BAR_HEIGHT}
          height={BAR_HEIGHT}
          viewBox="0 0 95 90"
          style={{
            opacity: isFirstTabActive ? 0 : 1,
            transition: "opacity 0.2s",
          }}
        >
          <path d="M100 0 C100 50 80 100 0 100 L100 100 Z" fill="#FFFFFF" />
        </svg>

        <div
          style={{
            height: BAR_HEIGHT,
            background: isFirstTabActive
              ? "linear-gradient(to right, transparent, white 25%)"
              : "white",
          }}
          className="
            flex flex-1 overflow-hidden
            rounded-t-2xl
            items-center
          "
        >
          <div
            className="
              flex-1 overflow-hidden
              h-full
              relative
            "
          >
            <div
              ref={scrollRef}
              style={{ scrollBehavior: "smooth" }}
              className="
                flex overflow-hidden
                absolute inset-0 items-center no-scrollbar
              "
            >
              <div
                className="
                  flex
                  h-full min-w-max
                  space-x-1
                "
              >
                {tabs.map((tab) => (
                  <Tab
                    key={tab}
                    text={tab}
                    isActive={active === tab}
                    onClick={() => onTabClick(tab)}
                    activeColor="#001B3D"
                    height={BAR_HEIGHT}
                  />
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => scroll("left")}
            className="
              flex
              h-7 w-7
              text-gray-400
              items-center justify-center
            "
          >
            {"<"}
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="
              flex
              h-7 w-7
              text-gray-400
              items-center justify-center
            "
          >
            {">"}
          </button>

          <button
            onClick={onAddTab}
            className="
              h-7 w-auto
              px-3 mr-2
              text-xs text-white
              bg-[linear-gradient(90deg,#E51C25_0%,#031B3C_68%)]
              rounded-full
              shrink-0
              sm:w-25
              md:w-36
            "
          >
            Add T
          </button>
        </div>

        {/* RIGHT CURVE */}
        <svg width={BAR_HEIGHT} height={BAR_HEIGHT} viewBox="5 0 100 95">
          <path d="M0 0 C0 50 20 100 100 100 L0 100 Z" fill="#FFFFFF" />
        </svg>
      </div>
    </div>
  );
}
