import React from "react";
import Slider from "./Slider";

export default {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
};

export const CustomSlider = (args) => <Slider {...args} />;

CustomSlider.args = {
  isNumberLabel: true,
  isValue: true,
  color: "#e86c00",
};

CustomSlider.storyName = "NumberSlider";
