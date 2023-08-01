"use client";
import React from "react";
import { TbSquareChevronsRight, TbSquareChevronsLeft } from "react-icons/tb";

const CarousalButton = ({ next, previous, ...rest }: any) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="flex items-center justify-center w-full mt-10 carousel-button-group">
      <div
        className={currentSlide === 0 ? "disable" : "cursor-pointer"}
        onClick={() => previous()}
      >
        <TbSquareChevronsLeft className="w-10 h-10 text-neutral-700" />
      </div>
      <div onClick={() => next()} className="cursor-pointer">
        <TbSquareChevronsRight className="w-10 h-10 mr-20 text-neutral-700" />
      </div>
    </div>
  );
};

export default CarousalButton;
