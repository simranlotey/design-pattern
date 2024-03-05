import React from 'react';
import Toggle from './Toggle';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ["autodocs"],
};

const Template = (args) => <Toggle {...args} />;

export const ToggleSwitch = Template.bind({});
ToggleSwitch.args = {
  labelName: 'Label',
  showLabel: false,
  showDisabled: false,
  thumbColor: '#E86C00',
};
