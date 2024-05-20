import type { Meta, StoryObj } from '@storybook/react';

import UploadDoc from './UploadDoc';


const meta = {
  component: UploadDoc,
  tags: ['autodocs'],
  parameters: {
    layout: '', 
  },
  args: {
    
  },
} satisfies Meta<typeof UploadDoc>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
  args: {
    title: 'Upload ID Image',
    btnList: [
        {
            id: "1",
            label: "Aadhar"
        },
        {
            id: "2",
            label: "Passport"
        }
    ]
  },
};

