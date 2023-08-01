"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const TestProcedures = () => {
  return (
    <div className="w-full h-auto py-20">
      <h1 className="text-3xl font-medium text-center text-neutral-700">
        Popular Test Procedures
      </h1>
      <div className="mx-auto mt-10 max-w-7xl">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={7000}
          arrows={false}
        >
          <div className="flex flex-col py-10">
            <h1 className="text-3xl font-medium leading-relaxed text-teal-600">
              Congenital Anomaly Scan
            </h1>
            <ul className="px-3 mt-3 space-y-2 text-sm">
              <li className="list-disc">
                Comprehensive detailed evaluation of foetal anomaly and
                development.
              </li>
              <li className="list-disc">
                Best done within 18 to 19 weeks of pregnancy
              </li>
            </ul>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default TestProcedures;
