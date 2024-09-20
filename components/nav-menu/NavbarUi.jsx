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
      className={`z-50 py-3 font-safodi lg:py-5 ${
        isSticky
          ? "hover-500 fixed w-full bg-white shadow-lg ease-in-out"
          : "fixed w-full bg-white lg:bg-transparent"
      } transform ${isSticky ? "translate-y-0" : ""} hover-500 ease-in-out`}
    >
      <div className="container">
        <div className="flex justify-between">
          <div className="flex items-center">
            <Link href="/" className="font-bold">
              <Image
                src={logo}
                className="object-cover"
                width={220}
                height={150}
                alt="web-menu-logo"
              />
            </Link>
          </div>
          <div className="hidden items-center space-x-4 md:flex">
            <Link
              href="/"
              className="hover-300 text-lg font-semibold text-cyan-800 hover:text-cyan-500"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover-300 text-lg font-semibold text-cyan-800 hover:text-cyan-500"
            >
              About
            </Link>
            <Link
              href="/services"
              className="hover-300 text-lg font-semibold text-cyan-800 hover:text-cyan-500"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="hover-300 text-lg font-semibold text-cyan-800 hover:text-cyan-500"
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
        <div className="bg-white bg-gradient-to-t from-blue-50 to-transparent shadow-md md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <Link
              href="/"
              className="hover-300 block rounded-md px-3 py-2 font-Rubik text-base font-medium text-blue-500 hover:bg-blue-200 hover:text-cyan-800"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover-300 block rounded-md px-3 py-2 font-Rubik text-base font-medium text-blue-500 hover:bg-blue-200 hover:text-cyan-800"
            >
              About
            </Link>
            <Link
              href="/services"
              className="hover-300 block rounded-md px-3 py-2 font-Rubik text-base font-medium text-blue-500 hover:bg-blue-200 hover:text-cyan-800"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="hover-300 block rounded-md px-3 py-2 font-Rubik text-base font-medium text-blue-500 hover:bg-blue-200 hover:text-cyan-800"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
