import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { GiJamesBondAperture } from "react-icons/gi";
import { PiMapPinAreaFill } from "react-icons/pi";

export default function Counter() {
  return (
    <section className="relative h-96 w-full lg:h-40">
      <div className="absolute top-16 h-80 w-full bg-gradient-to-b from-slate-100 to-transparent lg:h-24"></div>
      <div className="absolute z-10 mx-auto w-full">
        <div className="container flex w-full flex-col gap-6 font-siliguri lg:flex-row lg:gap-0">
          <div className="flex w-full gap-6 overflow-hidden rounded-md bg-orange-100 text-cyan-800">
            <div className="flex items-center justify-center rounded-md bg-orange-400 p-6">
              <FaUserDoctor className="text-5xl text-white" />
            </div>
            <div className="py-3">
              <h2 className="font-h2 font-Kanit">
                20<span className="align-super">+</span>
              </h2>
              <h3 className="font-h3">প্রফেশনাল</h3>
            </div>
          </div>
          <div className="flex w-full gap-6 overflow-hidden rounded-md bg-orange-100 text-cyan-800">
            <div className="flex items-center justify-center rounded-md bg-orange-400 p-6">
              <GiJamesBondAperture className="text-5xl text-white" />
            </div>
            <div className="py-3">
              <h2 className="font-h2 font-Kanit">
                5<span className="align-super">+</span>
              </h2>
              <h3 className="font-h3">অভিজ্ঞতা</h3>
            </div>
          </div>
          <div className="flex w-full gap-6 overflow-hidden rounded-md bg-orange-100 text-cyan-800">
            <div className="flex items-center justify-center rounded-md bg-orange-400 p-6">
              <PiMapPinAreaFill className="text-5xl text-white" />
            </div>
            <div className="py-3">
              <h2 className="font-h2 font-Kanit">
                10<span className="align-super">+</span>
              </h2>
              <h3 className="font-h3">এরিয়া কভারেজ</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
