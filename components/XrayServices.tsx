"use client";

import { Tabs } from "@/components/ui/tabs";

export function XrayServices() {
  const tabs = [
    {
      title: "General Ultrasound",
      value: "genultrasound",
      content: (
        <div className="relative w-full p-10 overflow-hidden text-xl font-bold text-white h-96 rounded-2xl md:text-4xl bg-gradient-to-br from-purple-700 to-violet-900">
          <p>General Ultrasound</p>
          <p className="mt-5 text-base font-medium tracking-wider">
            We offer general ultrasound scans to examine various organs in the
            body, including the abdomen, pelvis, and thyroid.
          </p>
          <p className="mt-6 text-base font-semibold tracking-wider">Popular</p>
          <div className="grid grid-cols-4 gap-6 mt-5 text-base font-medium tracking-wide">
            <p>USG WHOLE ABDOMEN</p>
            <p>USG UPPER ABDOMEN</p>
            <p>USG LOWER ABDOMEN</p>
            <p>USG LIVER</p>
            <p>USG PANCREAS</p>
            <p>USG KIDNEYS</p>
            <p>USG GALL BLADDER</p>
            <p>USG NECK</p>
            <p>USG THYROID</p>
            <p>USG KUB</p>
            <p>USG PELVIC</p>
            <p>USG SCROTUM</p>
          </div>
        </div>
      ),
    },
    {
      title: "Obstetric Ultrasound",
      value: "obsultrasound",
      content: (
        <div className="relative w-full p-10 overflow-hidden text-xl font-bold text-white h-96 rounded-2xl md:text-4xl bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Obstetric Ultrasound</p>
          <p className="mt-5 text-base font-medium tracking-wider">
            Our obstetric ultrasound services provide detailed images of the
            developing fetus, ensuring the health and well-being of both mother
            and baby.
          </p>
          <p className="mt-6 text-base font-semibold tracking-wider">Popular</p>
          <div className="grid grid-cols-4 gap-6 mt-5 text-base font-medium tracking-wide">
            <p>USG WHOLE ABDOMEN</p>
            <p>USG UPPER ABDOMEN</p>
            <p>usg LOWER ABDOMEN</p>
            <p>USG LIVER</p>
            <p>USG PANCREAS</p>
            <p>USG KIDNEYS</p>
            <p>USG GALL BLADDER</p>
            <p>USG NECK</p>
            <p>USG THYROID</p>
            <p>USG KUB</p>
            <p>USG PELVIC</p>
            <p>USG SCROTUM</p>
          </div>
        </div>
      ),
    },
    {
      title: "Vascular Ultrasound",
      value: "vasultrasound",
      content: (
        <div className="relative w-full p-10 overflow-hidden text-xl font-bold text-white h-96 rounded-2xl md:text-4xl bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Vascular Ultrasound</p>
          <p className="mt-5 text-base font-medium tracking-wider">
            Our vascular ultrasound scans help diagnose and monitor conditions
            affecting the blood vessels, such as blood clots and arterial
            blockages.
          </p>
          <p className="mt-6 text-base font-semibold tracking-wider">Popular</p>
          <div className="grid grid-cols-4 gap-6 mt-5 text-base font-medium tracking-wide">
            <p>USG WHOLE ABDOMEN</p>
            <p>USG UPPER ABDOMEN</p>
            <p>usg LOWER ABDOMEN</p>
            <p>USG LIVER</p>
            <p>USG PANCREAS</p>
            <p>USG KIDNEYS</p>
            <p>USG GALL BLADDER</p>
            <p>USG NECK</p>
            <p>USG THYROID</p>
            <p>USG KUB</p>
            <p>USG PELVIC</p>
            <p>USG SCROTUM</p>
          </div>
        </div>
      ),
    },
    {
      title: "Musculoskeletal Ultrasound",
      value: "musculoskeletalultrasound",
      content: (
        <div className="relative w-full p-10 overflow-hidden text-xl font-bold text-white h-96 rounded-2xl md:text-4xl bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Musculoskeletal Ultrasound</p>
          <p className="mt-5 text-base font-medium tracking-wider">
            We provide musculoskeletal ultrasound scans to assess injuries and
            conditions affecting the muscles, joints, and soft tissues.
          </p>
          <p className="mt-6 text-base font-semibold tracking-wider">Popular</p>
          <div className="grid grid-cols-4 gap-6 mt-5 text-base font-medium tracking-wide">
            <p>USG WHOLE ABDOMEN</p>
            <p>USG UPPER ABDOMEN</p>
            <p>usg LOWER ABDOMEN</p>
            <p>USG LIVER</p>
            <p>USG PANCREAS</p>
            <p>USG KIDNEYS</p>
            <p>USG GALL BLADDER</p>
            <p>USG NECK</p>
            <p>USG THYROID</p>
            <p>USG KUB</p>
            <p>USG PELVIC</p>
            <p>USG SCROTUM</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-full mx-auto w-full  items-start justify-start my-10">
      <Tabs tabs={tabs} />
    </div>
  );
}
