import React from 'react'

const Navbar = () => {
  return (
    <nav className='px-8 text-white bg-black md:px-16 lg:px-24'>
        <div className='container flex items-center justify-center py-2 md:justify-between'>
            <div className='hidden text-2xl font-bold md:inline'>SAM</div>
            <div className='space-x-6'>
                <a href="#home" className='hover:text-gray-400'>Home</a>
                <a href="#about" className='hover:text-gray-400'>About Me</a>
                <a href="#service" className='hover:text-gray-400'>Services</a>
                <a href="#project" className='hover:text-gray-400'>Projects</a>
                <a href="#contact" className='hover:text-gray-400'>Contact</a>
            </div>
            
        </div>
    </nav>
  )
}

export default Navbar