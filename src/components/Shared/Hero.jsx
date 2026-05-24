import React from 'react'

export default function Hero() {
  return (
    <div className='w-[90%] mx-auto text-white py-3.5'>
      <nav className='flex justify-between items-center'>
        <span className="border-[#222222] border-[2px] text-[15px] p-3 rounded-[50%] bg-[#1A1A1A]/70 font-bold text-white cursor-pointer hover:bg-[#2A2A2A]/70">nf</span>
        <div className="nav-list flex gap-7.5 border-[#222222] border-[2px] py-3.5 px-8.5 rounded-2xl bg-[#1A1A1A]/70 font-bold text-white cursor-pointer ">
            <div className="nav-items relative after:absolute after:-bottom-1 after:w-0 after:bg-white/70 hover:after:w-full after:left-0 after:h-0.5 after:transition-all after:duration-300 ">Home</div>
            <div className="nav-items relative after:absolute after:-bottom-1 after:w-0 after:bg-white/70 hover:after:w-full after:left-0 after:h-0.5 after:transition-all after:duration-300 ">Skills</div>
            <div className="nav-items relative after:absolute after:-bottom-1 after:w-0 after:bg-white/70 hover:after:w-full after:left-0 after:h-0.5 after:transition-all after:duration-300 ">Services</div>
            <div className="nav-items relative after:absolute after:-bottom-1 after:w-0 after:bg-white/70 hover:after:w-full after:left-0 after:h-0.5 after:transition-all after:duration-300 ">Contact</div>
        </div>
        <button className="talk border-[#222222] border-[2px] p-3 rounded-2xl bg-[#1A1A1A]/70 font-bold text-white cursor-pointer hover:bg-[#2a2a2a]/70">Let's Talk!</button>
      </nav>
    </div>
  )
}
