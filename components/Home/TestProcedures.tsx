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
    <div className="w-full h-auto px-8 py-10 lg:px-16 lg:py-20 bg-slate-50">
      <h1 className="text-lg font-medium lg:text-3xl text-neutral-700 md:text-xl">
        Popular Test Procedures
      </h1>
      <p className="w-full max-w-sm mx-auto mt-2 text-sm text-red-500 lg:mx-0 lg:max-w-none lg:text-base md:text-sm">
        Grab the scan without prior appoinment!
      </p>

      <div className="grid grid-cols-1 gap-4 mt-10 lg:gap-6 lg:grid-cols-4">
        <div className="w-full h-48 px-6 py-8 bg-white border shadow-md border-slate-100 rounded-xl">
          <h1 className="text-base font-semibold tracking-wider text-blue-800">
            CONGENITAL ANOMALY SCAN
          </h1>
          <p className="mt-2 text-xs">
            Done around 18-22 weeks of pregnancy, checks the fetus for any
            abnormalities. It assesses organs, limbs, brain, spine, and amniotic
            fluid levels, helping detect issues early and reassure parents about
            the baby&apos;s health
          </p>
        </div>

        <div className="w-full h-48 px-6 py-8 bg-white border shadow-md border-slate-100 rounded-xl ">
          <h1 className="text-base font-semibold tracking-wider text-blue-800">
            OBS FOETAL DOPPLER
          </h1>
          <p className="mt-2 text-xs">
            The Obstetric Doppler (OBS) is a non-invasive ultrasound used to
            monitor fetal heart rate and blood flow, especially in high-risk
            pregnancies. It helps detect any abnormalities early, aiding in
            timely interventions for the fetus&apos;s well-being.
          </p>
        </div>

        <div className="w-full h-40 px-6 py-8 bg-white border shadow-md border-slate-100 rounded-xl ">
          <h1 className="text-base font-semibold tracking-wider text-blue-800">
            OBS FOETAL DOPPLER
          </h1>
          <p>Fasting Not required</p>
          <p>Done at 20 weeks</p>
        </div>

        <div className="flex flex-col w-full h-40 px-6 py-8 space-y-2 bg-white border shadow-md border-slate-100 rounded-xl">
          <h1 className="text-base font-semibold tracking-wider text-blue-800">
            WHOLE SPINE SCANOGRAM
          </h1>
          <p>Department:</p>
          <p>X-RAY</p>
        </div>
      </div>
    </div>
  );
};

export default TestProcedures;
