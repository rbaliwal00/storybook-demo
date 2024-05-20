import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import { Back, OneDayJob, PrimaryLogo, SecondaryLogo, TimeIcon } from '@assets/icons';
import Button from './Button';
import './PreferenceFormExp.css';
import RadioCard from './RadioCard';
import Topbar from './Topbar';
import UploadDoc from './UploadDoc';
import { DesktopNavbar } from './DesktopNavbar';

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
    label: 'Last Step',
    backgroundColor: 'white',
    color: '#374151',
    progress: '30%',
    borderRadius: 12,
}
const mobileTopbarProps = {
    label: 'Last Step',
    type: 'primary',
    color: 'white',
    button: Back,
    logo: PrimaryLogo,
    progress: '30%',
    borderRadius: 0,
}
const radioCardProps1 = {
    label: "Do you want one day job ?",
    buttons: [
        {
            id: "1",
            label: "Yes"
        },
        {
            id: "2",
            label: "No"
        }
    ],
    icon: OneDayJob,
}

const radioCardProps2 = {
    label: "Do you want Part-Time job ?",
    buttons: [
        {
            id: "1",
            label: "Yes"
        },
        {
            id: "2",
            label: "No"
        }
    ],
    icon: TimeIcon,
    iconHeight: 30,
    backgroundColor: "#113B73",
}

const uploadDocProps = {
    title: 'Upload ID Image',
    btnList: [
        {
            id: "1",
            label: "Aadhar"
        },
        {
            id: "2",
            label: "Passport"
        }
    ]
}

const PreferenceFormExp = ({platform}: any) => {
    return (    
        <div className='preference-form-exp'>
            {platform === 'web' && <div className='mb-10'><DesktopNavbar {...desktopNavbarProps}/></div>}
            <div className='content'>
                <div className='content-center'>
                    {platform === 'web' && <Topbar {...webTopbarProps}/>}
                    {platform === 'mobile' && <Topbar {...mobileTopbarProps}/>}
                    <div className='exp-margin-top exp-info-container'>
                        <InfoOutlinedIcon className='exp-info' onClick={() => console.log('info')}/>
                        <RadioCard  {...radioCardProps1}/>
                    </div>
                    <div className='exp-margin-top'>
                        <RadioCard  {...radioCardProps2}/>
                    </div>
                    <div className='exp-margin-top'>
                        <UploadDoc {...uploadDocProps} />
                    </div>
                    <div className='flex justify-between exp-margin-top'>
                        <div className='w-[73%]'>
                            <Button text='Confirm'/>
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

export default PreferenceFormExp;