import Image from "next/image";
import React from "react";
import HeroImage from "../../public/home/Orthopedic-amico.png";

export default function Hero() {
  return (
    <section className="relative h-[700px] bg-gradient-to-b from-cyan-100 to-transparent lg:min-h-screen">
      <div className="absolute left-0 top-0 z-10 w-full lg:w-1/2">
        <div className="mx-auto w-4/5 pt-36 lg:pl-12 lg:pt-40 xl:pt-44 2xl:pt-64">
          <h1 className="font-h1 rounded border border-white py-4 text-center text-cyan-800 shadow-lg">
            অভিজ্ঞ ও গ্র্যাজুয়েট ফিজিওথেরাপিস্টদের সমন্বয়ে প্রতিষ্ঠিত একটি
            পরিপূর্ণ ফিজিওথেরাপি সার্ভিস পয়েন্ট।
          </h1>
        </div>
      </div>
      <div className="absolute right-0 top-0 h-[700px] w-full rounded-bl-full bg-cyan-200 lg:min-h-screen lg:w-1/2">
        <div className="flex h-[700px] items-end lg:min-h-screen lg:items-center lg:justify-center">
          <div className="relative mx-auto h-80 w-80 lg:h-[500px] lg:w-[500px] 2xl:h-[600px] 2xl:w-[600px]">
            <Image
              src={HeroImage}
              className="object-cover"
              alt="physio-hero-img"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}
