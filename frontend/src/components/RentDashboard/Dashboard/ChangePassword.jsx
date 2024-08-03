import React from 'react';
import Navbar from '../../Navbar/Navbar';
import { IoCallOutline } from "react-icons/io5";
import { LuMessageSquare } from "react-icons/lu";
import { Link } from 'react-router-dom';
import Sidebar from '../../Sidebar/Sidebar';
import rentalDashboardData from './RentDashboardData';



const ChangePassword =()=>{

    const data=[
        {
            id:1,
            icon:<IoCallOutline />,
            text: "via Phone:",
            number: "+904****487",
            href:"/rental/settings/otp"
        },
        {
            id:2,
            icon:<LuMessageSquare />,
            text: "via Emails:",
            number: "info****md@gmail.com",
            href:"/rental/settings/otp"
        }
    ]

    return(
        <>
            <div>
                <div>
                    <Navbar />
                    <hr />
                </div>

                <div className='flex flex-row'>
                    <div className='py-8'>
                            \<Sidebar dashboardData={rentalDashboardData} />
                    </div>


                    <div className='container w-full flex flex-col items-center'>
                    <h3 className='text-2xl font-bold py-3 px-2 tracking-wider'>Forgotten Password</h3>

                    <div className='my-3'>
                        <img src="/Images/ds.png" className='' alt='img-bg' />
                    </div>

                    <div className='mb-8'>
                        <div className='my-4'>
                              <p className='text-center font-semibold'>To reset you password, please select contact details</p>
                        </div>  
                        
                        {data.map((e)=>(
                            <div className='border border-black px-3 py-2 rounded-lg my-6' key={e.id}>
                            <Link to={e.href} className='w-full text-left'>
                                <div className='flex items-center'>
                                    
                                    <span className='text-gray-600'>{e.icon}</span>
                                    <div className='flex flex-col pl-6'>
                                        <p className='text-xs text-gray-500'>{e.text}</p>
                                        <p className='text-sm'>{e.number}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        ))}


                    </div>


                    </div>
                    </div>
                       
            </div>

        </>
    );
}

export default ChangePassword;