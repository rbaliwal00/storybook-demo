import Image from 'next/image';
import Button from './Button';
import './UploadCard.css';

type Props = {
    logo?: any;
    description?: string;
    color?: string;
    buttonText?: string;
    backgroundColor?: string;
    borderRadius?: string;
    onUpload?: () => void;
    platform?: string;
}

const UploadCard = ({logo, description, backgroundColor,color, buttonText, borderRadius,onUpload, platform}: Props) => {
    return (
        <div className='upload-card'
            style={{backgroundColor, color, borderRadius}}>
            <Image src={logo} alt=''/>
            <p className='upload-card-description'>{description}</p>
            <Button text={buttonText} onClick={onUpload}/>    
        </div>
    );
};

export default UploadCard;