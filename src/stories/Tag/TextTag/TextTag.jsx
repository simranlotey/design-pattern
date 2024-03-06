import React from "react";
import "./TextTag.css";

const TextCustomTag = ({ children, textColor }) => {
  return (
    <button className="tag-custom-tag" style={{ color: textColor }}>
      {children}
    </button>
  );
};

export default TextCustomTag;
