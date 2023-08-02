import React from "react";
import { BsPhoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Heading = () => {
  return (
    <div className="w-full h-10 bg-orange-600">
      <div className="flex items-center justify-between h-full px-4 text-white lg:px-16">
        <div className="flex items-center space-x-2">
          <BsPhoneFill className="h-6 lg:h-8" />
          <p className="text-xs lg:text-base">8132043928</p>
        </div>

        <div className="flex items-center space-x-2">
          <IoMdMail className="h-6 lg:h-8" />
          <p className="text-xs lg:text-base">info@newtechdiagnostic.in</p>
        </div>
      </div>
    </div>
  );
};

export default Heading;
