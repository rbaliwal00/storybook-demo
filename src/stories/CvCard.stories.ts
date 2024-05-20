import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { fn } from '@storybook/test';

import CvCard from './CvCard';

const meta = {
  component: CvCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
     onClick: { control: fn() },  // Ensure this is setup to log the action
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: '', 
  },
  args: {
    
  },
} satisfies Meta<typeof CvCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const education: Story = {
  args: { 
    fromDate: new Date(),
    toDate: new Date(),
    education: "Masters",
    institution: "ABC institution",
    cgpa: "9.69",
    onClick: action("Clicked Dots")
  },
};

export const educationWithError: Story = {

  args: { 
    education: "Masters",
    institution: "ABC institution",
    cgpa: "9.69",
    onClick: action("Clicked Dots")
  },
};

export const experience: Story = {
  args: { 
    fromDate: new Date(),
    toDate: new Date(),
    jobType: "Full Time",
    brandName: "Horecah",
    city: "City",
    department: "Department",
    position: "Position",
    subCategory: "Sub -Category",
    onClick: action("Clicked Dots")
  },
};

export const reference: Story = {
  args: { 
    brandName: "Brand Name",
    referenceName: "Referance Name",
    city: "City",
    department: "Department",
    position: "Position",
    contact: "Contact Number",
    email: "Email",
    onClick: action("Clicked Dots")
  },
};

export const award: Story = {
  args: { 
    brandName: "Brand Name",
    awardTitle: "Award Title",
    department: "Department",
    position: "Position",
    onClick: action("Clicked Dots")
  },
};



