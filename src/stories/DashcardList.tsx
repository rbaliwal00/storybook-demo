import Dashcard, { DashcardProps } from './Dashcard';
import './DashcardList.css';

type Props = {
    width?: string;
    dashcardWidth?: string;
    dashCards: DashcardProps[];
    platform?: string;
}

const DashCardList = ({dashcardWidth, dashCards, platform}: Props) => {
    return (
        <div className='dashcardlist-container'>
            {
                dashCards.map((dashcard:any) => (
                    <Dashcard 
                        dashcardWidth={dashcardWidth}
                        {...dashcard}
                    />
                ))
            }
        </div>
    );
};

export default DashCardList;