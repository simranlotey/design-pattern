import React from "react";
import Tag from "./Tag";

export default {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    color: {
      options: ["success", "warning", "error", "info"],
      control: { type: "select" },
    },
    variant: {
      options: ["contained", "outlined", "text"],
      control: { type: "select" },
    },
  },
};

export const Tags = (args) => <Tag {...args}></Tag>;
Tags.args = {
  color: "info",
  variant: "contained",
  children: "Tag",
};
