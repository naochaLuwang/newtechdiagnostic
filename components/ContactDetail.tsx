import React from "react";

const ContactDetail = () => {
  return (
    <div className="w-full h-auto bg-orange-600 bg-opacity-80 py-10">
      <div className="grid w-full grid-cols-3 gap-6 lg:max-w-6xl lg:mx-auto">
        <div className="flex items-center justify-center w-full h-40">
          <div className="flex flex-col space-y-5">
            <h1 className="text-xl font-medium text-white">Address</h1>
            <p className="text-base font-medium tracking-wider text-white">
              Soibam Leikai, Ayangpalli Road , near JNIMS Gate, adjacent to PNB
              Porompat, Imphal.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-40">
          <div className="flex flex-col space-y-5">
            <h1 className="text-2xl font-medium text-white">Phone No</h1>
            <p className="text-base font-medium tracking-wider text-white">
              Soibam Leikai, Ayangpalli Road , near JNIMS Gate, adjacent to PNB
              Porompat, Imphal.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-40">
          <div className="flex flex-col space-y-5">
            <h1 className="text-2xl font-medium text-white">Address</h1>
            <p className="text-base font-medium tracking-wider text-white">
              Soibam Leikai, Ayangpalli Road , near JNIMS Gate, adjacent to PNB
              Porompat, Imphal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
