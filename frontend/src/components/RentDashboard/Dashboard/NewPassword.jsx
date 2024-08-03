import React from 'react';
import Navbar from '../../Navbar/Navbar';
import rentDashboard from './RentDashboardData';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import Sidebar from '../../Sidebar/Sidebar';


const SuccessAlert =()=>{
    return(
        <>
          <div>
            <div>
                <Navbar />
            </div>

            <div className='flex flex-row'>
                <div className='py-8'> 
                   <Sidebar dashboardData={rentDashboard} />
                </div>

                <div>
                <div className="flex items-center justify-center min-h-screen ">
                <div className="flex flex-col items-center justify-center w-full max-w-md border py-6 shadow-lg rounded-xl mx-4">
                    <img src="/Images/p_success.png" alt="success-password" className="lg:w-36 lg:h-30 md:w-36 md:h-30 sm:w-24 sm:h-24 px-6 py-6" />

                    <div className="py-4 text-center">
                        <p className="lg:text-3xl font-bold sm:text-xl">New Password Set <br />Successfully</p>
                        <p>Your Password has been created</p>
                    </div>

                    <div className="my-6 w-full text-center">
                        <button className="bg-slate-900 text-white w-1/2 text-sm px-8 py-1 rounded-full">Go Home</button>
                    </div>
                </div>
            </div>
                </div>
            </div>
          </div>

        </>
    )
}


const NewPassword = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <div>
                    <Navbar />
                    <hr />
                </div>

                <div className="flex flex-row flex-grow">
                    <div>
                    <Sidebar dashboardData={rentDashboard} />
                    </div>

                    <div className="bg-gray-100 w-full px-8 py-4 flex-grow">
                        <Link to="/rental/settings/otp"><IoIosArrowBack className="text-xl" /></Link>
                        <p className="text-3xl font-bold px-3 tracking-wider">Change Password</p>

                        <div className="mx-auto w-full md:w-1/2 py-6">
                            <form>
                                <div className="mb-4">
                                    <label className="block mb-1">Current Password</label>
                                    <input type="password" className="block w-full border border-gray-300 px-3 py-2 rounded-full" placeholder="Enter current password" />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-1">New Password</label>
                                    <input type="password" className="block w-full border border-gray-300 px-3 py-2 rounded-full" placeholder="Enter new password" />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-1">Confirm New Password</label>
                                    <input type="password" className="block w-full border border-gray-300 px-3 py-2 rounded-full" placeholder="Confirm new password" />
                                </div>

                                <div className="flex gap-5 ">
                                    <button className=" text-sm py-2 px-4 rounded-3xl">Cancel</button>
                                    <button className="bg-black text-sm py-2 px-4  text-white rounded-3xl" >Change Password
                                    
                                    </button>

                                    
                                </div>
                            </form>
                        </div>


                        
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default NewPassword;
