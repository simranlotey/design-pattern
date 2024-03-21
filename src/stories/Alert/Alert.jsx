import React, { useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as ErrorIcon } from "../assets/ErrorIcon.svg";
import { ReactComponent as CloseIcon } from "../assets/CloseIcon.svg";
import "./Alert.css";

const CustomAlert = ({
  severity,
  alertTitle,
  borderRadius,
  backgroundColor,
  textColor,
  iconColor,
}) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <div
          className={`custom-alert ${severity}`}
          style={{ borderRadius, backgroundColor }}
        >
          <ErrorIcon className="error-icons" style={{ fill: iconColor }} />
          <span className="custom-alert-message" style={{ color: textColor }}>
            {alertTitle}
          </span>
          <CloseIcon
            className="custom-alert-close-btn"
            onClick={handleClose}
            style={{ fill: iconColor }}
          />
        </div>
      )}
    </>
  );
};

CustomAlert.propTypes = {
  severity: PropTypes.oneOf(["error", "warning", "info", "success"]),
  alertTitle: PropTypes.string,
  borderRadius: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  iconColor: PropTypes.string,
};

CustomAlert.defaultProps = {
  severity: "info",
  borderRadius: "8px",
};

export default CustomAlert;
