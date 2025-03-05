import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  return (
    <div id='home' className='w-full h-[120vh] bg-[#2F6B4F] text-center text-white pt-24'>
        <h1 className='font-bold text-5xl leading-snug'>Create Amazing Digital Product <br /> For Your Business</h1>
        <p className='opacity-75 text-sm mt-2'>We are a professional digital agency that has been established since 2016, we present a variety of <br /> digital services that can help you solve problems in your business</p>
        <button className='flex items-center gap-2 m-auto bg-white py-2 px-3 text-black font-bold mt-8'>Get Started <FaArrowRightLong /></button>
    </div>
  )
}

export default Home