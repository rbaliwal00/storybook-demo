import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import RegistationLayout from './RegistrationLayout';
import { Back, PrimaryLogo } from '@assets/icons';

const meta = {
  component: RegistationLayout,
  tags: ['autodocs'],
  parameters: {
    layout: '', 
  },
  args: {
    
  },
} satisfies Meta<typeof RegistationLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
  args: {
    topbarProps: {
       logo: PrimaryLogo,
        progress: '30%',
        label: "Label",
        backgroundColor: "#113B73",
        color: "white",
        button: Back,
        onBack: action('Back button clicked')
    },
    buttonProps: {
      text: "Next",
      onClick: action('Button button clicked'),
    }
  },
};
