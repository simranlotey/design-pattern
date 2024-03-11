import React from "react";
import InputMessages from "./InputMessages";

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

export const InputMessage = (args) => <InputMessages {...args} />;
InputMessage.args = {
  severity: "info",
  message: "This is a SUCCESS message",
  borderRadius: 8,
};
