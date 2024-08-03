import React from 'react';
import Navbar from '../../Navbar/Navbar';

const List3 = () => {
    const Category=[
        {
            id:1,
            src: '/Images/cat.png',
            btntext: 'Residential',
            
            
        }
    ]
    return (
       <>
            <div className='w-full'>
                <div>
                    <Navbar />
                    <hr />
                </div>

                <div className=' '>
                    <h2 className=' text-center font-bold py-5'>List</h2>
                <div className='flex flex-row justify-center gap-x-20 my-6'>
                    <div className='bg-black text-white rounded-full px-2 '>1</div>
                    <div className='bg-black text-white rounded-full px-2 '>2</div>
                    <div className='bg-black text-white rounded-full px-2 '>3</div>
                    <div className='bg-black text-white rounded-full px-2 '>4</div>
                </div>

                <div className='my-5 flex justify-center'>
                    <div className='bg-gray-400 rounded-lg w-2/3'>
                        <div>
                            <button>Rent</button>
                            <button>Sell</button>
                        </div>

                        <div>
                            <h1>Category Type</h1>
                           <div>
                                <div className='bg-white rounded-lg px-3 py-4'>
                                        <img src='/Images/cat.png' />
                                        <button>Residential</button>
                                    </div>
                           </div>
                        </div>
                        

                    </div>
                  

                </div>

            </div>

            </div>
       </>
    );
};

export default List3;
