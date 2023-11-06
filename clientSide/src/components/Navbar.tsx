import React, { useState } from 'react'
import {Link, useLocation} from "react-router-dom"
import Button from './Button';
import {TfiMenu} from "react-icons/tfi"

const Navbar = () => {
    const Links =[
      {name:"Home",link:"/"},
      {name:"Explore",link:"/Explore"},
      {name:"My Post",link:"/MyPost"},
      {name:"Favorites",link:"/Favorites"},
      {name:"Creat Post",link:"/CreatPost"},
    ];
    const [open,setOpen]=useState(false);
    const currentLocation = useLocation();
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white dark:bg-gray-900 py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <img src="./src/images/Gear-grade-logo2.png" alt="Gear Grade Logo" className='w-12 h-12' />
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <TfiMenu name={open ? 'close':'menu'} ></TfiMenu>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute font-medium md:static bg-white dark:bg-gray-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <Link to={link.link} className={`block py-2 pl-3 pr-4 ${currentLocation.pathname === link.link ?  'text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 md:dark:text-green-500' : 'text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}`}>{link.name}</Link>
            </li>
          ))
        }
        
      </ul>
      <Button>
          Login
        </Button>
      </div>
    </div>
  )
}

export default Navbar