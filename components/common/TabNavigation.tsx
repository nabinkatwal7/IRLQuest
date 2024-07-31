import React from "react";

const TabNavigation = ({
  tabs,
  activeTab,
  setActiveTab,
}: {
  tabs: string[];
  activeTab: number;
  setActiveTab: (number: number) => void;
}) => {
  return (
    <div className="flex flex-row gap-4">
      {tabs.map((tab, i) => (
        <button
          key={i}
          onClick={() => setActiveTab(i)}
          className={`tab text-xl transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1  ${
            activeTab === i
              ? "text-white bg-black py-2 px-4 rounded-lg shadow-lg"
              : ""
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
