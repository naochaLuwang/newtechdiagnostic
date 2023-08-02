"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Offer = () => {
  return (
    <div className="w-full h-auto py-20">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-medium text-center text-neutral-700">
          What We Offer
        </h1>
        <p className="max-w-4xl mx-auto mt-5 text-sm leading-loose text-center">
          Explore our comprehensive array of radiology services, encompassing
          advanced modalities such as Computed Tomography (CT), Diagnostic
          Radiology (X-Ray), Magnetic Resonance Imaging (MRI), and Ultrasound.
        </p>
        <div className="w-20 h-[2px] mt-2 bg-blue-700"></div>
      </div>
      <div className="w-full h-auto mx-auto mt-10 max-w-7xl">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={7000}
          arrows={false}
          keyBoardControl={true}
        >
          <div className="flex flex-col items-center justify-center ml-5 border-2 border-teal-700 rounded-md w-72 h-72">
            <div className="relative w-52 h-52">
              <Image
                src="/icons/sonography.png"
                alt="Mammography"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h1 className="font-medium tracking-wide">ULTRASOUND</h1>
          </div>
          <div className="flex flex-col items-center justify-center ml-5 space-y-2 border-2 border-teal-700 rounded-md w-72 h-72">
            <div className="relative w-48 h-48">
              <Image src="/icons/mammography.png" alt="Mammography" fill />
            </div>
            <h1 className="font-medium tracking-wide">MAMMOGRAPHY</h1>
          </div>
          <div className="flex flex-col items-center justify-center ml-5 space-y-2 border-2 border-teal-700 rounded-md w-72 h-72">
            <div className="relative w-48 h-48">
              <Image
                src="/icons/CTS.png"
                alt="Mammography"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h1 className="font-medium tracking-wide">CT SCAN</h1>
          </div>
          <div className="flex flex-col items-center justify-center ml-5 space-y-2 border-2 border-teal-700 rounded-md w-72 h-72">
            <div className="relative w-48 h-48">
              <Image
                src="/icons/XRAY.png"
                alt="xray"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h1 className="font-medium tracking-wide">DIGITAL X-RAY</h1>
          </div>

          <div className="flex flex-col items-center justify-center ml-5 space-y-2 border-2 border-teal-700 rounded-md w-72 h-72">
            <div className="relative w-48 h-48">
              <Image
                src="/icons/laboratory.png"
                alt="Laboratory"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h1 className="font-medium tracking-wide">LABORATORY</h1>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Offer;
