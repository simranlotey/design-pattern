import React from "react";
import PropTypes from "prop-types";
import "./Tab.css";

function Tab({ type, color, isActive, children }) {
  const TabType = type === "horizontal" ? "horizontal-tab" : "vertical-tab";

  return (
    <div
      className={`tab ${TabType} ${isActive ? "isActive" : ""}`}
      style={{ borderColor: color }}
    >
      {children}
    </div>
  );
}

Tab.propTypes = {
  type: PropTypes.oneOf(["horizontal", "vertical"]).isRequired,
  color: PropTypes.string.isRequired,
  tabName: PropTypes.string.isRequired,
  iconPosition: PropTypes.oneOf(["none", "right", "left"]).isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Tab;
