import React from "react";
import InputField from "./Input";

export default {
  title: "Components/Input",
  component: InputField,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
  },
};

const Templates = (args) => <InputField {...args} />;

export const Input = Templates.bind({});
Input.args = {
  isPhoneIcon: true,
  isEnvelopeIcon: true,
  labelInsideInput: false,
  inputColor: "#858C94",
  inputBackgroundColor: "#fff",
  labelColor: "#09101D",
  textColor: "#09101D",
  placeholderColor: "#09101D",
};

export const Textarea = Templates.bind({});
Textarea.args = {
    isPhoneIcon: true,
    labelInsideInput: false,
    inputColor: "#858C94",
    inputBackgroundColor: "#fff",
    labelColor: "#09101D",
    textColor: "#09101D",
    placeholderColor: "#09101D",
    isTextArea: true,
    rows: 4
};
