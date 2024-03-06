import React from "react";
import Alert from "./Alert";
import ErrorIcon from "@mui/icons-material/Error";

export default {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    severity: {
      options: ["success", "warning", "error", "info"],
      control: { type: "select" },
    },
  },
};

const AlertTemplate = (args) => <Alert {...args} icon={<ErrorIcon />} />;

export const Alerts = (args) => <AlertTemplate {...args} />;
Alerts.args = {
  severity: "info",
  message: "Alert Text",
  borderRadius: 8,
};
