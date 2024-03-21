import React from "react";
import InputMessage from "./InputMessages";

export default {
  title: "Components/InputMessage",
  component: InputMessage,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
    iconColor: { control: "color" },
    severity: {
      options: ["success", "warning", "error", "info"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <InputMessage {...args} />;

export const InputMessages = Template.bind({});
InputMessages.args = {
  severity: "info",
  message: "This is a SUCCESS message",
  borderRadius: "8px",
};
InputMessages.storyName = "InputMessage";
