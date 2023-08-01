import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full py-20 h-96 bg-[url('/icons/MRIM.jpeg')] bg-no-repeat bg-cover bg-center">
      <div className="absolute inset-0 z-0 bg-indigo-950 opacity-70"></div>
      <div className="relative z-10 mx-auto max-w-7xl">
        <h1 className="p-2 font-semibold text-white bg-blue-400 rounded-md w-fit h-fit">
          NEW
        </h1>
        <h1 className="mt-5 text-4xl font-bold leading-normal text-white">
          Now offering High-resolution musculoskeletal <br /> Imaging.
        </h1>

        <div className="px-4 py-2 mt-5 text-white transition-all duration-200 ease-in-out border border-white cursor-pointer w-fit h-fit hover:bg-white hover:text-blue-700">
          MRI SCAN
        </div>
      </div>
    </div>
  );
};

export default Banner;
