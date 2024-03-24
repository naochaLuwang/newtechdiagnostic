"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import { BsFillTelephoneFill } from "react-icons/bs";

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  const pathName = usePathname();
  console.log(pathName);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > 120) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerVariants: Variants = {
    initial: { top: "-6rem" },
    sticky: { top: "0rem" },
  };

  const textVariants: Variants = {
    initial: { fontSize: "1.0rem" },
    sticky: { fontSize: "0.8rem" },
  };

  const nameVariants: Variants = {
    initial: { fontSize: "1.875rem", lineHeight: "2.25rem" },
    sticky: { fontSize: "1.5rem", lineHeight: "2rem" },
  };

  return (
    <motion.div
      className={`z-50 items-center hidden lg:flex w-full  h-24 py-6 ${
        !isSticky
          ? "transition-all duration-200 ease-linear shadow-sm"
          : "fixed top-0 transition-all duration-200 ease-linear shadow-sm"
      } ${pathName === "/" && !isSticky ? "bg-white " : "bg-white"}`}
      variants={headerVariants}
      initial="initial"
      animate={isSticky ? "sticky" : "initial"}
      exit={{ top: "-6rem" }}
    >
      <div className="flex items-center justify-between w-full px-10 mx-auto  max-w-[90rem]  ">
        <div className="flex items-center w-full">
          <Link href="/">
            <div
              className={`relative w-56 ${
                isSticky
                  ? "h-20 transition-all duration-100 ease-in-out"
                  : "h-24 transition-all duration-100 ease-in-out"
              }`}
            >
              <Image
                src={"/org/logo.jpg"}
                alt="IUKD logo"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </Link>
        </div>

        <Navbar />

        {/* <div className="flex items-center justify-end w-full h-auto space-x-5 ">
          <div className="flex flex-col h-auto w-fit">
            <div className="px-4 py-2 border border-teal-700 rounded-md w-fit">
              <h1>HOME COLLECTION</h1>
              <div className="flex items-center space-x-2">
                <BsFillTelephoneFill className="w-4 h-4" />
                <p>8132043928</p>
              </div>
            </div>
          </div>

          <div>
            <p>DOWNLOAD REPORT</p>
          </div>
        </div> */}

        <div className="flex items-center justify-center py-2 bg-red-200 w-96">
          TEST REPORT
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
