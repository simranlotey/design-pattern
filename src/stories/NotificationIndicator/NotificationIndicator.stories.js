import React from "react";
import { DotBadge, NumberBadge } from "./NotificationIndicator";

export default {
  title: "Components/NotificationIndicator",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const DotBadgeStory = (args) => <DotBadge {...args} />;
DotBadgeStory.args = {
  color: "#da1414",
};
DotBadgeStory.storyName = "DotBadge";

export const NumberBadgeStory = (args) => <NumberBadge {...args} />;
NumberBadgeStory.args = {
  badgeContent: "02",
  color: "#fff",
  backgroundColor: "#da1414",
};
NumberBadgeStory.storyName = "NumberBadge";
