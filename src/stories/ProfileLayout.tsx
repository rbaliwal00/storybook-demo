import React from 'react';
import Topbar from './Topbar';
import Button from './Button';
import './ProfileLayout.css';

const ProfileLayout = ({...args}) => {
    return (
        <div>
            <div>
                <Topbar {...args}/>
            </div>
            <div className='profile-layout-bottom'>
                <div className='profile-layout-bottom-button'>
                    <Button {...args}/>
                </div>
            </div>
        </div>
    );
};

export default ProfileLayout;