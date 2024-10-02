"use client";
import Image from "next/image";
import logo from "/public/logos/footer-logo.png";
import {
  FaFacebookSquare,
  FaHeart,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import SpinnerButton from "../SpinnerButton";
import { ErrorToast, SuccessToast } from "@/utils/formHelper";
import { useState } from "react";
export default function FooterUi() {
  const [submit, setSubmit] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [inputValues, setInputValues] = useState({
    email: "",
  });
  const onChangeHandler = (name, value) => {
    setInputValues({ ...inputValues, [name]: value });
  };
  const onSubmitHandler = async () => {
    try {
      if (IsEmail(inputValues.email)) {
        ErrorToast("Valied Email Required");
      } else {
        setSubmit(true);
        setIsDisabled(true);
        const config = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputValues),
        };
        const req = await fetch("/api/subscribers", config);
        const res = await req.json();
        if (!req.ok) {
          ErrorToast(res.status);
        } else if (res.status === "This email already exist.") {
          ErrorToast(res.status);
        } else {
          SuccessToast(res.status);
          setInputValues({
            email: "",
          });
        }
      }
    } catch (e) {
      ErrorToast("Internl Error!");
    } finally {
      setSubmit(false);
      setIsDisabled(false);
    }
  };
  return (
    <footer className="section-padding bg-cyan-800 font-siliguri text-lime-50">
      <div className="container">
        <div className="flex flex-col gap-6 pb-8 lg:flex-row lg:pb-12 2xl:pb-16">
          <div className="w-full">
            <div className="relative h-16 w-60 lg:h-20 lg:w-[300px] 2xl:h-[105px] 2xl:w-96">
              <Image
                src={logo}
                fill
                className="object-cover"
                alt="brand-logo"
              />
            </div>
          </div>
          <div className="flex w-full items-center gap-2">
            <h2 className="font-h2">Follow on:</h2>
            <div className="flex items-center justify-center gap-1">
              <Link
                href="https://www.facebook.com/nexusphysiocare"
                target="_blank"
                className="hover-300 rounded hover:text-blue-600"
              >
                <FaFacebookSquare className="h-6 w-6 lg:h-8 lg:w-8 2xl:h-10 2xl:w-10" />
              </Link>
              <Link
                href="/"
                target="_blank"
                className="hover-300 rounded hover:text-blue-500"
              >
                <FaLinkedin className="h-6 w-6 lg:h-8 lg:w-8 2xl:h-10 2xl:w-10" />
              </Link>
              <Link
                href="/"
                target="_blank"
                className="hover-300 rounded hover:text-red-500"
              >
                <FaYoutube className="h-6 w-6 lg:h-8 lg:w-8 2xl:h-10 2xl:w-10" />
              </Link>
            </div>
          </div>
          <div className="w-full">
            <h3 className="font-h3">Get our offers directly.</h3>
            {/* <p>Join our online community for free. No spam ever.</p> */}
            <div className="mt-3 flex gap-3 rounded bg-white p-1">
              <input
                type="email"
                placeholder="Email Address"
                value={inputValues.email}
                onChange={(e) => onChangeHandler("email", e.target.value)}
                className="w-full border-none px-2 font-semibold text-cyan-800 placeholder:text-gray-500 focus:outline-none"
              />
              <SpinnerButton
                btnAction={isDisabled}
                sumbitAction={submit}
                clickAction={onSubmitHandler}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col border-y py-8 lg:flex-row lg:py-10 xl:py-12 2xl:py-16">
          <div className="w-full">
            <h3 className="font-h3 pb-3 lg:pb-4 2xl:pb-5">Explore More</h3>
            <Link href="/" className="hover-300 block py-1 hover:text-cyan-600">
              Privacy Policy
            </Link>
            <Link href="/" className="hover-300 block py-1 hover:text-cyan-600">
              Privacy Policy
            </Link>
            <Link href="/" className="hover-300 block py-1 hover:text-cyan-600">
              Privacy Policy
            </Link>
            <Link href="/" className="hover-300 block py-1 hover:text-cyan-600">
              Privacy Policy
            </Link>
          </div>
          <div className="w-full">
            <h3 className="font-h3 pb-3 lg:pb-4 2xl:pb-5">Explore More</h3>
            <Link href="/" className="hover-300 block py-1 hover:text-cyan-600">
              Privacy Policy
            </Link>
            <Link href="/" className="hover-300 block py-1 hover:text-cyan-600">
              Privacy Policy
            </Link>
            <Link href="/" className="hover-300 block py-1 hover:text-cyan-600">
              Privacy Policy
            </Link>
            <Link href="/" className="hover-300 block py-1 hover:text-cyan-600">
              Privacy Policy
            </Link>
          </div>
          <div className="w-full">
            <h3 className="font-h3 pb-3 lg:pb-4 2xl:pb-5">Explore More</h3>
            <Link href="/" className="hover-300 block py-1 hover:text-cyan-600">
              Privacy Policy
            </Link>
            <Link href="/" className="hover-300 block py-1 hover:text-cyan-600">
              Privacy Policy
            </Link>
            <Link href="/" className="hover-300 block py-1 hover:text-cyan-600">
              Privacy Policy
            </Link>
            <Link href="/" className="hover-300 block py-1 hover:text-cyan-600">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="justify-between pt-4 lg:flex lg:pt-5">
          <div className="flex gap-5">
            <p className="font-Lora text-whiteSmoke text-sm font-normal md:text-base">
              {` © ${new Date().getFullYear()}, Nexus Physio Care. All Rights Reserved.`}
            </p>
          </div>
          <div className="flex items-center py-5 text-sm text-white lg:py-0">
            Made with
            <span className="px-1 text-red-500">
              <FaHeart size={18} weight="fill" />
            </span>
            by team
            <Link href="https://aerodevs.com/" target="_blank" className="pl-1">
              AeroDevs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
