import React from "react";
import PropTypes from "prop-types";
import "./Divider.css";

function Divider({ orientation }) {
  return <div className={`divider ${orientation}-divider`} />;
}

Divider.propTypes = {
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
};

export default Divider;
