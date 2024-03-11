import React from "react";
import "./SolidTag.css";

const CustomTag = ({ children, textColor, backgroundColor }) => {
  return (
    <button
      className="solid-custom-tag"
      style={{ color: textColor, backgroundColor: backgroundColor }}
    >
      {children}
    </button>
  );
};

export default CustomTag;
