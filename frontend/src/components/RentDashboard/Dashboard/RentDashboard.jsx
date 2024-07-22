import React, { useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import { Link } from 'react-router-dom';
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { BsChatRightDots } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { LuWallet } from "react-icons/lu";
import { CiSaveDown2 } from "react-icons/ci";
import { BiHistory } from "react-icons/bi";
import { FcDebt } from "react-icons/fc";
import { CiSettings } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { LiaCertificateSolid } from "react-icons/lia";
import { RiArrowDropDownLine } from "react-icons/ri";

const RentDashboard = () => {
    const [activeId, setActiveId] = useState(null);
    const [activeSubmenuId, setActiveSubmenuId] = useState(null);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false); // New state variable

    const dashboardData = [
        {
            id: 1,
            icon: <MdOutlineDashboardCustomize />,
            name: "Dashboard",
            href: '/'
        },
        {
            id: 2,
            icon: <BsChatRightDots />,
            name: "Message",
            href: '/'
        },
        {
            id: 3,
            icon: <CiLocationOn />,
            name: "Rent",
            href: "/"
        },
        {
            id: 4,
            icon: <LuWallet />,
            name: "Money",
            href: "/",
        },
        {
            id: 5,
            icon: <LiaCertificateSolid />,
            name: "Document",
            href: "/upload-document",
        },
        {
            id: 6,
            icon: <CiSaveDown2 />,
            name: "Saved",
            href: "/",
        },
        {
            id: 7,
            icon: <BiHistory />,
            name: "History",
            href: "/",
        },
        {
            id: 8,
            icon: <FcDebt />,
            name: "Loan & Mortgage",
            href: "/",
        },
        {
            id: 9,
            icon: <CiSettings />,
            name: "Setting",
            ddicon: <RiArrowDropDownLine />,
            submenu: [
                {
                    id: 1,
                    subname: 'Edit Profile',
                    href: '/rental/settings/edit-profile'
                },
                {
                    id: 2,
                    subname: 'Address',
                    href: '/rental/settings/address'
                },
                {
                    id: 4,
                    subname: 'Change Password',
                    href: '/rental/settings/change-password'
                },
                {
                    id: 5,
                    subname: 'Notification Settings',
                    href: '/rental/settings/notification'
                },
                {
                    id: 7,
                    subname: 'Saved Payment Cards',
                    href: '/saved-payment-cards'
                }
            ]
        },
        {
            id: 10,
            icon: <IoCallOutline />,
            name: "Support",
            href: "/support-page",
        }
    ];

    const handleSettingsClick = (id) => {
        setActiveId(id);
        setIsSettingsOpen(prevState => !prevState); // Toggle the settings submenu
    };

    return (
        <>
           
                        <div className='container  my-2'>
                            <div className='flex flex-col mr-3'>
                                {dashboardData.map((e) => (
                                    <div key={e.id} className='text-sm ml-3 font-semibold'>
                                        <Link
                                            to={e.href}
                                            className={`flex items-center gap-x-4 pl-2 pr-8 py-2 cursor-pointer ${activeId === e.id ? 'bg-black text-white rounded-lg mx-1' : ''}`}
                                            onClick={() => e.id === 9 ? handleSettingsClick(e.id) : setActiveId(e.id)} // Use handleSettingsClick for settings
                                        >
                                            <span className='text-lg'>{e.icon}</span>
                                            <span className='tracking-wider'>{e.name}</span>
                                            {e.ddicon && <span className='ml-auto text-lg'>{e.ddicon}</span>}
                                        </Link>

                                        {e.submenu && activeId === e.id && isSettingsOpen && (
                                            <div className='flex flex-col pl-8 mt-2'>
                                                {e.submenu.map(sub => (
                                                    <Link
                                                        key={sub.id}
                                                        to={sub.href}
                                                        className={`py-1 text-xs hover:bg-slate-600 hover:text-white hover:px-3 hover:rounded-lg  ${activeSubmenuId === sub.id ? 'text-white' : ''}`}
                                                        onClick={() => setActiveSubmenuId(sub.id)}
                                                    >
                                                        {sub.subname}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
        
          
        </>
    );
}

export default RentDashboard;
