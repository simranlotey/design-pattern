import React from "react";
import Status from "./Status";

export default {
  title: "Components/Status",
  component: Status,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <Status {...args} />;

export const CustomStatus = Template.bind({});
CustomStatus.args = {
  statusColor: "#E86C00",
};
CustomStatus.storyName="Status"