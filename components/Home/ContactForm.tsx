// app/components/ContactForm.tsx
'use client';

import { useState } from 'react';
// import { db, collection, addDoc } from '../../lib/firebaseConfig';

type FormData = {
  name: string;
  phone: string;
  message: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       await addDoc(collection(db, 'contacts'), formData);
//       setStatus('Message sent successfully!');
//       setFormData({ name: '', phone: '', message: '' });
//     } catch (error) {
//       console.error('Error adding document:', error);
//       setStatus('Failed to send message.');
//     }
//   };

 return (
    <div className="max-w-md p-4 mx-auto mt-5 bg-white rounded-lg shadow-md">

      <form  className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Send
        </button>
        {status && (
          <p className={`mt-2 text-center ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
};



export default ContactForm;
