import React from 'react';
import Chip from './Chip';

export default {
  title: 'Components/Chip',
  component: Chip,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: 'text' },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
  },
};

export const OutlineChip = (args) => <Chip {...args} />;
OutlineChip.args = {
  children: 'Chip',
  backgroundColor: 'transparent',
  textColor: '#E86C00',
  isLeftIcon: true,
  isRightIcon: false,
  border: '2px solid #E86C00',
  borderRadius: '30px',
  size: 'medium',
  disabled: false,
};

export const RoundedChip = (args) => <Chip {...args} />;
RoundedChip.args = {
  children: 'Chip',
  backgroundColor: '#E86C00',
  textColor: '#fff',
  isLeftIcon: false,
  isRightIcon: true,
  borderRadius: '30px',
  size: 'medium',
  disabled: false,
  iconType: false,
};

