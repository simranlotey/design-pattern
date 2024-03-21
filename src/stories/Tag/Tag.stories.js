import React from 'react';
import Tag from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
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

export const Solid = (args) => <Tag {...args} />;
Solid.args = {
  children: 'Tag',
  backgroundColor: '#2196f3',
  textColor: '#fff',
  borderRadius: '4px',
};

export const Outline = (args) => <Tag {...args} />;
Outline.args = {
  children: 'Tag',
  backgroundColor: 'transparent',
  textColor: '#2196f3',
  border: '1px solid #2196f3',
  borderRadius: '4px',
};

export const Text = (args) => <Tag {...args} />;
Text.args = {
  children: 'Tag',
  backgroundColor: 'transparent',
  textColor: '#2196f3',
  border: 'none',
};
