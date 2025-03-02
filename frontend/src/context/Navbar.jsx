import React from 'react';
import { assets } from "../assets/assets.js";

const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between p-2 sm:p-5 sm:px-12 absolute top-4 h-16 bg-opacity-80'>
      {/* Left Side - Logo */}
      <img src={assets.logo} alt="logo" className='w-36 sm:w-44 md:w-48' />

      {/* Right Side - KFM_Broadcast_White Image (Reduced Size) */}
      <img src={assets.KFM_Broadcast_White} alt="KFM Broadcast" className='w-20 sm:w-28 md:w-32' />
    </div>
  );
}

export default Navbar;
