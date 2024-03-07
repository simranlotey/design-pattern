import React from "react";
import "./OutlinedButton.css";

const OutlinedCustomButton = ({ children, textColor, borderColor, size, borderRadius }) => {
  return (
    <button
      className={`outlined-custom-button ${size}`}
      style={{ color: textColor, borderColor: borderColor, borderRadius: borderRadius }}
    >
      {children}
    </button>
  );
};

export default OutlinedCustomButton;
