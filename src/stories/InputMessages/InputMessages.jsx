import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as ErrorIcon } from "../assets/ErrorIcon.svg";
import "./InputMessages.css";

const CustomInputMessage = ({
  severity,
  message,
  borderRadius,
  backgroundColor,
  iconColor,
  textColor,
}) => {
  return (
    <>
      <div
        className={`custom-input-messages ${severity}`}
        style={{ borderRadius, backgroundColor }}
      >
        <ErrorIcon className="error-icons" style={{ fill: iconColor }} />
        <span className="custom-input-message" style={{ color: textColor }}>
          {message}
        </span>
      </div>
    </>
  );
};

CustomInputMessage.propTypes = {
  severity: PropTypes.oneOf(["success", "warning", "error", "info"]),
  message: PropTypes.string,
  borderRadius: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  iconColor: PropTypes.string,
};

CustomInputMessage.defaultProps = {
  severity: "info",
  borderRadius: "8px",
};

export default CustomInputMessage;
