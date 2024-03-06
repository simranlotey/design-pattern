import React from "react";
import CustomRightSearch from "./RightSearch";

export default {
  title: "Components/Search",
  component: CustomRightSearch,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
      defaultValue: "small",
    },
  },
};

const Template = (args) => <CustomRightSearch {...args} />;

export const RightSearch = Template.bind({});
RightSearch.args = {
  size: "small",
};
