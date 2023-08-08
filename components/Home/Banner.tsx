import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full lg:py-20 py-10 lg:h-[40rem] h-72 bg-[url('/icons/ctmachine.avif')] bg-no-repeat bg-cover bg-center flex justify-center">
      <div className="absolute inset-0 z-0 bg-indigo-950 opacity-70"></div>
      <div className="relative z-10 flex flex-col justify-center w-full h-auto px-4 lg:px-16 md:px-8">
        <h1 className="p-2 text-xs font-semibold text-white bg-blue-400 rounded-md lg:text-base w-fit h-fit">
          NEW
        </h1>
        <h1 className="mt-5 text-xl font-bold text-white lg:leading-normal lg:text-4xl md:text-2xl">
          Elevating Diagnostics through AI-Enhanced CT Scans: <br />{" "}
          <span className="text-sm font-medium lg:text-2xl ">
            Advanced Imaging for Precise Understanding and Informed Medical
            Decisions.
          </span>
        </h1>

        <div className="px-4 py-2 mt-5 text-white transition-all duration-200 ease-in-out border border-white cursor-pointer w-fit h-fit hover:bg-white hover:text-blue-700">
          CT SCAN
        </div>
      </div>
    </div>
  );
};

export default Banner;
