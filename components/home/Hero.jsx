import Image from "next/image";
import React from "react";
import HeroImage from "../../public/home/Orthopedic-amico.png";

export default function Hero() {
  return (
    <div className=" bg-gradient-to-b from-cyan-100 to-transparent min-h-screen relative">
      <div className=" absolute w-full lg:w-1/2 top-0 left-0 z-10">
        <div className=" w-4/5 lg:pl-12 mx-auto lg:pt-32 2xl:pt-52 pt-28">
          <h1 className=" text-2xl 2xl:text-5xl lg:text-[42px] leading-[1.6] font-black 2xl:leading-[1.85] 2xl:py-10 2xl:px-7 lg:leading-[1.7] border border-white text-cyan-800 rounded text-center py-4 shadow-lg">
            অভিজ্ঞ ও গ্র্যাজুয়েট ফিজিওথেরাপিস্টদের সমন্বয়ে প্রতিষ্ঠিত একটি
            পরিপূর্ণ ফিজিওথেরাপি সার্ভিস পয়েন্ট।
          </h1>
        </div>
      </div>
      <div className=" absolute right-0 top-0 w-full lg:w-1/2 min-h-screen bg-cyan-200 rounded-bl-full">
        <div className=" flex min-h-screen lg:items-center items-end lg:justify-center">
          <div className="w-80 h-80 lg:w-[500px] lg:h-[500px] 2xl:w-[600px] 2xl:h-[600px] relative">
            <Image
              src={HeroImage}
              className=" object-cover "
              alt="physio-hero-img"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
}
