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

export const LeftTooltip = (args) => <Tooltip {...args} />
LeftTooltip.args = {
  text: 'Tool Tip. Mauris tellus, eget ut aliquam aliquet tincidunt habitant ipsum.',
  position: 'left'
};

export const RightTooltip = (args) => <Tooltip {...args} />
RightTooltip.args = {
  text: 'Tool Tip. Mauris tellus, eget ut aliquam aliquet tincidunt habitant ipsum.',
  position: 'right'
};

export const TopTooltip = (args) => <Tooltip {...args} />
TopTooltip.args = {
  text: 'Tool Tip. Mauris tellus, eget ut aliquam aliquet tincidunt habitant ipsum.',
  position: 'top'
};

export const BottomTooltip = (args) => <Tooltip {...args} />
BottomTooltip.args = {
  text: 'Tool Tip. Mauris tellus, eget ut aliquam aliquet tincidunt habitant ipsum.',
  position: 'bottom'
};