import React from "react";
import Search from "./Search";

export default {
  title: "Components/Search",
  component: Search,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
      defaultValue: "small",
    },
  },
};

const Template = (args) => <Search {...args} />;

export const LeftSearch = Template.bind({});
LeftSearch.args = {
  size: "small",
};
