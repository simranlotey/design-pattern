import React from "react";
import "./RoundButton.css";

const CustomButton = ({ children, textColor, backgroundColor, size, borderRadius }) => {
  return (
    <button
      className={`round-custom-button ${size}`}
      style={{ color: textColor, backgroundColor: backgroundColor }}
    >
      {children}
    </button>
  );
};

export default CustomButton;
