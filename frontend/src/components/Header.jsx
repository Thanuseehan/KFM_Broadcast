import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col items-center mt-20 px-4 text-center text-white'>

      <img src={assets.header_img} alt="logo" className='w-36 h-36 rounded-full mb-6'/>

      <h1 className='flex items-center gap-2 text-xl sm:text-3xl font-medium mb-2'>
        Vanakkam da mappilei KFM la irunthu 
        <img className='w-8 aspect-square' src={assets.hand_wave} alt="" />
        </h1>

      <h2 className='text-3xl sm:text-7xl font-semibold mb-4'>Welcome to KFM Broadcast</h2>

      <p className='mb-8 max-w-md'>Kuri Vecha Era Vizhanum</p>

      <button className='border border-white rounded-full px-8 py-2.5 hover:bg-gray-100 hover:text-black transition-all'>
        Va Mame
    </button>

    <button>vfvf</button>

    </div>
  )
}

export default Header
