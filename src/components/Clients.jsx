import React from 'react';
import client1 from "../assets/client1.webp";
import client2 from "../assets/client2.jpeg";
import client3 from "../assets/client3.jpg";

const Clients = () => {

    const clientData = [
        {
          "title": "Website My Hospital",
          "review": "Very nice to work with Bubble Bash, a reliable and responsive team is very helpful",
          "client": {
            "name": "Katty Clock",
            "position": "CEO My Hospital",
            "image":client1
          }
        },
        {
          "title": "Logo F&B Corp",
          "review": "Really the best service we've ever gotten, really looking forward to the next project",
          "client": {
            "name": "John Robert",
            "position": "CEO My Hospital",
            "image":client2
          }
        },
        {
          "title": "Supermarket Mobile Apps",
          "review": "The best developer team ever, it's a lot of fun working. Maybe work together again on the next project?",
          "client": {
            "name": "Katty Clock",
            "position": "CEO My Hospital",
            "image":client3
          }
        }
      ]
      

  return (
    <div className='w-full p-10'>
            <div className='w-[75%] mx-auto'>
            <h3 className='font-medium text-lg text-gray-600'>Client Reviews</h3>
            <h1 className='font-semibold mt-1 text-3xl'>What our Happy Clients Says About Us</h1>

                <div className='grid grid-cols-3 gap-10 mt-8'>
                {
                    clientData.map((data,index) => {
                        return <div key={index}  className='border-2 border-black cursor-pointer bg-white p-4'>
                         <h1 className='text-xl font-semibold mb-2'>{data.title}</h1>
                         <p className='text-sm text-slate-600'>{data.review}</p>

                         <div className='flex items-center mt-4 gap-3'>
                            <img src={data.client.image} alt={data.client.name} className='rounded-full w-10 h-10 object-cover'/>
                            <div>
                                <p className='text-[16px] font-semibold'>{data.client.name}</p>
                                <p className='text-[12px] text-slate-600'>{data.client.position}</p>
                            </div>
                         </div>
                        </div>
                    })
                }
                </div>
                
            </div>
        </div>
  )
}

export default Clients