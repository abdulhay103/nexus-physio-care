import BlogBreadCrumb from "@/components/shared/breadcrumb/BlogBreadCrumb";
import { FaFacebookF, FaInstagram, FaUser, FaYoutube } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import { GoDiscussionOutdated } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

export default function blogDetails({ params }) {
  const slug = params.slug;
  return (
    <main className="bg-gradient-to-t from-transparent via-slate-50 to-transparent">
      <BlogBreadCrumb text={slug} pathNames="/blog/blog-details" />
      <section className="section-padding container">
        <div className="lg:gap-26 flex w-full flex-col gap-16 lg:flex-row 2xl:gap-28">
          <div className="w-full lg:w-2/3">
            <h2 className="font-h2 font-siliguri text-cyan-700">
              স্ট্রোকের পর ফিজিওথেরাপি গুরুত্বপূর্ণ ও কার্যকরী চিকিৎসা
            </h2>
            <div className="grid w-full gap-3 py-3 font-siliguri font-medium text-gray-500 lg:grid-flow-col lg:gap-6">
              <div className="flex items-baseline gap-2">
                <FaUser className="h-4 w-4" />
                <p>Arif Anwar</p>
              </div>
              <div className="flex items-center gap-2">
                <IoMdPricetags className="h-5 w-5" />
                <p>Strock & Paralysis</p>
              </div>
              <div className="flex items-center gap-2">
                <GoDiscussionOutdated className="h-5 w-5" />
                <p>28th Sep, 2024</p>
              </div>
            </div>
            <p className="py-3 font-siliguri text-[17px] font-medium leading-8 text-gray-500">
              ফিজিওথেরাপি এই ধরণের রোগীদের নড়াচড়া করতে শিখতে সাহায্য করতে পারে
              যাতে এতে রোগীর দৈনন্দিন কাজকর্মে স্বাভাবিকতা ও সক্ষমতা ফায়ার আসে।
            </p>
            <div className="relative my-3 h-64 w-full rounded-md bg-gray-500 lg:h-[350px] 2xl:h-[480px]">
              {/* <Image src={} fill className=" object-cover" alt="blog-img"/> */}
            </div>
            <p className="py-4 text-justify font-siliguri text-[17px] font-medium leading-8 text-gray-500">
              ফিজিওথেরাপি চিকিৎসা: ফিজিওথেরাপি চিকিৎসায় প্রথমে রোগীর রোগ বর্ণনা,
              শারীরিক পরীক্ষাসহ, বিভিন্ন রেডিওলজিক্যাল ও প্যাথলজিক্যাল পরীক্ষার
              মাধ্যমে কী ধরনের স্ট্রোক, কী ধরনের শারীরিক সমস্যা আছে তা নির্ণয়
              করা হয়। এরপর রোগীর সমস্যা অনুযায়ী স্বল্পমেয়াদি ও দীর্ঘমেয়াদি
              এভিডেন্স বেইজড ফিজিওথেরাপি চিকিৎসার পরিকল্পনা করা হয়। এর মধ্যে
              প্রাথমিক পর্যায়ে রোগীর শ্বাস-প্রশ্বাস স্বাভাবিক করা, সঠিক পজিশনিং
              ও মাংসপেশির স্বাভাবিক দৈর্ঘ্য বজায় রাখার ওপর গুরুত্ব দেওয়া হয়।
              পরবর্তীতে মাংসপেশির স্বাভাবিক টান ফিরিয়ে আনা, হাত ও পায়ের শক্তি
              ফিরিয়ে আনা, শরীরের স্বাভাবিক অ্যালাইনমেন্ট ফিরিয়ে আনা, শরীরের
              বিভিন্ন জয়েন্ট বা অস্থিসন্ধির নড়াচড়া করার ক্ষমতা ফিরিয়ে আনা,
              ব্যালেন্স ও কো-অর্ডিনেশন উন্নত করা, স্বাভাবিক হাঁটার ক্ষমতা ফিরিয়ে
              আনা এবং সর্বোপরি রোগীর কর্মদক্ষতা বাড়ানো হয় ফিজিওথেরাপির মাধ্যমে।
              এক্ষেত্রে বিভিন্ন ধরনের গবেষণালব্ধ পদ্ধতি বা ধারণা ব্যবহার করা হয়।
              এর মধ্যে এনডিটি অ্যাপ্রোচ বা নিউরো ডেভেলপমেন্টাল থেরাপি, কারেন্ট
              শেফার্ড অ্যাপ্রোচ, মোটর লার্নিং স্ট্র্যাটেজি, রুট অ্যাপ্রোচ
              জনপ্রিয়। স্ট্রোক আক্রান্ত রোগীর চিকিৎসা, ফিজিওথেরাপি ও সুস্থ হওয়ার
              ক্ষেত্রে বয়স গুরুত্বপূর্ণ। যাদের বয়স একটু কম, তাদের উন্নতি অনেক
              বেশি দেখা যায়। ৫০ বছরের বেশি বয়স যাদের, তাদের সুস্থ-স্বাভাবিক হতে
              সময় লাগে। বয়সের সঙ্গে সঙ্গে শরীরে রোগপ্রতিরোধ ক্ষমতা কমে যায়,
              বয়সের কারণে পেশির কোষ কমে যায়, ক্ষয়জনিত বিভিন্ন সমস্যার ও বিভিন্ন
              রোগের কারণে সম্পূর্ণ সুস্থ হতে সময় লাগে, পুরোপুরি সুস্থতাও সম্ভব
              হয় না অনেক সময়। ডা. আইনুর নিশাদ বলেন, যেকোনো বয়সেই স্ট্রোক হোক না
              কেন, ফিজিওথেরাপি নেওয়া জরুরি। তা না হলে বিভিন্ন জটিলতা দেখা দিতে
              পারে পরবর্তীতে। যেমন: রোগীর হাত ও পা বেঁকে যেতে পারে, জয়েন্ট
              স্টিভনেস বা অস্থিসন্ধিগুলোর স্বাভাবিক চলাচল ব্যাহত হতে পারে,
              শ্বাস-প্রশ্বাসজনিত বিভিন্ন জটিলতা দেখা দিতে পারে, রোগীর স্বাভাবিক
              চলাফেরা এবং হাঁটাচলার ক্ষমতা হারিয়ে ফেলতে পারেন, কর্মদক্ষতা আংশিক
              বা সম্পূর্ণ বাঁধাগ্রস্ত হতে পারে বা হ্রাস পেতে পারে। পরনির্ভরশীল
              জীবনযাপন করতে হতে পারে। সতর্ক থাকতে হবে যে, আমাদের দেশে বিভিন্ন
              স্থানে ফিজিওথেরাপি চিকিৎসার নামে অপচিকিৎসা দেওয়া হয়। স্ট্রোকের
              রোগীদের হিট, ভাইব্রেশন, স্টিমুলেশন দেওয়া যাবে না। অনেক সময় মালিশ
              করা হয়, সেটিও করা যাবে না। ভুল ফিজিওথেরাপির চিকিৎসা হিতে বিপরীত
              হতে পারে রোগীর জন্য। তাই অবশ্যই একজন বিশেষজ্ঞ ফিজিওথেরাপি
              চিকিৎসকের পরামর্শ অনুযায়ী চিকিৎসা নিতে হবে।
            </p>
          </div>
          <div className="w-full lg:w-1/3">
            <div className="rounded-md border border-gray-400 p-6 shadow">
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  <div className="h-1 w-8 rounded-full bg-cyan-700"></div>
                  <div className="h-[5px] w-[5px] rounded-full bg-cyan-700"></div>
                </div>
                <h3 className="font-h3 font-siliguri font-black text-cyan-700">
                  জনপ্রিয় ফিড
                </h3>
              </div>
              <div className="border-b border-gray-300 pt-6 2xl:pt-7">
                <div className="flex w-full items-center gap-4 2xl:gap-6">
                  <div className="relative h-11 w-16 rounded bg-slate-500 lg:h-10 2xl:h-14 2xl:w-20">
                    {/* <Image src={} fill className=" object-cover" alt="blog-img"/> */}
                  </div>
                  <div className="w-4/5 font-siliguri font-medium leading-6 text-cyan-800">
                    <Link href="/blog/slug" className="">
                      স্ট্রোকের পর ফিজিওথেরাপি গুরুত্বপূর্ণ ও কার্যকরী চিকিৎসা
                    </Link>
                  </div>
                </div>
                <div className="grid w-full grid-flow-col gap-2 py-3 font-siliguri font-medium text-gray-500 lg:gap-6 lg:py-2 2xl:py-3">
                  <div className="flex items-center gap-2">
                    <IoMdPricetags className="h-5 w-5" />
                    <p>Strock & Paralysis</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <GoDiscussionOutdated className="h-5 w-5" />
                    <p>28th Sep, 2024</p>
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-300 pt-6 2xl:pt-7">
                <div className="flex w-full items-center gap-4 2xl:gap-6">
                  <div className="relative h-11 w-16 rounded bg-slate-500 lg:h-10 2xl:h-14 2xl:w-20">
                    {/* <Image src={} fill className=" object-cover" alt="blog-img"/> */}
                  </div>
                  <div className="w-4/5 font-siliguri font-medium leading-6 text-cyan-800">
                    <Link href="/blog/slug" className="">
                      স্ট্রোকের পর ফিজিওথেরাপি গুরুত্বপূর্ণ ও কার্যকরী চিকিৎসা
                    </Link>
                  </div>
                </div>
                <div className="grid w-full grid-flow-col gap-2 py-3 font-siliguri font-medium text-gray-500 lg:gap-6 lg:py-2 2xl:py-3">
                  <div className="flex items-center gap-2">
                    <IoMdPricetags className="h-5 w-5" />
                    <p>Strock & Paralysis</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <GoDiscussionOutdated className="h-5 w-5" />
                    <p>28th Sep, 2024</p>
                  </div>
                </div>
              </div>
              <div className="pt-6 2xl:pt-7">
                <div className="flex w-full items-center gap-4 2xl:gap-6">
                  <div className="relative h-11 w-16 rounded bg-slate-500 lg:h-10 2xl:h-14 2xl:w-20">
                    {/* <Image src={} fill className=" object-cover" alt="blog-img"/> */}
                  </div>
                  <div className="w-4/5 font-siliguri font-medium leading-6 text-cyan-800">
                    <Link href="/blog/slug" className="">
                      স্ট্রোকের পর ফিজিওথেরাপি গুরুত্বপূর্ণ ও কার্যকরী চিকিৎসা
                    </Link>
                  </div>
                </div>
                <div className="grid w-full grid-flow-col gap-2 py-3 font-siliguri font-medium text-gray-500 lg:gap-6 lg:py-2 2xl:py-3">
                  <div className="flex items-center gap-2">
                    <IoMdPricetags className="h-5 w-5" />
                    <p>Strock & Paralysis</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <GoDiscussionOutdated className="h-5 w-5" />
                    <p>28th Sep, 2024</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-6 rounded-md border border-gray-400 p-6 shadow lg:my-10 2xl:my-14">
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  <div className="h-1 w-8 rounded-full bg-cyan-700"></div>
                  <div className="h-[5px] w-[5px] rounded-full bg-cyan-700"></div>
                </div>
                <h3 className="font-h3 font-siliguri font-black text-cyan-700">
                  ক্যাটাগরিজ
                </h3>
              </div>
              <div className="hover-300 mt-4 flex w-full items-center justify-between overflow-hidden rounded bg-orange-100 pl-5 font-siliguri text-lg font-bold text-cyan-700 hover:text-amber-700">
                <Link href="/blog/all-blogs">কোমর বা পিঠ ব্যথা</Link>
                <div className="flex h-12 w-14 items-center justify-center bg-cyan-700 text-white 2xl:h-14 2xl:w-16">
                  <p className="text-2xl">15</p>
                </div>
              </div>
              <div className="hover-300 mt-4 flex w-full items-center justify-between overflow-hidden rounded bg-orange-100 pl-5 font-siliguri text-lg font-bold text-cyan-700 hover:text-amber-700">
                <Link href="/blog/all-blogs">ঘাড় বা সৌল্ডার ব্যথা</Link>
                <div className="flex h-12 w-14 items-center justify-center bg-cyan-700 text-white 2xl:h-14 2xl:w-16">
                  <p className="text-2xl">8</p>
                </div>
              </div>
              <div className="hover-300 mt-4 flex w-full items-center justify-between overflow-hidden rounded bg-orange-100 pl-5 font-siliguri text-lg font-bold text-cyan-700 hover:text-amber-700">
                <Link href="/blog/all-blogs">হাটু ও গোড়ালি ব্যথা</Link>
                <div className="flex h-12 w-14 items-center justify-center bg-cyan-700 text-white 2xl:h-14 2xl:w-16">
                  <p className="text-2xl">5</p>
                </div>
              </div>
              <div className="hover-300 mt-4 flex w-full items-center justify-between overflow-hidden rounded bg-orange-100 pl-5 font-siliguri text-lg font-bold text-cyan-700 hover:text-amber-700">
                <Link href="/blog/all-blogs">জয়েন্ট বা মাংসপেশি ব্যথা</Link>
                <div className="flex h-12 w-14 items-center justify-center bg-cyan-700 text-white 2xl:h-14 2xl:w-16">
                  <p className="text-2xl">10</p>
                </div>
              </div>
              <div className="hover-300 mt-4 flex w-full items-center justify-between overflow-hidden rounded bg-orange-100 pl-5 font-siliguri text-lg font-bold text-cyan-700 hover:text-amber-700">
                <Link href="/blog/all-blogs">স্ট্রোক বা প্যারালাইসিস</Link>
                <div className="flex h-12 w-14 items-center justify-center bg-cyan-700 text-white 2xl:h-14 2xl:w-16">
                  <p className="text-2xl">25</p>
                </div>
              </div>
            </div>
            <div className="my-6 rounded-md border border-gray-400 p-6 shadow lg:my-10 2xl:my-14">
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  <div className="h-1 w-8 rounded-full bg-cyan-700"></div>
                  <div className="h-[5px] w-[5px] rounded-full bg-cyan-700"></div>
                </div>
                <h3 className="font-h3 font-siliguri font-black text-cyan-700">
                  সোশ্যাল মিডিয়া
                </h3>
              </div>
              <div className="mt-4 flex w-full gap-5 2xl:mt-6">
                <Link
                  href={"https://www.facebook.com/nexusphysiocare"}
                  target="_blank"
                  className="hover-300 flex h-9 w-9 items-center justify-center rounded-full bg-gray-300 text-gray-700 hover:bg-gray-200 hover:text-blue-700"
                >
                  <FaFacebookF className="h-[18px] w-[18px] 2xl:h-5 2xl:w-5" />
                </Link>
                <Link
                  href={"https://www.facebook.com/nexusphysiocare"}
                  target="_blank"
                  className="hover-300 flex h-9 w-9 items-center justify-center rounded-full bg-gray-300 text-gray-700 hover:bg-gray-200 hover:text-gray-800"
                >
                  <FaXTwitter className="h-[18px] w-[18px] 2xl:h-5 2xl:w-5" />
                </Link>
                <Link
                  href={"https://www.facebook.com/nexusphysiocare"}
                  target="_blank"
                  className="hover-300 flex h-9 w-9 items-center justify-center rounded-full bg-gray-300 text-gray-700 hover:bg-gray-200 hover:text-pink-700"
                >
                  <FaInstagram className="h-[18px] w-[18px] 2xl:h-5 2xl:w-5" />
                </Link>
                <Link
                  href={"https://www.facebook.com/nexusphysiocare"}
                  target="_blank"
                  className="hover-300 flex h-9 w-9 items-center justify-center rounded-full bg-gray-300 text-gray-700 hover:bg-gray-200 hover:text-red-700"
                >
                  <FaYoutube className="h-[18px] w-[18px] 2xl:h-5 2xl:w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
