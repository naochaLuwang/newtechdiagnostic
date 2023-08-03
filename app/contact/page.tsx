"use client";
const ContactPage = () => {
  return (
    <div className="flex w-full h-auto space-x-8 lg:py-16 lg:px-16">
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
      <div className="flex flex-col">
        <h1 className="text-3xl font-medium">Contact Us</h1>
      </div>
    </div>
  );
};

export default ContactPage;
