import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Topbar from './Topbar';
import { Back } from '@assets/icons';
import PrimaryLogo from '../assets/logo.svg';

const meta = {
  component: Topbar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: '',
  },
  args: {
    
  },
} satisfies Meta<typeof Topbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
  args: {
    label: "Label",
    backgroundColor: "#113B73",
    color: "white",
    button: Back,
    logo: PrimaryLogo,
    // logoHeight: 50,
    progress: '30%',
    onBack: action('Back button clicked')
  },
  
};

