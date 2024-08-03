import React from 'react';
import rentDashboard from './RentDashboardData';
import Sidebar from '../../Sidebar/Sidebar';
import Navbar from '../../Navbar/Navbar';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";


const Otp=()=>{
    return(
        <>
            <div>
                <div>
                    <Navbar />
                    <hr />
                </div>

                <div className='flex flex-row'>
                    <div className='py-8'>
                    <Sidebar dashboardData={rentDashboard} />
                    </div>    
                       
                    <div className='container'>
                        <div className='flex flex-row items-center justify-center py-4 gap-x-6'>
                            <Link to="/rental/settings/change-password"> <IoIosArrowBack /> </Link>
                            <p className='text-sm font-semibold'>OTP Verification</p>
                        </div>  

                        <div className='text-center my-6 py-5'>
                            <p className='text-4xl font-extrabold px-5'>Enter Your OTP</p>
                            <p className='text-sm py-2'>Code has been sent to <span>+894***09034</span></p>

                            <div className='flex justify-center space-x-2 mx-4 my-2'>
                                <input type="text" maxLength="1" placeholder='8' className='bg-gray-300 p-3 text-black text-center w-12 h-12 rounded-md' />
                                <input type="text" maxLength="1" placeholder='8' className='bg-gray-300 p-3 text-black text-center w-12 h-12 rounded-md' />
                                <input type="text" maxLength="1" placeholder='8' className='bg-gray-300 p-3 text-black text-center w-12 h-12 rounded-md' />
                                <input type="text" maxLength="1" placeholder='8' className='bg-gray-300 p-3 text-black text-center w-12 h-12 rounded-md' />
                            </div>


                            <div className='my-8'>
                                <button className='bg-black text-white px-6 py-2 rounded-full w-1/4'>Verify</button>
                            </div>
                        </div>

                    </div>
                </div>   
            </div>
        </>
    )
}


export default Otp;