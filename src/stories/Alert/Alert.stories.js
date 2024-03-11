import React from "react";
import Alert from "./Alert";

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


export const Alerts = (args) => <Alert {...args} />;
Alerts.args = {
  severity: "info",
  alertTitle: "Alert Text",
  borderRadius: 8,
};
