"use client";

import Image from "next/image";
import Link from "next/link";
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
    items: 3,
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
    link:"/departments/ultrasound"
  },
  {
    imageUrl: "mammography.png",
    title: "MAMMOGRAPHY",
    link:"/departments/ultrasound"
  },
  {
    imageUrl: "CTS.png",
    title: "CT SCAN",
    link:"/departments/ultrasound"
  },
  {
    imageUrl: "XRAY.png",
    title: "DIGITAL-XRAY",
    link:"/departments/ultrasound"
  },
  {
    imageUrl: "laboratory.png",
    title: "LABORATORY",
    link:"/departments/ultrasound"
  },
];

const Offer = () => {
  return (
    <div className="w-full h-auto py-10 lg:py-20">
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-medium md:text-2xl lg:text-3xl text-neutral-700">
          What We Offer
        </h1>
        <p className="max-w-md px-2 mx-auto mt-5 text-xs text-center lg:px-0 md:text-sm lg:leading-loose lg:text-sm lg:max-w-4xl md:max-w-xl">
          Explore our comprehensive array of radiology services, encompassing
          advanced modalities such as Computed Tomography (CT), Diagnostic
          Radiology (X-Ray), Magnetic Resonance Imaging (MRI), and Ultrasound.
        </p>
        <div className="w-20 h-[2px] mt-2 bg-blue-700"></div>
      </div>
      <div className="w-full h-auto px-8 mt-10 ml-5 md:px-10 lg:px-16">
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
            <Link href={test.link}
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
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Offer;
