import React from 'react';
import Link from './Link';

export default {
  title: 'Components/Link',
  component: Link,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <Link {...args} />;

export const Links = Template.bind({});
Links.args = {
  text: 'Link',
  color: '#E86C00',
  size: 'medium',
  isUnderline: false,
  disabled: false,
};

