import React from "react";
import OutlinedButton from "./OutlinedButton";

export default {
  title: "Components/Button",
  component: OutlinedButton,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
    textColor: { control: "color" },
    borderColor: { control: "color" },
  },
};

export const OutlinedButtons = (args) => <OutlinedButton {...args} />;
OutlinedButtons.args = {
  size: "small",
  children: "Button",
  textColor: "#2196f3",
  borderColor: "#2196f3",
  borderRadius: 8,
};
OutlinedButtons.storyName = "Outline Button";
