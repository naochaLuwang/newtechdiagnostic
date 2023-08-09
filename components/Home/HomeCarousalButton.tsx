import React from "react";
import { TbSquareChevronsLeft, TbSquareChevronsRight } from "react-icons/tb";

const HomeCarousalButton = ({ next, previous, ...rest }: any) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="flex items-center justify-start w-full px-16 carousel-button-group">
      <div
        className={currentSlide === 0 ? "disable" : "cursor-pointer"}
        onClick={() => previous()}
      >
        <TbSquareChevronsLeft className="w-10 h-10 text-neutral-700" />
      </div>
      <div onClick={() => next()} className="cursor-pointer">
        <TbSquareChevronsRight className="w-10 h-10 lg:mr-20 text-neutral-700" />
      </div>
    </div>
  );
};

export default HomeCarousalButton;
