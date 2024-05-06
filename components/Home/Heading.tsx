import React from "react";
import { BsPhoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Heading = () => {
  return (
    <div className="w-full h-10 bg-orange-600">
      <div className="flex items-center justify-between h-full px-4 text-white md:px-8 lg:max-w-[90rem]  lg:mx-auto lg:px-16">
        <div>
          <p className="text-xs lg:text-base">Mon-Sun: 7am - 6pm</p>
        </div>
        <div className="flex items-center space-x-5">
          <div className="flex items-center space-x-2">
            <BsPhoneFill className="h-6 lg:h-8" />
            <p className="text-xs lg:text-base">7005171909</p>
          </div>
          <div className="flex items-center space-x-2">
            <IoMdMail className="h-6 lg:h-8" />
            <p className="text-xs lg:text-base">
              contact@newtechdiagnostics.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
