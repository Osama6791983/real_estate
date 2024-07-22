import React from "react";
import { LiaFacebookSquare } from "react-icons/lia";
import { IoLogoInstagram } from "react-icons/io";
import { FaPinterestP } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";


const Footer=()=>{
    return(
        <>
            <div className="w-full bg-black text-gray-300 py-20">
                <div className="container mx-auto grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-5 xs:grid-cols-1 gap-8 px-5">
                    <div className="space-y-3">
                    <p>About</p>
                    <p>Newsroom</p>
                    <p>Fair Housing</p>
                    </div>
                    <div className="space-y-3">
                    <p>For Renters</p>
                    <p>For Buyers</p>
                    <p>For Sellers</p>
                    </div>
                    <div className="space-y-3 text-center">
                    <p className="flex text-wrap gap-4 py-1 bg-white text-gray-900">
                        <LiaFacebookSquare /> <IoLogoInstagram /> <FaPinterestP /> <CiLinkedin /> <CiTwitter />
                    </p>
                    <p>enquiery@lyune.com</p>
                    <p>@ lyune co</p>
                    </div>
                    <div className="space-y-3">
                    <p>Blog</p>
                    <p>Help</p>
                    <p>FAQ</p>
                    </div>
                    <div className="space-y-3">
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                    <p>Do not Sell</p>
                    </div>
                </div>
                </div>

            
        </>
    )
}


export default Footer;