"use client";

import { BsPhoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="flex flex-col-reverse justify-between w-full h-auto px-4 py-10 bg-gradient-to-br from-teal-600 to-teal-800 lg:flex-row lg:py-10 lg:px-16">
      <div className="flex flex-col space-y-5">
        <h1 className="text-xl font-medium text-white lg:text-3xl">
          Get In Touch With Us
        </h1>
        <div className="flex items-center space-x-2">
          <BsPhoneFill className="w-5 h-5 text-white lg:w-6 lg:h-6" />
          <p className="text-sm font-normal tracking-wider text-white lg:text-lg">
            7005983372
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <HiMail className="w-5 h-5 text-white lg:w-6 lg:h-6" />
          <p className="text-sm font-normal tracking-wider text-white lg:text-base">
            contact@newtechdiagnostics.com
          </p>
        </div>
        <div className="flex items-start space-x-2">
          <FaMapMarkerAlt className="flex-shrink-0 w-5 h-5 text-white lg:w-6 lg:h-6" />
          <p className="text-sm font-normal tracking-wider text-white lg:leading-relaxed lg:text-base">
            Soibam Leikai Ayangpalli Rd. near JNIMS Gate,
            <br /> adjacent to PNB, Porompat, Imphal.
          </p>
        </div>
      </div>
      <div className="border rounded-lg shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.82949424026847!2d93.95878611395906!3d24.811365096828588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3749271b68911777%3A0x16feda7a65581a4b!2sRX65%2BGGC%2C%20Ayangpalli%20Rd%2C%20near%20JNIMS%20Road%2C%20Soibam%20Leikai%2C%20Imphal%2C%20Lairikyengbam%20Leikai%2C%20Manipur%20795010!5e0!3m2!1sen!2sin!4v1691084801767!5m2!1sen!2sin"
          width="700"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
