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
    // iconPosition: {
    //   options: ["none", "right", "left"],
    //   control: { type: "select" },
    // },
    color: { control: "color" },
  },
};

// export const HorizontalNavigations = (args) => (
//   <Navigation type="horizontal" {...args}>
//     <LeftIcon
//       className={`leftIcon ${args.iconPosition}`}
//       style={{ fill: args.color }}
//     />
//     <span style={{ color: args.color }}>{args.navigationName}</span>
//     <RightIcon
//       className={`HrightIcon ${args.iconPosition}`}
//       style={{ fill: args.color }}
//     />
//   </Navigation>
// );
// HorizontalNavigations.args = {
//   iconPosition: "right",
//   navigationName: "Horizontal Navigations",
//   color: "#CC5F00",
//   isActive: true,
//   type: "horizontal",
// };
// HorizontalNavigations.storyName = "Horizontal Navigation";

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
