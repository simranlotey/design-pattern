import React from "react";
import HorizontalTab from "./HorizontalTab";

export default {
  title: "Components/Tab",
  component: HorizontalTab,
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

export const HorizontalTabs = (args) => <HorizontalTab {...args} />;
HorizontalTabs.args = {
  iconPosition: "right",
  tabName: "Horizontal Tabs",
  color: "#CC5F00",
  isActive: true,
};
HorizontalTabs.storyName = "Horizontal Tab";
