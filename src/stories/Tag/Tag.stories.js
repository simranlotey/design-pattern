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

export const SolidTag = (args) => <Tag {...args} />;
SolidTag.args = {
  children: 'Tag',
  backgroundColor: '#2196f3',
  textColor: '#fff',
  borderRadius: '4px',
};

export const OutlineTag = (args) => <Tag {...args} />;
OutlineTag.args = {
  children: 'Tag',
  backgroundColor: 'transparent',
  textColor: '#2196f3',
  border: '1px solid #2196f3',
  borderRadius: '4px',
};

export const TextTag = (args) => <Tag {...args} />;
TextTag.args = {
  children: 'Tag',
  backgroundColor: 'transparent',
  textColor: '#2196f3',
  border: 'none',
};
