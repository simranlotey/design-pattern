import React from 'react';
import DotBadgeComponent from './DotBadge'; 

export default {
  title: 'Components/Notification Indicator',
  component: DotBadgeComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: { control: "color" },
  },
};

export const DotBadge = (args) => <DotBadgeComponent {...args} />; 
DotBadge.args = {
  color: "#da1414"
};
DotBadge.storyName = 'Dot Badge';
