import React from "react";
import RangeSelector from "./RangeSelector";

export default {
  title: "Components/Slider",
  component: RangeSelector,
  tags: ["autodocs"],
};

export const RangeSelectors = (args) => <RangeSelector {...args}/>;

RangeSelectors.args = {
  isNumberLabel: true,
  color: "#e86c00"
};

RangeSelectors.storyName = "Range Selector";