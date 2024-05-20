import type { Meta, StoryObj } from '@storybook/react';

import PreferenceFormExp from './PreferenceFormExp';

const meta = {
  component: PreferenceFormExp,
  tags: ['autodocs'],
  parameters: {
    layout: '', 
  },
  args: {
    
  },
} satisfies Meta<typeof PreferenceFormExp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const web: Story = {
  args: {
    platform: 'web'
  },
};

export const mobile: Story = {
  args: {
    platform: 'mobile'
  },
};
