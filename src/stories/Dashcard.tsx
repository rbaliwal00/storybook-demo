import React from 'react';
import './Dashcard.css';

import Image from 'next/image';
import Link from 'next/link';

export type Stats = {
    title: string;
    count: number;
}

export type DashcardProps = {
    id: string;
    lastUpdated?: string,
    banner: any;
    progress?: string;
    title: string;
    stat1?: Stats;
    stat2?: Stats;
    dashcardWidth?: string;
    height?: string;
    link: string;
}

const Dashcard = ({lastUpdated,link, dashcardWidth, height, banner, progress, title, stat1, stat2} : DashcardProps) => {
    return (
        <Link href={link ? link: ""} className="dash-card" style={{width: `${dashcardWidth ? dashcardWidth : '200px'}`, 
            height: `${height ? height : '150px'}`}}>
            <div>
            {lastUpdated && <div className="dash-card-last-updated">
                <div>Last Updated</div>
                <div>{lastUpdated}</div>
            </div>}
            <Image src={banner} className='dash-card-image' alt='' width={100} height={100}/>
            {
                stat1 && stat2 ?
                <div className="stats" >
                    <div style={{marginTop: '15px'}}><span className='count'>{stat1.count} </span><span>{stat1.title}</span></div>
                    <div style={{marginTop: '-10px'}}><span className='count' >{stat2.count} </span><span>{stat2.title}</span></div>
                </div> :
                <div className='stats'><span className='count count1'>{stat1?.count}</span><span> {stat1?.title}</span></div>
            }
            <div className='dash-card-content'>
                 {progress &&<> <div className='dash-card-progress-percentage'>
                    {progress}%</div><div className='dash-card-progress'>
                    <div className="dash-card-progress-line" 
                        style={{width: '20%'}}></div>
                </div></>}
                <div className='dash-card-title'>{title}</div>
            </div>
        </div>
        </Link>
    );
};

export default Dashcard;