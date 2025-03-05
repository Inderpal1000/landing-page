import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full py-5 px-10 flex items-center justify-between bg-[#2F6B4F] text-white'>
        <h1 className='font-bold text-2xl cursor-pointer'>Bubble Bash</h1>
        <ul className='flex items-center gap-9'>
            <li><a href="#home" className='font-semibold text-[18px] hover:opacity-90'>Home</a></li>
            <li><a href="#services" className='font-semibold text-[18px] hover:opacity-90'>Our Services</a></li>
            <li><a href="#projects" className='font-semibold text-[18px] hover:opacity-90'>Portfolio</a></li>
            <li><a href="#clients" className='font-semibold text-[18px] hover:opacity-90'>Testimonial</a></li>
            <li><a href="#contact" className='font-semibold text-[18px] hover:opacity-90'>Contact Us</a></li>
        </ul>
    </nav>
  )
}

export default Navbar