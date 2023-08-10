"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import HomeCarousalButton from "./HomeCarousalButton";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const HomeCarousal = () => {
  const [loading, setLoading] = useState(true);

  const [isMounted, setIsMounted] = useState(false);

  // This is a side effect that runs after the first render and sets the isMounted state to true

  useEffect(() => {
    if (!Carousel) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [loading]);

  const [isLoading, setIsLoading] = useState(true);

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative w-full lg:h-auto h-80">
      {!loading ? (
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={10000}
          arrows={false}
          customButtonGroup={<HomeCarousalButton />}
          renderButtonGroupOutside={true}
        >
          <div className="flex w-full h-full pt-10">
            <div className="flex flex-col flex-shrink-0 px-16 py-12">
              <h1 className="text-lg font-medium md:text-2xl lg:leading-relaxed lg:text-4xl text-neutral-600">
                <span className="text-indigo-800">
                  Experience Precise Diagnosis
                </span>{" "}
                <br /> With Cutting-edge Equipment.{" "}
              </h1>
              <p className="mt-2 text-xs leading-relaxed md:text-base lg:text-lg">
                Introducing the Voulson E10 B21 Ultrasound Machine <br /> First
                in North East India. <br /> Experience Accurate Diagnosis Today!
              </p>
            </div>
            <div className="w-[60rem] h-full rounded-lg">
              {isLoading && <Skeleton className="w-[60rem] h-full" />}
              <video
                className="rounded-lg"
                src="/icons/volusiona.mp4"
                height="100%"
                autoPlay
                muted
                loop
                onLoadedData={handleLoadedData}
              ></video>
            </div>
          </div>
          <div className="flex justify-between w-full h-full ">
            <div className="flex flex-col justify-center flex-shrink-0 h-full pl-16">
              <h1 className="text-base font-medium text-teal-600 lg:leading-relaxed lg:text-4xl md:text-2xl">
                <span className="text-neutral-700">Discover Comprehensive</span>{" "}
                <br />
                Congenital Anomaly Scan
              </h1>
              <p className="mt-2 text-xs leading-relaxed lg:text-lg md:text-base">
                Comprehensive Level II Ultrasound: Detailed Foetal Evaluation &
                Anomaly Detection. <br /> Reassure Yourself with Early Detection
                of Birth Defects.
              </p>
            </div>
            <div className="relative  lg:w-[28rem] lg:h-[400px] w-40 h-40 md:w-56 md:h-56">
              <Image
                className="rounded-l-lg"
                src="/icons/volutron.jpeg"
                alt="e10 ultrasound"
                fill
                style={{ objectFit: "fill" }}
                priority={true}
              />
            </div>
          </div>
        </Carousel>
      ) : (
        <div className="flex w-full h-full pt-10 pb-5">
          <div className="flex flex-col flex-shrink-0 px-16 py-12">
            <Skeleton className="w-[500px] h-[40px] rounded-md" />
            <Skeleton className="w-[500px] h-[40px] mt-5 rounded-md" />
            <Skeleton className="w-[400px] h-[30px] mt-5 rounded-md  " />
            <Skeleton className="w-[400px] h-[30px] mt-5 rounded-md  " />
          </div>

          <Skeleton className="w-[55rem] h-80 rounded-xl" />
        </div>
      )}
    </div>
  );
};

export default HomeCarousal;
