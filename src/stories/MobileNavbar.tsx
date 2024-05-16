import Image from 'next/image';
import React, { useState } from 'react';
import './MobileNavbar.css';

type Icon = {
    id: string;
    banner: any;
    title: string;
    link?: string;
    active?: boolean;
    bannerActive?: any;
    onClick?: () => void;
}

type Props = {
    list: Icon[],
    platform?: string;
    color?: string;
    backgroundColor?: string;
    width?: string;
}

const MobileNavbar = ({list, color, backgroundColor, platform}: Props) => {
    const [active, setActive] = useState("2");
    return (
        <div className='mobile-footer-container' 
            style={{backgroundColor, color}}>
            {
                list.map((item) => (
                    <div key={item.id}>
                        {item.id === active ? <div className='mobile-footer-banner-active' 
                            onClick={() => setActive(item.id)}>
                            <div className='mobile-navbar-img mobile-navbar-img-active'>
                                <Image
                                    src={item.bannerActive} 
                                    alt='' 
                                    onClick={item.onClick}
                                    height={50}/>
                                <div className='mobile-footer-title-active'>
                                    {item.title}
                                </div>
                            </div>
                        </div>:<div
                            onClick={() => setActive(item.id)}>
                            <div className='mobile-navbar-img'>
                                 <Image
                                    src={item.banner} 
                                    alt='' 
                                    onClick={item.onClick}
                                    height={45}/>
                            </div>
                        </div>}
                    </div>
                ))
            }
        </div>
    );
};

export default MobileNavbar;