import React,{useState} from 'react';
import Navbar from '../../Navbar/Navbar';

const List2 = () => {
    const [images, setImages] = useState([]);

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        setImages((prevImages) => [...prevImages, ...files]);
    };
    return (
       <>
            <div className='w-full'>
                <div>
                    <Navbar />
                    <hr />
                </div>

                <div className=' '>
                    <h2 className=' text-center font-bold py-5'>List</h2>
                <div className='flex flex-row justify-center gap-x-20 '>
                    <div className='bg-black text-white rounded-full px-2 '>1</div>
                    <div className='bg-black text-white rounded-full px-2 '>2</div>
                    <div className='bg-black text-white rounded-full px-2 '>3</div>
                    <div className='bg-black text-white rounded-full px-2 '>4</div>
                </div>

                <div className='min-h-screen  flex flex-col items-center justify-center'>
                    <div className=' p-10 bg-slate-100 rounded-xl shadow-md max-w-4xl w-full'>
                        <h2 className='text-2xl font-bold mb-5'>Upload Photo</h2>

                        <div className='flex gap-4 overflow-x-auto'>
                            <label className='w-24 h-24 border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer'>
                                <span className='text-2xl'>+</span>
                                <input
                                    type='file'
                                    multiple
                                    className='hidden'
                                    onChange={handleImageUpload}
                                    accept='.jpg,.png'
                                />
                            </label>
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={URL.createObjectURL(image)}
                                    alt={`upload-${index}`}
                                    className='w-24 h-24 object-cover rounded-md'
                                />
                            ))}
                        </div>

                        <p className='text-gray-500 text-sm mt-2'>
                            You can share a video link. <br />
                            Each picture must not exceed 5 Mb <br />
                            Supported formats are *.jpg and *.png
                        </p>

                        <div className='flex justify-center mt-8'>
                            <button className='text-white bg-black rounded-full px-10 py-2 text-lg'>Next</button>
                        </div>
                    </div>
                </div>

            </div>

            </div>
       </>
    );
};

export default List2;
