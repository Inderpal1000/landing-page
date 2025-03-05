import React from 'react';
import { FaBullhorn, FaCode, FaFigma, FaPalette, FaVideo } from "react-icons/fa6";
import { MdContentPaste } from "react-icons/md";

const Services = () => {

    const serviceData = [
        {
            id: 1,
            title: "UI/UX Designer",
            description: "We are ready to make your website more friendly and efficient in the eyes of users.",
            icon: <FaFigma />
        },
        {
            id: 2,
            title: "Web Development",
            description: "Want to create a website that has many features? We have the answer for you.",
            icon: <FaCode />
        },
        {
            id: 3,
            title: "Content Writer",
            description: "We provide interesting content and can attract customers for you.",
            icon: <MdContentPaste />
        },
        {
            id: 4,
            title: "Branding",
            description: "Create visual branding with amazing results, you just sit back and relax.",
            icon: <FaBullhorn />
        },
        {
            id: 5,
            title: "Editing Video",
            description: "Want to create a website that has many features? We have the answer for you.",
            icon: <FaVideo />
        },
        {
            id: 6,
            title: "Illustration",
            description: "Create beautiful illustrations as you need, and make it interesting.",
            icon: <FaPalette />
        }
    ];

  return (
    <div id='services' className='bg-slate-100 w-full p-10'>
        <div className='w-[75%] mx-auto'>
        <h3 className='font-medium text-lg text-gray-600'>Our Services</h3>
        <h1 className='font-semibold mt-1 text-3xl'>We Provide What You Need</h1>

        <div className='grid grid-cols-3 gap-y-8 gap-x-20 mt-8'>
        {
            serviceData.map((service)=>{
                return <div key={service.id} className='p-4 rounded-md cursor-pointer flex flex-col justify-center items-center text-center shadow-md bg-white'>
                    <span className='text-3xl text-green-700'>{service.icon}</span>
                    <h1 className='text-xl font-semibold my-2'>{service.title}</h1>
                    <p className='text-sm text-slate-600'>{service.description}</p>
                </div>
            })
        }
        </div>

        </div>
    </div>
  )
}

export default Services
