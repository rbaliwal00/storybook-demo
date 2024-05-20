import MobileNavbar, { MobileNavbarProps } from './MobileNavbar';
import Topbar, { TopbarProps } from './Topbar';

type Props = {
    mobileNavbarProps: MobileNavbarProps;
    topbarProps: TopbarProps;
}

const NavbarLayout = ({mobileNavbarProps, topbarProps}: Props) => {
    return (
        <div>
            <div>
                <Topbar {...topbarProps}/>
            </div>
            <div className='profile-layout-bottom'>
                <div className='profile-layout-bottom-button'>
                    <MobileNavbar {...mobileNavbarProps}/>
                </div>
            </div>
        </div>
    );
};

export default NavbarLayout;