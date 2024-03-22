import React from "react";
import Typography from "./Typography";

export default {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

const displays = {
  displayLarge: {
    mobile: [
      {
        fontSize: 41,
        lineHeight: 48,
        fontWeight: 600,
        type: "Heavy",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 41,
        lineHeight: 48,
        fontWeight: 400,
        type: "Regular",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 41,
        lineHeight: 48,
        fontWeight: 300,
        type: "Light",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
    ],
    tablet: [
      {
        fontSize: 51,
        lineHeight: 56,
        fontWeight: 600,
        type: "Heavy",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 51,
        lineHeight: 56,
        fontWeight: 400,
        type: "Regular",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 51,
        lineHeight: 56,
        fontWeight: 300,
        type: "Light",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
    ],
    desktop: [
      {
        fontSize: 69,
        lineHeight: 76,
        fontWeight: 700,
        type: "Heavy",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 69,
        lineHeight: 76,
        fontWeight: 400,
        type: "Regular",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 69,
        lineHeight: 76,
        fontWeight: 300,
        type: "Light",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
    ],
  },
  displaySmall: {
    mobile: [
      {
        fontSize: 36,
        lineHeight: 40,
        fontWeight: 600,
        type: "Heavy",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 36,
        lineHeight: 40,
        fontWeight: 400,
        type: "Regular",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 36,
        lineHeight: 40,
        fontWeight: 300,
        type: "Light",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
    ],
    tablet: [
      {
        fontSize: 44,
        lineHeight: 48,
        fontWeight: 600,
        type: "Heavy",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 44,
        lineHeight: 48,
        fontWeight: 400,
        type: "Regular",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 44,
        lineHeight: 48,
        fontWeight: 300,
        type: "Light",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
    ],
    desktop: [
      {
        fontSize: 57,
        lineHeight: 64,
        fontWeight: 600,
        type: "Heavy",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 57,
        lineHeight: 64,
        fontWeight: 400,
        type: "Regular",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 57,
        lineHeight: 64,
        fontWeight: 300,
        type: "Light",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
    ],
  },
};

const AllDisplays = ({ selectScreen, displayType }) => {
  const displayData = displays[displayType][selectScreen] || [];
  return <Typography typography={displayData} />;
};

export const AllDisplayTypes = AllDisplays.bind({});

AllDisplayTypes.args = {
  selectScreen: "mobile",
  displayType: "displayLarge",
};

AllDisplayTypes.argTypes = {
  selectScreen: {
    options: ["mobile", "tablet", "desktop"],
    control: { type: "radio" },
  },
  displayType: {
    options: [
      "displayLarge",
      "displaySmall",
    ],
    control: { type: "radio" },
  },
};

AllDisplayTypes.storyName = "Displays";

const headings = {
  heading1: {
    mobile: [
      {
        fontSize: 32,
        lineHeight: 36,
        fontWeight: 600,
        type: "Heavy",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 32,
        lineHeight: 36,
        fontWeight: 400,
        type: "Regular",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 32,
        lineHeight: 36,
        fontWeight: 300,
        type: "Light",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
    ],
    tablet: [
      {
        fontSize: 38,
        lineHeight: 44,
        fontWeight: 600,
        type: "Heavy",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 38,
        lineHeight: 44,
        fontWeight: 400,
        type: "Regular",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 38,
        lineHeight: 44,
        fontWeight: 300,
        type: "Light",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
    ],
    desktop: [
      {
        fontSize: 48,
        lineHeight: 52,
        fontWeight: 600,
        type: "Heavy",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 48,
        lineHeight: 52,
        fontWeight: 400,
        type: "Regular",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 48,
        lineHeight: 52,
        fontWeight: 100,
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
    ],
  },
  heading2: {
    mobile: [
      {
        fontSize: 29,
        lineHeight: 32,
        fontWeight: 600,
        type: "Heavy",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 29,
        lineHeight: 32,
        fontWeight: 400,
        type: "Regular",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 29,
        lineHeight: 32,
        fontWeight: 300,
        type: "Light",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
    ],
    tablet: [
      {
        fontSize: 33,
        lineHeight: 36,
        fontWeight: 600,
        type: "Heavy",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 33,
        lineHeight: 36,
        fontWeight: 400,
        type: "Regular",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 33,
        lineHeight: 36,
        fontWeight: 300,
        type: "Light",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
    ],
    desktop: [
      {
        fontSize: 40,
        lineHeight: 44,
        fontWeight: 600,
        type: "Heavy",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 40,
        lineHeight: 44,
        fontWeight: 400,
        type: "Regular",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 40,
        lineHeight: 44,
        fontWeight: 300,
        type: "Light",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
    ],
  },
  heading3: {
    mobile: [
      {
        fontSize: 26,
        lineHeight: 32,
        fontWeight: 600,
        type: "Heavy",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 26,
        lineHeight: 32,
        fontWeight: 400,
        type: "Regular",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 26,
        lineHeight: 32,
        fontWeight: 300,
        type: "Light",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
    ],
    tablet: [
      {
        fontSize: 28,
        lineHeight: 32,
        fontWeight: 600,
        type: "Heavy",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 28,
        lineHeight: 32,
        fontWeight: 400,
        type: "Regular",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 28,
        lineHeight: 32,
        fontWeight: 300,
        type: "Light",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
    ],
    desktop: [
      {
        fontSize: 33,
        lineHeight: 36,
        fontWeight: 600,
        type: "Heavy",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 33,
        lineHeight: 36,
        fontWeight: 400,
        type: "Regular",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 33,
        lineHeight: 36,
        fontWeight: 300,
        type: "Light",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
    ],
  },
  heading4: {
    mobile: [
      {
        fontSize: 23,
        lineHeight: 24,
        fontWeight: 600,
        type: "Heavy",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 23,
        lineHeight: 24,
        fontWeight: 400,
        type: "Regular",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 23,
        lineHeight: 24,
        fontWeight: 300,
        type: "Light",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
    ],
    tablet: [
      {
        fontSize: 24,
        lineHeight: 28,
        fontWeight: 600,
        type: "Heavy",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 24,
        lineHeight: 28,
        fontWeight: 400,
        type: "Regular",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 24,
        lineHeight: 28,
        fontWeight: 300,
        type: "Light",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
    ],
    desktop: [
      {
        fontSize: 28,
        lineHeight: 32,
        fontWeight: 600,
        type: "Heavy",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 28,
        lineHeight: 32,
        fontWeight: 400,
        type: "Regular",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 28,
        lineHeight: 32,
        fontWeight: 300,
        type: "Light",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
    ],
  },
  heading5: {
    mobile: [
      {
        fontSize: 20,
        lineHeight: 24,
        fontWeight: 600,
        type: "Heavy",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 20,
        lineHeight: 24,
        fontWeight: 400,
        type: "Regular",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 20,
        lineHeight: 24,
        fontWeight: 300,
        type: "Light",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
    ],
    tablet: [
      {
        fontSize: 21,
        lineHeight: 24,
        fontWeight: 600,
        type: "Heavy",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 21,
        lineHeight: 24,
        fontWeight: 400,
        type: "Regular",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 21,
        lineHeight: 24,
        fontWeight: 300,
        type: "Light",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
    ],
    desktop: [
      {
        fontSize: 23,
        lineHeight: 24,
        fontWeight: 600,
        type: "Heavy",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 23,
        lineHeight: 24,
        fontWeight: 400,
        type: "Regular",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 23,
        lineHeight: 24,
        fontWeight: 300,
        type: "Light",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
    ],
  },
  heading6: {
    mobile: [
      {
        fontSize: 18,
        lineHeight: 20,
        fontWeight: 600,
        type: "Heavy",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 18,
        lineHeight: 20,
        fontWeight: 400,
        type: "Regular",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 18,
        lineHeight: 20,
        fontWeight: 300,
        type: "Light",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
    ],
    tablet: [
      {
        fontSize: 18,
        lineHeight: 20,
        fontWeight: 600,
        type: "Heavy",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 18,
        lineHeight: 20,
        fontWeight: 400,
        type: "Regular",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 18,
        lineHeight: 20,
        fontWeight: 300,
        type: "Light",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
    ],
    desktop: [
      {
        fontSize: 19,
        lineHeight: 20,
        fontWeight: 600,
        type: "Heavy",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 19,
        lineHeight: 20,
        fontWeight: 400,
        type: "Regular",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
      {
        fontSize: 19,
        lineHeight: 20,
        fontWeight: 300,
        type: "Light",
        color: "#09101D",
        text: "The alternative to good design is always bad design. There is no such thing as no design.",
      },
    ],
  },
};

const AllHeadings = ({ selectScreen, headingType }) => {
  const headingsData = headings[headingType][selectScreen] || [];
  return <Typography typography={headingsData} />;
};

export const AllHeadingTypes = AllHeadings.bind({});

AllHeadingTypes.args = {
  selectScreen: "mobile",
  headingType: "heading1",
};

AllHeadingTypes.argTypes = {
  selectScreen: {
    options: ["mobile", "tablet", "desktop"],
    control: { type: "radio" },
  },
  headingType: {
    options: [
      "heading1",
      "heading2",
      "heading3",
      "heading4",
      "heading5",
      "heading6",
    ],
    control: { type: "radio" },
  },
};

AllHeadingTypes.storyName = "Headings";

const paragraphLarge = {
  mobile: [
    {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: 600,
      type: "Heavy",
      color: "#09101D",
      text: "The alternative to good design is always bad design. There is no such thing as no design.",
    },
    {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: 400,
      type: "Regular",
      color: "#09101D",
      text: "The alternative to good design is always bad design. There is no such thing as no design.",
    },
    {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: 300,
      type: "Light",
      color: "#09101D",
      text: "The alternative to good design is always bad design. There is no such thing as no design.",
    },
  ],
  tablet: [
    {
      fontSize: 21,
      lineHeight: 32,
      fontWeight: 600,
      type: "Heavy",
      color: "#09101D",
      text: "The alternative to good design is always bad design. There is no such thing as no design.",
    },
    {
      fontSize: 21,
      lineHeight: 32,
      fontWeight: 400,
      type: "Regular",
      color: "#09101D",
      text: "The alternative to good design is always bad design. There is no such thing as no design.",
    },
    {
      fontSize: 21,
      lineHeight: 32,
      fontWeight: 300,
      type: "Light",
      color: "#09101D",
      text: "The alternative to good design is always bad design. There is no such thing as no design.",
    },
  ],
  desktop: [
    {
      fontSize: 23,
      lineHeight: 36,
      fontWeight: 600,
      type: "Heavy",
      color: "#09101D",
      text: "The alternative to good design is always bad design. There is no such thing as no design.",
    },
    {
      fontSize: 23,
      lineHeight: 36,
      fontWeight: 400,
      type: "Regular",
      color: "#09101D",
      text: "The alternative to good design is always bad design. There is no such thing as no design.",
    },
    {
      fontSize: 23,
      lineHeight: 36,
      fontWeight: 300,
      type: "Light",
      color: "#09101D",
      text: "The alternative to good design is always bad design. There is no such thing as no design.",
    },
  ],
};

const ParagraphLarges = ({ selectScreen }) => {
  const typoselectScreen = paragraphLarge[selectScreen] || [];
  return <Typography typography={typoselectScreen} />;
};

export const ParagraphLarge = ParagraphLarges.bind({});
ParagraphLarge.args = {
  selectScreen: "mobile",
};
ParagraphLarge.storyName = "ParagraphLarge";
ParagraphLarge.argTypes = {
  selectScreen: {
    options: ["mobile", "tablet", "desktop"],
    control: { type: "radio" },
  },
};


const paragraphs = {
  paragraphBase: [
    {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: 600,
      type: "Heavy",
      color: "#09101D",
      text: "The alternative to good design is always bad design. There is no such thing as no design.",
    },
    {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: 400,
      type: "Regular",
      color: "#09101D",
      text: "The alternative to good design is always bad design. There is no such thing as no design.",
    },
    {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: 300,
      type: "Light",
      color: "#09101D",
      text: "The alternative to good design is always bad design. There is no such thing as no design.",
    },
  ],
  paragraphSmall: [
    {
      fontSize: 13,
      lineHeight: 20,
      fontWeight: 600,
      type: "Heavy",
      color: "#09101D",
      text: "The alternative to good design is always bad design. There is no such thing as no design.",
    },
    {
      fontSize: 13,
      lineHeight: 20,
      fontWeight: 400,
      type: "Regular",
      color: "#09101D",
      text: "The alternative to good design is always bad design. There is no such thing as no design.",
    },
    {
      fontSize: 13,
      lineHeight: 20,
      fontWeight: 300,
      type: "Light",
      color: "#09101D",
      text: "The alternative to good design is always bad design. There is no such thing as no design.",
    },
  ],
  paragraphXSmall: [
    {
      fontSize: 11,
      lineHeight: 16,
      fontWeight: 600,
      type: "Heavy",
      color: "#09101D",
      text: "The alternative to good design is always bad design. There is no such thing as no design.",
    },
    {
      fontSize: 11,
      lineHeight: 16,
      fontWeight: 400,
      type: "Regular",
      color: "#09101D",
      text: "The alternative to good design is always bad design. There is no such thing as no design.",
    },
    {
      fontSize: 11,
      lineHeight: 16,
      fontWeight: 300,
      type: "Light",
      color: "#09101D",
      text: "The alternative to good design is always bad design. There is no such thing as no design.",
    },
  ],
  paragraphTiny: [
    {
      fontSize: 9,
      lineHeight: 12,
      fontWeight: 600,
      type: "Heavy",
      color: "#09101D",
      text: "The alternative to good design is always bad design. There is no such thing as no design.",
    },
    {
      fontSize: 9,
      lineHeight: 12,
      fontWeight: 400,
      type: "Regular",
      color: "#09101D",
      text: "The alternative to good design is always bad design. There is no such thing as no design.",
    },
    {
      fontSize: 9,
      lineHeight: 12,
      fontWeight: 300,
      type: "Light",
      color: "#09101D",
      text: "The alternative to good design is always bad design. There is no such thing as no design.",
    },
  ]
};


const AllParagraphs = ({ paragraphType }) => {
  const paragraphData = paragraphs[paragraphType] || [];
  return <Typography typography={paragraphData} />;
};

export const AllParagraphTypes = AllParagraphs.bind({});

AllParagraphTypes.args = {
  paragraphType: "paragraphBase", 
};

AllParagraphTypes.argTypes = {
  paragraphType: {
    options: ["paragraphBase", "paragraphSmall", "paragraphXSmall", "paragraphTiny"],
    control: { type: "radio" },
  },
};

AllParagraphTypes.storyName = "Paragraphs";


const smallCaps = [
  {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 600,
    type: "Heavy",
    color: "#09101D",
    text: "The alternative to good design is always bad design. There is no such thing as no design.",
  },
  {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 400,
    type: "Regular",
    color: "#09101D",
    text: "The alternative to good design is always bad design. There is no such thing as no design.",
  },
  {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 300,
    type: "Light",
    color: "#09101D",
    text: "The alternative to good design is always bad design. There is no such thing as no design.",
  },
];

export const SmallCaps = () => <Typography typography={smallCaps} />;
SmallCaps.storyName = "SmallCaps";


const actionComponent = {
  actionButton: [
    {
      fontSize: 18,
      lineHeight: 28,
      fontWeight: 600,
      type: "Large",
      color: "#09101D",
      text: "The alternative to good design is always bad design. There is no such thing as no design.",
    },
    {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: 600,
      type: "Medium",
      color: "#09101D",
      text: "The alternative to good design is always bad design. There is no such thing as no design.",
    },
    {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: 600,
      type: "Small",
      color: "#09101D",
      text: "The alternative to good design is always bad design. There is no such thing as no design.",
    },
  ],
  actionLink: [
    {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: 600,
      type: "Large",
      color: "#09101D",
      text: "The alternative to good design is always bad design. There is no such thing as no design.",
    },
    {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: 600,
      type: "Medium",
      color: "#09101D",
      text: "The alternative to good design is always bad design. There is no such thing as no design.",
    },
    {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: 600,
      type: "Small",
      color: "#09101D",
      text: "The alternative to good design is always bad design. There is no such thing as no design.",
    },
  ],
};

export const ActionComponent = ({ actionType }) => {
  const data = actionComponent[actionType] || [];
  return <Typography typography={data} />;
};

ActionComponent.storyName = "ActionComponent";

ActionComponent.args = {
  actionType: "actionButton",
};

ActionComponent.argTypes = {
  actionType: {
    options: ["actionButton", "actionLink"],
    control: { type: "radio" },
  },
};

ActionComponent.storyName = "Actions"