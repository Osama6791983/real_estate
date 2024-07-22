import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
      <div className="">
        <div>
          <Navbar />
        </div>

        <div
          className="relative h-screen bg-cover bg-center"
          style={{ backgroundImage: `url('/Images/loginbg.png')` }}
        >
          <div className="absolute lg:w-[450px] sm:w-[350px] w-[300px]  inset-0 bg-white my-6 flex rounded mx-auto ">
            <div className="text-center mx-auto w-full pt-5 pb-5">
              <p className="text-2xl font-bold text-gray-800 my-1">Sign up</p>
              <p>
                Already have an account?{' '}
                <Link to="/signup" className="text-blue-600">
                  Sign in
                </Link>
              </p>

              <form className="py-4">
                <div className="my-3 px-8 sm:px-12 relative">
                  <input
                    type="email"
                    placeholder="&#xf0e0; Email Or Username"
                    className="border border-gray-700 rounded-xl w-full py-1 pl-2 placeholder-gray-400 placeholder-font-awesome"
                    style={{ fontFamily: 'Arial, FontAwesome' }}
                  />
                </div>
                <div className="my-3 px-8 sm:px-12 relative">
                  <input
                    type="password"
                    placeholder="&#xf023; Password"
                    className="border border-gray-700 rounded-xl w-full py-1 pl-2 placeholder-gray-400 placeholder-font-awesome"
                    style={{ fontFamily: 'Arial, FontAwesome' }}
                  />
                </div>
                <div className="my-3 px-8 sm:px-12 relative">
                  <input
                    type="password"
                    placeholder="&#xf095; Phone Number"
                    className="border border-gray-700 rounded-xl w-full py-1 pl-2 placeholder-gray-400 placeholder-font-awesome"
                    style={{ fontFamily: 'Arial, FontAwesome' }}
                  />
                </div>

                <div className="my-4 px-8 sm:px-20">
                  <button className="text-white bg-black font-bold rounded-3xl py-2 w-full">
                    Create account
                  </button>
                </div>
              </form>

              <div className="flex items-center py-2 px-8 sm:px-16">
                <div className="flex-grow border-t border-gray-600"></div>
                <span className="px-4">OR</span>
                <div className="flex-grow border-t border-gray-600"></div>
              </div>

              <div className=''>
                <div className="flex justify-center border-gray-600 border-2 rounded-2xl my-4 mx-8 sm:mx-20 py-1">
                    <img src='Images/google.jpg' className='w-4 h-4 my-auto mx-2' alt='google' />
                  <Link>Sign up with Google</Link>
                </div>
                <div className="flex justify-center border-gray-600 border-2 rounded-2xl my-4 mx-8 sm:mx-20 py-1">
                  <img
                    src="/Images/Meta.png"
                    className="w-4 h-4 my-auto mx-2"
                    alt="meta-logo"
                  />
                  <Link className="my-auto">Sign up with Facebook</Link>
                </div>

                <div className="flex justify-center border-gray-600 border-2 rounded-2xl my-4 mx-8 sm:mx-20 py-1 bg-gray-900 text-white">
                  <img
                    src="/Images/applelogo.png"
                    className="w-4 h-4 my-auto mx-2"
                    alt="apple-logo"
                  />
                  <Link className="my-auto">Sign up with Apple</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
