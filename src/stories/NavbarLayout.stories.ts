import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { Ads, AdsActive, Chat, ChatActive, Dash, DashActive, Home, HomeActive } from '@assets/icons/MobileNavbarIcons';
import NavbarLayout from './NavbarLayout';
import { PrimaryLogo } from '@assets/icons';

const meta = {
  component: NavbarLayout,
  tags: ['autodocs'],
  parameters: {
    layout: '', 
  },
  args: {
    
  },
} satisfies Meta<typeof NavbarLayout>;

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
        onBack: action('Back button clicked')
    },
    mobileNavbarProps: {
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
    }
  },
};
