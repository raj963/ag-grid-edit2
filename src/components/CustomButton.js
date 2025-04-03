import React from "react";

const CustomButton = ({ label, color = "default", onClose }) => {
  // Define colors based on the image
  const colorStyles = {
    green: { backgroundColor: "#2d7f4f", color: "#ffffff" }, // Matching green
    red: { backgroundColor: "#c62828", color: "#ffffff" }, // Matching red
    default: { backgroundColor: "#ccc", color: "#000" },
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "8px 12px",
        borderRadius: "5px",
        fontWeight: "bold",
        fontSize: "14px",
        ...colorStyles[color],
      }}
    >
      <span>{label}</span>
      <button
        onClick={onClose}
        style={{
          background: "transparent",
          border: "none",
          color: "#fff",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        ✖
      </button>
    </div>
  );
};

export default CustomButton;
