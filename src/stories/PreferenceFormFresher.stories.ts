import type { Meta, StoryObj } from '@storybook/react';

import PreferenceFormFresher from './PreferenceFormFresher';

const meta = {
  component: PreferenceFormFresher,
  tags: ['autodocs'],
  parameters: {
    layout: '', 
  },
  args: {
    
  },
} satisfies Meta<typeof PreferenceFormFresher>;

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

