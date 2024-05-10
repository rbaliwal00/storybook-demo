import type { Meta, StoryObj } from '@storybook/react';

// import { YourComponent } from './YourComponent';
import RoleCard from './RoleCard';
import { ROLES } from '@constants';
import { fn } from '@storybook/test';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof RoleCard> = {
  component: RoleCard,
  parameters : {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof RoleCard>;

export default meta;
type Story = StoryObj<typeof RoleCard>;

export const Fresher: Story = {
  args: ROLES[0],
};
export const Experienced: Story = {
  args: ROLES[1],
};