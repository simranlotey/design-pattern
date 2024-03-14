import React from 'react';
import CustomCard from './Card';

export default {
  title: 'Components/Card',
  component: CustomCard,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <CustomCard {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
  title: 'Horizontal Card with Image & Actions',
  description: 'Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed quisque velit, auctor at lobortis hac tincidunt sodales id. Elit interdum vel nisi, in enim sagittis at. Netus sagittis eleifend aliquet urna quis.',
  textButton: 'Button',
  orientation: 'horizontal',
};

export const Vertical = Template.bind({});
Vertical.args = {
  title: 'Vertical Card with Image & Actions',
  description: 'Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed quisque velit, auctor at lobortis hac tincidunt sodales id. Elit interdum vel nisi, in enim sagittis at. Netus sagittis eleifend aliquet urna quis.',
  textButton: 'Button',
  orientation: 'vertical',
};
