import Image from "next/image";
import LBP from "/public/services/back-pain.png";
import cervicalPain from "/public/services/cervical-pain.png";
import kneePain from "/public/services/knee-pain.png";
import shoulderPain from "/public/services/shoulder-pain.png";
import arthritis from "/public/services/arthritis.png";
import musclePain from "/public/services/muscle-pain.png";
import parkinsons from "/public/services/parkinsons.png";
import paralysis from "/public/services/paralysis.png";
import Link from "next/link";
import Pricing from "@/components/pricing/Pricing";
import ContactCTA from "@/components/shared/ContactCTA";

export default function ServicePage() {
  return (
    <section className="">
      <div className="bg-gradient-to-b from-transparent via-cyan-50 to-transparent">
        <div className="container py-10 lg:py-12 xl:py-16">
          <div className="mx-auto w-full lg:w-4/5 xl:w-9/12">
            <h2 className="font-h2 text-center font-siliguri text-green-700">
              নেক্সাস ফিজিও কেয়ার সর্বোচ্চ সফলতার উদ্দেশ্যে ফিজিওথেরাপি সেবা
              প্রদান করে আসছে। আমাদের সেবাসমূহঃ
            </h2>
          </div>
          <div className="grid grid-cols-12 gap-6 pt-10 font-siliguri lg:gap-7 lg:pt-12 xl:pt-16 2xl:gap-10">
            <div className="hover-500 col-span-12 rounded-md border px-6 py-10 text-center text-orange-700 shadow-lg hover:bg-cyan-700 hover:text-white lg:col-span-4">
              <div className="flex items-center justify-center gap-5">
                <div className="flex justify-center pb-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-cyan-800 bg-slate-200 lg:h-20 lg:w-20">
                    <Image
                      src={LBP}
                      fill
                      className="object-cover p-1"
                      alt="back-pain"
                    />
                  </div>
                </div>
                <h2 className="font-h2 font-siliguri">কোমর ব্যথা</h2>
              </div>
              <h4 className="font-h4 py-2">
                উঁচু থেকে পড়ে যাওয়া, পেশির ব্যথা, মেরুদণ্ডের ডিস্কে চোট কিংবা
                সাইটিকা, অস্টিয়োপোরোসিসের মতো রোগ থেকেও কোমরে তীব্র যন্ত্রণা
                হতে পারে।
              </h4>
              <div className="pb- pt-8">
                <Link
                  href="/"
                  className="hover-300 rounded border-2 border-white bg-cyan-700 px-7 py-[10px] text-lg text-white hover:bg-cyan-800 lg:text-xl"
                >
                  আরও পড়ুন
                </Link>
              </div>
            </div>
            <div className="hover-500 col-span-12 rounded-md border px-6 py-10 text-center text-orange-700 shadow-lg hover:bg-cyan-700 hover:text-white lg:col-span-4">
              <div className="flex items-center justify-center gap-5">
                <div className="flex justify-center pb-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-cyan-800 bg-slate-200 lg:h-20 lg:w-20">
                    <Image
                      src={cervicalPain}
                      fill
                      className="object-cover p-1"
                      alt="back-pain"
                    />
                  </div>
                </div>
                <h2 className="font-h2 font-siliguri">ঘাড় ব্যথা</h2>
              </div>
              <h4 className="font-h4 py-2">
                উঁচু থেকে পড়ে যাওয়া, পেশির ব্যথা, মেরুদণ্ডের ডিস্কে চোট কিংবা
                সাইটিকা, অস্টিয়োপোরোসিসের মতো রোগ থেকেও কোমরে তীব্র যন্ত্রণা
                হতে পারে।
              </h4>
              <div className="pb- pt-8">
                <Link
                  href="/"
                  className="hover-300 rounded border-2 border-white bg-cyan-700 px-7 py-[10px] text-lg text-white hover:bg-cyan-800 lg:text-xl"
                >
                  আরও পড়ুন
                </Link>
              </div>
            </div>
            <div className="hover-500 col-span-12 rounded-md border px-6 py-10 text-center text-orange-700 shadow-lg hover:bg-cyan-700 hover:text-white lg:col-span-4">
              <div className="flex items-center justify-center gap-5">
                <div className="flex justify-center pb-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-cyan-800 bg-slate-200 lg:h-20 lg:w-20">
                    <Image
                      src={shoulderPain}
                      fill
                      className="object-cover p-1"
                      alt="back-pain"
                    />
                  </div>
                </div>
                <h2 className="font-h2 font-siliguri">কাঁধ ব্যথা</h2>
              </div>
              <h4 className="font-h4 py-2">
                উঁচু থেকে পড়ে যাওয়া, পেশির ব্যথা, মেরুদণ্ডের ডিস্কে চোট কিংবা
                সাইটিকা, অস্টিয়োপোরোসিসের মতো রোগ থেকেও কোমরে তীব্র যন্ত্রণা
                হতে পারে।
              </h4>
              <div className="pb- pt-8">
                <Link
                  href="/"
                  className="hover-300 rounded border-2 border-white bg-cyan-700 px-7 py-[10px] text-lg text-white hover:bg-cyan-800 lg:text-xl"
                >
                  আরও পড়ুন
                </Link>
              </div>
            </div>
            <div className="hover-500 col-span-12 rounded-md border px-6 py-10 text-center text-orange-700 shadow-lg hover:bg-cyan-700 hover:text-white lg:col-span-4">
              <div className="flex items-center justify-center gap-5">
                <div className="flex justify-center pb-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-cyan-800 bg-slate-200 lg:h-20 lg:w-20">
                    <Image
                      src={kneePain}
                      fill
                      className="object-cover p-1"
                      alt="back-pain"
                    />
                  </div>
                </div>
                <h2 className="font-h2 font-siliguri">হাঁটু ব্যথা</h2>
              </div>
              <h4 className="font-h4 py-2">
                উঁচু থেকে পড়ে যাওয়া, পেশির ব্যথা, মেরুদণ্ডের ডিস্কে চোট কিংবা
                সাইটিকা, অস্টিয়োপোরোসিসের মতো রোগ থেকেও কোমরে তীব্র যন্ত্রণা
                হতে পারে।
              </h4>
              <div className="pb- pt-8">
                <Link
                  href="/"
                  className="hover-300 rounded border-2 border-white bg-cyan-700 px-7 py-[10px] text-lg text-white hover:bg-cyan-800 lg:text-xl"
                >
                  আরও পড়ুন
                </Link>
              </div>
            </div>
            <div className="hover-500 col-span-12 rounded-md border px-6 py-10 text-center text-orange-700 shadow-lg hover:bg-cyan-700 hover:text-white lg:col-span-4">
              <div className="flex items-center justify-center gap-5">
                <div className="flex justify-center pb-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-cyan-800 bg-slate-200 lg:h-20 lg:w-20">
                    <Image
                      src={musclePain}
                      fill
                      className="object-cover p-1"
                      alt="back-pain"
                    />
                  </div>
                </div>
                <h2 className="font-h2 font-siliguri">মাংসপেশি ব্যথা</h2>
              </div>
              <h4 className="font-h4 py-2">
                উঁচু থেকে পড়ে যাওয়া, পেশির ব্যথা, মেরুদণ্ডের ডিস্কে চোট কিংবা
                সাইটিকা, অস্টিয়োপোরোসিসের মতো রোগ থেকেও কোমরে তীব্র যন্ত্রণা
                হতে পারে।
              </h4>
              <div className="pb- pt-8">
                <Link
                  href="/"
                  className="hover-300 rounded border-2 border-white bg-cyan-700 px-7 py-[10px] text-lg text-white hover:bg-cyan-800 lg:text-xl"
                >
                  আরও পড়ুন
                </Link>
              </div>
            </div>
            <div className="hover-500 col-span-12 rounded-md border px-6 py-10 text-center text-orange-700 shadow-lg hover:bg-cyan-700 hover:text-white lg:col-span-4">
              <div className="flex items-center justify-center gap-5">
                <div className="flex justify-center pb-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-cyan-800 bg-slate-200 lg:h-20 lg:w-20">
                    <Image
                      src={arthritis}
                      fill
                      className="object-cover p-1"
                      alt="back-pain"
                    />
                  </div>
                </div>
                <h2 className="font-h2 font-siliguri">অস্টিওআর্থাইটিস</h2>
              </div>
              <h4 className="font-h4 py-2">
                উঁচু থেকে পড়ে যাওয়া, পেশির ব্যথা, মেরুদণ্ডের ডিস্কে চোট কিংবা
                সাইটিকা, অস্টিয়োপোরোসিসের মতো রোগ থেকেও কোমরে তীব্র যন্ত্রণা
                হতে পারে।
              </h4>
              <div className="pb- pt-8">
                <Link
                  href="/"
                  className="hover-300 rounded border-2 border-white bg-cyan-700 px-7 py-[10px] text-lg text-white hover:bg-cyan-800 lg:text-xl"
                >
                  আরও পড়ুন
                </Link>
              </div>
            </div>
            <div className="hover-500 col-span-12 rounded-md border px-6 py-10 text-center text-orange-700 shadow-lg hover:bg-cyan-700 hover:text-white lg:col-span-4">
              <div className="flex items-center justify-center gap-5">
                <div className="flex justify-center pb-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-cyan-800 bg-slate-200 lg:h-20 lg:w-20">
                    <Image
                      src={parkinsons}
                      fill
                      className="object-cover p-1"
                      alt="back-pain"
                    />
                  </div>
                </div>
                <h2 className="font-h2 font-siliguri">পার্কিনসন্স ডিজিস</h2>
              </div>
              <h4 className="font-h4 py-2">
                উঁচু থেকে পড়ে যাওয়া, পেশির ব্যথা, মেরুদণ্ডের ডিস্কে চোট কিংবা
                সাইটিকা, অস্টিয়োপোরোসিসের মতো রোগ থেকেও কোমরে তীব্র যন্ত্রণা
                হতে পারে।
              </h4>
              <div className="pb- pt-8">
                <Link
                  href="/"
                  className="hover-300 rounded border-2 border-white bg-cyan-700 px-7 py-[10px] text-lg text-white hover:bg-cyan-800 lg:text-xl"
                >
                  আরও পড়ুন
                </Link>
              </div>
            </div>
            <div className="hover-500 col-span-12 rounded-md border px-6 py-10 text-center text-orange-700 shadow-lg hover:bg-cyan-700 hover:text-white lg:col-span-4">
              <div className="flex items-center justify-center gap-5">
                <div className="flex justify-center pb-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-cyan-800 bg-slate-200 lg:h-20 lg:w-20">
                    <Image
                      src={paralysis}
                      fill
                      className="object-cover p-1"
                      alt="back-pain"
                    />
                  </div>
                </div>
                <h2 className="font-h2 font-siliguri">প্যারালাইসিস</h2>
              </div>
              <h4 className="font-h4 py-2">
                উঁচু থেকে পড়ে যাওয়া, পেশির ব্যথা, মেরুদণ্ডের ডিস্কে চোট কিংবা
                সাইটিকা, অস্টিয়োপোরোসিসের মতো রোগ থেকেও কোমরে তীব্র যন্ত্রণা
                হতে পারে।
              </h4>
              <div className="pb- pt-8">
                <Link
                  href="/"
                  className="hover-300 rounded border-2 border-white bg-cyan-700 px-7 py-[10px] text-lg text-white hover:bg-cyan-800 lg:text-xl"
                >
                  আরও পড়ুন
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pricing />
      <ContactCTA />
    </section>
  );
}
