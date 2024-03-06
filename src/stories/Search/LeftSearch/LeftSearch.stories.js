import React from "react";
import LeftSearch from "./LeftSearch";

export default {
  title: "Components/Search",
  component: LeftSearch,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
      defaultValue: "small",
    },
  },
};

const Template = (args) => <LeftSearch {...args} />;

export const LeftSearchs = Template.bind({});
LeftSearchs.args = {
  size: "small",
};
LeftSearchs.storyName = "Left Search"
