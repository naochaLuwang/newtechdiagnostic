import ClientsTestimonial from "@/components/ClientsTestimonial";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image from "next/image";

export const metadata = {
  title: "About | NewTech Diagnostics",
};

const testimonials = [
  {
    quote: "It was the best of times, it was the worst of times, it was the age of wisdom...",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer...",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote: "It is a truth universally acknowledged, that a single man in possession of a good fortune...",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote: "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money...",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

const chooses = [
  {
    title: "High Quality Lab",
    description: "NewTech Diagnostics Centre has a NABL-certified Lab with modern equipment for fast and accurate results.",
  },
  {
    title: "Precise Result",
    description: "Our State of Art Equipment and modern facility always provide the most accurate results.",
  },
  {
    title: "Qualified Staff",
    description: "Our Highly Qualified Staff and Team of Doctors make NewTech Diagnostics Centre one of the best in Imphal.",
  },
];

const AboutPage = () => {
  return (
    <div className="w-full h-auto px-4 py-8 lg:py-16 lg:px-0 bg-neutral-100">
      <div className="flex flex-col w-full lg:mx-auto lg:max-w-7xl lg:flex-row lg:gap-10">
        <div className="flex flex-col space-y-5 lg:w-1/2">
          <h1 className="text-3xl font-semibold lg:text-6xl text-neutral-700">ABOUT US</h1>
          <p className="text-base font-light leading-relaxed tracking-wider text-justify lg:text-lg text-neutral-700">
            <span className="font-medium tracking-wider text-teal-600">NEW</span>
            <span className="font-medium tracking-wider text-orange-600">TECH</span> is among the best medical diagnostic centre in Imphal. We are situated at Ayangpalli Road near JNIMS Gate, Imphal. We maintain the highest standards of the Testing procedure with a dedicated team of highly qualified radiologists, pathologists, and technicians, and we are equipped with state-of-the-art, innovative machines to ensure precision and efficiency in our diagnostic processes.
          </p>
          <p className="text-lg font-light leading-relaxed tracking-wider text-justify text-neutral-700">
            At{" "}
            <span className="font-medium tracking-wider text-teal-600">NEW</span>
            <span className="font-medium tracking-wider text-orange-600">TECH</span>{" "}
            Diagnostics, we believe in a Patient-Centric Approach and hence our Diagnostics Centre is ergonomically designed keeping in mind patient comfort.
          </p>
          <h1 className="text-3xl font-semibold lg:leading-relaxed lg:text-5xl">
            We Employ Latest Research Technology & Company
          </h1>
          <p className="text-base leading-relaxed lg:text-lg">
            NewTech Diagnostics Centre is equipped with the most modern diagnosis machines and facilities.
          </p>
          <p className="text-base font-light leading-loose text-justify lg:text-lg text-neutral-700">
            We cover a very wide range of tests including Blood tests, CBC test, Hemoglobin, Platelet Count, Creatinine, TSH Test, Triglycerides, Uric Acid, Lipid Profile Test, Liver Function, ECG test, NAAT, Radiology, Sonography, Ultrasound and many more.
          </p>

          <div className="flex space-x-3 lg:space-x-5">
            <div className="flex items-center space-x-3">
              <div className="relative w-14 h-14">
                <Image src={"/icons/labicon.png"} alt="Lab icon" fill />
              </div>
              <div className="flex flex-col space-y-2">
                <h1 className="text-3xl font-semibold">10000+</h1>
                <p className="text-base tracking-wide">Complete Cases</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="relative w-14 h-14">
                <Image src={"/icons/labtech.png"} alt="Lab icon" fill />
              </div>
              <div className="flex flex-col space-y-2">
                <h1 className="text-3xl font-semibold">30+</h1>
                <p className="text-base tracking-wide">Expert Staff</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-center mt-5 lg:w-[900px] lg:mt-0">
          <Image src="/org/about.jpeg" alt="About NewTech Diagnostics" width={600} height={400} className="object-cover rounded-md" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full mx-auto mt-10 space-y-5 lg:max-w-2xl">
        <h1 className="text-3xl font-medium lg:text-5xl">Why Choose Us?</h1>
        <p className="text-sm font-light text-center lg:text-base">
          NewTech Diagnostics Centre Imphal is known for its Premium Quality and Best Patient Experience. Our Medical Diagnostics and Testing Lab is equipped with Modern Facilities and well Qualified Staff.
        </p>
      </div>

      <div className="grid w-full max-w-6xl grid-cols-1 mx-auto mt-20 lg:gap-6 gap-9 lg:grid-cols-3">
        {chooses.map((choose, index) => (
          <div className="flex flex-col items-center space-y-3 lg:items-start" key={index}>
            <div className="flex items-center justify-center w-20 h-20 bg-teal-700 rounded-full">
              <div className="relative w-10 h-10">
                <Image src="/icons/labiconwhite.png" fill alt="lab icon" />
              </div>
            </div>
            <h1 className="text-xl font-medium">{choose.title}</h1>
            <p className="font-light leading-loose text-center lg:text-left">{choose.description}</p>
          </div>
        ))}
      </div>

      <ClientsTestimonial />

      <div className="h-[20rem] rounded-md flex flex-col antialiased bg-slate-100 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      </div>

      <div className="flex flex-col max-w-3xl mx-auto mt-20 space-y-5 text-center">
        <h1 className="text-5xl font-medium">Get one step ahead of disease</h1>
        <p className="text-lg font-light">
          Diagnosis is the first step for any medical treatment. Get the best Diagnostic Services in Imphal with NewTech Diagnostic Centre. Visit us today!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
