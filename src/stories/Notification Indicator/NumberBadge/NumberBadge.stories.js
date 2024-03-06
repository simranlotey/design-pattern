import React from 'react';
import NumberBadge from './NumberBadge';

export default {
  title: 'Components/Notification Indicator',
  component: NumberBadge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  }
};

export const NumberBadges = (args) => <NumberBadge {...args} />;
NumberBadges.args = {
  badgeContent: "02",
  color: "#fff",
  backgroundColor: "#da1414",
};
NumberBadges.storyName = 'Number Badge';
