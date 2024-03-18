import React from "react";
import Divider from "./Divider";

export default {
  title: "Components/Divider",
  component: Divider,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <Divider {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
  orientation: "horizontal",
};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: "vertical",
};
