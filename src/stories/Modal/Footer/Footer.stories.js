import React from "react";
import Footer from "./Footer";

export default {
  title: "Components/Modal",
  component: Footer,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    SolidBtnBackgroundColor: { control: "color" },
    severity: {
      options: ["success", "warning", "error", "info"],
      control: { type: "select" },
    },
  },
};

export const FooterCustom = (args) => <Footer {...args} />;
FooterCustom.args = {
  severity: "info",
  btnBorderRadius: 4,
  backgroundColor: "#fff",
};

FooterCustom.storyName = "Footer";
