import React from "react";
import CustomCheckbox from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: CustomCheckbox,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
};

export const Checkbox = (args) => <CustomCheckbox {...args} />;
Checkbox.args = {
  labelText: "Checkbox",
  isLabelText: true,
  disabled: false,
};