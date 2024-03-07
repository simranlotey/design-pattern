import React from "react";
import "./SolidButton.css";

const CustomButton = ({ children, textColor, backgroundColor, size, borderRadius }) => {
  return (
    <button
      className={`solid-custom-button ${size}`}
      style={{ color: textColor, backgroundColor: backgroundColor, borderRadius: borderRadius }}
    >
      {children}
    </button>
  );
};

export default CustomButton;
