import { useRouter } from 'next/navigation';
import { auth } from '../../lib/firebaseConfig'; // Adjust the import path as needed
import Image from 'next/image';

const Header = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      router.push('/signin'); // Redirect to sign-in page after sign-out
    } catch (error) {
      console.error("Sign-out error: ", error);
      // Optionally, set an error message to display to the user
    }
  };

  return (
    <header className="flex items-center justify-between w-full h-20 px-16 py-4 text-white">
        <div className={"relative w-56"}>
            <Image src="/org/logo.jpg" alt="Logo" width={200} height={200} />
        </div>
        <button onClick={handleSignOut} className='px-3 py-2 bg-red-500 rounded-lg'>Sign Out</button>
    </header>
  );
};

export default Header;
