import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BottomPost() {
  return (
    <section className="section-padding-minimal container">
      <div className="flex w-full flex-col lg:flex-row lg:gap-16 2xl:gap-20">
        <div className="w-full">
          <div className="py-3 font-siliguri 2xl:py-5">
            <Link href={`/blog/?slug`} className="font-h3 text-cyan-700">
              স্ট্রোকের পর ফিজিওথেরাপি গুরুত্বপূর্ণ ও কার্যকরী চিকিৎসা
            </Link>
            <p className="py-3 text-gray-600 lg:py-4 2xl:py-5">
              ফিজিওথেরাপি এই ধরণের রোগীদের নড়াচড়া করতে শিখতে সাহায্য করতে পারে
              যাতে এতে রোগীর দৈনন্দিন কাজকর্মে স্বাভাবিকতা ও সক্ষমতা ফায়ার আসে।
            </p>
            <p className="pb-3 text-gray-600 lg:pb-4 2xl:pb-5">
              ফিজিওথেরাপি এই ধরণের রোগীদের নড়াচড়া করতে শিখতে সাহায্য করতে পারে
              যাতে এতে রোগীর দৈনন্দিন কাজকর্মে স্বাভাবিকতা ও সক্ষমতা ফায়ার আসে।
            </p>
            <Link
              href={`/blog/?slug`}
              className="hover-300 text-lg font-semibold text-cyan-700 underline underline-offset-4 hover:text-orange-600"
            >
              বিস্তারিত পড়ুন
            </Link>
          </div>
        </div>
        <div className="w-full">
          <div className="relative h-72 w-full rounded-md bg-gray-500">
            {/* <Image src={} fill className=" object-cover" alt="post-img"/> */}
          </div>
        </div>
      </div>
    </section>
  );
}
