import React from "react";
import Header from "./Header";

export default {
  title: "Components/Modal",
  component: Header,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    severity: {
      options: ["success", "warning", "error", "info"],
      control: { type: "select" },
    },
  },
};

export const HeaderCustom = (args) => <Header {...args} />;
HeaderCustom.args = {
  severity: "info",
  headerTitle: "Modal Title",
  borderRadius: 0,
};

HeaderCustom.storyName = "Header";
