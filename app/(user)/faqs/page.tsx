"use client";
import React, { useState, useEffect } from 'react';
import { db } from '../../../lib/firebaseConfig'; // Adjust import path as necessary
import { collection, getDocs, query, orderBy, QuerySnapshot, DocumentData } from 'firebase/firestore';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  order: number;
}

const FAQS: React.FC = () => {
  const [faqs, setFAQs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const faqsRef = collection(db, 'faqs');
        const q = query(faqsRef, orderBy('order', 'asc'));
        const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);
        const fetchedFAQs: FAQ[] = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...(doc.data() as Omit<FAQ, 'id'>)
        }));
        setFAQs(fetchedFAQs);
      } catch (err) {
        console.error('Error fetching FAQs:', err);
        setError('Error fetching FAQs. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  if (loading) {
    return (
      <div className="w-full px-4 py-8 h-[80vh] md:px-16 md:py-10">
        <h1 className="mb-8 text-3xl font-medium tracking-wide md:text-5xl">
          Commonly Asked <span className="text-xl md:text-2xl">FAQs</span>
        </h1>
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="border-b border-gray-200 animate-pulse">
              <div className="flex items-center justify-between px-4 py-4 bg-gray-100 rounded-lg">
                <div className="w-3/4 h-5 bg-gray-300 rounded"></div>
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
              </div>
              <div className="px-4 py-2 bg-gray-50">
                <div className="w-5/6 h-3 mb-2 bg-gray-300 rounded"></div>
                <div className="w-4/6 h-3 bg-gray-300 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="w-full h-[80vh] flex items-center justify-center"><p className="text-lg text-center text-red-500">{error}</p></div>;
  }

  return (
    <div className='w-full px-4 py-8 h-[80vh] md:px-16 md:py-10'>
      <h1 className="mb-8 text-3xl font-medium tracking-wide md:text-5xl">
        Commonly Asked <span className="text-xl md:text-2xl">FAQs</span>
      </h1>
      <div className="space-y-4">
        {faqs.length === 0 ? (
          <p className="text-lg text-center">No FAQs available.</p>
        ) : (
          faqs.map(faq => (
            <Disclosure key={faq.id} as="div" className="border-b border-gray-200">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-base font-medium text-left text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 md:text-lg">
                    <span>{faq.question}</span>
                    {open ? (
                      <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 py-2 text-sm text-gray-600 md:text-base">
                    {faq.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))
        )}
      </div>
    </div>
  );
};

export default FAQS;
