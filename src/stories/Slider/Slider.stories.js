import React from "react";
import { CustomRangeSlider, CustomSlider } from "./Slider";

export default {
  title: "Components/Slider",
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isNumberLabel: {
      control: "boolean",
    },
    color: {
      control: "color",
    },
  },
};

export const Slider = (args) => <CustomSlider {...args} />;
Slider.args = {
  isNumberLabel: true,
  isValue: true,
  color: "#e86c00",
};

export const RangeSlider = (args) => <CustomRangeSlider {...args} />;
RangeSlider.args = {
  isNumberLabel: true,
  color: "#e86c00",
};

RangeSlider.storyName="RangeSlider";