import React from 'react';
import project1 from "../assets/projects1.jpg";
import project2 from "../assets/projects2.webp";
import project3 from "../assets/projects3.jpg";

const Projects = () => {

    const projectsData = [
        {
            "title": "Website My Hospital",
            "description": "Create a hospital website with patient, doctor, and drug logistics features that help hospital operations",
            "image":project1
        },
        {
            "title": "Food & Beverages Corp Logo",
            "description": "Create a logo for a food & beverage company, with emphasis on aesthetics and user requests",
            "image":project2
        },
        {
            "title": "Supermarket Mobile Apps",
            "description": "Develop mobile applications for supermarkets with buy, auto-pay, and marketplace features",
            "image":project3
        }
    ]


    return (
        <div id='projects' className='w-full p-10'>
            <div className='w-[75%] mx-auto'>
            <h3 className='font-medium text-lg text-gray-600'>Our Portofolio’s</h3>
            <h1 className='font-semibold mt-1 text-3xl'>Recent Projects</h1>

                <div className='grid grid-cols-3 gap-7 mt-8'>
                {
                    projectsData.map((project,index) => {
                        return <div key={index}  className='rounded-md cursor-pointer flex flex-col text-center bg-white'>
                            <img src={project.image} alt={project.title} className='aspect-video object-cover'/>
                            <h1 className='text-xl font-semibold my-2'>{project.title}</h1>
                            <p className='text-sm text-slate-600'>{project.description}</p>
                        </div>
                    })
                }
                </div>
                
            </div>
        </div>
    )
}

export default Projects