import React from "react";
import { BsPhoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Heading = () => {
  return (
    <div className="w-full h-10 bg-orange-600">
      <div className="flex items-center justify-between h-full mx-auto text-white max-w-7xl">
        <div className="flex items-center space-x-2">
          <BsPhoneFill />
          <p>8132043928</p>
        </div>

        <div className="flex items-center space-x-2">
          <IoMdMail />
          <p>info@newtechdiagnostic.in</p>
        </div>
      </div>
    </div>
  );
};

export default Heading;
