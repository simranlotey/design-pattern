import React from "react";
import Colors from "./Colors";

export default {
  title: "Components/Colors",
  tags: ["autodocs"],
  component: Colors,
  parameters: {
    layout: "centered",
  },
};

const primaryColors = [
  {
    name: "Primary",
    hex: "#E86C00",
    rgb: "rgba(232, 108, 0, 1)",
    hsb: "hsba(28, 100%, 91%, 1)",
  },
  {
    name: "Primary / 90%",
    hex: "#E86C00E5",
    rgb: "rgba(232, 108, 0, 0.9)",
    hsb: "hsba(28, 100%, 91%, 0.9)",
  },
  {
    name: "Primary / 80%",
    hex: "#E86C00CC",
    rgb: "rgba(232, 108, 0, 0.8)",
    hsb: "hsba(28, 100%, 91%, 0.8)",
  },
  {
    name: "Primary / 70%",
    hex: "#E86C00B2",
    rgb: "rgba(232, 108, 0, 0.7)",
    hsb: "hsba(28, 100%, 91%, 0.7)",
  },
  {
    name: "Primary / 60%",
    hex: "#E86C0099",
    rgb: "rgba(232, 108, 0, 0.6)",
    hsb: "hsba(28, 100%, 91%, 0.6)",
  },
  {
    name: "Primary / 50%",
    hex: "#E86C0080",
    rgb: "rgba(232, 108, 0, 0.5)",
    hsb: "hsba(28, 100%, 91%, 0.5)",
  },
  {
    name: "Primary / 40%",
    hex: "#E86C0066",
    rgb: "rgba(232, 108, 0, 0.4)",
    hsb: "hsba(28, 100%, 91%, 0.4)",
  },
  {
    name: "Primary / 30%",
    hex: "#E86C004D",
    rgb: "rgba(232, 108, 0, 0.3)",
    hsb: "hsba(28, 100%, 91%, 0.3)",
  },
  {
    name: "Primary / 20%",
    hex: "#E86C0033",
    rgb: "rgba(232, 108, 0, 0.2)",
    hsb: "hsba(28, 100%, 91%, 0.2)",
  },
  {
    name: "Primary / 10%",
    hex: "#E86C001A",
    rgb: "rgba(232, 108, 0, 0.1)",
    hsb: "hsba(28, 100%, 91%, 0.1)",
  },
];

export const CustomPrimaryColors = () => <Colors colors={primaryColors} />;
CustomPrimaryColors.storyName = "Primary";

const secondaryColors = [
  {
    name: "Secondary",
    hex: "#FDCC4A",
    rgb: "rgba(253, 204, 74, 1)",
    hsb: "hsba(44, 71%, 99%, 1)",
  },
  {
    name: "Secondary / 90%",
    hex: "#FDCC4AE5",
    rgb: "rgba(253, 204, 74, 0.9)",
    hsb: "hsba(44, 71%, 99%, 0.9)",
  },
  {
    name: "Secondary / 80%",
    hex: "#FDCC4ACC",
    rgb: "rgba(253, 204, 74, 0.8)",
    hsb: "hsba(44, 71%, 99%, 0.8)",
  },
  {
    name: "Secondary / 70%",
    hex: "#FDCC4AB2",
    rgb: "rgba(253, 204, 74, 0.7)",
    hsb: "hsba(44, 71%, 99%, 0.7)",
  },
  {
    name: "Secondary / 60%",
    hex: "#FDCC4A99",
    rgb: "rgba(253, 204, 74, 0.6)",
    hsb: "hsba(44, 71%, 99%, 0.6)",
  },
  {
    name: "Secondary / 50%",
    hex: "#FDCC4A80",
    rgb: "rgba(253, 204, 74, 0.5)",
    hsb: "hsba(44, 71%, 99%, 0.5)",
  },
  {
    name: "Secondary / 40%",
    hex: "#FDCC4A66",
    rgb: "rgba(253, 204, 74, 0.4)",
    hsb: "hsba(44, 71%, 99%, 0.4)",
  },
  {
    name: "Secondary / 30%",
    hex: "#FDCC4A4D",
    rgb: "rgba(253, 204, 74, 0.3)",
    hsb: "hsba(44, 71%, 99%, 0.3)",
  },
  {
    name: "Secondary / 20%",
    hex: "#FDCC4A33",
    rgb: "rgba(253, 204, 74, 0.2)",
    hsb: "hsba(44, 71%, 99%, 0.2)",
  },
  {
    name: "Secondary / 10%",
    hex: "#FDCC4A1A",
    rgb: "rgba(253, 204, 74, 0.1)",
    hsb: "hsba(44, 71%, 99%, 0.1)",
  },
];

export const CustomSecondaryColors = () => <Colors colors={secondaryColors} />;
CustomSecondaryColors.storyName = "Secondary";

const neutralColors = [
    { name: "Black", hex: "#09101D", rgb: "rgba(9, 16, 29, 1)", hsb: "hsba(219, 69%, 11%, 1)" },
    { name: "Neutral 1", hex: "#2C3A4B", rgb: "rgba(44, 58, 75, 1)", hsb: "hsba(213, 42%, 29%, 1)" },
    { name: "Neutral 2", hex: "#394452", rgb: "rgba(57, 68, 82, 1)", hsb: "hsba(213, 30%, 32%, 1)" },
    { name: "Neutral 3", hex: "#545D69", rgb: "rgba(84, 93, 105, 1)", hsb: "hsba(213, 20%, 41%, 1)" },
    { name: "Neutral 4", hex: "#6D7580", rgb: "rgba(109, 117, 128, 1)", hsb: "hsba(213, 15%, 50%, 1)" },
    { name: "Neutral 5", hex: "#858C94", rgb: "rgba(133, 140, 148, 1)", hsb: "hsba(213, 10%, 58%, 1)" },
    { name: "Neutral 6", hex: "#A5ABB3", rgb: "rgba(165, 171, 179, 1)", hsb: "hsba(213, 8%, 70%, 1)" },
    { name: "Neutral 7", hex: "#DADEE3", rgb: "rgba(218, 222, 227, 1)", hsb: "hsba(213, 4%, 89%, 1)" },
    { name: "Neutral 8", hex: "#EBEEF2", rgb: "rgba(235, 238, 242, 1)", hsb: "hsba(213, 3%, 95%, 1)" },
    { name: "Neutral 9", hex: "#F4F6F9", rgb: "rgba(244, 246, 249, 1)", hsb: "hsba(213, 2%, 98%, 1)" },
    { name: "White", hex: "#FFFFFF", rgb: "rgba(255, 255, 255, 1)", hsb: "hsba(0, 0%, 100%, 1)" },
  ];

  export const CustomNeutralColors = () => <Colors colors={neutralColors} />;
  CustomNeutralColors.storyName = "Neutral";