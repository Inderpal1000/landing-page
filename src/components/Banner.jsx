import React from 'react';
import banner from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div className='pb-3'>
      <img src={banner} alt="banner-image" className='w-[75%] mx-auto -mt-64'/>

      <div className='flex justify-between items-center p-8 w-[70%] mx-auto'>

        <div>
            <h1 className='text-center font-bold text-xl'>1.2K+</h1>
            <p className='text-sm text-slate-600'>Happy Clients</p>
        </div>

        <div>
            <h1 className='text-center font-bold text-xl'>1.1K+</h1>
            <p className='text-sm text-slate-600'>WorldWide Clients</p>
        </div>

        <div>
            <h1 className='text-center font-bold text-xl'>6+</h1>
            <p className='text-sm text-slate-600'>Years of Experience</p>
        </div>

        <div>
            <h1 className='text-center font-bold text-xl'>12+</h1>
            <p className='text-sm text-slate-600'>Award Winners</p>
        </div>

      </div>
    </div>
  )
}

export default Banner