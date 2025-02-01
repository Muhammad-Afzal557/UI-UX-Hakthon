import { RiSearchLine } from "react-icons/ri";

import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <div className=' w-[1220px] h-[70px]'>
      <div className=' flex justify-center items-center mt-7 text-customOrange text-3xl sm:text-2xl '>Food <p className=' text-white line-clamp-[32px]'>tuck</p></div>
      <div className=' flex justify-between ml-[100px] mr-[100px] mt-5'>
        <ul className=' flex  items-center gap-10 '>
        <Link href={"#"}> <li>Home</li> </Link>
        <Link href={"#"}> <li>Menu</li> </Link>
        <Link href={"#"}> <li>Blog</li> </Link>
        <Link href={"#"}> <li>Pages</li> </Link>
        <Link href={"#"}> <li>About</li> </Link>
        <Link href={"#"}> <li>Shop</li> </Link>
        </ul>
        <div className=' flex justify-between items-center'>
        <label htmlFor="search" >
      <input id='search' type='search' placeholder='search...' className=' w-[250px] h-[44px] border-[1px] border-solid border-customOrange flex items-center rounded-[20px] bg-transparent outline-none pl-4' />
      </label>
      <label htmlFor="search">

      <RiSearchLine className=" relative right-10 text-xl"/>
      </label>

      </div>


      </div>

    </div>
  )
}

export default Navbar
