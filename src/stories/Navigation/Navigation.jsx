import React from "react";
import PropTypes from "prop-types";
import "./Navigation.css";

function Navigation({ color, isActive, children }) {
  return (
    <div
      className={`navigation active-navigation ${isActive && "isActive"}`}
      style={{ borderColor: color }}
    >
      {children}
    </div>
  );
}

Navigation.propTypes = {
  color: PropTypes.string,
  navItem: PropTypes.string,
  isActive: PropTypes.bool,
  isCollapsed: PropTypes.bool,
  isIndicator: PropTypes.bool,
};

export default Navigation;
