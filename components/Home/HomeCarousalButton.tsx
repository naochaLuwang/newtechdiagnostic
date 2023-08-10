import React, { useEffect, useState } from "react";
import { TbSquareChevronsLeft, TbSquareChevronsRight } from "react-icons/tb";
import { Skeleton } from "../ui/skeleton";

const HomeCarousalButton = ({ next, previous, ...rest }: any) => {
  const {
    carouselState: { currentSlide },
  } = rest;

  const [isMounted, setIsMounted] = useState(false);

  // This is a side effect that runs after the first render and sets the isMounted state to true
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // This is a conditional rendering that returns null if the component is not mounted yet
  if (!isMounted) {
    return <Skeleton className="w-20 h-10" />;
  }
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
