import React from 'react';
import Tooltip from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: { control: 'text' },
  },
};

export const Left = (args) => <Tooltip {...args} />
Left.args = {
  text: 'Tool Tip. Mauris tellus, eget ut aliquam aliquet tincidunt habitant ipsum.',
  position: 'left'
};

export const Right = (args) => <Tooltip {...args} />
Right.args = {
  text: 'Tool Tip. Mauris tellus, eget ut aliquam aliquet tincidunt habitant ipsum.',
  position: 'right'
};

export const Top = (args) => <Tooltip {...args} />
Top.args = {
  text: 'Tool Tip. Mauris tellus, eget ut aliquam aliquet tincidunt habitant ipsum.',
  position: 'top'
};

export const Bottom = (args) => <Tooltip {...args} />
Bottom.args = {
  text: 'Tool Tip. Mauris tellus, eget ut aliquam aliquet tincidunt habitant ipsum.',
  position: 'bottom'
};