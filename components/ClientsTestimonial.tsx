import React from "react";
import { GiStaryu } from "react-icons/gi";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const ClientsTestimonial = () => {
  return (
    <div className="relative max-w-6xl mx-auto mt-20 overflow-hidden h-fit">
      <div className="flex flex-col max-w-lg space-y-3 ">
        <h1 className="text-5xl font-medium">Testimonial</h1>
        <p className="text-base font-light leading-loose">
          Patient satisfaction and comfort are our utmost priority.
          <br /> We value our customer’s feedback and support.
        </p>
      </div>
      {/* <div className="w-full h-32 max-w-6xl mx-auto bg-[#fff] mt-10">
        <div className="grid w-full grid-cols-4">
          <div className="flex items-center justify-center w-full h-32 space-x-2 bg-orange-600 rounded-r-2xl rounded-tl-xl">
            <h1 className="text-5xl font-semibold text-white">4.1</h1>
            <p className="text-2xl font-medium text-white">of 5</p>

            <GiStaryu className="w-6 h-6 text-white" />
          </div>
        </div>
      </div> */}

    </div>
  );
};

export default ClientsTestimonial;
