import React from "react";
import "./DotBadge.css";

const DotBadgeComponent = ({ color }) => {
  return <div className="dot-badge" style={{ backgroundColor: color }} />;
};

export default DotBadgeComponent;
