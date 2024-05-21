import React from 'react';
import { DesktopNavbar } from './DesktopNavbar';
import { Back, Gst, PrimaryLogo, SecondaryLogo } from '@assets/icons';
import Topbar from './Topbar';
import Button from './Button';
import UploadCard from './UploadCard';

const GstPancard = ({platform}: any) => {
    const desktopNavbarProps = {
    logo: SecondaryLogo,
        rightNavItems : [
        {
            id: 1,
            type: "link",
            title: "Hire",
            path: '/hire'
            },
            {
            id: 2,
            type: "link",
            title: "Become Supplier",
            path: '/supplier'
            },
            {
            id: 3,
            type: "link",
            title: "Job / Internship",
            path: '/job'
            }
        ],
            leftNavItems: [
            {
            id: 1,
            type: "dropdown",
            title: "Jobs",
            path: 'jobs',
            links: [
                {
                    id: 1,
                    type: "link",
                    title: "Search Jobs",
                    path: "/search-jobs",
                },
                {
                    id: 2,
                    type: "link",
                    title: "Manage Jobs",
                    path: "/manage-jobs",
                }
            ]
            },
            {
            id: 2,
            type: "link",
            title: "Learning",
            path: '/learning'
            }
        ],
    }

    const webTopbarProps = {
        label: 'GST / PAN',
        backgroundColor: 'white',
        color: '#374151',
        progress: '30%',
        borderRadius: 12,
    }
    const mobileTopbarProps = {
        label: 'GST / PAN',
        type: 'primary',
        color: 'white',
        button: Back,
        logo: PrimaryLogo,
        progress: '30%',
        borderRadius: 0,
    }
    
    return (
        <div>
            {platform === 'web' && <div className='mb-10'><DesktopNavbar {...desktopNavbarProps}/></div>}
            <div className='content'>
                <div className='content-center w-7/12 m-auto'>
                    {platform === 'web' && <Topbar {...webTopbarProps}/>}
                    {platform === 'mobile' && <Topbar {...mobileTopbarProps}/>}
                    <div className='mt-10'>
                        <UploadCard description='Description' logo={Gst} buttonText='Upload GST'/>
                    </div>
                    <div className='flex justify-between mt-10'>
                        <div className='w-[73%]'>
                            <Button text='Next'/>
                        </div>
                        <div className='w-[25%]'>
                            <Button text='Back' kind='secondary'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GstPancard;