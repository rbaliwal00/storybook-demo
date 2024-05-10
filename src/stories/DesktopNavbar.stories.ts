import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { DesktopNavbar } from './DesktopNavbar';
import PrimaryLogo from '../assets/logo.svg';
import SecondaryLogo from '../assets/logo-secondary.svg';

const meta = {
  title: 'Example/DesktopNavbar',
  component: DesktopNavbar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {

  },
} satisfies Meta<typeof DesktopNavbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
  parameters: {
    nextjs: {
      router: {
        pathname: '/learning',
      },
    },
  },
  args: {
    logo: PrimaryLogo,
    primary: true,
    rightNavItems : [
    {
      id: 1,
      type: "link",
      title: "Hire",
      path: 'hire'
    },
    {
      id: 2,
      type: "link",
      title: "Become Supplier",
      path: 'supplier'
    },
    {
      id: 3,
      type: "link",
      title: "Job / Internship",
      path: 'job'
    }
  ],
    leftNavItems: [
    {
      id: 1,
      type: "dropdown",
      title: "Jobs",
      path: 'jobs',
      links: [
        {
            id: 1,
            type: "link",
            title: "Search Jobs",
        },
        {
            id: 2,
            type: "link",
            title: "Manage Jobs",
        }
      ]
    },
    {
      id: 2,
      type: "link",
      title: "Learning",
      path: 'learning'
    }
  ],
  },
};

export const secondary: Story = {
  args: {
    logo: SecondaryLogo,
    primary: false,
    rightNavItems : [
    {
      id: 1,
      type: "link",
      title: "Hire",
      path: 'hire'
    },
    {
      id: 2,
      type: "link",
      title: "Become Supplier",
      path: 'supplier'
    },
    {
      id: 3,
      type: "link",
      title: "Job / Internship",
      path: 'job'
    }
  ],
    leftNavItems: [
    {
      id: 1,
      type: "dropdown",
      title: "Jobs",
      path: 'jobs',
      links: [
        {
            id: 1,
            type: "link",
            title: "Search Jobs",
        },
        {
            id: 2,
            type: "link",
            title: "Manage Jobs",
        }
      ]
    },
    {
      id: 2,
      type: "link",
      title: "Learning",
      path: 'learning'
    }
  ],
  },
};

