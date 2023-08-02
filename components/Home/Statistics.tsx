import Image from "next/image";
import React from "react";

/**
 * Renders a section with statistics about a diagnostic center.
 */
const Statistics: React.FC = () => {
  return (
    <div className="relative z-20 w-full h-auto py-20 bg-teal-600">
      <div className="grid w-full grid-cols-1 gap-6 px-8 mx-auto text-white lg:px-0 lg:grid-cols-3 lg:max-w-7xl">
        <div className="flex items-start space-x-2">
          <div className="flex items-center justify-center flex-shrink-0 w-20 h-20 bg-white rounded-full bg-opacity-80">
            <Image
              src="/icons/shield.png"
              alt="Shield icon"
              height={60}
              width={60}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-lg font-medium">
              Advanced Equipment and Modern Infrastructure
            </p>
            <p className="text-sm leading-relaxed tracking-wider text-start">
              Our diagnostic center is equipped with state-of-the-art, fully
              automated systems, showcasing the latest technological
              advancements from renowned brands ensuring seamless and efficient
              operations, enabling us to deliver accurate and reliable results
              to our valued customers.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <div className="flex-shrink-0 w-20 h-20 bg-white bg-opacity-50 rounded-full">
            <div className="flex items-center justify-center flex-shrink-0 w-20 h-20 bg-white rounded-full bg-opacity-80">
              <Image
                src="/icons/trust.png"
                alt="Trust icon"
                height={60}
                width={60}
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-5">
            <p className="text-lg font-medium">Our Commitment to Excellence</p>
            <p className="text-sm leading-relaxed tracking-wider">
              We prioritize excellence by leveraging our expertise, experience,
              and advanced instruments to implement rigorous quality assurance
              measures. Through continuous monitoring and improvement, we
              deliver accurate and reliable results, earning the trust of our
              valued customers as a leading diagnostic service provider.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <div className="flex-shrink-0 w-20 h-20 bg-white bg-opacity-50 rounded-full"></div>
          <div className="flex flex-col space-y-2">
            <p className="text-lg font-medium">
              Professional Team and Personalized Care
            </p>
            <p className="text-sm leading-relaxed tracking-wider ">
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
