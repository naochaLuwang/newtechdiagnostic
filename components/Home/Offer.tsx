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
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const testOffer = [
  {
    imageUrl: "Sonography.png",
    title: "ULTRASOUND",
  },
  {
    imageUrl: "mammography.png",
    title: "MAMMOGRAPHY",
  },
  {
    imageUrl: "CTS.png",
    title: "CT SCAN",
  },
  {
    imageUrl: "XRAY.png",
    title: "DIGITAL-XRAY",
  },
  {
    imageUrl: "laboratory.png",
    title: "LABORATORY",
  },
];

const Offer = () => {
  return (
    <div className="w-full h-auto py-10 lg:py-20">
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-medium text-center md:text-2xl lg:text-3xl text-neutral-700">
          What We Offer
        </h1>
        <p className="max-w-md px-2 mx-auto mt-5 text-xs text-center lg:px-0 md:text-sm lg:leading-loose lg:text-sm lg:max-w-4xl md:max-w-xl">
          Explore our comprehensive array of radiology services, encompassing
          advanced modalities such as Computed Tomography (CT), Diagnostic
          Radiology (X-Ray), Magnetic Resonance Imaging (MRI), and Ultrasound.
        </p>
        <div className="w-20 h-[2px] mt-2 bg-blue-700"></div>
      </div>
      <div className="flex items-center justify-center w-full h-auto px-8 mt-10 md:px-10 md:ml-5 lg:px-16">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          arrows={false}
          keyBoardControl={true}
        >
          {testOffer.map((test) => (
            <div
              className="flex flex-col items-center justify-center w-64 h-64 ml-5 border-2 border-teal-700 rounded-md lg:w-72 lg:h-72"
              key={test.title}
            >
              <div className="relative w-52 h-52">
                <Image
                  src={`/icons/${test.imageUrl}`}
                  alt={test.imageUrl}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h1 className="font-medium tracking-wide">{test.title}</h1>
            </div>
          ))}

          {/* <div className="flex flex-col items-center justify-center w-64 h-64 ml-5 space-y-2 border-2 border-teal-700 rounded-md lg:w-72 lg:h-72">
            <div className="relative w-48 h-48">
              <Image src="/icons/" alt="Mammography" fill />
            </div>
            <h1 className="font-medium tracking-wide">MAMMOGRAPHY</h1>
          </div>
          <div className="flex flex-col items-center justify-center ml-5 space-y-2 border-2 border-teal-700 rounded-md w-72 h-72">
            <div className="relative w-48 h-48">
              <Image
                src="/icons/"
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
                src="/icons/"
                alt="Laboratory"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h1 className="font-medium tracking-wide">LABORATORY</h1>
          </div> */}
        </Carousel>
      </div>
    </div>
  );
};

export default Offer;
