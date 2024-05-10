import React from 'react';
import './DesktopNavbar.css';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  primary?: boolean;
  children: string | JSX.Element | JSX.Element[],
  logo:any;
  leftNavItems: any;
  rightNavItems: any;
  platform?: any;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const DesktopNavbar = ({children, logo, onLogin, onLogout, onCreateAccount, primary, leftNavItems, rightNavItems, platform }: HeaderProps) => {
  const mode = primary ? 'header--primary' : 'header--secondary';

  // const pathname = usePathname();
  
  return (
    <header className={`header ${mode}`}>
      <div className='logo-container'>
        <Image src={logo} width={100} height={100} alt="logo" className='logo'/> 
        <ul className='left-nav'>
          {leftNavItems.map((item:any) => {
            // const isActive = pathname.startsWith(item.path);
            return (
              <li key={item.id} >
                <Link href={item.path} 
                  className={'nav-li'}>
                  <span>{item.title}</span>
                  {item.type === 'dropdown' && 
                    <span className='dropdown-arrow'>^</span>
                  }
                </Link>
              </li>
          )})}
        </ul>
      </div>
      <nav>
        <ul className='nav-items'>
          {rightNavItems.map((item:any) => (
            <li key={item.id}>
              <Link href={item.path}>{item.title}</Link>
              {item.type === 'dropdown' && <div>Hello</div>}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
