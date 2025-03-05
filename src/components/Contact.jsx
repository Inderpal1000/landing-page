import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Contact = () => {
    return (
        <div className='bg-[#2F6B4F] text-white p-12'>
            <h1 className='font-bold text-4xl text-center leading-snug'>Have a project idea and <br /> want to make it come true?</h1>
            <p className='opacity-70 text-sm mt-2 text-center'>Please contact us and we will discuss about your project, don't forget we are <br /> always here for you</p>
            <button className='flex items-center gap-2 m-auto bg-white py-2 px-3 text-black font-bold mt-8'>Contact Us <FaArrowRightLong /></button>
        </div>
    )
}

export default Contact