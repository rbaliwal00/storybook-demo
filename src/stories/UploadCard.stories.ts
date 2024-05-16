import type { Meta, StoryObj } from '@storybook/react';

import { Gst } from '@assets/icons';
import { action } from '@storybook/addon-actions';
import { fn } from '@storybook/test';
import UploadCard from './UploadCard';

const meta = {
  component: UploadCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
     onUpload: { control: fn() },  // Ensure this is setup to log the action
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof UploadCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
  args: {
    backgroundColor: "#F3F4F6",
    color: "#8899A8",
    logo: Gst,
    padding: '20px 30px',
    description: "Description",
    buttonText: "Upload CTA",
    buttonColor: "#113B73",
    onUpload: action('Upload Button Clicked')
  },
};

