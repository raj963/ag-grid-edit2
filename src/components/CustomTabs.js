import React, { useState } from "react";

const CustomTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "STAAR Recommended Group Incident" },
    { label: "Incident Open More Then 24 Hrs" },
  ];

  return (
    <div style={{ display: "flex", borderBottom: "2px solid #ddd" }}>
      {tabs.map((tab, index) => (
        <div
          key={index}
          onClick={() => setActiveTab(index)}
          style={{
            padding: "12px 20px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: activeTab === index ? "bold" : "normal",
            borderTop: activeTab === index ? "3px solid #c62828" : "3px solid transparent",
            borderRight: index === 0 ? "1px solid #ddd" : "none",
            backgroundColor: activeTab === index ? "#fff" : "#f5f5f5",
            color: "#000",
            minWidth: "250px",
            textAlign: "center",
          }}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
};

export default CustomTabs;
