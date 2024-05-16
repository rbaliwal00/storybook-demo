import { Metadata } from "next";
import { cookies } from "next/headers";
import React from "react";
import PrimaryLogo from '../assets/logo.svg';

import MobileFooter from "@stories/MobileNavbar";
import {
  Ads,
  BriefCase,
  Chat,
  Cv,
  Notification,
  Payment,
  Save,
  Search,
  Supplier,
  Vc,
  Home
} from "../assets/icons";
import MobileNavbar from "@app/temp/MobileNavbar";

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

export const metadata: Metadata = {
  title: "Refine",
  description: "Generated by create refine app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  const defaultMode = theme?.value === "dark" ? "dark" : "light";

  const list = [
    {
      id: "1",
      banner: Home,
      title: "Home",
      link: ""
    },
    {
      id: "2",
      banner: Save,
      title: "Saved",
      link: ""
    },
    {
      id: "3",
      banner: Notification,
      title: "Notification",
      link: ""
    },
    {
      id: "4",
      banner: Chat,
      title: "Chat",
      link: ""
    }
  ]

  return (
    <html lang="en">
      <body className="mt-10">
        {/* <Dashcard 
          lastUpdated="20/12/2022"
          link="/cv"
          progress="20"
          title="View Cv"
          banner={Cv}
          />
        <Dashcard 
          stat1={stat1}
          link="/cv"
          stat2={stat2}
          title="Saved"
          banner={Save}
          />

          <Dashcard 
          link="/cv"
            stat1={stat1}
            title="Saved"
            banner={Save}
          /> */}
          <MobileFooter list={list}/>
          {/* <MobileNavbar title="Dashboard" rightNavbarList={list} logo={PrimaryLogo}/>   */}
      </body>
    </html>
  );
}
