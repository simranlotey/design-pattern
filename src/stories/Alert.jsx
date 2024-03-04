import React, { useState } from "react";
import Alert from "@mui/material/Alert";

const CustomAlert = ({ severity, message, icon, borderRadius, backgroundColor }) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <Alert
          icon={icon}
          severity={severity}
          onClose={handleClose}
          sx={{ borderRadius: borderRadius, backgroundColor: backgroundColor }}
        >
          {message}
        </Alert>
      )}
    </>
  );
};

export default CustomAlert;
