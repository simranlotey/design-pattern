import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function CustomSwitch({ labelName, showLabel, showDisabled, thumbColor }) {
  const theme = createTheme({
    components: {
      MuiSwitch: {
        styleOverrides: {
          thumb: {
            backgroundColor: thumbColor,
            opacity: !showDisabled ? "1" : "0.6",
          },

          track: {
            backgroundColor: "#DADEE3",
            ".Mui-checked.Mui-checked + &": {
              backgroundColor: "#DADEE3",
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <FormControlLabel
        control={<Switch defaultChecked />}
        label={showLabel && labelName}
        disabled={showDisabled && "disabled"}
      />
    </ThemeProvider>
  );
}

export default CustomSwitch;
