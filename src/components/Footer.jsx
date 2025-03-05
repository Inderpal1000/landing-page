import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='p-10 w-full pt-20'>
            <div className='w-[80%] mx-auto grid grid-cols-2 gap-8'>
                <div>
                    <h1 className='font-semibold text-xl'>Bubble Bash</h1>
                    <p className='text-[15px] my-4 text-slate-500'>Introducing, We are Bubble Bash digital agency company with more than 6 years of experience. We are committed to serve with all our heart</p>
                    <div className='flex items-center mt-3 gap-5'>
                        <a href="#"><FaFacebook className='text-2xl' /></a>
                        <a href="#"> <FaTwitter className='text-2xl' /></a>
                        <a href="#"><RiInstagramFill className='text-2xl' /></a>
                        <a href="#"><FaLinkedin className='text-2xl' /></a>
                    </div>
                </div>

                <div className='grid grid-cols-3 justify-items-end'>
                    <ul className='flex flex-col gap-3'>
                        <li><a href="#" className='font-semibold'>Pages</a></li>
                        <li><a href="#" className="text-slate-700 text-sm">Home</a></li>
                        <li><a href="#" className="text-slate-700 text-sm">Our Service</a></li>
                        <li><a href="#" className="text-slate-700 text-sm">Portfolio</a></li>
                        <li><a href="#" className="text-slate-700 text-sm">Testimonial</a></li>
                        <li><a href="#" className="text-slate-700 text-sm">Contact Us</a></li>
                    </ul>

                    <ul className='flex flex-col gap-3'>
                        <li><a href="#" className='font-semibold'>Explore</a></li>
                        <li><a href="#" className="text-slate-700 text-sm">Resources</a></li>
                        <li><a href="#" className="text-slate-700 text-sm">Blog</a></li>
                        <li><a href="#" className="text-slate-700 text-sm">Documents</a></li>
                    </ul>

                    <ul className='flex flex-col gap-3'>
                        <li><a href="#" className='font-semibold'>Company</a></li>
                        <li><a href="#" className="text-slate-700 text-sm">About Us</a></li>
                        <li><a href="#" className="text-slate-700 text-sm">Partners</a></li>
                        <li><a href="#" className="text-slate-700 text-sm">Customers</a></li>
                        <li><a href="#" className="text-slate-700 text-sm">Contact Us</a></li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Footer