import React from "react";
import InputMessages from "./InputMessages";
import ErrorIcon from "@mui/icons-material/Error";

export default {
  title: "Components/Input Message",
  component: InputMessages,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    severity: {
      options: ["success", "warning", "error", "info"],
      control: { type: "select" },
    },
  },
};

const InputMessageTemplate = (args) => (
  <InputMessages {...args} icon={<ErrorIcon />} />
);

export const InputMessage = (args) => <InputMessageTemplate {...args} />;
InputMessage.args = {
  severity: "info",
  message: "This is a SUCCESS message",
  borderRadius: 3,
};
