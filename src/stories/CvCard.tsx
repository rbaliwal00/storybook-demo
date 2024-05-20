import Image from 'next/image';

import { Dots } from '@assets/icons';
import './CvCard.css';
import Button from './Button';

type Props = {
    fromDate?: Date;
    toDate?: Date;
    jobType?: string;
    brandName?: string;
    education?: string;
    department?: string;
    position?: string;
    subCategory?: string;
    city?: string;
    institution?: string;
    cgpa?: string;
    referenceName?: string;
    awardTitle?: string;
    contact?: string;
    email?: string;
    onClick?: () => void;
    platform?: string;
}

const formatDate = (date: Date | undefined): string => {
    if(date){
        let formatDate = new Date(date);
        const month = formatDate.toLocaleString('default', { month: 'short' });
        const year = formatDate.getFullYear();

        return month + " " + year;
    }
    return "";
}

const CvCard = ({fromDate, toDate, jobType, brandName, contact, email, education, department, position, subCategory, city, institution, cgpa, referenceName, awardTitle, onClick, platform}: Props) => {    
    
    return (
            <div className='cv-card'>
                {(education || jobType) && <p className='heading-secondary'>
                    {fromDate ? <span>{formatDate(fromDate)}</span> : <span className='cv-card-error'> From</span>} 
                    {fromDate && toDate ?  <span > - </span> : <span className='text-red'> - </span>}
                    {toDate ? <span>{formatDate(toDate)}</span> : <span className='cv-card-error'> To</span>}
                </p>}
                {jobType && <div className='cv-type'>{jobType}</div>}
                {brandName && (referenceName || awardTitle ) ?  <h2 className='heading-secondary'>{brandName}</h2> : 
                    <h2 className='heading-primary'>{brandName}</h2>
                }
                {referenceName && <h2 className='heading-primary'>{referenceName}</h2>}
                {awardTitle && <h2 className='heading-primary'>{awardTitle}</h2>}
                {education && <h2 className='heading-primary'>{education}</h2>}
                <div className='cv-stats'>
                    {institution && <div className="edu-name-cgpa"> 
                        <div>
                            {institution}
                        </div>
                        <div>
                            {cgpa}
                        </div>
                    </div>}
                    {department && <div className="edu-name-cgpa"> 
                        <div>
                            {department}
                        </div>
                        <div>
                            {position}
                        </div>
                    </div>}
                    {subCategory && <div>{subCategory}</div>}
                    {city && <div>{city}</div>}
                    {contact && <div>{contact}</div>}
                    {email && <div>{email}</div>}
                </div>
                <div className='cv-card-icon' onClick={onClick}>
                    <Image 
                        src={Dots} alt='' 
                        height={20} 
                        className='cv-card-icon-img'
                        />
                </div>
                {(!fromDate || !toDate) && (<div className='cv-card-btn'>
                    <p>Please fill in the missing information</p>
                    <Button text='Complete Form' type='secondary'/>
                </div>)}
            </div>
    );
};

export default CvCard;