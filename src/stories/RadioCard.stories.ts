import type { Meta, StoryObj } from '@storybook/react';

import RadioCard from './RadioCard';
import { TimeIcon } from '@assets/icons';

const meta = {
  component: RadioCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered', 
  },
  args: {
    
  },
} satisfies Meta<typeof RadioCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
  args: {
    label: "Label",
    buttons: [
        {
            id: "1",
            label: "Male"
        },
        {
            id: "2",
            label: "Female"
        }
    ],
    icon: TimeIcon,
    iconHeight: 30,
    backgroundColor: "#113B73",
    titleColor: "white",
    buttonLabelColor: "white"
  },
};

