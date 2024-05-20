import Image from 'next/image';
import React from 'react';
import './Topbar.css';

export type TopbarProps = {
    label?: string,
    logo?: any;
    button?: any;
    logoHeight?: number;
    platform?: string;
    color?: string;
    backgroundColor?: string;
    onBack?: () => void;
    progress?: string;
    borderRadius?: number;
}

const Topbar = ({label,logo, button, logoHeight, color, backgroundColor, progress, onBack, borderRadius, platform}: TopbarProps) => {

    return (
        <header className='topbar-container clearfix' 
            style={{backgroundColor, color, borderRadius}}>
                <div className='topbar-back-button'>
                    {button && <Image 
                            src={button} alt=''
                            className=''
                            onClick={onBack}
                        />}
                    <div className={`topbar-label ${button && 'topbar-label-button'}`}>{label}</div>
                </div>
                {logo && <div className='topbar-logo'>
                    <Image 
                        src={logo} alt=''
                        className=''
                        height={logoHeight ?? 30}
                    />
                </div>}
                <div className='topbar-progress'>
                    <div className='bg-stroke dark:bg-dark-3 relative h-1.5 w-full rounded-2xl'>
                        <div className='bg-[#FE8B4C] absolute top-0 left-0 h-full rounded-2xl' 
                        style={{width: progress}}></div>
                    </div>
                </div>
        </header>
    );
};

export default Topbar;