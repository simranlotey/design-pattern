import React from "react";
import TextTag from "./TextTag";

export default {
  title: "Components/Tag",
  component: TextTag,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    textColor: { control: "color" },
  },
};

export const TextTags = (args) => <TextTag {...args} />;
TextTags.args = {
  children: "Tag",
  textColor: "#2196f3",
};
TextTags.storyName = "Text Tag";
