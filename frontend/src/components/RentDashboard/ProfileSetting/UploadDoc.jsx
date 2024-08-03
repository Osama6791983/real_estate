import React from 'react';
import Navbar from '../../Navbar/Navbar';
import rentDashboard from '../Dashboard/RentDashboardData';
import { IoCloudUploadOutline } from "react-icons/io5";
import Sidebar from '../../Sidebar/Sidebar';

const UploadDoc=()=>{
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

                   

                   <div className='container w-full flex flex-col items-center py-4'>
                        
                        <div className='py-2'>
                        <h1 className='text-3xl lg:text-5xl font-bold'>Upload Documents</h1>
                        </div>
                            

                            
                        <div className='my-10'>

                            
                          
                             <div className='bg-white border rounded-xl '>
                             <h1 className='bg-black rounded-t-xl text-white text-center py-2'>New Upload</h1>
                            
                             <div class="p-6 flex items-center justify-center w-full">
                                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100  dark:hover:border-gray-500 dark:hover:bg-gray-200">
                                        <div class="flex flex-col items-center justify-center pt-5 pb-6 px-16">
                                            

                                            <IoCloudUploadOutline className='text-3xl' />

                                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                        </div>
                                        <input id="dropzone-file" type="file" class="hidden" />
                                    </label>
                                </div> 
                             </div>

</div>
                        </div>
                    </div>


                   </div>
               
            
        </>
    )
}

export default UploadDoc;