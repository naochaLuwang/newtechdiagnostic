import React from "react";
import ContactForm from "./ContactForm";

const EmbedMap = () => {
  return (
    <div className="flex flex-col w-full h-auto mb-10 space-x-5 lg:flex-row lg:px-16 md:px-8">
      <div className="lg:w-[70%] w-[100%] border rounded-lg shadow-lg lg:h-[500px] h-60">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.5371357515205!2d93.95617977574516!3d24.81129827796132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3749273d2d677077%3A0x5494cbfcd3806ea1!2sNewtech%20Diagnostics!5e0!3m2!1sen!2sin!4v1691487842866!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="lg:w-[30%] w-[100%] mt-5 lg:mt-0 lg:pr-0 pr-8">
        <h1 className="text-lg tracking-widest lg:text-xl">NEWTECH DIAGNOSTICS</h1>
        <p className="mt-5 text-sm">
          Soibam Leikai Ayangpalli Rd. near JNIMS Gate, adjacent to PNB,
          Porompat, Imphal
        </p>

        <p className="mt-5 text-lg tracking-wide">DROP US A MESSAGE</p>

        <ContactForm />
      </div>
    </div>
  );
};

export default EmbedMap;
