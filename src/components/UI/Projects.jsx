import React from 'react'
import {useState} from 'react'

export default function Projects() {

     const [ value, setValue ] = useState(0)
  const handleDec = () => {
      if(value>0){
          setValue(value -1)
      }
  }


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
</>

  )
}
