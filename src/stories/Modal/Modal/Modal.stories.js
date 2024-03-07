import React from "react";
import Modal from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    HeaderBackgroundColor: { control: "color" },
    MainBackgroundColor: { control: "color" },
    FooterBackgroundColor: { control: "color" },
    severity: {
      options: ["success", "warning", "error", "info"],
      control: { type: "select" },
    },
  },
};

export const ModalCustom = (args) => <Modal {...args} />;
ModalCustom.args = {
  severity: "info",
  headerTitle: "Modal Title",
  borderRadius: 4,
  btnBorderRadius: 4,
  MainBackgroundColor: "#fff",
  FooterBackgroundColor: "#fff",
};

ModalCustom.storyName = "Modal";
