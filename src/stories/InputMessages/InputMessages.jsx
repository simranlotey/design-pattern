import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as ErrorIcon } from "../assets/ErrorIcon.svg";
import "./InputMessages.css";

const CustomInputMessage = ({
  severity,
  message,
  borderRadius,
  backgroundColor,
}) => {
  return (
    <>
      <div
        className={`custom-input-messages ${severity}`}
        style={{ borderRadius, backgroundColor }}
      >
        <ErrorIcon className="error-icons" />
        <span className="custom-input-message">{message}</span>
      </div>
    </>
  );
};

CustomInputMessage.propTypes = {
  severity: PropTypes.oneOf(["success", "warning", "error", "info"]),
  message: PropTypes.string.isRequired,
  borderRadius: PropTypes.string,
  backgroundColor: PropTypes.string,
};

CustomInputMessage.defaultProps = {
  severity: 'info',
  borderRadius: "8px",
};

export default CustomInputMessage;
