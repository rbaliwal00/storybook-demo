import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { EyeIcon } from '@assets/icons';
import RoundButton from './RoundButton';


const meta = {
  component: RoundButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered', 
  },
  args: {
    
  },
} satisfies Meta<typeof RoundButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
  args: {
    label: "Label",
    icon: EyeIcon,
    backgroundColor: "white",
    color: "black",
    border: "1px solid #F3F4F6",
    onClick: action(`Round Button  Clicked`)
  },
};

