import React from "react";
import "./TextButton.css";

const TextCustomButton = ({ children, textColor, size }) => {
  return (
    <button className={`text-custom-button ${size}`} style={{ color: textColor }}>
      {children}
    </button>
  );
};

export default TextCustomButton;
