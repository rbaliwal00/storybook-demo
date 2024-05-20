import Image from 'next/image';
import Link from 'next/link';
import './DesktopNavbar.css';

interface HeaderProps {
  primary?: boolean;
  logo?:any;
  logoHeight?: number;
  leftNavItems?: any;
  rightNavItems?: any;
  backgroundColor?: string;
  platform?: any;
  width?: string;
  color?: string;
}

export const DesktopNavbar = ({ logo, logoHeight, primary, leftNavItems, rightNavItems, color, backgroundColor, platform }: HeaderProps) => {
  const mode = primary ? 'header--primary' : 'header--secondary';
  
  return (
    <header className={`header ${mode}`} 
      style={{backgroundColor: backgroundColor, color: color}}>
      <div className='logo-container'>
        <Image src={logo} height={logoHeight} alt="logo" className='logo'/> 
        <ul className='left-nav'>
          {leftNavItems && leftNavItems.map((item:any) => {
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
          {rightNavItems && rightNavItems.map((item:any) => (
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
