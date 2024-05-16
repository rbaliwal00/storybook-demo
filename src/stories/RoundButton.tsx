import Image from 'next/image';
import './RoundButton.css';

type Props = {
    icon?: any;
    label?: string;
    borderRadius?: string;
    backgroundColor?: string;
    color?: string;
    border?: string;
    onClick?: () => void;
    platform?: string;
}

const RoundButton = ({icon, label, borderRadius, backgroundColor,border, onClick, color, platform}: Props) => {
    return (
        <div className='round-button' style={{borderRadius, backgroundColor, color, border}} onClick={onClick}>
            {icon && <div>
                <Image src={icon} alt='' height={30}/>
            </div>}
            {label && <div className='round-button-label'>{label}</div>}
        </div>
    );
};

export default RoundButton;