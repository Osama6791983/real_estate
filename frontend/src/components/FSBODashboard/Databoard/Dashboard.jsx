// Dashboard.js
import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import fsboDashboardData from './FsboDashboardData';
import { GrCurrency } from "react-icons/gr";
import { FaRegListAlt } from "react-icons/fa";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import LineChart from './LineChart';
import homepics from '../../Products/ProductSummary';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const datefilter = [
        { id: 1, text: "Day" },
        { id: 2, text: "Week" },
        { id: 3, text: "Month" },
        { id: 4, text: "Year" },
        { id: 5, text: "All Time" }
    ];

    const graphdata = [
        {
            id: 1,
            amount: '$ 1K',
            icon: <GrCurrency />,
            text: 'Total Sales',
            analysics: '+8% from yesterday',
            color: 'bg-[#FFE2E5]',
            iconColor: 'bg-[#FA5A7D]'
        },
        {
            id: 2,
            amount: '300',
            icon: <FaRegListAlt />,
            text: 'Listings',
            analysics: '+8% from yesterday',
            color: 'bg-[#FFF4DE]',
            iconColor: 'bg-[#FF947A]'
        },
        {
            id: 3,
            amount: '5',
            icon: <MdOutlineSettingsApplications />,
            text: 'Applications',
            analysics: '+8% from yesterday',
            color: 'bg-[#DCFCE7]',
            iconColor: 'bg-[#3CD856]'
        },
        {
            id: 4,
            amount: '8',
            icon: <IoMdContact />,
            text: 'New Leads',
            analysics: '+8% from yesterday',
            color: 'bg-[#F3E8FF]',
            iconColor: 'bg-[#BF83FF]'
        },
    ];

    return (
        <>
            <div>
                <Navbar />
                <hr />

                <div className='flex sm:flex-row lg:flex-row'>
                    <div className='py-8 lg:py-0 lg:w-1/5'>
                        <Sidebar dashboardData={fsboDashboardData} />
                    </div>

                    <div className='container w-full my-2 mx-5 px-4'>
                        <div className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
                            <div className='lg:col-span-9'>
                                <div>
                                    <div className='flex flex-col lg:flex-row items-center justify-between'>
                                        <div>
                                            <p className='text-[#05004E] text-md font-semibold'>Good Morning, Username</p>
                                            <p className='text-xs text-gray-600'><span className='font-bold'>Today's </span> Sales Summary</p>
                                        </div>

                                        <div className='space-x-2 mt-2 lg:mt-0'>
                                            {datefilter.map((e) => (
                                                <span className='border text-sm p-1 rounded-lg' key={e.id}>{e.text}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4'>
                                        {graphdata.map((e) => (
                                            <div
                                                className={`${e.color} w-full rounded-lg p-4 flex flex-col items-start`}
                                                key={e.id}
                                            >
                                                <div className='flex flex-row items-center justify-between space-x-2 mb-2'>
                                                    <div className='font-bold text-xl'>{e.amount}</div>
                                                    <div className={`${e.iconColor} text-xl font-bolder text-white p-1 rounded-full`}>{e.icon}</div>
                                                </div>
                                                <p className='text-sm'>{e.text}</p>
                                                <p className='text-xs text-gray-600'>{e.analysics}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='mt-6'>
                                        <LineChart /> {/* Integrate LineChart component */}
                                    </div>

                                    <div className='my-4'>
                                        <h3 className='py-4 font-bold tracking-wider'>Recent Listings</h3>
                                        <div className="container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5">
                                                {homepics.map((item) => (
                                                    <Link>
                                                    <div key={item.id} className="flex flex-col border rounded-lg overflow-hidden">
                                                        <img src={item.href} alt="img" className="w-full" />
                                                        {/* ------------------------Product Description---------------------------- */}
                                                        <div className="px-2 py-3 border-l border-r rounded-lg">
                                                            <div className="flex justify-between px-2 font-bold py-2">
                                                                <p>{item.houseName}</p>
                                                                <p>{item.price}</p>
                                                            </div>
                                                            <div className="flex flex-wrap my-2 px-2 text-sm gap-4">
                                                                <span className="flex gap-2"><img src={item.bedicon} alt="bed icon" /> {item.beds} Bed</span>
                                                                <span className="flex gap-2"><img src={item.bathicon} alt="bath icon" /> {item.bath} Bath</span>
                                                                <span className="flex gap-2"><img src={item.surface} alt="surface icon" /> {item.sqft} SQft</span>
                                                            </div>
                                                            <div className="flex text-sm px-2 py-3">
                                                                <p>{item.address}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </Link>
                                                ))}
                                      </div>

                                    </div>

                                    


                                </div>
                            </div>

                            <div className='lg:col-span-3'>
                                <div className='bg-[#FFFCB8] p-6 text-center border rounded-xl'>
                                    <p>List your property</p>
                                    <button className='bg-black mt-1 text-white px-5 py-1 rounded-full'>List</button>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
