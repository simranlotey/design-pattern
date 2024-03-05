// Status.js
import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Dot = styled("div")(({ theme, color }) => ({
  width: 10,
  height: 10,
  backgroundColor: color,
  borderRadius: "50%",
  marginRight: theme.spacing(1.4),
}));

const Status = ({ statusColor }) => {
  return (
    <Box display="flex" alignItems="center">
      <Dot color={statusColor} />
      <Typography variant="body2" color="textSecondary">
        Status
      </Typography>
    </Box>
  );
};

export default Status;
