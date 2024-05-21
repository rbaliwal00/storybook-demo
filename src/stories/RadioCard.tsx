import Image from 'next/image';
import './RadioCard.css';

type ButtonProps = {
    id: string;
    label: string;
}

export type RadioCardProps = {
    label?: string;
    buttons?: ButtonProps[];
    icon?: any;
    iconHeight?: number;
    backgroundColor?: string;
    titleColor?: string;
    buttonLabelColor?: string;
    platform?: string;
}

const RadioCard = ({label, backgroundColor, titleColor, buttons, icon, buttonLabelColor, iconHeight, platform}: RadioCardProps) => {
    return (
        <div className='radio-card' style={{width: '100%', backgroundColor}}>
            <div className='radio-card-content'>
                <h2 className='radio-card-heading' style={{color: titleColor}}>{label} </h2>
                <div className='radio-card-inputs'>
                    {buttons && buttons.map((button) => (
                        <div key={button.id} className='radio-card-input'>
                            <input type='radio' name={label} id={button.id} />
                            <label htmlFor={button.id} className='btn-label' style={{color: buttonLabelColor}}>{button.label}</label>
                        </div>
                    ))}
                </div>
            </div>
            {icon && <div className='radio-card-icon'><Image src={icon} alt="" height={70}/></div>}
            
        </div>
    );
};

export default RadioCard;