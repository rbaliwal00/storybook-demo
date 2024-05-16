import Image from 'next/image';
import React from 'react';
import './Topbar.css';

type Props = {
    label?: string,
    logo?: any;
    button?: any;
    logoHeight?: number;
    platform?: string;
    color?: string;
    backgroundColor?: string;
    onBack?: () => void;
    progress?: string;
}

const Topbar = ({label,logo, button, logoHeight, color, backgroundColor, progress, onBack, platform}: Props) => {

    return (
        <header className='topbar-container clearfix' 
            style={{backgroundColor, color}}>
                <div className='topbar-back-button'>
                    <Image 
                        src={button} alt=''
                        className=''
                        onClick={onBack}
                    />
                    <div className='topbar-label'>{label}</div>
                </div>
                <div className='topbar-logo'>
                    <Image 
                        src={logo} alt=''
                        className=''
                        height={logoHeight ?? 30}
                    />
                </div>
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