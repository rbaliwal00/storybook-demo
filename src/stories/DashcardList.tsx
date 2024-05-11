import React from 'react';
import './DashcardList.css';
import {
  Ads,
  BriefCase,
  Chat,
  Cv,
  Home,
  Notification,
  Payment,
  Save,
  Search,
  Supplier,
  Vc,
  Wallet
} from "../assets/icons";
import Dashcard, { DashcardProps } from './Dashcard';

type Props = {
    width?: string;
    dashcardWidth?: string;
    dashCards: DashcardProps[];
}

    const jobSeekerLinks = [
    {
        id: "1",
        title: "View Cv",
        banner: Cv,
        link: "/cv-create",
        lastUpdated: '20/12/2023',
        progress: '20'
      },
    {
        id: "2",
      title: "Visiting Card",
      banner: Vc,
      link: "/vc",
      lastUpdated: '20/12/2023',
    },
    {
        id: "3",
      title: "Post",
      banner: Ads,
      link: "/vc",
      ads: '0'
    },
    {
        id: "4",
        title: "Applied Jobs",
        banner: BriefCase,
        link: "/vc",
        stat1: {
            count: 0,
            title: 'Jobs'
        },
      },
    {
        id: "5",
      title: "Search Supplier",
      banner: Supplier,
      link: "/vc",
        newSupplier: '0'
    },
    {
        id: "6",
        title: "Search Jobs",
        banner: Search,
        link: "",
        stat1: {
            count: 0,
            title: 'New Jobs'
        },
      },
    {
        id: "7",
      title: "Saved",
      banner: Save,
      link: "/vc",
        stat1: {
            count: 0,
            title: 'Saved Jobs'
        },
        stat2: {
            count: 0,
            title: 'Saved Supplier'
        }
    },
    {
        id: "8",
        title: "Chatting",
        banner: Chat,
        link: "/vc",
        stat1: {
            count: 0,
            title: 'New Message'
        }
      },
    {
        id: "9",
      title: "Notification",
      banner: Notification,
      link: "/vc",
      stat1: {
        count: 0,
        title: 'New Notification'
      }
    },
    {
        id: "10",
      title: "Payment History",
      banner: Payment,
      link: "/vc",
      width: '100%'
    },
  ];

const DashCardList = ({width, dashcardWidth, dashCards}: Props) => {

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