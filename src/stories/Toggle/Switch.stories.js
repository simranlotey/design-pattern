import React from 'react';
import Switch from './Switch';

export default {
  title: 'Components/Toggle',
  component: Switch,
  tags: ["autodocs"],
};

const Template = (args) => <Switch {...args} />;

export const CustomSwitch = Template.bind({});
CustomSwitch.args = {
  labelName: 'Label',
  showLabel: false,
  showDisabled: false,
  thumbColor: '#E86C00',
};
CustomSwitch.storyName = 'Switch';
