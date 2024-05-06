import { TabsDemo } from "@/components/UsgServices";
import { XrayServices } from "@/components/XrayServices";
import React from "react";

const XRAY = () => {
  return (
    <div className="w-full h-auto px-8 py-10 lg:px-10 bg-slate-50">
      <div className="flex flex-col space-y-10 lg:space-x-10 lg:flex-row">
        <div className="w-full">
          <h1 className="text-lg font-semibold tracking-wider lg:text-4xl">
            X-RAY DEPARTMENT
          </h1>
          <p className="mt-5 text-base font-light ">
            Welcome to our state-of-the-art x-ray department, where we offer a
            comprehensive range of radiology services using the latest
            technology and equipment. Our highly skilled team of radiologists
            are dedicated to providing accurate diagnostics and exceptional
            patient care.
          </p>

          <p className="mt-5 text-base font-medium text-blue-700 font-lg">
            Whole spine sacanogram availabe without any prior appoinment.
          </p>
        </div>

        <div className="w-full h-full rounded-lg">
          {/* {isLoading && <Skeleton className="w-[60rem] h-full" />} */}
          <video
            className="rounded-lg"
            src="/icons/volusiona.mp4"
            height="100%"
            autoPlay
            muted
            loop
            // onLoadedData={handleLoadedData}
          ></video>
        </div>
      </div>

      <h1 className="mt-10 text-xl lg:text-3xl">WHY CHOOSE US</h1>
      <div className="grid w-full grid-cols-1 gap-8 mt-5 lg:grid-cols-4">
        <div className="flex flex-col space-y-2">
          <h1 className="text-lg">Expertise</h1>
          <p className="text-base font-light ">
            Our team of skilled radiologists and technicians excels in
            conducting X-ray examinations and interpreting results accurately.
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <h1 className="text-lg">Advanced Technology</h1>
          <p className="text-base font-light ">
            We pride ourselves on utilizing the latest advancements in X-ray
            equipment, ensuring top-notch image quality and precise diagnostic
            capabilities.
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <h1 className="text-lg">Patient Comfort</h1>
          <p className="text-base font-light">
            Your comfort matters to us. We strive to create a welcoming and
            relaxed environment during every X-ray procedure, because your peace
            of mind is our priority.
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <h1 className="text-lg">Quick Results</h1>
          <p className="text-base font-light">
            We understand the importance of timely information. That&apos;s why
            we&apos;re dedicated to providing quick turnaround times for all
            X-ray reports, delivering efficiency without compromising accuracy.
          </p>
        </div>
      </div>

      {/* <div className="w-full">
        <HoverEffect items={projects} />
      </div> */}

      <h1 className="mt-20 text-3xl">OUR SERVICES</h1>
      <XrayServices />

      <h1 className="text-3xl font-medium tracking-wider -mt-14">
        Schedule an Appointment
      </h1>

      <p className="mt-3">
        To schedule an ultrasound appointment or learn more about our ultrasound
        services, please contact us at{" "}
        <span className="text-lg font-bold tracking-wider">7005171909</span>.
      </p>
    </div>
  );
};

export default XRAY;
