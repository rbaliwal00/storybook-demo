import type { Meta, StoryObj } from '@storybook/react';
import PrimaryLogo from '../assets/logo.svg';
import Dashcard from './Dashcard';
import { DesktopNavbar } from './DesktopNavbar';

import {
  Ads,
  BriefCase,
  Chat,
  Cv,
  Home,
  Notification,
  Payment,
  Save,
  Search,
  Supplier,
  Vc,
  Wallet
} from "../assets/icons";

const meta = {
  component: Dashcard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',

  },
  args: {

  },
} satisfies Meta<typeof Dashcard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const JustTitleAndBanner: Story = {
  args: {
    banner: Payment,
    link: "/payment",
    title: 'Payment History',
    width: '220px'
  }
};

export const LastUpdatedWithProgress: Story = {
  args: {
    lastUpdated: '20/12/2022',
    banner: Cv,
    link: "/payment",
    title: 'View Cv',
    progress: "20"
  },
};

export const LastUpdatedWithoutProgress: Story = {
  args: {
    lastUpdated: '20/12/2022',
    banner: Vc,
    link: "/payment",
    title: 'Visiting Card',
  },
};

export const OneStat: Story = {
  args: {
    banner: Ads,
    title: 'Post',
    link: "/payment",
    stat1: {
      count: 0,
      title: "Ads"
    }
  },
};

export const TwoStat: Story = {
  args: {
    banner: Save,
    title: 'Saved',
    link: "/payment",
    stat1: {
      count: 0,
      title: "Jobs"
    },
    stat2: {
      count: 0,
      title: "Supplier"
    }
  },
};