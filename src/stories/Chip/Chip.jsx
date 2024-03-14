import React from "react";
import { ReactComponent as TickIcon } from "../assets/TickIcon.svg";
import { ReactComponent as CircleCloseIcon } from "../assets/CircleCloseIcon.svg";
import PropTypes from "prop-types";
import "./Chip.css";

const Chip = ({
  children,
  backgroundColor,
  textColor,
  borderRadius,
  border,
  size,
  disabled,
  isLeftIcon,
}) => {
  const chipStyle = {
    backgroundColor,
    color: textColor,
    borderRadius,
    border,
  };

  return (
    <button
      type="chip"
      className={[
        "custom-chip",
        `custom-chip--${size}`,
        disabled ? "custom-chip--disabled" : "",
      ].join(" ")}
      style={chipStyle}
      disabled={disabled}
    >
      <span>
        {isLeftIcon && (
          <TickIcon
            style={{ fill: textColor }}
            className={`chip-tick-icon--${size}`}
          />
        )}
        {children}
        {!isLeftIcon && (
          <CircleCloseIcon
            style={{ fill: textColor }}
            className={`chip-close-icon--${size}`}
          />
        )}
      </span>
    </button>
  );
};

Chip.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  isLeftIcon: PropTypes.bool,
  borderRadius: PropTypes.string,
  border: PropTypes.string,
  disabled: PropTypes.bool,
};

Chip.defaultProps = {
  size: "medium",
  backgroundColor: "#2196f3",
  textColor: "#fff",
  borderRadius: "8px",
  isLeftIcon: true,
  border: "none",
  disabled: false,
};

export default Chip;
