import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: ' ', 
  },
  args: {
    
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
  args: {
    type: 'primary',
    kind: 'primary',
    onClick: action('Back button clicked')
  },
};

export const PrimaryKindSecondary: Story = {
  args: {
    type: 'primary',
    kind: 'secondary',
    color: "#113B73",
    onClick: action('Back button clicked')
  },
};

export const PrimaryKindTertiary: Story = {
  args: {
    type: 'primary',
    kind: 'tertiary',
    onClick: action('Back button clicked')
  },
};

export const secondary: Story = {
  args: {
    type: 'secondary',
    kind: 'primary',
    onClick: action('Back button clicked')
  },
};

export const SecondaryKindSecondary: Story = {
  args: {
    type: 'secondary',
    kind: 'secondary',
    onClick: action('Back button clicked')
  },
};

export const SecondaryKindTertiary: Story = {
  args: {
    type: 'secondary',
    kind: 'tertiary',
    onClick: action('Back button clicked')
  },
};

export const ButtonWithTextAndIcon: Story = {
  args: {
    type: 'primary',
    kind: 'primary',
    iconLeft: "&#x21e9;",
    iconRight: "&#8681;",
    onClick: action('Back button clicked')
  },
};


