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
  size: "small",
  isLeft: true,
};

LeftSearch.storyName="LeftSearch";

export const RightSearch = Templates.bind({});
RightSearch.args = {
  size: "small",
  isLeft: false,
};

RightSearch.storyName="RightSearch";