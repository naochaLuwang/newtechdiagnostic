"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarousalButton from "../CarousalButton";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Disorder = () => {
  return (
    <div className="w-full h-auto py-10 lg:py-20">
      <h1 className="text-lg font-medium text-center lg:text-3xl text-neutral-700 md:text-2xl">
        Organ Disorder Test
      </h1>
      <p className="w-full max-w-sm px-4 mx-auto mt-3 text-xs leading-loose tracking-wider text-center lg:px-0 lg:text-sm lg:max-w-4xl md:max-w-xl">
        Discover organ disorder tests for early detection. Advanced diagnostics,
        precise results, and expert care for your well-being. Schedule now.
      </p>

      <div className="relative w-full h-auto px-0 mt-10 ml-0 lg:ml-10 lg:px-28 lg:mt-20 md:px-10 md:ml-5">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          arrows={false}
          customButtonGroup={<CarousalButton />}
          renderButtonGroupOutside={true}
          keyBoardControl={true}
        >
          <div className="flex flex-col items-center justify-center space-y-2 lg:w-32 lg:h-32 w-28 h-28">
            <div className="flex items-center justify-center w-20 h-20 bg-blue-200 rounded-full lg:w-24 lg:h-24 bg-opacity-40">
              <div className="relative w-12 h-12 lg:w-16 lg:h-16">
                <Image src={"/icons/brain.png"} alt="brain" fill />
              </div>
            </div>
            <p className="font-medium text-neutral-800">BRAIN</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 lg:w-32 lg:h-32 w-28 h-28">
            <div className="flex items-center justify-center w-20 h-20 bg-blue-200 rounded-full lg:w-24 lg:h-24 bg-opacity-40">
              <div className="relative w-12 h-12 lg:w-16 lg:h-16">
                <Image
                  src={"/icons/heart.png"}
                  alt="brain"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
            <p className="font-medium text-neutral-800">HEART</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 lg:w-32 lg:h-32 w-28 h-28">
            <div className="flex items-center justify-center w-20 h-20 bg-blue-200 rounded-full lg:w-24 lg:h-24 bg-opacity-40">
              <div className="relative w-12 h-12 lg:w-16 lg:h-16">
                <Image src={"/icons/liver.png"} alt="brain" fill />
              </div>
            </div>
            <p className="font-medium text-neutral-800">LIVER</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 lg:w-32 lg:h-32 w-28 h-28">
            <div className="flex items-center justify-center w-20 h-20 bg-blue-200 rounded-full lg:w-24 lg:h-24 bg-opacity-40">
              <div className="relative w-12 h-12 lg:w-16 lg:h-16">
                <Image src={"/icons/kidney.png"} alt="brain" fill />
              </div>
            </div>
            <p className="font-medium text-neutral-800">KIDNEY</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 lg:w-32 lg:h-32 w-28 h-28">
            <div className="flex items-center justify-center w-20 h-20 bg-blue-200 rounded-full lg:w-24 lg:h-24 bg-opacity-40">
              <div className="relative w-12 h-12 lg:w-16 lg:h-16">
                <Image src={"/icons/stomach.png"} alt="brain" fill />
              </div>
            </div>
            <p className="font-medium text-neutral-800">STOMACH</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 lg:w-32 lg:h-32 w-28 h-28">
            <div className="flex items-center justify-center w-20 h-20 bg-blue-200 rounded-full lg:w-24 lg:h-24 bg-opacity-40">
              <div className="relative w-12 h-12 lg:w-16 lg:h-16">
                <Image src={"/icons/lungs.png"} alt="brain" fill />
              </div>
            </div>
            <p className="font-medium text-neutral-800">LUNGS</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 lg:w-32 lg:h-32 w-28 h-28">
            <div className="flex items-center justify-center w-20 h-20 bg-blue-200 rounded-full lg:w-24 lg:h-24 bg-opacity-40">
              <div className="relative w-12 h-12 lg:w-16 lg:h-16">
                <Image src={"/icons/bones.png"} alt="brain" fill />
              </div>
            </div>
            <p className="font-medium text-neutral-800">BONES</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Disorder;
