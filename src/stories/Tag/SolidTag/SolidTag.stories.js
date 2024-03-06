import React from "react";
import SolidTag from "./SolidTag";

export default {
  title: "Components/Tag",
  component: SolidTag,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    textColor: { control: "color" },
    backgroundColor: { control: "color" },
  },
};

export const SolidTags = (args) => <SolidTag {...args}></SolidTag>;
SolidTags.args = {
  children: "Tag",
  textColor: "#fff",
  backgroundColor: "#2196f3",
};
SolidTags.storyName = "Solid Tag";
