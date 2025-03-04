import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full py-5 px-7 flex items-center justify-between bg-[#2F6B4F] text-white'>
        <h1 className='font-bold text-xl cursor-pointer'>Bubble Bash</h1>
        <ul className='flex items-center gap-9'>
            <li><a href="" className='font-semibold hover:opacity-90'>Home</a></li>
            <li><a href="" className='font-semibold hover:opacity-90'>Our Services</a></li>
            <li><a href="" className='font-semibold hover:opacity-90'>Portfolio</a></li>
            <li><a href="" className='font-semibold hover:opacity-90'>Testimonial</a></li>
            <li><a href="" className='font-semibold hover:opacity-90'>Contact Us</a></li>
        </ul>
    </nav>
  )
}

export default Navbar