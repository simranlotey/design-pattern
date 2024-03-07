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

export const HorizontalTabs = (args) => <HorizontalTab {...args}></HorizontalTab>;
HorizontalTabs.args = {
  iconPosition: "right",
  tabName: "Horizontal Tabs",
  color: "#CC5F00",
};
HorizontalTabs.storyName = "Horizontal Tab";
