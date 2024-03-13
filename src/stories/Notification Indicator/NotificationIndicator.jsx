import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./NotificationIndicator.css";

export function DotBadge({ color }) {
  return <div className="dot-badge" style={{ backgroundColor: color }} />;
}

DotBadge.propTypes = {
  color: PropTypes.string.isRequired,
};

export function NumberBadge({ color, backgroundColor, badgeContent }) {
  const [number, setNumber] = useState(badgeContent);

  useEffect(() => {
    if (parseInt(badgeContent) > 99) {
      setNumber("+99");
    } else {
      setNumber(badgeContent);
    }
  }, [badgeContent]);

  return (
    <div
      className="number-custom-badge"
      style={{ color: color, backgroundColor: backgroundColor }}
    >
      {number}
    </div>
  );
}

NumberBadge.propTypes = {
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  badgeContent: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};
