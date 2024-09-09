"use client";
import React, { useState, useEffect } from 'react';
import { db, storage } from '../../../../lib/firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useRouter } from 'next/navigation';
import { useDropzone } from 'react-dropzone';
import { IoChevronBackOutline } from "react-icons/io5";
import Image from 'next/image';
import { useForm } from 'react-hook-form';

interface Notice {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  status: string;
  createdAt: Date;
}

const AddNoticePage: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();
  const [file, setFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [notices, setNotices] = useState<Notice[]>([]);
  const router = useRouter();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
      'image/*': ['.jpg', '.jpeg', '.png']
    },
    onDrop: (acceptedFiles) => {
      const selectedFile = acceptedFiles[0];
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    },
  });

  const fetchNotices = async () => {
    try {
      const noticesRef = collection(db, 'notices');
      const querySnapshot = await getDocs(noticesRef);
      const fetchedNotices: Notice[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<Notice, 'id'>)
      }));
      setNotices(fetchedNotices);
    } catch (err) {
      console.error('Error fetching notices:', err);
      setError('Error fetching notices. Please try again.');
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  const onSubmit = async (data: any) => {
    if (!file) {
      setError('File is required.');
      return;
    }

    setLoading(true);

    try {
      // Upload file
      const fileRef = ref(storage, `notices/${file.name}`);
      await uploadBytes(fileRef, file);
      const fileUrl = await getDownloadURL(fileRef);

      // Save notice data to Firestore
      const noticesRef = collection(db, 'notices');
      await addDoc(noticesRef, {
        title: data.title,
        description: data.description,
        fileUrl,
        status: 'ACTIVE',
        createdAt: new Date(),
      });

      // Reset form
      reset();
      setFile(null);
      setFilePreview(null);
      setError('');
      alert('Notice added successfully!');
      fetchNotices(); // Refresh notices list
    } catch (err) {
      console.error('Error adding notice:', err);
      setError('Error adding notice. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen p-6 bg-gray-100">
      <div className="flex items-center w-full h-20 mb-6">
        <h1 className="text-3xl font-bold">MANAGE NOTICE & FILES</h1>
        <button
          onClick={() => router.back()}
          className="flex items-center px-4 py-2 ml-auto text-blue-700"
        >
          <IoChevronBackOutline /> <span className="ml-2">Go Back</span>
        </button>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Existing Notices */}
        <div className="lg:w-1/2 flex flex-col space-y-4 overflow-y-auto h-[70vh] bg-white p-4 rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-semibold">Existing Notices</h2>
          {error && <p className="text-red-500">{error}</p>}
          {notices.length === 0 ? (
            <p className="text-center">No notices available.</p>
          ) : (
            notices.map(notice => (
              <div key={notice.id} className="pb-4 border-b border-gray-200">
                <h3 className="text-xl font-semibold">{notice.title}</h3>
                <p className="text-gray-700">{notice.description}</p>
                <a href={notice.fileUrl} target="_blank" rel="noopener noreferrer" className="block mt-2 text-blue-500 underline">
                  View File
                </a>
              </div>
            ))
          )}
        </div>

        {/* Add Notice Form */}
        <div className="w-full max-w-4xl p-6 mx-auto bg-white rounded-lg shadow-md lg:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                {...register('title', { required: true })}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                {...register('description')}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Upload File
              </label>
              <div
                {...getRootProps()}
                className={`mt-1 border-2 border-dashed border-gray-300 rounded-md p-4 ${
                  isDragActive ? 'bg-gray-100' : 'bg-gray-50'
                }`}
              >
                <input {...getInputProps()} className="hidden" />
                <p className="text-center text-gray-500">
                  {isDragActive ? 'Drop the file here ...' : 'Drag & drop a file here, or click to select one'}
                </p>
                {filePreview && (
                  <div className="mt-4">
                    {file.type.includes('image') ? (
                      <img src={filePreview} alt="File preview" className="h-auto max-w-full rounded-md shadow-md" />
                    ) : (
                      <a href={filePreview} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        {file.name}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 disabled:opacity-50"
            >
              {loading ? 'Saving...' : 'Save Notice'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNoticePage;
