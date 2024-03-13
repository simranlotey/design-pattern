import React, { useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as TriangleExclamationIcon } from "../assets/TriangleExclamationIcon.svg";
import { ReactComponent as CloseIcon } from "../assets/CloseIcon.svg";
import "./Tooltip.css";

const Tooltip = ({ text, position }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <>
      {showTooltip && (
        <div className="tooltip-container">
          <div className={`tooltip ${position}`}>
            <TriangleExclamationIcon className="tooltip-tri-exclamation" />
            <div className="tooltip-text">{text}</div>
            <CloseIcon className="tooltip-close-btn" onClick={toggleTooltip} />
          </div>
        </div>
      )}
    </>
  );
};

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["top", "bottom", "left", "right"]).isRequired,
};

Tooltip.defaultProps = {
  position: "left",
};

export default Tooltip;
