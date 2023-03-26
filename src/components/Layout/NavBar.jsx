import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DiTechcrunch } from 'react-icons/di';
import { FaHamburger } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [open, setOpen] = useState(false)

  const MenuBar = (() => {
    setOpen(!open)
  })

  return (
    <div className='h-[80px] text-white bg-[#023047] relative flex justify-between sticky top-0 z-[999]'>
      <div className='flex justify-between items-center w-[90%] mx-auto'>
        <h1><Link to="/"><DiTechcrunch size={80} /></Link></h1>
       {open &&  <ul className='uppercase font-semibold absolute text-[#023047] md:text-white top-[80px] left-0 px-[24px] text-center md:hidden bg-[#f1faee] w-[100%]'>
          <li className='ml-6 my-[15px] hover:underline'><Link to="/">Home</Link></li>
          <li className='ml-6 my-[15px] hover:underline'><Link to="/blog">Blog</Link></li>
          <li className='ml-6 my-[15px] hover:underline'><Link to="/store">Store</Link></li>
          <li className='ml-6 my-[15px] hover:underline'><Link to="/dashboard">Dashboard</Link></li>
        </ul>}
        <ul className='uppercase font-semibold text-white hidden md:flex'>
          <li className='ml-6 my-[15px] hover:underline'><Link to="/">Home</Link></li>
          <li className='ml-6 my-[15px] hover:underline'><Link to="/blog">Blog</Link></li>
          <li className='ml-6 my-[15px] hover:underline'><Link to="/store">Store</Link></li>
          <li className='ml-6 my-[15px] hover:underline'><Link to="/dashboard">Dashboard</Link></li>
        </ul>
        <button className='md:hidden' onClick={MenuBar}>{open ? <FaTimes size={30} /> : <FaHamburger size={30} /> }</button>
      </div>
    </div>
  )
}

export default NavBar
