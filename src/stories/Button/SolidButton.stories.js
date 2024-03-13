import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
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

export const SolidButton = (args) => <Button {...args} />;
SolidButton.args = {
  children: 'Button',
  backgroundColor: '#2196f3',
  textColor: '#fff',
  borderRadius: '8px',
  size: 'medium',
};

export const OutlineButton = (args) => <Button {...args} />;
OutlineButton.args = {
  children: 'Button',
  backgroundColor: 'transparent',
  textColor: '#2196f3',
  border: '2px solid #2196f3',
  borderRadius: '8px',
  size: 'medium',
};

export const RoundedButton = (args) => <Button {...args} />;
RoundedButton.args = {
  children: 'Button',
  backgroundColor: '#2196f3',
  textColor: '#fff',
  borderRadius: '30px',
  size: 'medium',
};

export const TextButton = (args) => <Button {...args} />;
TextButton.args = {
  children: 'Button',
  backgroundColor: 'transparent',
  textColor: '#2196f3',
  border: 'none',
  size: 'medium',
};
