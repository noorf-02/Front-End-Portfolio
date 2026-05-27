import React from 'react'

export default function Hero() {
  return (
    <div className="wrapper text-white">
      <section className="hero h-[70vh] flex flex-col justify-center">
          <p className="sm:text-[18px] text-15px font-bold">I am Noor</p>
          <h1 className="sm:text-4xl text-2xl font-bold bg-gradient-to-r from-[#4fd6c6] to-[#4e379e] bg-clip-text text-transparent">Front-End Developer & SEO specialist</h1>
          <p className="pt-3 flex-wrap sm:flex-nowrap text-[13px] sm:text-[20px]">Frontend Developer & SEO Specialist skilled in creating responsive, user-friendly websites and optimizing them for better performance and search engine visibility.</p>

          <div className="sm:mt-10 mt-8 w-full lg:w-[800px] sm:h-[4px] h-[2px] rounded-full bg-gradient-to-r from-[#4fd6c6]
           to-[#4e379e] "/>

          <div className="sm-icons flex gap-1.5 text-[18px] mt-8">
                  <a href="https://www.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin cursor-pointer text-[18px] sm:text-[25px] "></i></a>
                  <a href="https://github.com/noorf-02" target="_blank"><i class="fa-brands fa-github cursor-pointer text-[18px] sm:text-[25px] "></i></a>
                </div>
        </section>
    </div>
  )
}
