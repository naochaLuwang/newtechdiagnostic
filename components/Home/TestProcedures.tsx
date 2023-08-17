"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!Carousel) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div className="w-full h-auto py-10 lg:py-20">
      <h1 className="text-lg font-medium text-center lg:text-3xl text-neutral-700 md:text-xl">
        Popular Test Procedures
      </h1>
      <p className="w-full max-w-sm mx-auto mt-2 text-xs text-center lg:mx-0 lg:max-w-none lg:text-sm md:text-sm">
        Explore Leading Test Procedures for Comprehensive and Accurate Medical
        Diagnosis
      </p>
      <div className="w-full h-auto px-4 mx-0 mt-10 lg:max-w-7xl lg:mx-auto md:px-8">
        {!loading ? (
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
            <div className="relative flex flex-col h-auto px-10 py-10 overflow-hidden border border-neutral-300 rounded-xl lg:w-[36rem] w-full">
              <div className="absolute top-0 w-56 h-56 -rotate-90 bg-blue-200 rounded-l-full bg-opacity-30 -right-20"></div>
              <h1 className="p-1 text-xs font-medium tracking-wide text-white bg-teal-700 border rounded-sm w-fit h-fit">
                Popular
              </h1>
              <h1 className="text-lg font-medium leading-relaxed text-teal-600 lg:text-3xl">
                Congenital Anomaly Scan
              </h1>
              <p className="text-sm font-medium text-orange-600 lg:text-lg">
                Secure your baby&apos;s future
              </p>
              <ul className="px-2 mt-3 space-y-2 text-xs tracking-wide lg:px-4 lg:text-base text-neutral-900">
                <li className="list-disc ">
                  Detect issues early, ensure peace of mind.
                </li>
                <li className="list-disc">
                  Best done within 18 to 19 weeks of pregnancy
                </li>
                <li className="list-disc">
                  Assess heart, brain, limb development, and more, leaving no
                  room for uncertainty.
                </li>

                <li className="list-disc">
                  Take proactive steps towards securing your baby&apos;s
                  well-being, and embrace the joy of parenthood with confidence.
                </li>
              </ul>
              <p className="mt-3 text-xs font-medium tracking-normal text-indigo-900 lg:mt-5 lg:tracking-wide lg:text-base">
                Grab this crucial scan without an appointment and enjoy a
                worry-free pregnancy journey.
              </p>
            </div>

            <div className="relative flex flex-col px-10 py-10 overflow-hidden border border-neutral-300 rounded-xl lg:w-[36rem] w-full">
              <div className="absolute top-0 w-56 h-56 -rotate-90 bg-blue-200 rounded-l-full bg-opacity-30 -right-20"></div>
              <h1 className="p-1 text-xs font-medium tracking-wide text-white bg-teal-700 border rounded-sm w-fit h-fit">
                Popular
              </h1>
              <h1 className="text-lg font-medium leading-relaxed text-teal-600 lg:text-3xl">
                Congenital Anomaly Scan
              </h1>
              <p className="text-sm font-medium text-orange-600 lg:text-lg">
                Secure your baby&apos;s future
              </p>
              <ul className="px-2 mt-3 space-y-2 text-xs tracking-wide lg:px-4 lg:text-base text-neutral-900">
                <li className="list-disc ">
                  Detect issues early, ensure peace of mind.
                </li>
                <li className="list-disc">
                  Best done within 18 to 19 weeks of pregnancy
                </li>
                <li className="list-disc">
                  Assess heart, brain, limb development, and more, leaving no
                  room for uncertainty.
                </li>

                <li className="list-disc">
                  Take proactive steps towards securing your baby&apos;s
                  well-being, and embrace the joy of parenthood with confidence.
                </li>
              </ul>
              <p className="mt-3 text-xs font-medium tracking-normal text-indigo-900 lg:mt-5 lg:tracking-wide lg:text-base">
                Grab this crucial scan without an appointment and enjoy a
                worry-free pregnancy journey.
              </p>
            </div>
          </Carousel>
        ) : (
          <div className="w-full bg-red-500 h-y2"></div>
        )}
      </div>
    </div>
  );
};

export default TestProcedures;
