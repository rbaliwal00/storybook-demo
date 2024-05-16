import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MobileNavbar from './MobileNavbar';
import { Ads, AdsActive, Chat, ChatActive, Dash, DashActive, Home, HomeActive } from '@assets/icons/MobileNavbarIcons';

const meta = {
  component: MobileNavbar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
    
  },
} satisfies Meta<typeof MobileNavbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
  args: {
    list: [
    {
      id: "1",
      banner: Home,
      bannerActive: HomeActive,
      title: "Home",
      link: "",
      onClick: action('Button Clicked')
    },
    {
      id: "2",
      banner: Dash,
      bannerActive: DashActive,
      title: "Dashboard",
      link: "",
      active: true,
      onClick: action('Button Clicked')
    },
    {
      id: "3",
      banner: Chat,
      bannerActive: ChatActive,
      // active: true,
      title: "Chat",
      link: "",
      onClick: action('Button Clicked')
    },
    {
      id: "4",
      banner: Ads,
      bannerActive: AdsActive,
      title: "Post",
      // active: true,
      link: "",
      onClick: action('Button Clicked')
    }
  ],
  backgroundColor: "white",
  color: "#FE8B4C"
  },
  
};

