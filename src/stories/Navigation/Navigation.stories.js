import React from "react";
import Navigation from "./Navigation";
import { ReactComponent as OutlinedBell } from "../assets/OutlinedBell.svg";
import { ReactComponent as Bell } from "../assets/Bell.svg";
import { ReactComponent as SearchIcon } from "../assets/SearchIcon.svg";

export default {
  title: "Components/Navigation",
  component: Navigation,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: { control: "color" },
  },
};

export const NavItem = (args) => (
  <Navigation {...args}>
    <SearchIcon className={`navIcon ${args.isActive && "isActive"}`} />
    <span
      className={`nav-item ${args.isActive && "isActive"} ${
        args.isCollapsed && "isCollapsed"
      }`}
    >
      {args.navItem}
    </span>
  </Navigation>
);

NavItem.args = {
  navItem: "Nav Item",
  color: "#CC5F00",
  isActive: true,
  isCollapsed: false,
};

export const Notification = (args) => (
  <Navigation {...args}>
    {args.isActive ? (
      <Bell className={`notificationIcon`} />
    ) : (
      <OutlinedBell className={`notificationIcon`} />
    )}
    <span className={`notificationDot ${args.isIndicator && 'isIndicator'}`}></span>
  </Navigation>
);

Notification.args = {
  navItem: "Nav Item",
  color: "#CC5F00",
  isActive: true,
  isIndicator: true
};
