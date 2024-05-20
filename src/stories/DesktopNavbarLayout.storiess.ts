import type { Meta, StoryObj } from '@storybook/react';
import DesktopNavbarLayout from './DesktopNavbarLayout';

const meta = {
  title: 'Example/DesktopNavbarLayout',
  component: DesktopNavbarLayout,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {

  },
} satisfies Meta<typeof DesktopNavbarLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
  args: {
    children: "1"
  },
};

