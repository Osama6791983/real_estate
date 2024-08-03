import React from 'react';
import Navbar from '../../Navbar/Navbar';
import RentDashboard from './RentDashboardData';
import { CiEdit } from "react-icons/ci";
import Sidebar from '../../Sidebar/Sidebar';

const EditProfile = () => {
    return (
        <>
            <div>
                <div>
                    <Navbar />
                    <hr />
                </div>
                <div className='flex flex-row'>
                    <div className='py-8 '>
                        <Sidebar dashboardData={RentDashboard} />
                    </div>

                    <div className='bg-gray-100 w-full flex flex-col items-center'>
                        <h3 className='text-4xl font-bold py-3 px-2 tracking-wider'>Edit Profile</h3>

                        <div className='flex flex-col justify-center items-center w-full'>
                            <div className='flex flex-col items-center mb-4'>
                                <div className='relative'>
                                    <img src='/Images/profile.jpg' alt='profile-pic' className='w-20 h-20 rounded-full mb-2' />
                                    <span className='absolute bottom-0 right-0 bg-black text-white p-1 rounded-full cursor-pointer'><CiEdit /></span>
                                </div>
                                <span className='text-lg font-semibold'>James Tarver</span>
                            </div>

                            {/* Add other profile content here */}
                            <div className='w-1/2'>
                               

                                <form>
                                    <div className='mb-4'>
                                        <label className='block mb-1'>Name</label>
                                        <input type='text' className='block w-full border border-gray-300 px-3 py-2 rounded-full' placeholder='James Tarver' />
                                    </div>
                                    <div className='mb-4'>
                                        <label className='block mb-1'>Phone Number</label>
                                        <input type='text' className='block w-full border border-gray-300 px-3 py-2 rounded-full' placeholder='+234 7049 862 424' />
                                    </div>
                                    <div className='mb-4'>
                                        <label className='block mb-1'>Email</label>
                                        <input type='email' className='block w-full border border-gray-300 px-3 py-2 rounded-full' placeholder='jamestarver@gmail.com' />
                                    </div>
                                    <div className='mb-4'>
                                        <label className='block mb-1'>Date of Birth</label>
                                        <input type='date' className='block w-full border border-gray-300 px-3 py-2 rounded-full' placeholder='DD/MM/YY' />
                                    </div>
                                    <div className='mb-4'>
                                        <label className='block mb-1'>Gender</label>
                                        <select className='block w-full border border-gray-300 px-3 py-2 rounded-full'>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                    </div>
                                    <div className='my-4 space-x-5 '>
                                            <button >Cancel</button>
                                            <button className='bg-black py-2 px-4 text-white rounded-3xl'>Update Profile</button>
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditProfile;
