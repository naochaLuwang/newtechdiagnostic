import ClientsTestimonial from "@/components/ClientsTestimonial";
import ContactDetail from "@/components/ContactDetail";
import Image from "next/image";

export const metadata = {
  title: "About | NewTech Diagnostics",
};

const chooses = [
  {
    title: "High Quality Lab",
    description:
      "NewTech Diagnostics Centre has a NABL-certified Lab with modern equipment for fast and accurate results",
  },

  {
    title: "Precise Result",
    description:
      "Our State of Art Equipment and modern facility always provide the most accurate results.",
  },
  {
    title: "Qualified Staff",
    description:
      "Our Highly Qualified Staff and Team of Doctors make NewTech Diagnostics Centre one of the best in Imphal.",
  },
];

const AboutPage = () => {
  return (
    <div className="w-full h-auto lg:py-16 bg-neutral-100">
      <div className="flex flex-col mx-auto max-w-7xl">
        <h1 className="text-6xl font-semibold text-neutral-700">ABOUT US</h1>
        <div className="grid w-full grid-cols-2 gap-10 pb-20 mt-5">
          <div className="flex flex-col space-y-5">
            <p className="text-lg font-light leading-relaxed tracking-wider text-justify text-neutral-700">
              <span className="text-teal-600 ">NEW</span>
              <span className="text-orange-600 ">TECH</span> is among the best
              medical diagnostic centre in Imphal. We are situated at Ayangpalli
              Road near JNIMS Gate, Imphal. We are a NABL-accredited Medical
              Testing Lab. We maintain the highest standards of the Testing
              procedure with a dedicated team of highly qualified radiologists,
              pathologists, and technicians, and we are equipped with
              state-of-the-art, innovative machines to ensure precision and
              efficiency in our diagnostic processes.
            </p>
            <p className="text-lg font-light leading-relaxed tracking-wider text-justify text-neutral-700">
              At <span className="text-teal-600 ">NEW</span>
              <span className="text-orange-600 ">TECH</span> Diagnostics, we
              have We believe in a Patient-Centric Approach and hence our
              Diagnostics Centre is ergonomically designed keeping in mind
              patient comfort.
            </p>
            <h1 className="text-5xl font-semibold leading-normal">
              We Employ Latest Research Technology & Company
            </h1>
            <p className="text-lg leading-relaxed">
              NewTech Diagnostics Centre is NABL Accredited Medical Lab. Our
              Medical testing is equipped with the most modern diagnosis
              machines and facilities.
            </p>
            <p className="text-lg font-light leading-loose text-justify text-neutral-700">
              We cover a very wide range of tests including Blood tests, CBC
              test, Hemoglobin, Platelet Count, Creatinine, TSH Test,
              Triglycerides, Uric Acid, Lipid Profile Test, Liver Function, ECG
              test, NAAT, Radiology, Sonography, Ultrasound and many more.
            </p>

            <div className="flex space-x-5">
              <div className="flex items-center space-x-3">
                <div className="relative w-14 h-14">
                  <Image src={"/icons/labicon.png"} alt="Lab icon" fill />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-3xl font-semibold">500+</h1>
                  <p className="text-sm">Complete Cases</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col">
                  <h1 className="text-2xl font-semibold">20+</h1>
                  <p className="text-sm">Expert Staff</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto space-y-5">
        <h1 className="text-5xl font-medium">Why Choose Us</h1>
        <p className="text-base font-light text-center">
          NewTech Diagnostics Centre Imphal is known for its Premium Quality and
          Best Patient Experience. Our Medical Diagnostics and Testing Lab is
          NABL accredited and is equipped with Modern Facilities and well
          Qualified Staff.
        </p>
      </div>

      <div className="grid w-full max-w-6xl grid-cols-3 gap-6 mx-auto mt-20">
        {chooses.map((choose, index) => (
          <div className="flex flex-col space-y-3" key={index}>
            <div className="flex items-center justify-center w-20 h-20 bg-teal-700 rounded-full">
              <div className="relative w-14 h-14">
                <Image src="/icons/labiconwhite.png" fill alt="lab icon" />
              </div>
            </div>
            <h1 className="text-xl font-medium">{choose.title}</h1>
            <p className="font-light leading-loose">{choose.description}</p>
          </div>
        ))}
      </div>
      <ClientsTestimonial />

      <div className="flex flex-col max-w-3xl mx-auto mt-20 space-y-5 text-center">
        <h1 className="text-5xl font-medium">Get one step ahead of disease</h1>
        <p className="text-lg font-light">
          Diagnosis is the first step for any medical treatment. Get the best
          Diagnostic Services in Imphal with NewTech Diagnostic Centre. Visit us
          today!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
