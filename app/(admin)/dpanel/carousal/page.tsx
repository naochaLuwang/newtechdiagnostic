// 'use client'; // Ensure this file is a client component

// import { useEffect, useState } from 'react';
// import { auth } from '../../../../lib/firebaseConfig'; // Adjust the import path as needed
// import { useRouter } from 'next/navigation';

// const Carousal = () => {
//      const [user, setUser] = useState<any>(null);
//   const router = useRouter();

//   useEffect(() => {
//     // Subscribe to auth state changes
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         router.push('/signin');
//       }
//     });

//     return () => unsubscribe();
//   }, [router]);

//    if (user === null) {
//     // Loading state
//     return <div>Loading...</div>;
//   }
//   return (
//     <div>
//       Carousal Page
//     </div>
//   )
// }

// export default Carousal


"use client";
import React, { useState, useEffect } from 'react';
import { db, storage } from '../../../../lib/firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useRouter } from 'next/navigation';
import { useDropzone } from 'react-dropzone';
import { IoChevronBackOutline } from "react-icons/io5";
import Image from 'next/image';

const AddCarouselPage = () => {
  const [name, setName] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [status, setStatus] = useState('ACTIVE');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [carousels, setCarousels] = useState<any[]>([]);
  const router = useRouter();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
     accept: {
    'image/*': ['.jpeg', '.jpg', '.png', '.gif'], // Specify accepted MIME types
  },
    onDrop: (acceptedFiles) => {
      const selectedFile = acceptedFiles[0];
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    },
  });

  useEffect(() => {
    const fetchCarousels = async () => {
      try {
        const carouselsRef = collection(db, 'carousels');
        const snapshot = await getDocs(carouselsRef);
        const carouselData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCarousels(carouselData);
      } catch (err) {
        console.error('Error fetching carousels:', err);
      }
    };

    fetchCarousels();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !file) {
      setError('Name and file are required.');
      return;
    }

    setLoading(true);

    try {
      // Upload image
      const imageRef = ref(storage, `carousels/${file.name}`);
      await uploadBytes(imageRef, file);
      const imageUrl = await getDownloadURL(imageRef);

      // Save carousel data to Firestore
      const carouselsRef = collection(db, 'carousels');
      await addDoc(carouselsRef, {
        name,
        imageUrl,
        status,
        createdAt: new Date(),
      });

      // Reset form
      setName('');
      setFile(null);
      setImagePreview(null);
      setStatus('ACTIVE');
      setError('');
      alert('Carousel added successfully!');

      // Fetch updated carousels
      const snapshot = await getDocs(carouselsRef);
      const carouselData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCarousels(carouselData);

    } catch (err) {
      console.error('Error adding carousel:', err);
      setError('Error adding carousel. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen p-6 bg-gray-100">
        <div className="flex items-center w-full h-20">

      <h1 className="text-3xl font-bold ">MANAGE CAROUSELS</h1>
       <button
        onClick={() => router.back()}
        className="flex items-center px-4 py-2 text-blue-700"
      >
        <IoChevronBackOutline /> <p>Go Back</p>
      </button>
        </div>


      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Existing Carousels */}
        <div className="lg:w-1/2">
          <h2 className="mb-4 text-2xl font-semibold">Existing Carousels</h2>
          <div className="space-y-4">
            {carousels.map((carousel) => (
              <div key={carousel.id} className="w-full h-auto p-4 bg-white rounded-lg shadow-md ">
<div className="relative w-64 h-24">
    <Image src={carousel.imageUrl} alt={carousel.name} fill />
</div>

                {/* <p className={`mt-2 text-sm ${carousel.status === 'ACTIVE' ? 'text-green-500' : 'text-red-500'}`}>
                  Status: {carousel.status}
                </p> */}
              </div>
            ))}
          </div>
        </div>

        {/* Add Carousel Form */}
        <div className="lg:w-1/2">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Carousel Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  required
                />
              </div>
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                  Upload Image
                </label>
                <div
                  {...getRootProps()}
                  className={`mt-1 border-2 border-dashed border-gray-300 rounded-md p-4 ${
                    isDragActive ? 'bg-gray-100' : 'bg-gray-50'
                  }`}
                >
                  <input {...getInputProps()} className="hidden" />
                  <p className="text-center text-gray-500">
                    {isDragActive ? 'Drop the image here ...' : 'Drag & drop an image here, or click to select one'}
                  </p>
                  {imagePreview && (
                    <div className="mt-4">
                      <img src={imagePreview} alt="Image preview" className="h-auto max-w-full rounded-md shadow-md" />
                    </div>
                  )}
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 disabled:opacity-50"
              >
                {loading ? 'Saving...' : 'Save Carousel'}
              </button>
              {error && <p className="text-sm text-red-500">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCarouselPage;
