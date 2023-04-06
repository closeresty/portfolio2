import React from "react";

function Hero() {
  return (
    <div className="flex justify-center mx-2">
      <div className="mb-15">
        <p className="text-white text-[13px]">Welcome to all who needs me</p>
        <p className="text-white text-[40px] font-bold">I'm Resty A. Potolin</p>
        <p className="text-white-500 text-[40px] font-bold">
          {" "}
          I'm a Frontend Developer
        </p>
        <p className="text-white text-[40px] font-bold">
          Vite React Tailwind Designer.
        </p>
        <div className="mt-4 flex gap-4">
          <button
            className="text-white text-[12px] px-3 pb-2 py-2
             bg-red-500 rounded-full border-[2px] hover:border-white"
          >
            PORTFOLIO
          </button>
          <button
            className="text-white text-[12px] px-3 pb-2 py-2
             bg-red-500 rounded-full border-[2px] hover:border-white"
          >
            CONTACT ME
          </button>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="h-[320px] w-[250px] p-2 rounded-[15px] bg-gradient-to-b from-[#FF004D]  to-[#2A26B8]">
          <img src="me.png" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
