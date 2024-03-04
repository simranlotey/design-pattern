import React from 'react';
import Button from '@mui/material/Button';

const CustomTag = ({ children, ...props }) => {
  return (
    <Button sx={{ padding: "3px 8px", m: 0, minWidth: "48px", fontWeight: "700",  textTransform: "none" }} {...props}>
      {children}
    </Button>
  );
};

export default CustomTag;
