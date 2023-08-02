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
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Disorder = () => {
  return (
    <div className="w-full h-auto py-20">
      <h1 className="text-3xl font-medium text-center text-neutral-700">
        Organ Disorder Test
      </h1>
      <p className="w-full max-w-4xl mx-auto mt-3 text-sm leading-loose tracking-wider text-center">
        Discover organ disorder tests for early detection. Advanced diagnostics,
        precise results, and expert care for your well-being. Schedule now.
      </p>

      <div className="relative w-full h-auto max-w-6xl pl-10 mx-auto mt-20">
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
          <div className="flex flex-col items-center justify-center w-32 h-32 space-y-2">
            <div className="flex items-center justify-center w-24 h-24 bg-blue-200 rounded-full bg-opacity-40">
              <div className="relative w-16 h-16">
                <Image src={"/icons/brain.png"} alt="brain" fill />
              </div>
            </div>
            <p className="font-medium text-neutral-800">BRAIN</p>
          </div>
          <div className="flex flex-col items-center justify-center w-32 h-32 space-y-2">
            <div className="flex items-center justify-center w-24 h-24 bg-blue-200 rounded-full bg-opacity-40">
              <div className="relative w-16 h-16">
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
          <div className="flex flex-col items-center justify-center w-32 h-32 space-y-2">
            <div className="flex items-center justify-center w-24 h-24 bg-blue-200 rounded-full bg-opacity-40">
              <div className="relative w-16 h-16">
                <Image src={"/icons/liver.png"} alt="brain" fill />
              </div>
            </div>
            <p className="font-medium text-neutral-800">LIVER</p>
          </div>
          <div className="flex flex-col items-center justify-center w-32 h-32 space-y-2">
            <div className="flex items-center justify-center w-24 h-24 bg-blue-200 rounded-full bg-opacity-40">
              <div className="relative w-16 h-16">
                <Image src={"/icons/kidney.png"} alt="brain" fill />
              </div>
            </div>
            <p className="font-medium text-neutral-800">KIDNEY</p>
          </div>
          <div className="flex flex-col items-center justify-center w-32 h-32 space-y-2">
            <div className="flex items-center justify-center w-24 h-24 bg-blue-200 rounded-full bg-opacity-40">
              <div className="relative w-16 h-16">
                <Image src={"/icons/stomach.png"} alt="brain" fill />
              </div>
            </div>
            <p className="font-medium text-neutral-800">STOMACH</p>
          </div>
          <div className="flex flex-col items-center justify-center w-32 h-32 space-y-2">
            <div className="flex items-center justify-center w-24 h-24 bg-blue-200 rounded-full bg-opacity-40">
              <div className="relative w-16 h-16">
                <Image src={"/icons/lungs.png"} alt="brain" fill />
              </div>
            </div>
            <p className="font-medium text-neutral-800">LUNGS</p>
          </div>
          <div className="flex flex-col items-center justify-center w-32 h-32 space-y-2">
            <div className="flex items-center justify-center w-24 h-24 bg-blue-200 rounded-full bg-opacity-40">
              <div className="relative w-16 h-16">
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
