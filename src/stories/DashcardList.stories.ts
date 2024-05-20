import type { Meta, StoryObj } from '@storybook/react';

import {
  Ads,
  BriefCase,
  Chat,
  Cv,
  Notification,
  Payment,
  Save,
  Search,
  Supplier,
  Vc
} from "../assets/icons";
import DashCardList from './DashcardList';

const meta = {
  component: DashCardList,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',

  },
  args: {

  },
} satisfies Meta<typeof DashCardList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const JobSeekerDashboardList: Story = {
  args: {
    width: '200px',
    dashCards: [
    {
        id: "1",
        title: "View Cv",
        banner: Cv,
        link: "/cv-create",
        lastUpdated: new Date(),
        progress: '20'
      },
    {
        id: "2",
      title: "Visiting Card",
      banner: Vc,
      link: "/vc",
      lastUpdated: new Date(),
    },
    {
        id: "3",
      title: "Post",
      banner: Ads,
      link: "/vc",
    },
    {
        id: "4",
        title: "Applied Jobs",
        banner: BriefCase,
        link: "/vc",
        stat1: {
            count: 0,
            title: 'Jobs'
        },
      },
    {
        id: "5",
      title: "Search Supplier",
      banner: Supplier,
      link: "/vc",
    },
    {
        id: "6",
        title: "Search Jobs",
        banner: Search,
        link: "",
        stat1: {
            count: 0,
            title: 'New Jobs'
        },
      },
    {
        id: "7",
      title: "Saved",
      banner: Save,
      link: "/vc",
        stat1: {
            count: 0,
            title: 'Saved Jobs'
        },
        stat2: {
            count: 0,
            title: 'Saved Supplier'
        }
    },
    {
        id: "8",
        title: "Chatting",
        banner: Chat,
        link: "/vc",
        stat1: {
            count: 0,
            title: 'New Message'
        }
      },
    {
        id: "9",
      title: "Notification",
      banner: Notification,
      link: "/vc",
      stat1: {
        count: 0,
        title: 'New Notification'
      }
    },
    {
        id: "10",
      title: "Payment History",
      banner: Payment,
      link: "/vc",
    },
  ]
  },
};


