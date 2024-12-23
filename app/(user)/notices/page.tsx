"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../lib/firebaseConfig"; // Adjust the path as needed
import { FaFileAlt } from "react-icons/fa"; // Import an icon

interface Notice {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  status: string;
  createdAt: any; // Adjust according to your Firestore timestamp
}

const NoticesPage = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 10;
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchNotices = async () => {
      setLoading(true); // Set loading to true while fetching data
      const q = query(
        collection(db, "notices"),
        where("status", "==", "ACTIVE")
      );

      const querySnapshot = await getDocs(q);
      const noticesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Notice[];

      setNotices(noticesData);
      setLoading(false); // Set loading to false after fetching data
    };

    fetchNotices();
  }, []);

  // Pagination Logic
  const indexOfLastNotice = currentPage * noticesPerPage;
  const indexOfFirstNotice = indexOfLastNotice - noticesPerPage;
  const currentNotices = notices.slice(indexOfFirstNotice, indexOfLastNotice);
  const totalPages = Math.ceil(notices.length / noticesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const LoadingSkeleton = () => (
    <tr className="animate-pulse">
      <td className="px-4 py-2 border">
        <div className="w-20 h-4 bg-gray-200 rounded"></div>
      </td>
      <td className="px-4 py-2 border">
        <div className="w-32 h-4 bg-gray-200 rounded"></div>
      </td>
      <td className="px-4 py-2 border">
        <div className="w-48 h-4 bg-gray-200 rounded"></div>
      </td>
      <td className="px-4 py-2 border">
        <div className="w-24 h-4 bg-gray-200 rounded"></div>
      </td>
    </tr>
  );

  return (
    <div className="container p-4 mx-auto h-[79vh]">
      <h1 className="inline-block text-4xl font-semibold tracking-wider">
        <span className="text-5xl font-black">N</span>otice & Important Updates
      </h1>
      <table className="h-auto min-w-full mt-4 border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="w-20 px-4 py-2 text-left border">Date</th>
            <th className="w-56 px-4 py-2 text-left border">Title</th>
            <th className="px-4 py-2 text-left border">Description</th>
            <th className="w-32 px-4 py-2 text-left border">File URL</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            // Render skeletons based on the expected number of notices per page
            Array.from({ length: noticesPerPage }).map((_, index) => <LoadingSkeleton key={index} />)
          ) : (
            currentNotices.map((notice) => (
              <tr key={notice.id}>
                <td className="px-4 py-2 border">
                  {new Date(notice.createdAt.seconds * 1000).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 text-left border">{notice.title}</td>
                <td className="px-4 py-2 text-left border">{notice.description}</td>
                <td className="px-4 py-2 text-left border">
                  <a href={notice.fileUrl} className="flex items-center text-blue-500 hover:underline">
                    <FaFileAlt className="mr-1" /> View
                  </a>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>
      <p className="mt-2 text-sm">
        Page {currentPage} of {totalPages}
      </p>
    </div>
  );
};

export default NoticesPage;
