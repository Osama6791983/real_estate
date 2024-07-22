import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import homepics from "./ProductSummary";
import { FaStar } from "react-icons/fa";

const ProductDetails = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                <div className="mt-4">
                    <p className="text-gray-700">
                        <Link to="#" className="text-black hover:underline text-sm font-bold">Rent</Link>
                        <span className="text-white bg-black rounded-xl text-sm font-bold mx-3">&gt;</span>
                        <Link to="#" className="text-black hover:underline text-sm font-bold">Province</Link>
                        <span className="text-white bg-black rounded-xl text-sm font-bold mx-3">&gt;</span>
                        <Link to="#" className="text-black hover:underline text-sm font-bold">City</Link>
                    </p>
                </div>

                <div className="w-full flex flex-col lg:flex-row mt-10">
                    <div className="w-full lg:w-2/3 mb-10 lg:mb-0 lg:mr-10">
                        <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] bg-slate-600 rounded-lg overflow-hidden">
                            <img src={homepics[1].image} alt="Property" className="w-full h-full object-cover" />
                        </div>

                        <div className="px-3 mt-4">
                            <div className="flex justify-between font-bold">
                                <p>Property name</p>
                                <p>$200,000</p>
                            </div>

                            <div className="flex gap-4 py-2">
                                <img src={homepics[1].bedicon} alt="Beds" className="w-6 h-6" />
                                <p>{homepics[1].beds}</p>
                                <img src={homepics[1].bathicon} alt="Baths" className="w-6 h-6" />
                                <p>{homepics[1].bath}</p>
                                <img src={homepics[1].surface} alt="Surface" className="w-6 h-6" />
                                <p>{homepics[1].sqft}</p>
                            </div>

                            <p className="mt-2">{homepics[1].address}</p>
                        </div>

                        <div className="border shadow-sm rounded-lg my-10 font-bold p-4 flex justify-center">
                            <ul className="list-disc space-y-1">
                                <li>No agency fee</li>
                                <li>No agreement fee</li>
                                <li>No commission</li>
                            </ul>
                        </div>

                        <div className="border shadow-sm rounded-lg my-10 p-5">
                            <h3 className="text-2xl my-4 pl-8 font-bold">Description</h3>
                            <p className="px-4 text-sm">
                                Beautifully finished 3 bedroom flat for sell, located at Maruwa, Lekki. The flat comes with access to a swimming pool and a gym, in a well-secured estate with guards. Property is available for immediate inspection. Located in a serene, residential, gated and well-secured area, easily accessible from the Lekki-Epe Expressway way.
                            </p>
                        </div>

                        <div className="border shadow-sm rounded-lg my-10 text-sm">
                            <p className="bg-gray-300 rounded-t-lg py-1 px-3">Property Details</p>
                            <div className="grid grid-cols-2 p-5 gap-4">
                                <div>
                                    <p>Type: Rent</p>
                                    <p>Property Type: House</p>
                                    <p>Built: 2015</p>
                                    <p>List Date: 2023</p>
                                    <p>Lynue Code: 4LKN43KN</p>
                                </div>

                                <div>
                                    <p>Bedroom: 4</p>
                                    <p>Bathroom: 6</p>
                                    <p>Toilet: 2</p>
                                    <p>Furnishing: Fully furnished</p>
                                    <p>Condition: Excellent</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3">
                        <div className="border border-gray-300 rounded-lg p-6 text-center w-full mx-auto mb-10">
                            <div className="border border-black rounded-lg px-4 py-2">
                                <p className="text-2xl tracking-tight font-bold">N 2,000,000</p>
                                <p className="font-bold">per annum</p>
                            </div>
                        </div>

                        <div className="border border-gray-300 rounded-lg py-6 text-center w-full mx-auto px-8 flex items-center justify-center flex-col mb-10">
                            <img src="/Images/profile.jpg" alt="Agent" className="w-16 h-16 rounded-full mb-4" />
                            <p className="font-bold">Name of Agent</p>

                            <div className="flex gap-x-2 my-3">
                                <span>34 reviews</span>
                                <span className="flex text-yellow-500 font-bold pt-1 text-lg">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </span>
                            </div>

                            <button className="bg-black text-white rounded-full px-3 py-1 text-sm">Chat</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
