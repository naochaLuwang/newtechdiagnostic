import Image from "next/image";
import React from "react";

/**
 * Renders a section with statistics about a diagnostic center.
 */
const Statistics: React.FC = () => {
  return (
    <div className="relative z-20 w-full h-auto py-10 bg-teal-600 lg:py-20 ">
      <h1 className="text-white lg:px-16">Why People Trust Us</h1>
      <div className="grid w-full grid-cols-1 gap-6 px-4 text-white lg:px-16 lg:grid-cols-3 md:px-8">
        <div className="flex items-start space-x-2">
          <div className="flex items-center justify-center flex-shrink-0 bg-white rounded-full lg:w-20 lg:h-20 w-14 h-14 bg-opacity-80">
            <div className="relative w-8 h-8 lg:w-12 lg:h-12">
              <Image
                src="/icons/shield.png"
                alt="Shield icon"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="flex flex-col pr-4 space-y-2 lg:pr-0">
            <p className="text-base font-medium lg:text-lg md:text-lg">
              Advanced Equipment and Modern Infrastructure
            </p>
            <p className="text-sm leading-relaxed tracking-tight text-justify lg:tracking-wider lg:text-start">
              Our diagnostic center is equipped with state-of-the-art, fully
              automated systems, showcasing the latest technological
              advancements from renowned brands ensuring seamless and efficient
              operations, enabling us to deliver accurate and reliable results
              to our valued customers.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <div className="flex items-center justify-center flex-shrink-0 bg-white rounded-full lg:w-20 lg:h-20 w-14 h-14 bg-opacity-80">
            <div className="relative w-8 h-8 lg:w-12 lg:h-12">
              <Image
                src="/icons/trust.png"
                alt="Shield icon"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="flex flex-col pr-4 space-y-5 lg:pr-0">
            <p className="text-base font-medium lg:text-lg md:text-lg">
              Our Commitment to Excellence
            </p>
            <p className="text-sm leading-relaxed tracking-tight text-justify lg:tracking-wider lg:text-start">
              We prioritize excellence by leveraging our expertise, experience,
              and advanced instruments to implement rigorous quality assurance
              measures. Through continuous monitoring and improvement, we
              deliver accurate and reliable results, earning the trust of our
              valued customers as a leading diagnostic service provider.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <div className="flex items-center justify-center flex-shrink-0 bg-white rounded-full lg:w-20 lg:h-20 w-14 h-14 bg-opacity-80">
            <div className="relative w-8 h-8 lg:w-12 lg:h-12">
              <Image
                src="/icons/shield.png"
                alt="Shield icon"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="flex flex-col pr-4 space-y-2 lg:pr-0">
            <p className="text-base font-medium lg:text-lg md:text-lg">
              Professional Team and Personalized Care
            </p>
            <p className="text-sm leading-relaxed tracking-tight text-justify lg:tracking-wider lg:text-start ">
              Our highly skilled and licensed laboratory technicians,
              pathologists, and radiologists are here to provide personalized
              care and support throughout your healthcare journey. With their
              expertise and compassion, you can trust that your well-being is
              our priority.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
