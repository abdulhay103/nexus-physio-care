import React from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

export default function Pricing() {
  return (
    <section className="section-padding-minimal container">
      <h2 className="font-h2 pb-10 text-center font-siliguri text-cyan-700 underline lg:pb-14 xl:pb-16 2xl:pb-20">
        আমাদের সার্ভিস প্লানসমূহঃ
      </h2>
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-0">
        <div className="w-full overflow-hidden rounded border-b-8 border-cyan-700 shadow-lg">
          <div className="rounded-b-full bg-gray-200 font-siliguri font-bold text-cyan-700">
            <h3 className="font-h3 pt-6 text-center">সাপ্তাহিক প্ল্যান</h3>
            <p className="py-4 text-center text-lg">৭ টি ফিজিওথেরাপি</p>
          </div>
          <div className="px-6 py-10 font-siliguri text-lg font-medium">
            <div className="flex w-full justify-center">
              <ol className="text-gray-600">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-lg text-cyan-700" />
                  <p>৭ (সাত) টি ফিজিওথেরাপি সেশন</p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-lg text-cyan-700" />
                  <p>১(এক) টি ফ্রি ফলোআপ সেশন</p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-lg text-cyan-700" />
                  <p>একক পেমেন্ট ব্যবস্থা</p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-lg text-cyan-700" />
                  <p>অফিসিয়াল যোগাযোগ একবার</p>
                </li>
              </ol>
            </div>
            <div className="flex w-full justify-center pt-6 lg:pt-8">
              <Link
                href={`/`}
                className="rounded-full bg-cyan-700 px-8 py-[10px] text-white lg:px-10 lg:py-3"
              >
                প্ল্যানটি নিন
              </Link>
            </div>
          </div>
        </div>
        <div className="z-10 w-full scale-110 overflow-hidden rounded border-cyan-700 bg-white shadow-lg">
          <div className="rounded-b-full bg-gradient-to-b from-cyan-900 to-cyan-700 font-siliguri text-white">
            <h3 className="font-h3 pt-6 text-center">অর্ধমাসিক প্ল্যান</h3>
            <p className="py-4 text-center text-lg">১৪ টি ফিজিওথেরাপি</p>
          </div>
          <div className="px-6 py-10 font-siliguri text-lg font-medium">
            <div className="flex w-full justify-center">
              <ol className="text-gray-600">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-lg text-cyan-700" />
                  <p>১৪(চৌদ্দ) টি ফিজিওথেরাপি সেশন</p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-lg text-cyan-700" />
                  <p>১(এক) টি ফ্রি ফলোআপ সেশন</p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-lg text-cyan-700" />
                  <p>১(এক) ফ্রি ফিজিওথেরাপি সেশন</p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-lg text-cyan-700" />
                  <p>একক পেমেন্ট ব্যবস্থা</p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-lg text-cyan-700" />
                  <p>অফিসিয়াল যোগাযোগ দুইবার</p>
                </li>
              </ol>
            </div>
            <div className="flex w-full justify-center pt-6 lg:pt-8">
              <Link
                href={`/`}
                className="rounded-full bg-cyan-700 px-8 py-[10px] text-white lg:px-10 lg:py-3"
              >
                প্ল্যানটি নিন
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden rounded border-b-8 border-cyan-700 shadow-lg">
          <div className="rounded-b-full bg-gray-200 font-siliguri font-bold text-cyan-700">
            <h3 className="font-h3 pt-6 text-center">মাসিক প্ল্যান</h3>
            <p className="py-4 text-center text-lg">২১ টি ফিজিওথেরাপি</p>
          </div>
          <div className="px-6 py-10 font-siliguri text-lg font-medium">
            <div className="flex w-full justify-center">
              <ol className="text-gray-600">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-lg text-cyan-700" />
                  <p>২১(একুশ) টি ফিজিওথেরাপি সেশন</p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-lg text-cyan-700" />
                  <p>২(দুই) টি ফ্রি ফলোআপ সেশন</p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-lg text-cyan-700" />
                  <p>২(দুই) ফ্রি ফিজিওথেরাপি সেশন</p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-lg text-cyan-700" />
                  <p>দুইবারে পেমেন্ট ব্যবস্থা</p>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-lg text-cyan-700" />
                  <p>অফিসিয়াল যোগাযোগ তিনবার</p>
                </li>
              </ol>
            </div>
            <div className="flex w-full justify-center pt-6 lg:pt-8">
              <Link
                href={`/`}
                className="rounded-full bg-cyan-700 px-8 py-[10px] text-white lg:px-10 lg:py-3"
              >
                প্ল্যানটি নিন
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
