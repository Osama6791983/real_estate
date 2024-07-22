import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <div className='container mx-auto flex justify-between py-4'>
            <div className=''>
                <p className='text-1xl font-bold'><Link to={"/"}>LYNUE</Link></p>
            </div>
            <div className='space-x-10 font-semibold'>
                <Link>Buy</Link>
                <Link>Rent</Link>
                <Link>Sell</Link>
            </div>

            <div className='space-x-6 '>
                <button className='border border-black rounded-2xl px-5 py-1'><Link to={'/signin'}>Login</Link></button>
                <button className='border border-black rounded-2xl px-5 py-1 bg-black text-white'><Link to={'/signup'}>Signup</Link></button>
            </div>
        </div>
    </>
  )
}


export default Navbar;