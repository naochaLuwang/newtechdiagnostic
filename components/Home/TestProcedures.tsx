"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import Link from "next/link";

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
      <p className="w-full max-w-sm mx-auto mt-2 text-sm tracking-wider text-red-500 lg:mx-0 lg:max-w-none lg:text-base md:text-sm">
        Grab the scan without prior appoinment!
      </p>

      <div className="grid grid-cols-1 gap-4 mt-10 lg:gap-6 lg:grid-cols-4">
        <div className="w-full h-48 px-6 py-8 bg-white border shadow-md border-slate-100 rounded-xl">
          <h1 className="text-base font-semibold tracking-wider text-black">
            CONGENITAL ANOMALY SCAN
          </h1>
          <p className="text-xs text-gray-700 line-clamp-2">Done around 18-22 weeks of pregnancy, checks the fetus for any abnormalities. It assesses organs, limbs, brain, spine, and amniotic fluid levels, helping detect issues early and reassure parents about the baby&apos;s health</p>
          <p className="mt-2 text-base font-semibold">
           Rs.3000/-
          </p>
          <div className="flex items-center mt-5 space-x-5">
            <Link href="https://wa.me/7005171909" className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700" >Book Appoinment</Link>
            <p className="text-xs">Know More &gt; &gt;</p>
          </div>
        </div>

        <div className="w-full h-48 px-6 py-8 bg-white border shadow-md border-slate-100 rounded-xl ">
          <h1 className="text-base font-semibold tracking-wider text-black">
            OBS FOETAL DOPPLER
          </h1>
          <p className="text-xs text-gray-800 line-clamp-2">
            Non-invasive ultrasound used to
            monitor fetal heart rate and blood flow, especially in high-risk
            pregnancies. It helps detect any abnormalities early, aiding in
            timely interventions for the fetus&apos;s well-being.
          </p>
           <p className="mt-2 text-base font-semibold">
           Rs.1900/-
          </p>
         <div className="flex items-center mt-5 space-x-5">
            <Link href="https://wa.me/7005171909" className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700" >Book Appoinment</Link>
            <p className="text-xs">Know More &gt; &gt;</p>
          </div>

        </div>

        <div className="w-full h-48 px-6 py-8 bg-white border shadow-md border-slate-100 rounded-xl ">
          <h1 className="text-base font-semibold tracking-wider text-black">
            WHOLE SPINE SCANOGRAM
          </h1>
          <p className="text-xs text-gray-800 line-clamp-2">
            Discover your spine&apos;s health with a whole spine scanogram. This
            diagnostic X-ray assesses the entire spinal column for fractures,
            alignment issues, and degenerative changes. It&apos;s a safe and
            effective tool for diagnosing and managing spinal conditions.
          </p>
          <p className="mt-2 text-base font-semibold">
           Rs.1500/-
          </p>
          <div className="flex items-center mt-5 space-x-5">
            <Link href="https://wa.me/7005171909" className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700" >Book Appoinment</Link>
            <p className="text-xs">Know More &gt; &gt;</p>
          </div>
        </div>

        {/* <div className="flex flex-col w-full h-48 px-6 py-8 bg-white border shadow-md border-slate-100 rounded-xl">
          <h1 className="text-base font-semibold tracking-wider text-blue-800">
            ECHOCARDIOGRAPHY
          </h1>
          <p className="text-xs line-clamp-2">
            Explore your heart&apos;s health with echocardiography. This
            non-invasive ultrasound imaging technique provides detailed insights
            into your heart&apos;s structure, function, and blood flow.
            It&apos;s a safe and essential tool for diagnosing heart conditions
            and guiding treatment plans.
          </p>

          <p className="mt-2 text-base font-semibold">
           Rs.2000/-
          </p>
          <div className="mt-5">
            <Link href="https://wa.me/8132043928" className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700" >Book Appoinment</Link>
          </div>
        </div> */}

         <div className="w-full h-48 px-6 py-8 bg-white border shadow-md border-slate-100 rounded-xl ">
          <h1 className="text-base font-semibold tracking-wider text-black">
            ECHOCARDIOGRAPHY
          </h1>
          <p className="text-xs text-gray-800 line-clamp-2">
            Explore your heart&apos;s health with echocardiography. This
            non-invasive ultrasound imaging technique provides detailed insights
            into your heart&apos;s structure, function, and blood flow.
            It&apos;s a safe and essential tool for diagnosing heart conditions
            and guiding treatment plans.
          </p>
          <p className="mt-2 text-base font-semibold">
           Rs.2000/-
          </p>
          <div className="flex items-center mt-5 space-x-5">
            <Link href="https://wa.me/7005171909" className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700" >Book Appoinment</Link>
            <p className="text-xs">Know More &gt; &gt;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestProcedures;
