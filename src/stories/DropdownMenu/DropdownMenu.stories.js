import React from "react";
import {
  DropdownMenuEverything,
  DropdownMenuText,
  DropdownMenuIconLeft,
  DropdownMenuIconRight,
  DropdownMenuCheckbox,
  DropdownMenuRadio,
} from "./DropdownMenu";

export default {
  title: "Components/DropdownMenu",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const TextDropdownMenu = () => <DropdownMenuText />;
TextDropdownMenu.storyName = "Text";

export const IconLeftDropdownMenu = () => <DropdownMenuIconLeft />;
IconLeftDropdownMenu.storyName = "LeftIcon";

export const IconRightDropdownMenu = () => <DropdownMenuIconRight />;
IconRightDropdownMenu.storyName = "RightIcon";

export const CheckboxDropdownMenu = () => <DropdownMenuCheckbox />;
CheckboxDropdownMenu.storyName = "Checkbox";

export const RadioDropdownMenu = () => <DropdownMenuRadio />;
RadioDropdownMenu.storyName = "Radio";

export const EverythingDropdownMenu = () => <DropdownMenuEverything />;
EverythingDropdownMenu.storyName = "Everything";

