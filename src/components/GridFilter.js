import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSave, faCog } from "@fortawesome/free-solid-svg-icons";

const GridFilter = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "5px", border: "1px solid #ccc", padding: "5px", width: "fit-content" }}>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search"
        style={{
          border: "1px solid #000",
          padding: "8px 10px",
          fontSize: "14px",
          width: "200px",
          outline: "none",
        }}
      />

      {/* Filter Button */}
      <button
        style={getButtonStyle(activeButton === "filter")}
        onClick={() => handleButtonClick("filter")}
      >
        <FontAwesomeIcon icon={faFilter} />
      </button>

      {/* Saved Views Button */}
      <button
        style={getButtonStyle(activeButton === "savedViews")}
        onClick={() => handleButtonClick("savedViews")}
      >
        <FontAwesomeIcon icon={faSave} /> Saved Views
      </button>

      {/* Columns Button */}
      <button
        style={getButtonStyle(activeButton === "columns")}
        onClick={() => handleButtonClick("columns")}
      >
        <FontAwesomeIcon icon={faCog} /> Columns
      </button>
    </div>
  );
};

// Button styling function (hover & active state)
const getButtonStyle = (isActive) => ({
  border: isActive ? "1px solid #c62828" : "1px solid #000",
  padding: "8px 12px",
  fontSize: "14px",
  background: isActive ? "#c62828" : "#fff",
  color: isActive ? "#fff" : "#000",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "5px",
  transition: "all 0.2s ease-in-out",
  fontWeight: isActive ? "bold" : "normal",
  minWidth: "110px",
  textAlign: "center",
  borderRadius: "4px",
  boxShadow: isActive ? "2px 2px 5px rgba(0,0,0,0.2)" : "none",
  ":hover": {
    background: "#f0f0f0",
  },
});

export default GridFilter;
