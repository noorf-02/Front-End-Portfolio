import React from "react";
import { motion } from "framer-motion";

export default function SectionServices() {
  return (
    <div className="services bg-gradient-to-r from-[#4fd6c6] to-[#4e379e] h-fit rounded-t-[30px]">
      <div className="wrapper">
        <div className="wrap-line w-fit">
          <p className="text-left text-black font-bold sm:text-4xl text-2xl pt-12">
            Services
          </p>
          <div className="h-1 mt-2 bg-black rounded-full" />
        </div>

            <div className="py-12 sm:flex flex flex-wrap justify-center m-auto w-[100%] lg:gap-7 gap-4">
          <motion.div initial={{opacity: 0, x: -50}} whileInView={{ opacity:1 , x:0 }} viewport={{once:true}}
             transition={{ duration: 0.4 }} className="card w-[18rem] sm:text-[18px] text-[13px] text-white bg-[#1A1A1A]/80 px-6 py-12 flex flex-col text-center justify-between gap-6 rounded-2xl">
            <p className="text-[22px] bg-gradient-to-r from-[#4fd6c6] to-[#4e379e] bg-clip-text text-transparent font-bold ">Frontend Development</p>
            <p className="sm:text-left text-center">Building responsive, mobile-first interfaces with HTML, CSS, JavaScript, React, and Tailwind CSS</p>
            <div className="h-1 mt-2 bg-gradient-to-r from-[#4fd6c6] to-[#4e379e] rounded-full" />
          </motion.div>

         
          <motion.div initial={{opacity: 0, x: -50}} whileInView={{ opacity:1 , x:0 }} viewport={{once:true}}
             transition={{ duration: 0.4 }} className="card w-[18rem] sm:text-[18px] text-[13px] text-white bg-[#1A1A1A]/80 px-6 py-12 flex flex-col text-center justify-between gap-6 rounded-2xl">
            <p className="text-[22px] bg-gradient-to-r from-[#4fd6c6] to-[#4e379e] bg-clip-text text-transparent font-bold ">Performance & SEO</p>
            <p className="sm:text-left text-center">Writing clean, accessible, and cross-browser compatible code with SEO best practices baked in.</p>
            <div className="h-1 mt-2 bg-gradient-to-r from-[#4fd6c6] to-[#4e379e] rounded-full" />
          </motion.div>
       

        
          <motion.div initial={{opacity: 0, x: -50}} whileInView={{ opacity:1 , x:0 }} viewport={{once:true}}
             transition={{ duration: 0.4 }} className="card w-[18rem] sm:text-[18px] text-[13px] text-white bg-[#1A1A1A]/80 px-6 py-12 flex flex-col text-center justify-between gap-6 rounded-2xl">
            <p className="text-[22px] bg-gradient-to-r from-[#4fd6c6] to-[#4e379e] bg-clip-text text-transparent font-bold ">UI/UX & Design</p>
            <p className="sm:text-left text-center">Designing eye-catching social media posts with strong visual hierarchy and typography.</p>
            <div className="h-1 mt-2 bg-gradient-to-r from-[#4fd6c6] to-[#4e379e] rounded-full" />
          </motion.div>

          </div>
       

      </div>
    </div>
  );
}
