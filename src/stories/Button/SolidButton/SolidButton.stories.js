import React from "react";
import SolidButton from "./SolidButton";

export default {
  title: "Components/Button",
  component: SolidButton,
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
    backgroundColor: { control: "color" },
  },
};

export const SolidButtons = (args) => <SolidButton {...args}></SolidButton>;
SolidButtons.args = {
  size: "small",
  children: "Button",
  textColor: "#fff",
  backgroundColor: "#2196f3",
  borderRadius: 8,
};
SolidButtons.storyName = "Solid Button";
