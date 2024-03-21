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
  {
    name: "Black",
    hex: "#09101D",
    rgb: "rgba(9, 16, 29, 1)",
    hsb: "hsba(219, 69%, 11%, 1)",
  },
  {
    name: "Neutral 1",
    hex: "#2C3A4B",
    rgb: "rgba(44, 58, 75, 1)",
    hsb: "hsba(213, 42%, 29%, 1)",
  },
  {
    name: "Neutral 2",
    hex: "#394452",
    rgb: "rgba(57, 68, 82, 1)",
    hsb: "hsba(213, 30%, 32%, 1)",
  },
  {
    name: "Neutral 3",
    hex: "#545D69",
    rgb: "rgba(84, 93, 105, 1)",
    hsb: "hsba(213, 20%, 41%, 1)",
  },
  {
    name: "Neutral 4",
    hex: "#6D7580",
    rgb: "rgba(109, 117, 128, 1)",
    hsb: "hsba(213, 15%, 50%, 1)",
  },
  {
    name: "Neutral 5",
    hex: "#858C94",
    rgb: "rgba(133, 140, 148, 1)",
    hsb: "hsba(213, 10%, 58%, 1)",
  },
  {
    name: "Neutral 6",
    hex: "#A5ABB3",
    rgb: "rgba(165, 171, 179, 1)",
    hsb: "hsba(213, 8%, 70%, 1)",
  },
  {
    name: "Neutral 7",
    hex: "#DADEE3",
    rgb: "rgba(218, 222, 227, 1)",
    hsb: "hsba(213, 4%, 89%, 1)",
  },
  {
    name: "Neutral 8",
    hex: "#EBEEF2",
    rgb: "rgba(235, 238, 242, 1)",
    hsb: "hsba(213, 3%, 95%, 1)",
  },
  {
    name: "Neutral 9",
    hex: "#F4F6F9",
    rgb: "rgba(244, 246, 249, 1)",
    hsb: "hsba(213, 2%, 98%, 1)",
  },
  {
    name: "White",
    hex: "#FFFFFF",
    rgb: "rgba(255, 255, 255, 1)",
    hsb: "hsba(0, 0%, 100%, 1)",
  },
];

export const CustomNeutralColors = () => <Colors colors={neutralColors} />;
CustomNeutralColors.storyName = "Neutral";

const accentColors = [
  {
    name: "Accent 1",
    hex: "#ECB2F2",
    rgb: "rgba(236, 178, 242, 1)",
    hsb: "hsba(294, 27%, 95%, 1)",
  },
  {
    name: "Accent 2",
    hex: "#2D6A6A",
    rgb: "rgba(45, 106, 106, 1)",
    hsb: "hsba(180, 58%, 42%, 1)",
  },
  {
    name: "Accent 3",
    hex: "#E9AD8C",
    rgb: "rgba(233, 173, 140, 1)",
    hsb: "hsba(22, 40%, 91%, 1)",
  },
  {
    name: "Accent 4",
    hex: "#221874",
    rgb: "rgba(34, 24, 116, 1)",
    hsb: "hsba(247, 79%, 45%, 1)",
  },
  {
    name: "Accent 5",
    hex: "#7CC6D6",
    rgb: "rgba(124, 198, 214, 1)",
    hsb: "hsba(191, 42%, 84%, 1)",
  },
  {
    name: "Accent 6",
    hex: "#E1604D",
    rgb: "rgba(225, 96, 77, 1)",
    hsb: "hsba(8, 66%, 88%, 1)",
  },
  {
    name: "Accent 1",
    hex: "#ECB2F247",
    rgb: "rgba(236, 178, 242, 0.28)",
    hsb: "hsba(294, 26%, 95%, 0.28)",
  },
  {
    name: "Accent 2",
    hex: "#2D6A6A1A",
    rgb: "rgba(45, 106, 106, 0.1)",
    hsb: "hsba(180, 58%, 42%, 0.1)",
  },
  {
    name: "Accent 3",
    hex: "#E9AD8C3B",
    rgb: "rgba(233, 173, 140, 0.23)",
    hsb: "hsba(21, 40%, 91%, 0.23)",
  },
  {
    name: "Accent 4",
    hex: "#2218741A",
    rgb: "rgba(34, 24, 116, 0.1)",
    hsb: "hsba(247, 79%, 45%, 0.1)",
  },
  {
    name: "Accent 5",
    hex: "#7CC6D640",
    rgb: "rgba(124, 198, 214, 0.25)",
    hsb: "hsba(191, 42%, 84%, 0.25)",
  },
  {
    name: "Accent 6",
    hex: "#E1604D26",
    rgb: "rgba(225, 96, 77, 0.15)",
    hsb: "hsba(8, 66%, 88%, 0.15)",
  },
];

export const CustomAccentColors = () => <Colors colors={accentColors} />;
CustomAccentColors.storyName = "Accent";

const actionPrimaryColors = [
  {
    name: "Default",
    hex: "#E86C00",
    rgb: "rgba(232, 108, 0, 1)",
    hsb: "hsba(28, 100%, 91%, 1)",
  },
  {
    name: "Hover",
    hex: "#CC5F00",
    rgb: "rgba(204, 95, 0, 1)",
    hsb: "hsba(28, 100%, 80%, 1)",
  },
  {
    name: "Active",
    hex: "#B25300",
    rgb: "rgba(178, 83, 0, 1)",
    hsb: "hsba(28, 100%, 70%, 1)",
  },
  {
    name: "Disabled",
    hex: "#E86C0080",
    rgb: "rgba(232, 108, 0, 0.5)",
    hsb: "hsba(28, 100%, 91%, 0.5)",
  },
  {
    name: "Hover 10%",
    hex: "#CC5F001A",
    rgb: "rgba(204, 95, 0, 0.1)",
    hsb: "hsba(28, 100%, 80%, 0.1)",
  },
  {
    name: "Active 20%",
    hex: "#B2530033",
    rgb: "rgba(178, 83, 0, 0.2)",
    hsb: "hsba(28, 100%, 70%, 0.2)",
  },
  {
    name: "Inverted",
    hex: "#FFFFFF",
    rgb: "rgba(255, 255, 255, 1)",
    hsb: "hsba(0, 0%, 100%, 1)",
  },
  {
    name: "Visited",
    hex: "#5E38BA",
    rgb: "rgba(94, 56, 186, 1)",
    hsb: "hsba(258, 70%, 73%, 1)",
  },
];

export const CustomActionPrimaryColors = () => (
  <Colors colors={actionPrimaryColors} />
);
CustomActionPrimaryColors.storyName = "ActionPrimary";

const actionSecondaryColors = [
  {
    name: "Default",
    hex: "#19AB4F",
    rgb: "rgba(25, 171, 79, 1)",
    hsb: "hsba(142, 85%, 67%, 1)",
  },
  {
    name: "Hover",
    hex: "#0C9E42",
    rgb: "rgba(12, 158, 66, 1)",
    hsb: "hsba(142, 92%, 62%, 1)",
  },
  {
    name: "Active",
    hex: "#009236",
    rgb: "rgba(0, 146, 54, 1)",
    hsb: "hsba(142, 100%, 57%, 1)",
  },
  {
    name: "Disabled",
    hex: "#19AB4F80",
    rgb: "rgba(25, 171, 79, 0.5)",
    hsb: "hsba(142, 85%, 67%, 0.5)",
  },
  {
    name: "Hover 10%",
    hex: "#0C9D411A",
    rgb: "rgba(12, 157, 65, 0.1)",
    hsb: "hsba(142, 92%, 61%, 0.1)",
  },
  {
    name: "Active 20%",
    hex: "#00943633",
    rgb: "rgba(0, 148, 54, 0.2)",
    hsb: "hsba(142, 100%, 58%, 0.2)",
  },
  {
    name: "Inverted",
    hex: "#FFFFFF",
    rgb: "rgba(255, 255, 255, 1)",
    hsb: "hsba(0, 0%, 100%, 1)",
  },
  {
    name: "Visited",
    hex: "#5E38BA",
    rgb: "rgba(94, 56, 186, 1)",
    hsb: "hsba(258, 70%, 73%, 1)",
  },
];

export const CustomActionSecondaryColors = () => (
  <Colors colors={actionSecondaryColors} />
);
CustomActionSecondaryColors.storyName = "ActionSecondary";

const actionNeutralColors = [
  {
    name: "Default",
    hex: "#9098A1",
    rgb: "rgba(144, 152, 161, 1)",
    hsb: "hsba(212, 10%, 63%, 1)",
  },
  {
    name: "Hover",
    hex: "#858C94",
    rgb: "rgba(133, 140, 148, 1)",
    hsb: "hsba(212, 10%, 58%, 1)",
  },
  {
    name: "Active",
    hex: "#798087",
    rgb: "rgba(121, 128, 135, 1)",
    hsb: "hsba(212, 10%, 53%, 1)",
  },
  {
    name: "Disabled",
    hex: "#9098A1B2",
    rgb: "rgba(144, 152, 161, 0.7)",
    hsb: "hsba(212, 11%, 63%, 0.7)",
  },
  {
    name: "Hover 10%",
    hex: "#6D75801A",
    rgb: "rgba(109, 117, 128, 0.1)",
    hsb: "hsba(215, 15%, 50%, 0.1)",
  },
  {
    name: "Active 20%",
    hex: "#6D758033",
    rgb: "rgba(109, 117, 128, 0.2)",
    hsb: "hsba(215, 15%, 50%, 0.2)",
  },
  {
    name: "Inverted",
    hex: "#FFFFFF",
    rgb: "rgba(255, 255, 255, 1)",
    hsb: "hsba(0, 0%, 100%, 1)",
  },
  {
    name: "Visited",
    hex: "#5E38BA",
    rgb: "rgba(94, 56, 186, 1)",
    hsb: "hsba(258, 70%, 73%, 1)",
  },
];

export const CustomActionNeutralColors = () => (
  <Colors colors={actionNeutralColors} />
);
CustomActionNeutralColors.storyName = "ActionNeutral";

const statesColors = [
  {
    name: "Success",
    hex: "#287D3C",
    rgb: "rgba(40, 125, 60, 1)",
    hsb: "hsba(134, 68%, 49%, 1)",
  },
  {
    name: "Warning",
    hex: "#B95000",
    rgb: "rgba(185, 80, 0, 1)",
    hsb: "hsba(26, 100%, 73%, 1)",
  },
  {
    name: "Error",
    hex: "#DA1414",
    rgb: "rgba(218, 20, 20, 1)",
    hsb: "hsba(0, 91%, 85%, 1)",
  },
  {
    name: "Info",
    hex: "#2E5AAC",
    rgb: "rgba(46, 90, 172, 1)",
    hsb: "hsba(219, 73%, 67%, 1)",
  },
  {
    name: "Success BG",
    hex: "#EDF9F0",
    rgb: "rgba(237, 249, 240, 1)",
    hsb: "hsba(135, 5%, 98%, 1)",
  },
  {
    name: "Warning BG",
    hex: "#FFF4EC",
    rgb: "rgba(255, 244, 236, 1)",
    hsb: "hsba(25, 7%, 100%, 1)",
  },
  {
    name: "Error BG",
    hex: "#FEEFEF",
    rgb: "rgba(254, 239, 239, 1)",
    hsb: "hsba(0, 6%, 100%, 1)",
  },
  {
    name: "Info BG",
    hex: "#EEF2FA",
    rgb: "rgba(238, 242, 250, 1)",
    hsb: "hsba(220, 5%, 98%, 1)",
  },
];

export const CustomStatesColors = () => <Colors colors={statesColors} />;
CustomStatesColors.storyName = "States";
