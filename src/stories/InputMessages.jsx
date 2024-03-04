import React from "react";
import Alert from "@mui/material/Alert";

const CustomInputMessage = ({
  severity,
  message,
  icon,
  borderRadius,
  backgroundColor,
}) => {
  return (
    <>
      <Alert
        icon={icon}
        severity={severity}
        sx={{ borderRadius: borderRadius, backgroundColor: backgroundColor }}
      >
        {message}
      </Alert>
    </>
  );
};

export default CustomInputMessage;
