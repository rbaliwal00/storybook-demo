import Image from 'next/image';
import React, { MouseEventHandler } from 'react';
import './UploadCard.css';

interface Props     {
    logo?: any;
    description?: string;
    color: string;
    buttonText?: string;
    buttonColor?: string;
    buttonTextColor?: string;
    backgroundColor?: string;
    padding?: string;
    borderRadius?: string;
    onUpload?: () => void;
    platform?: string;
}

const UploadCard = ({logo, description, padding, buttonText, backgroundColor, buttonColor,color, buttonTextColor, borderRadius,onUpload, platform}: Props) => {
    return (
        <div className='upload-card'
            style={{backgroundColor, color, padding, borderRadius}}>
            <Image src={logo} alt=''/>
            <p className='upload-card-description'>{description}</p>
            <button 
                onClick={onUpload}
                style={{backgroundColor: buttonColor, color: buttonTextColor}}
                className={`border-primary border rounded-md inline-flex items-center justify-center py-3 px-12 text-center text-base font-medium text-white disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-[#1B44C8] active:border-[#1B44C8]`}>
                {buttonText}
            </button>
        </div>
    );
};

export default UploadCard;