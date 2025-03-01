import React from 'react';
import { assets } from "../assets/assets.js";

const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between p-4 sm:p-6 sm:px-24 absolute top-0'>
      {/* Left Side - Logo */}
      <img src={assets.logo} alt="logo" className='w-52 sm:w-72 md:w-60 lg:w-86' />

      {/* Right Side - KFM_Broadcast_White Image */}
      <img src={assets.KFM_Broadcast_White} alt="KFM Broadcast" className='w-40 sm:w-52 md:w-60 lg:w-72' />
    </div>
  );
}

export default Navbar;
