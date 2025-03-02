import React from 'react';
import { assets } from "../assets/assets.js";

const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between p-2 sm:p-2 sm:px-16 absolute top-[-5px]'>
      {/* Left Side - Logo */}
      <img src={assets.logo} alt="logo" className='w-40 sm:w-60 md:w-52 lg:w-72' />

      {/* Right Side - KFM_Broadcast_White Image */}
      <img src={assets.KFM_Broadcast_White} alt="KFM Broadcast" className='w-32 sm:w-44 md:w-52 lg:w-64' />
    </div>
  );
}

export default Navbar;
