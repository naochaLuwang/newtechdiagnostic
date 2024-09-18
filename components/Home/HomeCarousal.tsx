
"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import { db } from '../../lib/firebaseConfig'; // Adjust import as needed
import { collection, getDocs } from 'firebase/firestore';
import { Skeleton } from "@/components/ui/skeleton";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const HomeCarousal = () => {
  const [carousels, setCarousels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCarousels = async () => {
      try {
        const carouselsRef = collection(db, 'carousels');
        const snapshot = await getDocs(carouselsRef);
        const carouselData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCarousels(carouselData);
      } catch (err) {
        console.error('Error fetching carousels:', err);
        setError('Failed to load carousels.');
      } finally {
        setLoading(false);
      }
    };

    fetchCarousels();
  }, []);

  return (
    <div className="relative w-full h-36 lg:h-96">
      {!loading ? (
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={10000}
          arrows={false}
        >
          {carousels.map((carousel) => (
            <div key={carousel.id} className="relative w-full h-36 lg:h-96">
              {carousel.imageUrl && (
                <Image
                  src={carousel.imageUrl}
                  alt={carousel.name}
                  fill
                  style={{ objectFit: 'fill' }}
                  priority
                />
              )}

            </div>
          ))}
        </Carousel>
      ) : (
        <div className="flex w-full h-full pt-10 pb-5">
          <div className="flex flex-col flex-shrink-0 px-16 py-12">
            <Skeleton className="w-[500px] h-[40px] rounded-md" />
            <Skeleton className="w-[500px] h-[40px] mt-5 rounded-md" />
            <Skeleton className="w-[400px] h-[30px] mt-5 rounded-md" />
            <Skeleton className="w-[400px] h-[30px] mt-5 rounded-md" />
          </div>
          <Skeleton className="w-[55rem] h-80 rounded-xl" />
        </div>
      )}
    </div>
  );
};

export default HomeCarousal;
