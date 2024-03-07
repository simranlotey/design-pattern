import React from "react";
import RoundButton from "./RoundButton";

export default {
  title: "Components/Button",
  component: RoundButton,
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

export const RoundButtons = (args) => <RoundButton {...args}></RoundButton>;
RoundButtons.args = {
  size: "small",
  children: "Button",
  textColor: "#fff",
  backgroundColor: "#2196f3",
};
RoundButtons.storyName = "Round Button";
