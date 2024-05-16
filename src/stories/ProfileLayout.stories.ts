import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ProfileLayout from './ProfileLayout';
import { Back } from '@assets/icons';
import PrimaryLogo from '../assets/logo.svg';

const meta = {
  component: ProfileLayout,
  tags: ['autodocs'],
  parameters: {
    layout: '', 
  },
  args: {
    
  },
} satisfies Meta<typeof ProfileLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
  args: {
    type: 'primary',
    kind: 'primary',
    text: 'Next',
    label: "Label",
    backgroundColor: "#113B73",
    color: "white",
    button: Back,
    logo: PrimaryLogo,
    // logoHeight: 50,
    progress: '30%',
    onClick: action('Button button clicked'),
    onBack: action('Back button clicked')
  },
};
