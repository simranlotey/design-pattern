import React from 'react';
import Toggle from './Toggle';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
};

export const ToggleButton = (args) => <Toggle {...args} />;
ToggleButton.args = {
  labelText: "Label",
  isLabelText: true,
  disabled: false,
  switchToggle: 'toggle'
};
ToggleButton.storyName="Toggle";

export const Switch = (args) => <Toggle {...args} />;
Switch.args = {
  labelText: "Label",
  isLabelText: true,
  disabled: false,
  switchToggle: 'switch'
};

