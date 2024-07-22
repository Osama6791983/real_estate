import React from "react";
import Navbar from "../Navbar/Navbar";
import NewListing from "../Products/NewListing";
import FeatureProjects from "../Products/FeatureProject";
import Neighbor from "../Products/Neighbor";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const HomePage = () => {
  const testimonial = [
    {
      id: 1,
      href: "/Images/rentlogo.png",
      heading: "Rent a house",
      describe: "Get exactly what you want with more tools",
      btn: "Rent",
    },
    {
      id: 2,
      href: "/Images/buy.png",
      heading: "Buy a house",
      describe: "Get exactly what you want with more tools",
      btn: "Buy",
    },
    {
      id: 3,
      href: "/Images/sell.png",
      heading: "Sell a house",
      describe: "We can help you to navigate a successful sale",
      btn: "Sell",
    },
  ];

  return (
    <>
      
        <div>
          <Navbar />
        </div>

        <div
        //relative h-64 md:h-screen bg-cover bg-center mx-4 md:mx-8 rounded-xl
          className="mx-8 h-screen bg-cover bg-center rounded-xl"
          style={{ backgroundImage: `url('/Images/carusol.png')` }}
        >
              <div className="text-center py-20">
                <h1 className="text-white text-3xl font-bold">Find Your <span className="text-yellow-400">Dream Home</span></h1>

                <div className="my-12 relative text-center">
                      <div className="inline-flex bg-white rounded-full py-2 px-4 space-x-4">
                        <Link className="bg-black text-white rounded-full px-6 py-1">Rent</Link>
                        <Link className="text-black border border-black rounded-full px-6 py-1">Buy</Link>
                        <Link className="text-black border border-black rounded-full px-6 py-1">Sell</Link>
                      </div>
                    </div>


                    <div>
                      <input type="text" placeholder="Enter address, neighborbood, zip or code, city" className="w-1/2 p-2 rounded-2xl" />
                    </div>


              </div>



        </div>

        <div className="container mx-auto text-center my-6">
          <h1 className="py-12 text-3xl font-bold">
            Search for homes to rent, buy or list for sale.
          </h1>

          <div className="grid justify-center lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-6">
            {testimonial.map((item) => (
              <div key={item.id} className="border border-gray-400 rounded-md text-center px-4 py-16">
                <img src={item.href} className="w-24 h-20 mx-auto" alt={item.heading} />
                <p className="text-xl font-bold my-2">{item.heading}</p>
                <p className="my-3">{item.describe}</p>
                <button className="bg-black text-white rounded-full px-6 py-1">{item.btn}</button>
              </div>
            ))}
          </div>
        </div>

            <div>
              <NewListing />
            </div>
            <div>
              <FeatureProjects />
            </div>
            <div>
              <Neighbor />
            </div>

            

            <div className="container my-10 mx-auto ">
              <div className="h-72 bg-cover bg-center rounded-lg" style={{backgroundImage:`url('/Images/backimg.png')`}}>


                <div className="py-10 px-10">
                  <p className="text-white  text-4xl font-bold leading-12 tracking-widest">Question <br /> about <br /> listing?</p>

                  <button className="text-gray-800 bg-white  px-3 py-1 rounded-lg my-4">List on Lynue.com</button>
                </div>

              </div>

            </div>


            <div className="bg-blue-600 text-white py-3">
              <div className="container mx-auto grid  lg:grid-cols-2 md:grid-cols-1">
              <p className="text-2xl font-bold mx-auto">Be the first to know about a new listing </p>
              <button className="border mx-auto rounded-xl px-3 text-sm my-2">Email address here</button> 
              </div>
              
            </div>


            <div className="container w-full mx-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 py-10">
                  <div className="bg-[#FFFDC8] w-full py-8 text-2xl px-7 rounded-xl leading-10 tracking-widest text-center">
                    <p>List your property <br /> on Lynue.com</p>
                    <Link className="bg-black text-white px-3 rounded-full py-1 text-sm">List</Link>
                  </div>
                  
                  <div className="bg-[#FFFDC8] w-full py-8 text-2xl px-7 rounded-xl leading-10 tracking-widest text-center">
                    <p>List your property <br /> on Lynue.com</p>
                    <Link className="bg-black text-white px-3 rounded-full py-1 text-sm">List</Link>
                  </div>
                </div>



            <div>
              <Footer />

            </div>




       



     
    </>
  );
};

export default HomePage
