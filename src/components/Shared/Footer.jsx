import React from "react";

export default function Footer() {
  return (
    <div className="footer bg-gradient-to-r from-[#4fd6c6] to-[#4e379e] w-full h-15 items-center flex">
      <div className="wrapper flex justify-end sm:gap-3 gap-1">
        <button className="border-[1px] bg-black text-white border-black rounded-[13px] p-2 w-20 hover:bg-[#1e1e1e] cursor-pointer transition-all duration-200 sm:text-[15px] text-[13px]">
          LinkedIn
        </button>
        <button className="border-[1px] bg-black text-white border-black rounded-[13px] p-2 w-20 hover:bg-[#1e1e1e] cursor-pointer transition-all duration-200 sm:text-[15px] text-[13px]">
          GitHub
        </button>
      </div>
    </div>
  );
}
