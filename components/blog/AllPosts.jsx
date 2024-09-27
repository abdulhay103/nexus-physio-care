import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AllPosts() {
  return (
    <section className="section-padding-minimal container">
      <h3 className="font-h3 pb-5 pt-3 font-siliguri font-black text-cyan-800 underline underline-offset-8 lg:pb-8 lg:pt-5">
        আমাদের ব্লগ সমূহঃ
      </h3>
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="w-full font-siliguri text-cyan-700 shadow hover:shadow-md">
          <div className="relative h-40 w-full rounded-md bg-gray-400">
            {/* <Image src={} fill className=" object-cover" alt="post-img"/> */}
          </div>
          <div className="px-3 py-5">
            <Link href={`/blok/?slug`} className="font-h30">
              স্ট্রোকের পর ফিজিওথেরাপি চিকিৎসা
            </Link>
            <p className="py-3 text-gray-500">
              ফিজিওথেরাপি এই ধরণের রোগীদের নড়াচড়া করতে শিখতে সাহায্য করতে পারে
            </p>
            <Link
              href={`/blok/?slug`}
              className="hover-300 text-base font-medium underline underline-offset-2 hover:text-orange-600 lg:text-lg"
            >
              আরও পড়ুন
            </Link>
          </div>
        </div>
        <div className="w-full font-siliguri text-cyan-700 shadow hover:shadow-md">
          <div className="relative h-40 w-full rounded-md bg-gray-400">
            {/* <Image src={} fill className=" object-cover" alt="post-img"/> */}
          </div>
          <div className="px-3 py-5">
            <Link href={`/blok/?slug`} className="font-h30">
              স্ট্রোকের পর ফিজিওথেরাপি চিকিৎসা
            </Link>
            <p className="py-3 text-gray-500">
              ফিজিওথেরাপি এই ধরণের রোগীদের নড়াচড়া করতে শিখতে সাহায্য করতে পারে
            </p>
            <Link
              href={`/blok/?slug`}
              className="hover-300 text-base font-medium underline underline-offset-2 hover:text-orange-600 lg:text-lg"
            >
              আরও পড়ুন
            </Link>
          </div>
        </div>
        <div className="w-full font-siliguri text-cyan-700 shadow hover:shadow-md">
          <div className="relative h-40 w-full rounded-md bg-gray-400">
            {/* <Image src={} fill className=" object-cover" alt="post-img"/> */}
          </div>
          <div className="px-3 py-5">
            <Link href={`/blok/?slug`} className="font-h30">
              স্ট্রোকের পর ফিজিওথেরাপি চিকিৎসা
            </Link>
            <p className="py-3 text-gray-500">
              ফিজিওথেরাপি এই ধরণের রোগীদের নড়াচড়া করতে শিখতে সাহায্য করতে পারে
            </p>
            <Link
              href={`/blok/?slug`}
              className="hover-300 text-base font-medium underline underline-offset-2 hover:text-orange-600 lg:text-lg"
            >
              আরও পড়ুন
            </Link>
          </div>
        </div>
        <div className="w-full font-siliguri text-cyan-700 shadow hover:shadow-md">
          <div className="relative h-40 w-full rounded-md bg-gray-400">
            {/* <Image src={} fill className=" object-cover" alt="post-img"/> */}
          </div>
          <div className="px-3 py-5">
            <Link href={`/blok/?slug`} className="font-h30">
              স্ট্রোকের পর ফিজিওথেরাপি চিকিৎসা
            </Link>
            <p className="py-3 text-gray-500">
              ফিজিওথেরাপি এই ধরণের রোগীদের নড়াচড়া করতে শিখতে সাহায্য করতে পারে
            </p>
            <Link
              href={`/blok/?slug`}
              className="hover-300 text-base font-medium underline underline-offset-2 hover:text-orange-600 lg:text-lg"
            >
              আরও পড়ুন
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
