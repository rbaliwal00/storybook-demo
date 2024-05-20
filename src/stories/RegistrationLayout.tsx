import React from 'react';
import Topbar from './Topbar';
import Button from './Button';
import { ButtonProps } from './Button';
import { TopbarProps } from './Topbar';
import './RegistrationLayout.css';

type Props = {
    buttonProps: ButtonProps;
    topbarProps: TopbarProps
}

const RegistationLayout = ({buttonProps, topbarProps}: Props) => {
    return (
        <div>
            <div>
                <Topbar {...topbarProps}/>
            </div>
            <div className='profile-layout-bottom'>
                <div className='profile-layout-bottom-button'>
                    <Button {...buttonProps}/>
                </div>
            </div>
        </div>
    );
};

export default RegistationLayout;