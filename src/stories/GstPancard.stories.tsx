import type { Meta, StoryObj } from '@storybook/react';

import GstPancard from './GstPancard';

const meta = {
  component: GstPancard,
  tags: ['autodocs'],
  parameters: {
    layout: '', 
  },
  args: {
    
  },
} satisfies Meta<typeof GstPancard>;

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
