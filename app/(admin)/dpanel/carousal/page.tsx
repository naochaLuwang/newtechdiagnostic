'use client'; // Ensure this file is a client component

import { useEffect, useState } from 'react';
import { auth } from '../../../../lib/firebaseConfig'; // Adjust the import path as needed
import { useRouter } from 'next/navigation';

const Carousal = () => {
     const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    // Subscribe to auth state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        router.push('/signin');
      }
    });

    return () => unsubscribe();
  }, [router]);

   if (user === null) {
    // Loading state
    return <div>Loading...</div>;
  }
  return (
    <div>
      Carousal Page
    </div>
  )
}

export default Carousal
