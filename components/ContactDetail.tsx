import React from "react";

const ContactDetail = () => {
  return (
    <div className="w-full h-40 bg-orange-600 bg-opacity-80">
      <div className="grid w-full grid-cols-3 lg:max-w-6xl lg:mx-auto">
        <div className="flex items-center justify-center w-full h-40">
          <div className="flex flex-col">
            <h1 className="text-3xl font-medium text-white">Address</h1>
            <p>
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
