"use client"; // Required for React hooks in App Router

import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logos/menu-logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Handle scroll event to make navbar sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY) {
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

  return (
    <nav
      className={` z-50 py-3 ${
        isSticky
          ? "bg-white shadow-lg fixed w-full transition-all duration-500 ease-in-out"
          : "bg-white lg:bg-transparent fixed w-full"
      } transform ${
        isSticky ? " translate-y-0" : ""
      } transition-all duration-500 ease-in-out`}
    >
      <div className=" container">
        <div className="flex justify-between">
          <div className="flex items-center">
            <Link href="/" className=" font-bold">
              <Image
                src={logo}
                className=" object-cover"
                width={220}
                height={150}
                alt="web-menu-logo"
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <Link
              href="/"
              className=" text-blue-600 hover:text-cyan-500 text-lg font-semibold transition-all duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className=" text-blue-600 hover:text-cyan-500 text-lg font-semibold transition-all duration-300"
            >
              About
            </Link>
            <Link
              href="/services"
              className=" text-blue-600 hover:text-cyan-500 text-lg font-semibold transition-all duration-300"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className=" text-blue-600 hover:text-cyan-500 text-lg font-semibold transition-all duration-300"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md bg-gradient-to-t from-blue-50 to-transparent">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block hover:text-cyan-800 px-3 py-2 rounded-md text-base hover:bg-blue-200 transition-all duration-300 font-Rubik font-medium text-blue-500"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block hover:text-cyan-800 px-3 py-2 rounded-md text-base hover:bg-blue-200 transition-all duration-300 font-Rubik font-medium text-blue-500"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block hover:text-cyan-800 px-3 py-2 rounded-md text-base hover:bg-blue-200 transition-all duration-300 font-Rubik font-medium text-blue-500"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block hover:text-cyan-800 px-3 py-2 rounded-md text-base hover:bg-blue-200 transition-all duration-300 font-Rubik font-medium text-blue-500"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
