"use client";

import { BsPhoneFill } from "react-icons/bs";
import { HiLocationMarker, HiMail } from "react-icons/hi";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const ContactPage = () => {
  return (
    <div className="w-full h-auto py-10">
      <div className="flex flex-col items-center w-full h-auto space-y-2">
        <h1 className="font-medium lg:text-3xl">Get In Touch With Us</h1>
        <p className="text-sm">
          &quot;Connect with NEWTECH Diagnostics: Your Pathway to Accurate
          Healthcare Solutions&quot;
        </p>
        <div className="w-20 h-[2px] bg-teal-700"></div>
      </div>
      <div className="grid w-full grid-cols-2 mx-auto my-16 lg:max-w-7xl">
        <div className="grid w-full h-auto grid-cols-2 bg-[#222327] rounded-l-lg">
          <div className="flex flex-col items-center w-full h-auto px-10 py-10 space-y-3">
            <div className="flex items-center justify-center w-16 h-16 border border-white rounded-full">
              <HiLocationMarker className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-[#BDBDBF]">ADDRESS:</h1>
            <p className="text-sm text-center text-[#BDBDBF]">
              Soibam Leikai Ayangpalli Rd. near JNIMS Gate, adjacent to PNB,
              Porompat, Imphal
            </p>
          </div>
          <div className="flex flex-col items-center w-full h-auto py-10 space-y-3">
            <div className="flex items-center justify-center w-16 h-16 border border-white rounded-full">
              <HiMail className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-[#BDBDBF]">EMAIL:</h1>
            <p className="text-sm text-center text-[#BDBDBF]">
              contact@newtechdiagnostics.com
            </p>
          </div>
          <div className="flex flex-col items-center w-full h-auto py-10 space-y-3">
            <div className="flex items-center justify-center w-16 h-16 border border-white rounded-full">
              <BsPhoneFill className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-white">CALL US:</h1>
            <p className="text-sm text-center text-white">700598372</p>
          </div>
          <div className="flex flex-col items-center w-full h-auto py-10 space-y-3">
            <h1 className="text-white">CONNECT WITH US</h1>
            <div className="flex items-center justify-center w-full space-x-3">
              <FaFacebookSquare className="w-6 h-6 text-white " />
              <FaTwitter className="w-6 h-6 text-white" />
              <AiFillInstagram className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        <div className="w-full h-full rounded-r-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.5371357515205!2d93.95617977574516!3d24.81129827796132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3749273d2d677077%3A0x5494cbfcd3806ea1!2sNewtech%20Diagnostics!5e0!3m2!1sen!2sin!4v1691669002806!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
