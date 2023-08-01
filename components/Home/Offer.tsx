"use client";

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
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={10000}
          arrows={false}
          keyBoardControl={true}
          //   customTransition="all .5"
          //   transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="flex flex-col items-center justify-center ml-5 border-2 border-teal-700 rounded-md w-72 h-72">
            Item 1
          </div>
          <div className="flex flex-col items-center justify-center ml-5 border-2 border-teal-700 rounded-md w-72 h-72">
            Item 2
          </div>
          <div className="flex flex-col items-center justify-center ml-5 border-2 border-teal-700 rounded-md w-72 h-72">
            Item 3
          </div>
          <div className="flex flex-col items-center justify-center ml-5 border-2 border-teal-700 rounded-md w-72 h-72">
            Item 4
          </div>
          <div className="flex flex-col items-center justify-center ml-5 border-2 border-teal-700 rounded-md w-72 h-72">
            Item 5
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Offer;
