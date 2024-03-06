import React from "react";
import "./OutlinedTag.css";

const OutlinedCustomTag = ({ children, textColor, borderColor }) => {
  return (
    <button
      className="outlined-custom-tag"
      style={{ color: textColor, borderColor: borderColor }}
    >
      {children}
    </button>
  );
};

export default OutlinedCustomTag;
