"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoCall } from "react-icons/io5";
import { BiComment, BiText } from "react-icons/bi";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { ErrorToast, IsEmail, IsEmpty, SuccessToast } from "@/utils/formHelper";
import SpinnerButton from "../shared/SpinnerButton";

export default function ContactForm() {
  const [submit, setSubmit] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const [inputValues, setinputValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    subject: "",
    details: "",
  });
  let { firstName, lastName, email, phone, subject, details } = inputValues;
  const onChangeHandler = (name, value) => {
    setinputValues({ ...inputValues, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (IsEmpty(firstName)) {
        ErrorToast("First Name Required!");
      } else if (IsEmpty(lastName)) {
        ErrorToast("Last Name Required!");
      } else if (IsEmail(email)) {
        ErrorToast("Valid Email Address Required!");
      } else if (IsEmpty(phone)) {
        ErrorToast("Valid Mobile Number Required!");
      } else if (IsEmpty(subject)) {
        ErrorToast("Subject Required!");
      } else if (IsEmpty(details)) {
        ErrorToast("Details Required!");
      } else {
        setSubmit(true);
        setIsDisabled(true);
        setIsDisabled(true);
        const config = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputValues),
        };
        const req = await fetch("/api/messages", config);
        const res = await req.json();
        if (res.status === "Fail! Internal Error") {
          ErrorToast(res.status);
        } else {
          SuccessToast(res.status);
          setinputValues({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            subject: "",
            details: "",
          });
        }
      }
    } catch (e) {
      ErrorToast("Internel Error");
    } finally {
      setSubmit(false);
      setIsDisabled(false);
    }
  };
  return (
    <div className="bg-gray/10 rounded-xl px-6 py-8 2xl:px-12 2xl:py-14">
      <h2 className="font-siliguri text-xl font-bold text-cyan-800 xl:text-3xl">
        অভিযোগ বা যোগাযোগ
      </h2>
      <p className="pt-2 font-siliguri font-medium text-gray-500">
        প্রয়োজনীয় সাহায্য পেতে নিচের ফরমটি পূরণ করে আমাদেরকে অবগত করুন।
      </p>
      <form action="" method="post" className="pt-8 2xl:pt-10">
        <div className="grid w-full gap-5 lg:grid-flow-col 2xl:gap-8">
          <div className="relative w-full">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 transform text-cyan-800" />
            <input
              onChange={(e) => onChangeHandler("firstName", e.target.value)}
              value={firstName}
              placeholder="First Name"
              type="text"
              id="firstName"
              className="mt-1 w-full rounded border border-cyan-700 bg-white py-2 pl-10 pr-4 text-cyan-800 shadow focus:border-orange-700 focus:outline-none focus:ring-0"
            />
          </div>
          <div className="relative w-full">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 transform text-cyan-800" />
            <input
              onChange={(e) => onChangeHandler("lastName", e.target.value)}
              value={lastName}
              placeholder="Last Name"
              type="text"
              id="lastName"
              className="mt-1 w-full rounded border border-cyan-700 bg-white py-2 pl-10 pr-4 text-cyan-800 shadow focus:border-orange-700 focus:outline-none focus:ring-0"
            />
          </div>
        </div>
        <div className="grid w-full gap-5 py-5 lg:grid-flow-col 2xl:gap-8">
          <div className="relative w-full">
            <IoCall className="absolute left-3 top-1/2 -translate-y-1/2 transform text-cyan-800" />
            <input
              onChange={(e) => onChangeHandler("phone", e.target.value)}
              value={phone}
              required
              placeholder="Contact Number"
              type="tel"
              id="phone"
              className="mt-1 w-full rounded border border-cyan-700 bg-white py-2 pl-10 pr-4 text-cyan-800 shadow focus:border-orange-700 focus:outline-none focus:ring-0"
            />
          </div>
          <div className="relative w-full">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 transform text-cyan-800" />
            <input
              onChange={(e) => onChangeHandler("email", e.target.value)}
              value={email}
              required
              placeholder="Email"
              type="email"
              id="email"
              className="mt-1 w-full rounded border border-cyan-700 bg-white py-2 pl-10 pr-4 text-cyan-800 shadow focus:border-orange-700 focus:outline-none focus:ring-0"
            />
          </div>
        </div>
        <div className="flex w-full gap-5 pb-5 2xl:gap-8 2xl:pb-8">
          <div className="relative w-full">
            <BiText className="absolute left-3 top-1/2 -translate-y-1/2 transform text-cyan-800" />
            <input
              onChange={(e) => onChangeHandler("subject", e.target.value)}
              value={subject}
              placeholder="Subject"
              type="subject"
              id="subject"
              className="mt-1 w-full rounded border border-cyan-700 bg-white py-2 pl-10 pr-4 text-cyan-800 shadow focus:border-orange-700 focus:outline-none focus:ring-0"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="relative w-full">
            <BiComment className="absolute left-3 top-7 -translate-y-1/2 transform text-cyan-800" />
            <textarea
              onChange={(e) => onChangeHandler("details", e.target.value)}
              value={details}
              placeholder="Message"
              type="text"
              id="message"
              className="mt-1 w-full rounded border border-cyan-700 bg-white py-2 pl-10 pr-4 text-cyan-800 shadow focus:border-orange-700 focus:outline-none focus:ring-0"
            />
          </div>
        </div>
        <div className="flex w-full justify-end pt-8 2xl:pt-10">
          <SpinnerButton
            btnAction={isDisabled}
            sumbitAction={submit}
            clickAction={submitHandler}
          />
        </div>
      </form>
    </div>
  );
}
