"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
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

const HomeCarousal = () => {
  return (
    <div className="w-full h-[28rem] relative ">
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
        <div className="flex justify-between w-full h-full px-20 ">
          <div className="flex flex-col py-20">
            <h1 className="text-4xl font-medium leading-relaxed text-neutral-600">
              <span className="text-indigo-800">
                Experience Precise Diagnosis
              </span>{" "}
              <br /> With Cutting-edge Equipment.{" "}
            </h1>
            <p className="mt-2 text-lg leading-relaxed">
              Introducing the Voulson E10 Ultrasound Machine - First in North
              East India. <br /> Experience Accurate Diagnosis Today!
            </p>
          </div>

          <div className="h-[28rem] py-5 ">
            <div className="absolute w-[50rem] h-[50rem] z-0 -top-32 -right-0 bg-blue-200 bg-opacity-20 rounded-l-full"></div>
            <div className="relative w-96 h-[25rem] ">
              <Image
                src="/icons/volusion.png"
                alt="e10 ultrasound"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full h-full px-20 ">
          <div className="flex flex-col py-20">
            <h1 className="text-4xl font-medium leading-relaxed text-teal-600">
              <span className="text-neutral-700">Discover Comprehensive</span>{" "}
              <br />
              Congenital Anomaly Scan
            </h1>
            <p className="mt-2 text-lg leading-relaxed">
              Comprehensive Level II Ultrasound: Detailed Foetal Evaluation &
              Anomaly Detection. <br /> Reassure Yourself with Early Detection
              of Birth Defects.
            </p>
          </div>

          <div className="h-[30rem] py-5 ">
            {/* <div className="absolute w-[50rem] h-[50rem] z-0 -top-32 -right-0 bg-blue-200 bg-opacity-20 rounded-l-full"></div> */}
            <div className="relative w-[30rem] h-[30rem] ">
              <Image
                src="/icons/pregnant.jpg"
                alt="e10 ultrasound"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HomeCarousal;
