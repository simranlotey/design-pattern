import React from "react";
import VerticalTab from "./VerticalTab";

export default {
  title: "Components/Tab",
  component: VerticalTab,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    iconPosition: {
      options: ["none", "right", "left"],
      control: { type: "select" },
    },
    color: { control: "color" },
  },
};

export const VerticalTabs = (args) => <VerticalTab {...args}></VerticalTab>;
VerticalTabs.args = {
  iconPosition: "right",
  tabName: "Vertical Tabs",
  color: "#CC5F00",
  isActive: true,
};
VerticalTabs.storyName = "Vertical Tab";
