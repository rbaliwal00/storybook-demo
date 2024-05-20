import React, { ReactNode } from 'react';
import { DesktopNavbar } from './DesktopNavbar';
import { PrimaryLogo } from '@assets/icons';

type NavItem = {
  id: number;
  type: string;
  title: string;
  path: string;
  links?: NavItem[];
};

type Props = {
  children: ReactNode;
  primary: boolean;
  leftNavItems: NavItem[];
  rightNavItems: NavItem[];
};


const DesktopNavbarLayout = ({ children, primary, leftNavItems, rightNavItems }: Props) => {


    return (
        <div>
            <DesktopNavbar logo={PrimaryLogo} primary={true} leftNavItems={leftNavItems} rightNavItems={rightNavItems} />
                {children}
        </div>
    );
};

export default DesktopNavbarLayout;