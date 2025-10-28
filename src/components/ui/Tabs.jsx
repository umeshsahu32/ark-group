import React from "react";

const Tabs = ({ tabs, activeTab, setActiveTab, className = "" }) => {
  return (
    <div className={`flex flex-wrap justify-center gap-4 bg-white p-2 py-4 rounded-2xl shadow-lg border border-gray-100 ${className}`}>
      {tabs.map((tab) => {
        const IconComponent = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
              isActive
                ? "bg-linear-to-r from-primary to-secondary text-white shadow-lg transform scale-105"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {IconComponent && <IconComponent className="text-lg" />}
            <span className="font-semibold">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;