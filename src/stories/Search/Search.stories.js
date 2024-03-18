import React from "react";
import Search from "./Search";

export default {
  title: "Components/Search",
  component: Search,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
      defaultValue: "small",
    },
    isLeft: {
      control: { type: "boolean" },
      defaultValue: true,
    },
  },
};

const Templates = (args) => <Search {...args} />;

export const LeftSearch = Templates.bind({});
LeftSearch.args = {
  size: "medium",
  isLeft: true,
};

export const RightSearch = Templates.bind({});
RightSearch.args = {
  size: "medium",
  isLeft: false,
};
