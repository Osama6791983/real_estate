import React from 'react';
import Navbar from '../../Navbar/Navbar';

const List1 = () => {
    return (
        <>
            <div className='w-full'>
                <div>
                    <Navbar />
                    <hr />
                </div>

                <div className='min-h-screen bg-gray-500'>
                    <h2 className='text-white text-center font-bold py-5 text-2xl'>List</h2>
                    <div className='flex flex-wrap justify-center gap-8 my-6'>
                        <div className='bg-white rounded-full px-4 py-2 text-center'>1</div>
                        <div className='bg-white rounded-full px-4 py-2 text-center'>2</div>
                        <div className='bg-white rounded-full px-4 py-2 text-center'>3</div>
                        <div className='bg-white rounded-full px-4 py-2 text-center'>4</div>
                    </div>
                    <div className='flex justify-center w-1/2 gap-8 py-8 px-8 rounded-lg bg-white mx-auto'>
                        <div className='border p-4 rounded-lg text-center bg-white max-w-xs'>
                            <img src='/Images/owner.png' alt='Owner' className='mx-auto' />
                            <h1 className='py-1 lg:text-3xl sm:text-xl md:text-2xl font-bold'>List as Owner</h1>
                            <p className='py-1 text-gray-800 text-sm'>For sale by owner <br /> (FSBO)</p>
                            <p className='text-sm py-1'>Show off your property or project.</p>
                            <button className='text-white bg-black rounded-full px-5 py-1 text-sm mt-2'>List</button>
                        </div>

                        <div className='border p-4 rounded-lg text-center bg-white max-w-xs'>
                            <img src='/Images/agency.png' alt='Agency' className='mx-auto' />
                            <h1 className='py-1 lg:text-3xl sm:text-xl md:text-2xl font-bold'>List as Agency</h1>
                            <p className='py-1 text-gray-800 text-sm'>Agency & 3rd Party</p>
                            <p className='text-sm py-1'>Show off your property or project. <br /> Attract real visitors and buyers.</p>
                            <button className='text-white bg-black rounded-full px-5 py-1 text-sm mt-2'>List</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default List1;
