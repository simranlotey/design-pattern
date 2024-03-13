import React from "react";
import Tab from "./Tab";
import { ReactComponent as LeftIcon } from "../assets/HLeftIcon.svg";
import { ReactComponent as RightIcon } from "../assets/HRightIcon.svg";
import { ReactComponent as CheckIcon } from "../assets/CheckIcon.svg";

export default {
  title: "Components/Tab",
  component: Tab,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    iconPosition: {
      options: ["none", "right", "left"],
      control: { type: "select" },
    },
    color: { control: "color" },
  },
};

export const HorizontalTabs = (args) => (
  <Tab type="horizontal" {...args}>
    <LeftIcon
      className={`leftIcon ${args.iconPosition}`}
      style={{ fill: args.color }}
    />
    <span style={{ color: args.color }}>{args.tabName}</span>
    <RightIcon
      className={`HrightIcon ${args.iconPosition}`}
      style={{ fill: args.color }}
    />
  </Tab>
);
HorizontalTabs.args = {
  iconPosition: "right",
  tabName: "Horizontal Tabs",
  color: "#CC5F00",
  isActive: true,
  type: "horizontal",
};
HorizontalTabs.storyName = "Horizontal Tab";

export const VerticalTabs = (args) => (
  <Tab type="vertical" {...args}>
    <CheckIcon
      className={`leftIcon ${args.iconPosition}`}
      style={{ fill: args.color }}
    />
    <span style={{ color: args.color }}>{args.tabName}</span>
    <CheckIcon
      className={`rightIcon ${args.iconPosition}`}
      style={{ fill: args.color }}
    />
  </Tab>
);

VerticalTabs.args = {
  iconPosition: "right",
  tabName: "Vertical Tabs",
  color: "#CC5F00",
  isActive: true,
  type: "vertical",
};
VerticalTabs.storyName = "Vertical Tab";
