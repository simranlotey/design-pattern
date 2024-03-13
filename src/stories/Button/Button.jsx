import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({
  children,
  backgroundColor,
  textColor,
  borderRadius,
  border,
  size,
}) => {
  const buttonStyle = {
    backgroundColor,
    color: textColor,
    borderRadius,
    border,
  };

  return (
    <button
      type="button"
      className={["custom-button", `custom-button--${size}`].join(" ")}
      style={buttonStyle}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  borderRadius: PropTypes.string,
  border: PropTypes.string,
};

Button.defaultProps = {
  size: "medium",
  backgroundColor: "#2196f3",
  textColor: "#ffffff",
  borderRadius: "5px",
  border: "none",
};

export default Button;
