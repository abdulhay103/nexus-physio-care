import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Top5RecentPost() {
  return (
    <section className="container flex w-full flex-col gap-10 lg:flex-row">
      <div className="w-full lg:w-3/4">
        <div className="flex w-full flex-col gap-7 lg:flex-row lg:pr-5 2xl:gap-12 2xl:pr-10">
          <div className="hover-300 w-full overflow-hidden rounded-xl shadow hover:shadow-md">
            <div className="relative h-56 w-full bg-gray-400 2xl:h-72">
              {/* <Image src={} fill className=" object-cover" alt="blog-img"/> */}
            </div>
            <div className="p-6 px-8 font-siliguri 2xl:py-10">
              <Link href={`/blog/?slug`} className="font-h3 text-cyan-700">
                স্ট্রোকের পর ফিজিওথেরাপি গুরুত্বপূর্ণ ও কার্যকরী চিকিৎসা
              </Link>
              <p className="py-3 text-gray-600 lg:py-4 2xl:py-5">
                ফিজিওথেরাপি এই ধরণের রোগীদের নড়াচড়া করতে শিখতে সাহায্য করতে
                পারে যাতে এতে রোগীর দৈনন্দিন কাজকর্মে স্বাভাবিকতা ও সক্ষমতা
                ফায়ার আসে।
              </p>

              <div className="w-full py-3 2xl:py-5">
                <Link
                  href={`/blog/?slug`}
                  className="hover-300 rounded-md border-2 border-white bg-cyan-700 px-8 py-2 text-lg text-white hover:border-cyan-700 hover:bg-transparent hover:text-cyan-700"
                >
                  বিস্তারিত পড়ুন
                </Link>
              </div>
            </div>
          </div>
          <div className="hover-300 w-full overflow-hidden rounded-xl shadow hover:shadow-md">
            <div className="relative h-56 w-full bg-gray-400 2xl:h-72">
              {/* <Image src={} fill className=" object-cover" alt="blog-img"/> */}
            </div>
            <div className="p-6 px-8 font-siliguri 2xl:py-10">
              <Link href={`/blog/?slug`} className="font-h3 text-cyan-700">
                স্ট্রোকের পর ফিজিওথেরাপি গুরুত্বপূর্ণ ও কার্যকরী চিকিৎসা
              </Link>
              <p className="py-3 text-gray-600 lg:py-4 2xl:py-5">
                ফিজিওথেরাপি এই ধরণের রোগীদের নড়াচড়া করতে শিখতে সাহায্য করতে
                পারে যাতে এতে রোগীর দৈনন্দিন কাজকর্মে স্বাভাবিকতা ও সক্ষমতা
                ফায়ার আসে।
              </p>

              <div className="w-full py-3 2xl:py-5">
                <Link
                  href={`/blog/?slug`}
                  className="hover-300 rounded-md border-2 border-white bg-cyan-700 px-8 py-2 text-lg text-white hover:border-cyan-700 hover:bg-transparent hover:text-cyan-700"
                >
                  বিস্তারিত পড়ুন
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/4">
        <div className="py-3 font-siliguri 2xl:py-5">
          <Link href={`/blog/?slug`} className="font-h3 text-cyan-700">
            স্ট্রোকের পর ফিজিওথেরাপি গুরুত্বপূর্ণ ও কার্যকরী চিকিৎসা
          </Link>
          <p className="py-3 text-gray-600 lg:py-4 2xl:py-5">
            ফিজিওথেরাপি এই ধরণের রোগীদের নড়াচড়া করতে শিখতে সাহায্য করতে পারে
            যাতে এতে রোগীর দৈনন্দিন কাজকর্মে স্বাভাবিকতা ও সক্ষমতা ফায়ার আসে।
          </p>
          <Link
            href={`/blog/?slug`}
            className="hover-300 text-lg font-medium text-cyan-700 underline underline-offset-4 hover:text-orange-600"
          >
            বিস্তারিত পড়ুন
          </Link>
        </div>
        <div className="py-3 font-siliguri 2xl:py-5">
          <Link href={`/blog/?slug`} className="font-h3 text-cyan-700">
            স্ট্রোকের পর ফিজিওথেরাপি গুরুত্বপূর্ণ ও কার্যকরী চিকিৎসা
          </Link>
          <p className="py-3 text-gray-600 lg:py-4 2xl:py-5">
            ফিজিওথেরাপি এই ধরণের রোগীদের নড়াচড়া করতে শিখতে সাহায্য করতে পারে
            যাতে এতে রোগীর দৈনন্দিন কাজকর্মে স্বাভাবিকতা ও সক্ষমতা ফায়ার আসে।
          </p>
          <Link
            href={`/blog/?slug`}
            className="hover-300 text-lg font-medium text-cyan-700 underline underline-offset-4 hover:text-orange-600"
          >
            বিস্তারিত পড়ুন
          </Link>
        </div>
      </div>
    </section>
  );
}
