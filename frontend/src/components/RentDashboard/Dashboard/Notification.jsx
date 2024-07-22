import React from 'react';
import Navbar from '../../Navbar/Navbar';
import RentDashboard from './RentDashboard';

const Notification=()=>{
    return(
        <>
            <div>
                <div>
                    <Navbar />
                    <hr />
                </div>

                <div className='flex flex-row'>
                    <div className='py-8'>
                        <RentDashboard />
                    </div>

                    <div className='bg-gray-100 w-full '>
                        <h3 className='text-5xl font-bold py-3 px-10 tracking-wider'>Notifications</h3>


                        <div className='flex flex-col my-8 justify-center items-center gap-4 '>
                                <div className='w-1/3 border border-gray-300 px-3 py-2 flex flex-row justify-between rounded-lg'>
                                        <p className='font-extrabold'>Allow Notifications</p>

                                    <label class="inline-flex items-center cursor-pointer">
                                        
                                    <input type="checkbox" value="" class="sr-only peer" />
                                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>

                                    </label>

                                </div>



                                <div className='w-1/3 border border-gray-300 px-3 py-2 flex flex-row justify-between rounded-lg'>
                                        <p className='font-extrabold'>Order Notifications</p>

                                    <label class="inline-flex items-center cursor-pointer">
                                        
                                    <input type="checkbox" value="" class="sr-only peer" />
                                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>

                                    </label>

                                </div>


                                <div className='w-1/3 border border-gray-300 px-3 py-2 flex flex-row justify-between rounded-lg'>
                                        <p className='font-extrabold'>Email Notifications</p>

                                    <label class="inline-flex items-center cursor-pointer">
                                        
                                    <input type="checkbox" value="" class="sr-only peer" />
                                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>

                                    </label>

                                </div>





                                
                        </div>
                        
                    </div>

                </div>
            </div>


        </>
    );

}

export default Notification;