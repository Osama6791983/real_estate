import React from "react";
import { Link } from "react-router-dom";
import homepics from "./ProductSummary";

const NewListing = () => {

   
    return (
        <>
            <div className="container mx-auto text-center my-12">
                <div className="mb-16">
                    <p className="text-3xl font-bold mb-2">New listings</p>
                    <p className="text-xl font-bold my-6">Explore new home, office space, apartment complexed</p>
                    <div className="space-x-4 my-6">
                        <Link className="bg-black text-white rounded-full px-6 py-2">Rent</Link>
                        <Link className="border border-black rounded-full px-6 py-2">Buy</Link>
                    </div>
                </div>

                {/*--------------------- products Lists -----------------*/}

                <div className="container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5">
                    {homepics.map((item) => (
                        <Link>
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
                        </Link>
                    ))}
                </div>


                <button className="bg-black text-white rounded-full px-6 py-2 my-10">View More</button>
            </div>
        </>
    )
}

export default NewListing;
