import React from "react";
import homepics from './ProductSummary';

const FeatureProjects = () => {

  

    return (
        <>
            <div className="container mx-auto text-center my-12">
                <div className="mb-16">
                    <p className="text-3xl font-bold mb-2">Featured Projects</p>
                    
                </div>

                {/*--------------------- products Lists -----------------*/}

                <div className="container grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-12">
                    {homepics.slice(0,2).map((item) => (
                        <div key={item.id} className="flex flex-col border rounded-lg overflow-hidden">
                            <img src={item.href} alt="img" className="w-full" />
                            {/* ------------------------Product Description---------------------------- */}
                            <div className="px-2 py-3 border-l border-r rounded-lg">
                                <div className="flex justify-between px-2 font-bold py-2">
                                    <p>{item.houseName}</p>
                                    <p>{item.price}</p>
                                </div>
                                <div className="flex flex-wrap my-2 px-2 text-sm gap-4">
                                    <span className="flex gap-2"><img src={item.bedicon} alt="bed icon" /> {item.beds} Bed</span>
                                    <span className="flex gap-2"><img src={item.bathicon} alt="bath icon" /> {item.bath} Bath</span>
                                    <span className="flex gap-2"><img src={item.surface} alt="surface icon" /> {item.sqft} SQft</span>
                                </div>
                                <div className="flex text-sm px-2 py-3">
                                    <p>{item.address}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>



                <div className="container mt-12 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5">
                    {homepics.slice(2).map((item) => (
                        <div key={item.id} className="flex flex-col border rounded-lg overflow-hidden">
                            <img src={item.href} alt="img" className="w-full" />
                            {/* ------------------------Product Description---------------------------- */}
                            <div className="px-2 py-3 border-l border-r rounded-lg">
                                <div className="flex justify-between px-2 font-bold py-2">
                                    <p>{item.houseName}</p>
                                    <p>{item.price}</p>
                                </div>
                                <div className="flex flex-wrap my-2 px-2 text-sm gap-4">
                                    <span className="flex gap-2"><img src={item.bedicon} alt="bed icon" /> {item.beds} Bed</span>
                                    <span className="flex gap-2"><img src={item.bathicon} alt="bath icon" /> {item.bath} Bath</span>
                                    <span className="flex gap-2"><img src={item.surface} alt="surface icon" /> {item.sqft} SQft</span>
                                </div>
                                <div className="flex text-sm px-2 py-3">
                                    <p>{item.address}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                
            </div>
        </>
    )
}

export default FeatureProjects;
