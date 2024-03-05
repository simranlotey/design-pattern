import React from 'react';
import Badge from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
};

export const NumberBadge = (args) => <Badge {...args} />;
NumberBadge.args = {
  badgeContent: "02",
  color: "#fff",
  backgroundColor: "#DA1414",
};
NumberBadge.storyName = 'Number Badge';
