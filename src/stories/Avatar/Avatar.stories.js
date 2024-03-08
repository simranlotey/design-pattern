import React from "react";
import Avatar from "./Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    avatarSize: {
      options: ["small", "medium", "large", "largex2"],
      control: { type: "select" },
    },
  },
};

export const ImageAvatar = (args) => <Avatar {...args} />;
ImageAvatar.args = {
  avatarSize: "large",
  avatarName: "Jordan James",
  isDot: true,
  isAvatarName: true,
};

ImageAvatar.storyName = "Avatars";