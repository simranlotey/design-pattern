import React from "react";
import OutlinedTag from "./OutlinedTag";

export default {
  title: "Components/Tag",
  component: OutlinedTag,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    textColor: { control: "color" },
    borderColor: { control: "color" },
  },
};

export const OutlinedTags = (args) => <OutlinedTag {...args} />;
OutlinedTags.args = {
  children: "Tag",
  textColor: "#2196f3",
  borderColor: "#2196f3",
};
OutlinedTags.storyName = "Outline Tag";
