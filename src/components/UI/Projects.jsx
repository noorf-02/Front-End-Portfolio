import React from 'react'
import {useState} from 'react'
import { motion } from "framer-motion"

export default function Projects() {

    const [ value , setValue ] = useState(0);
    const handleDec = () => {
        if (value > 0){
            setValue(value - 1);
        }
    }

    const [ btn , btnToggled ] = useState(false)

  return (

    <>

    <section className='wrapper text-white'>
      <div className="wrap-line w-fit">
          <p className="text-left font-bold sm:text-4xl text-2xl pt-12">
            Projects
          </p>
          <div className="h-1 mt-2 bg-gradient-to-r from-[#4fd6c6] to-[#4e379e] rounded-full" />
        </div>
    </section>

<div className='counter text-white w-[90%] mx-auto flex flex-col items-center py-9.5 gap-5'>
    <h1 className='counter-heading text-2xl font-bold'> Counter - UseState Example </h1>
    <span className='bg-gray-500 p-1 px-2 rounded-[5px] w-[100px] text-center cursor-pointer'>{value}</span>
    <div className='counter-buttons flex gap-3'>
    <button className='bg-green-500 p-1 px-2 rounded-[5px] w-[100px] cursor-pointer hover:bg-green-600' onClick={handleDec}>Decrement</button>
    <button className='bg-yellow-500 p-1 px-2 rounded-[5px] w-[100px] cursor-pointer hover:bg-yellow-600' onClick={()=> setValue(value + 1)}>Increment</button>
    <button className='bg-red-500 p-1 px-2 rounded-[5px] w-[100px] cursor-pointer hover:bg-red-600' onClick={()=> setValue(0)}>Reset</button>
    </div>
</div>


        <section className="wrapper mt-8">
            <h1 className='counter-heading text-2xl font-bold text-white text-center'> Theme Change - UseState Example </h1>

            <div className={`mini-nav  w-full h-fit mt-5 flex justify-between p-2.5 transition-all duration-300 ${btn? 'bg-[#4e379e]' : 'bg-[#4fd6c6]'} `}>
                <div className={`nav-list transition-all duration-300 ${btn? 'text-white' : 'text-black'} flex flex-col sm:flex-row gap-4 font-bold `}>
                    <p className={`nav-item relative after:absolute after:w-0 ${btn? 'after:bg-white' : 'after:bg-black'} cursor-pointer after:h-0.5 after:bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-200`}>Home</p>
                    <p className={`nav-item relative after:absolute after:w-0 ${btn? 'after:bg-white' : 'after:bg-black'} cursor-pointer after:h-0.5 after:bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-200`}>About</p>
                    <p className={`nav-item relative after:absolute after:w-0 ${btn? 'after:bg-white' : 'after:bg-black'} cursor-pointer after:h-0.5 after:bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-200`}>Contact</p>
                 </div>    

                    <div className="toggle-btn">
                        <button className={`w-12 bg-black rounded-4xl h-7 transition-all duration-300 ${btn ? 'bg-white' : 'bg-black'  }`}>
                            <div className= {`  bg-gradient-to-r from-[#4fd6c6] to-[#4e379e] w-5 h-5 rounded-full mx-1 transition-all duration-300 cursor-pointer
                             ${btn ? 'translate-x-5' : 'translate-x-0'} `} 
                            onClick={() => btnToggled(!btn)}></div>
                        </button>
                    </div>

                </div>
            

        </section>

</>

  )
}
