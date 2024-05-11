import React from 'react';
import './DesktopNavbar.css';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  primary?: boolean;
  logo:any;
  leftNavItems: any;
  rightNavItems: any;
  backgroundColor?: string;
  platform?: any;
  color?: string;
}

export const DesktopNavbar = ({ logo, primary, leftNavItems, rightNavItems, color, backgroundColor, platform }: HeaderProps) => {
  const mode = primary ? 'header--primary' : 'header--secondary';

  // const pathname = usePathname();
  
  return (
    <header className={`header ${mode}`} 
      style={{backgroundColor: backgroundColor, color: color}}>
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
