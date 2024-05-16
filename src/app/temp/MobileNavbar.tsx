// import Image from 'next/image';
// import React from 'react';
// import './MobileNavbar.css'
// import { Back } from '@assets/icons';

// type List = {
//     id: string;
//     banner: any;
//     title: string;
//     link: string;
// }

// type Props = {
//     rightNavbarList: List[],
//     title?: string;
//     logo?: any;
//     logoWidth?: number;
//     logoHeight?: number;
//     height?: string;
//     width?: string;
//     background?: string;
//     color?: string;
//     platform?: string;
//     bannerHeight?: number;
//     bannerWidth?: number;
// }

// const MobileNavbar = ({rightNavbarList,title, logo, logoWidth, logoHeight,bannerHeight, bannerWidth, background, color, platform}: Props) => {
//     return (
//         <div className='mobile-navbar-container' 
//             style={{background, color}}>
//             <div className='mobile-navbar-container-main'>
//                 <Image src={logo} width={logoWidth} height={logoHeight} alt="logo" className='mobile-navbar-logo'/> 
//                 <ul className='mobile-navbar-ul'>
//                     {
//                         rightNavbarList.map((item) => (
//                             <li className='mobile-navbar-li'>
//                                 <Image src={item.banner} alt='' height={40} width={40} 
//                                     style={{height: bannerHeight, width: bannerWidth}}/>
//                                 <div>{item.title}</div>
//                             </li>
//                         ))
//                     }   
//                 </ul>
//             </div>
//             <div className='mobile-navbar-container-secondary'>
//                 <Image 
//                     src={Back} alt=''
//                     className='back-button'
//                     />
//                 <div>{title}</div>
//             </div>
//         </div>
//     );
// };

// export default MobileNavbar;