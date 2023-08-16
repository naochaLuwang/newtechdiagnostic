"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";

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
      <div className="flex items-center justify-between w-full px-10 mx-auto ">
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
      </div>
    </motion.div>
  );
};

export default Header;
