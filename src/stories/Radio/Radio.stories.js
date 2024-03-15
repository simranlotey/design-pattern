import React from "react";
import Radio from "./Radio";

export default {
  title: "Components/Radio",
  component: Radio,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <Radio {...args} />;

export const CustomRadio = Template.bind({});
CustomRadio.args = {
  disabled: false,
  isLabelText: true
};
CustomRadio.storyName = "Radio";
