'use client'; // Ensure this file is a client component

import { useEffect, useState } from 'react';
import { auth } from '../../../lib/firebaseConfig'; // Adjust the import path as needed
import { useRouter } from 'next/navigation';
import Header from '@/components/admin/Header';

import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from '@/components/admin/glowing-stars';
import { BackgroundBeamsWithCollision } from '@/components/admin/background-beams-with-collision';
import Link from 'next/link';

const AdminPage = () => {
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

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      router.push('/signin'); // Redirect to sign-in page after sign-out
    } catch (error) {
      console.error("Sign-out error: ", error);
      // Optionally, set an error message to display to the user
    }
  };

  if (user === null) {
    // Loading state
    return <div>Loading...</div>;
  }

  return (
    <BackgroundBeamsWithCollision>
        <Header />
        <div className="px-16 mt-10 ">
            <h1 className="text-2xl font-semibold tracking-wider">Admin Dashboard</h1>
        </div>

           <div className="flex justify-between w-full px-16 py-5 antialiased">
<Link href="/dpanel/carousal" className='w-full' >
            <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>Home Carousel</GlowingStarsTitle>
        <div className="flex items-end justify-between">
          <GlowingStarsDescription>
            Home Carousal Images
          </GlowingStarsDescription>

        </div>
      </GlowingStarsBackgroundCard>

</Link>
<Link href="/dpanel/carousal" className='w-full' >
            <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>Gallery</GlowingStarsTitle>
        <div className="flex items-end justify-between">
          <GlowingStarsDescription>
            Laboratory Images
          </GlowingStarsDescription>

        </div>
      </GlowingStarsBackgroundCard>

</Link>

<Link href="/dpanel/carousal" className='w-full' >
            <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>Notices & Files</GlowingStarsTitle>
        <div className="flex items-end justify-between">
          <GlowingStarsDescription>
            Notices & File Uploads
          </GlowingStarsDescription>

        </div>
      </GlowingStarsBackgroundCard>

</Link>
    </div>

    <h1 className="px-16 mt-5 text-2xl">Messages</h1>


    </BackgroundBeamsWithCollision>




  );
};

export default AdminPage;
