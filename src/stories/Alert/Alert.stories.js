import React from "react";
import Alert from "./Alert";

export default {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: "color" },
    severity: {
      options: ["success", "warning", "error", "info"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Alert {...args} />;

export const Alerts = Template.bind({});
Alerts.args = {
  severity: "info",
  alertTitle: "Alert Text",
  borderRadius: "8px",
};
