import { BsPhoneFill } from "react-icons/bs";
import { HiLocationMarker, HiMail } from "react-icons/hi";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const ContactPage = () => {
  return (
    <div className="w-full h-auto py-0 pt-10 lg:py-10">
      <div className="flex flex-col items-center w-full h-auto space-y-2">
        <h1 className="text-lg font-medium lg:text-3xl">
          Get In Touch With Us
        </h1>
        <p className="text-xs italic text-center lg:text-sm">
          &quot;Connect with{" "}
          <span className="font-semibold text-teal-600">NEW</span>
          <span className="font-semibold text-orange-600">TECH</span>{" "}
          Diagnostics: Your Pathway to Accurate Healthcare Solutions&quot;
        </p>
        <div className="w-20 h-[2px] bg-teal-700"></div>
      </div>
      <div className="grid w-full grid-cols-1 gap-3 px-2 mx-auto my-10 lg:gap-0 lg:my-16 lg:px-0 lg:grid-cols-2 lg:max-w-7xl">
        <div className="grid w-full h-auto lg:grid-cols-2 grid-cols-1 bg-[#222327] lg:rounded-l-lg rounded-lg lg:rounded-none">
          <div className="flex flex-col items-center w-full h-auto px-10 py-5 space-y-3 lg:py-10">
            <div className="flex items-center justify-center w-12 h-12 border border-white rounded-full lg:w-16 lg:h-16">
              <HiLocationMarker className="w-5 h-5 text-white lg:w-6 lg:h-6" />
            </div>
            <h1 className="text-[#BDBDBF] lg:text-base lg:tracking-wider text-sm">
              ADDRESS:
            </h1>
            <p className="lg:text-sm text-xs text-center text-[#BDBDBF]">
              Soibam Leikai Ayangpalli Rd. near JNIMS Gate, adjacent to PNB,
              Porompat, Imphal
            </p>
          </div>
          <div className="flex flex-col items-center w-full h-auto py-5 space-y-3 lg:py-10">
            <div className="flex items-center justify-center w-12 h-12 border border-white rounded-full lg:w-16 lg:h-16">
              <HiMail className="w-5 h-5 text-white lg:w-6 lg:h-6" />
            </div>
            <h1 className="text-[#BDBDBF] lg:text-base text-sm lg:tracking-wider">
              EMAIL:
            </h1>
            <p className="lg:text-sm text-xs text-center text-[#BDBDBF]">
              contact@newtechdiagnostics.com
            </p>
          </div>
          <div className="flex flex-col items-center w-full h-auto py-5 space-y-3 lg:py-10">
            <div className="flex items-center justify-center w-12 h-12 border border-white rounded-full lg:w-16 lg:h-16">
              <BsPhoneFill className="w-5 h-5 text-white lg:w-6 lg:h-6" />
            </div>
            <h1 className="text-sm text-[#BDBDBF] lg:text-base">CALL US:</h1>
            <p className="text-xs text-center text-[#bdbdbf] lg:text-sm">
              7005171909
            </p>
          </div>
          <div className="flex flex-col items-center w-full h-auto py-5 space-y-3 lg:py-10">
            <h1 className="text-sm text-[#bdbdbf] lg:text-base">
              CONNECT WITH US
            </h1>
            <div className="flex items-center justify-center w-full space-x-3">
              <FaFacebookSquare className="w-5 h-5 text-white lg:w-6 lg:h-6 " />
              <FaTwitter className="w-5 h-5 text-white lg:w-6 lg:h-6" />
              <AiFillInstagram className="w-5 h-5 text-white lg:w-6 lg:h-6" />
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
