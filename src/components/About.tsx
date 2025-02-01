import { FaCheck } from "react-icons/fa6";
import Button from "./Button";
import Image from "next/image";

import React from 'react'

const About = () => {
  return (
    <div className=' w-[1370px] bg-black h-[462px] relative bottom-44  flex'>
      <div className=" ml-28">
        <h1 className='font-greatVibes text-customOrange italic text-2xl'>About Us</h1>
        <h2 className='  flex text-customOrange text-5xl w-[499px] font-sans '>We<p className=' text-white tracking-[0.1px] relative left-3'> Create the best <p className=' relative   right-[77px]'>foody products</p></p></h2>
        <p className=' w-[490px] text-justify text-[12px] mt-8 text-gray-200'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident quae voluptates id expedita maxime aperiam! Accusantium reprehenderit aut, quae quidem ullam neque doloremque ab facilis omnis libero vero veritatis facere! Provident quae voluptates id expedita maxime aperiam!Accusantium reprehenderit aut, quae quidem ullam neque doloremque ab facilis omnis libero vero veritatis facere!
        </p>
        <div className=" flex mt-5">
       <FaCheck  className=" " />
       <p className=" ml-4 text-justify text-[12px] text-gray-200">Provident quae voluptates id expedita maxime aperiam adipisicing elit.</p> 
       </div>
       <div className=" flex mt-5">
       <FaCheck  className="  " />
       <p className=" ml-4 text-justify text-[12px] text-gray-200"> Reprehenderit aut, quae quidem ullam neque doloremque omnis libero vero veritatis  quae adipisicing elit.</p>
       </div>
       <div className=" flex mt-5">
       <FaCheck  className="  " />
       <p className=" ml-4 text-justify text-[12px] text-gray-200"> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
       </div>
   <Button title='Read More'/>
      </div>
      <div className=" w-[440px] ml-32">
        <Image src="sssss80c0.jpeg" alt="" className=" w-[440px] h-[248px] mb-2 rounded-[14px] " />

        <div className=" flex w-[440px]">

        <Image src="nn8c2f4cd.jpeg" alt=""  className=" w-[220px] h-[144px] mr-2 rounded-[14px] "/>
        <Image src="90e97b88.jpeg" alt="" className=" w-[220px] h-[144px] mr-2 rounded-[14px] "/>
        </div>

        
      </div>
    </div>
  )
}

export default About
