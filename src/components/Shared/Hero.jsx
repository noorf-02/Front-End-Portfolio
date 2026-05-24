import React from 'react'
import { useState } from 'react'

export default function Hero() {

    const [ value, setValue ] = useState(0)
    const handleDec = () => {
        if(value>0){
            setValue(value -1)
        }
    }

  return (
    <>
    <div className='w-[90%] mx-auto text-white py-3.5'>
      <nav className='flex justify-between items-center'>
        <span className="border-[#222222] border-[2px] text-[15px] p-3 rounded-[50%] bg-[#1A1A1A]/70 font-bold text-white cursor-pointer hover:bg-[#2A2A2A]/70">nf</span>
        <div className="nav-list gap-7.5 border-[#222222] border-[2px] py-3.5 px-8.5 rounded-2xl bg-[#1A1A1A]/70 font-bold text-white cursor-pointer sm:flex hidden ">
            <div className="nav-items relative after:absolute after:-bottom-1 after:w-0 after:bg-white/70 hover:after:w-full after:left-0 after:h-0.5 after:transition-all after:duration-300 ">Home</div>
            <div className="nav-items relative after:absolute after:-bottom-1 after:w-0 after:bg-white/70 hover:after:w-full after:left-0 after:h-0.5 after:transition-all after:duration-300 ">Projects</div>
            <div className="nav-items relative after:absolute after:-bottom-1 after:w-0 after:bg-white/70 hover:after:w-full after:left-0 after:h-0.5 after:transition-all after:duration-300 ">Services</div>
            <div className="nav-items relative after:absolute after:-bottom-1 after:w-0 after:bg-white/70 hover:after:w-full after:left-0 after:h-0.5 after:transition-all after:duration-300 ">Contact</div>
        </div>
        <div className='flex gap-5 items-center'><button className="talk border-[#222222] border-[2px] p-3 rounded-2xl bg-[#1A1A1A]/70 font-bold text-white cursor-pointer hover:bg-[#2a2a2a]/70">Let's Talk!</button>

        <span className=' block sm:hidden'><i className="fa-solid fa-bars text-white text-2xl"></i></span>
        </div>
      </nav>
    </div>

<div className='counter text-white w-[90%] mx-auto flex flex-col items-center py-3.5 gap-5'>
    <h1 className='counter-heading text-2xl font-bold'> Counter - UseState Example </h1>
    <span className='bg-gray-500 p-1 px-2 rounded-[5px] w-[100px] text-center cursor-pointer'>{value}</span>
    <div className='counter-buttons flex gap-3'>
    <button className='bg-green-500 p-1 px-2 rounded-[5px] w-[100px] cursor-pointer hover:bg-green-600' onClick={handleDec}>Decrement</button>
    <button className='bg-yellow-500 p-1 px-2 rounded-[5px] w-[100px] cursor-pointer hover:bg-yellow-600' onClick={()=> setValue(value + 1)}>Increment</button>
    <button className='bg-red-500 p-1 px-2 rounded-[5px] w-[100px] cursor-pointer hover:bg-red-600' onClick={()=> setValue(0)}>Reset</button>
    </div>
</div>



    </>
    
  )
}
