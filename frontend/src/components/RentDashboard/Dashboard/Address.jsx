import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import rentalDashboardData from './RentDashboardData';


const Address=()=>{
    return(
        <>
            <div>
                <div>
                    <Navbar />
                    <hr />
                </div>
                <div className='flex flex-row'>
                    <div className='py-8'>
                        <Sidebar dashboardData={rentalDashboardData} />
                    </div>

                    <div className='bg-gray-100 w-full'>
                        <h3 className='text-4xl font-bold py-3 px-8 tracking-wider'>Address</h3>

                        <div className='p-10 w-2/3'>
                               

                                <form>
                                    <div className='mb-4'>
                                        <label className='block mb-1'>Street</label>
                                        <input type='text' className='block w-full border border-gray-300 px-3 py-2 rounded-full' placeholder='James Tarver' />
                                    </div>
                                    <div className='mb-4'>
                                        <label className='block mb-1'>Town/City</label>
                                        <input type='text' className='block w-full border border-gray-300 px-3 py-2 rounded-full' placeholder='+234 7049 862 424' />
                                    </div>
                                    <div className='mb-4'>
                                        <label className='block mb-1'>State</label>
                                        <input type='email' className='block w-full border border-gray-300 px-3 py-2 rounded-full' placeholder='jamestarver@gmail.com' />
                                    </div>
                                    <div className='mb-4'>
                                        <label className='block mb-1'>Zip Code</label>
                                        <input type='text' className='block w-full border border-gray-300 px-3 py-2 rounded-full' placeholder='DD/MM/YY' />
                                    </div>
                                    <div className='mb-4'>
                                        <label className='block mb-1'>Country</label>
                                        <input type='text' className='block w-full border border-gray-300 px-3 py-2 rounded-full' placeholder='country' />
                                    
                                    </div>
                                    <div className='mx-auto text-center'>
                                            
                                            <button className='bg-black py-2 px-4 text-white rounded-3xl'>Save Address</button>
                                        </div>
                                </form>
                            </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Address;