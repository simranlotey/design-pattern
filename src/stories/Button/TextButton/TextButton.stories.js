import React from "react";
import TextButton from "./TextButton";

export default {
  title: "Components/Button",
  component: TextButton,
  Tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
    textColor: { control: "color" },
  },
};

export const TextButtons = (args) => <TextButton {...args} />;
TextButtons.args = {
  size: "small",
  children: "Button",
  textColor: "#2196f3",
};
TextButtons.storyName = "Text Button";
