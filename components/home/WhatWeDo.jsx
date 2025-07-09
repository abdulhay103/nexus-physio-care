import Image from "next/image";
import groupTherapy from "/public/home/group-therapy.png";

export default function WhatWeDo() {
  return (
    <section className="section-padding-minimal container">
      <div className="justify-between lg:flex lg:flex-row-reverse">
        <div className="pb-3 lg:pb-0 lg:pt-20 2xl:pt-10">
          <h1 className="font-h1 text-center font-siliguri text-cyan-800 lg:w-[550px] 2xl:w-[700px]">
            আমরা আপনার সমস্যার প্রকৃত কারণ এসেসমেন্ট করে সেই বিষয়ে এক্সপার্ট
            ফিজিওথেরাপিস্ট দিয়ে সেবা প্রদান করে থাকি।
          </h1>
        </div>
        <div className="w-full">
          <div className="relative h-[370px] w-[370px] lg:h-[480px] lg:w-[480px] 2xl:h-[550px] 2xl:w-[550px]">
            <Image
              src={groupTherapy}
              alt="group-therapy"
              className="object-cover"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}
