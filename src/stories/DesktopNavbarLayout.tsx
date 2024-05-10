import React from 'react';
import { DesktopNavbar } from './DesktopNavbar';
import PrimaryLogo from '../assets/logo.svg';

type Props = {
  children: string | JSX.Element | JSX.Element[];
}

const DesktopNavbarLayout = ({children}: Props) => {
    const rightNavItems = [
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
  ];
   const leftNavItems = [
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
  ];

    return (
        <div>
            <DesktopNavbar logo={PrimaryLogo} primary={true} leftNavItems={leftNavItems} rightNavItems={rightNavItems}>
                {children}
            </DesktopNavbar>
        </div>
    );
};

export default DesktopNavbarLayout;