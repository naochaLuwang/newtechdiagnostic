import React from "react";

const AboutPage = () => {
  return (
    <div className="w-full h-auto py-20 mx-auto max-w-7xl">
      <div className="grid w-full grid-cols-2 gap-6">
        <div className="flex flex-col space-y-5">
          <p className="text-base leading-relaxed tracking-wider text-justify text-neutral-700">
            <span className="font-semibold text-teal-600">NEW</span>
            <span className="font-semibold text-orange-600">TECH</span>{" "}
            Diagnostics, a renowned and reputable Diagnostic & Health Services
            Provider, offers a comprehensive range of diagnostic facilities,
            including a wide array of specialties in Pathology services. Our
            goal at NewTech Diagnostics is to be a one-stop solution for our
            valued customers, providing them with all diagnostic services under
            one roof, all while ensuring superior quality, advanced technology,
            and affordability. We take pride in maintaining a complete
            diagnostic center that prioritizes accurate results, utmost safety,
            and adherence to all COVID guidelines.
          </p>
          <p className="text-base leading-relaxed tracking-wider text-justify text-neutral-700">
            At <span className="font-semibold text-teal-600">NEW</span>
            <span className="font-semibold text-orange-600">TECH</span>{" "}
            Diagnostics, we have a dedicated team of highly qualified
            radiologists, pathologists, and technicians, and we are equipped
            with state-of-the-art, innovative machines to ensure precision and
            efficiency in our diagnostic processes. We strongly believe in the
            importance of collaboration between diagnostic centers and
            clinicians, as it plays a crucial role in arriving at the right
            diagnosis. With the right diagnosis, we can significantly improve
            the efficacy of treatments and enhance overall treatment outcomes,
            especially when early diagnosis is achieved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
