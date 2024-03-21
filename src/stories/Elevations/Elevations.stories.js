import React from "react";
import Elevations from "./Elevations";

export default {
  title: "Components/Elevations",
  tags: ["autodocs"],
  component: Elevations,
  parameters: {
    layout: "centered",
  },
};

const tightElevations = [
  {
    name: "Elevation 1",
    value: "0px 1px 3px 0px #0000004D",
  },
  {
    name: "Elevation 2",
    value: "0px 1.25px 4px 0px #00000040",
  },
  {
    name: "Elevation 3",
    value: "0px 2px 6px 0px #00000038",
  },
  {
    name: "Elevation 4",
    value: "0px 2px 7px 0px #0000003D",
  },
  {
    name: "Elevation 5",
    value: "0px 3px 12px 0px #00000033",
  },
  {
    name: "Elevation 6",
    value: "0px 3.5px 14px 0px #00000033",
  },
  {
    name: "Elevation 7",
    value: "0px 7px 18px 0px #0000002B",
  },
  {
    name: "Elevation 8",
    value: "0px 12px 28px 0px #00000033",
  },
  {
    name: "Elevation 9",
    value: "0px 13px 36px 0px #00000038",
  },
];

export const CustomTightElevations = () => (
  <Elevations elevations={tightElevations} />
);
CustomTightElevations.storyName = "Tight";

const fluffyElevations = [
    {
      name: "Elevation 1",
      value: "0px 5px 15px 0px #00000026"
    },
    {
      name: "Elevation 2",
      value: "0px 6.25px 20px 0px #00000020"
    },
    {
      name: "Elevation 3",
      value: "0px 10px 30px 0px #0000001C"
    },
    {
      name: "Elevation 4",
      value: "0px 10px 35px 0px #0000001F"
    },
    {
      name: "Elevation 5",
      value: "0px 15px 60px 0px #0000001F"
    },
    {
      name: "Elevation 6",
      value: "0px 17.5px 70px 0px #0000001F"
    },
    {
      name: "Elevation 7",
      value: "0px 35px 90px 0px #00000022"
    },
  ];
  
  export const CustomFluffyElevations = () => (
    <Elevations elevations={fluffyElevations} />
  );
  CustomFluffyElevations.storyName = "Fluffy";