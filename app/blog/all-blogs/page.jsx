import BlogBreadCrumb from "@/components/shared/breadcrumb/BlogBreadCrumb";
import { FaFacebookF, FaInstagram, FaUser, FaYoutube } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import { GoDiscussionOutdated } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

export default function allBlogs() {
  return (
    <main className="bg-gradient-to-t from-transparent via-slate-50 to-transparent">
      <BlogBreadCrumb text="Search Result" pathNames="/blog/all-blogs" />
      <section className="section-padding container">
        <div className="lg:gap-26 flex w-full flex-col gap-16 lg:flex-row 2xl:gap-28">
          <div className="w-full lg:w-2/3">
            <div className="w-full pb-6 lg:pb-10 xl:pb-12">
              <div className="relative my-3 h-64 w-full rounded-md bg-gray-500 lg:h-[350px] 2xl:h-[480px]">
                {/* <Image src={} fill className=" object-cover" alt="blog-img"/> */}
              </div>
              <Link
                href={`/blog/slug`}
                className="font-h2 font-siliguri text-cyan-700"
              >
                স্ট্রোকের পর ফিজিওথেরাপি গুরুত্বপূর্ণ ও কার্যকরী চিকিৎসা
              </Link>
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
                ফিজিওথেরাপি এই ধরণের রোগীদের নড়াচড়া করতে শিখতে সাহায্য করতে
                পারে যাতে এতে রোগীর দৈনন্দিন কাজকর্মে স্বাভাবিকতা ও সক্ষমতা
                ফায়ার আসে।
              </p>
              <div className="py-5">
                <Link
                  href={`/blog/slug`}
                  className="hover-300 rounded-md bg-cyan-700 px-8 py-3 font-siliguri text-lg font-bold text-white hover:text-orange-400 hover:underline hover:underline-offset-4 lg:text-xl 2xl:px-10 2xl:py-4"
                >
                  বিস্তারিত পড়ুন
                </Link>
              </div>
            </div>
            <div className="w-full pb-6 lg:pb-10 xl:pb-12">
              <div className="relative my-3 h-64 w-full rounded-md bg-gray-500 lg:h-[350px] 2xl:h-[480px]">
                {/* <Image src={} fill className=" object-cover" alt="blog-img"/> */}
              </div>
              <Link
                href={`/blog/slug`}
                className="font-h2 font-siliguri text-cyan-700"
              >
                স্ট্রোকের পর ফিজিওথেরাপি গুরুত্বপূর্ণ ও কার্যকরী চিকিৎসা
              </Link>
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
                ফিজিওথেরাপি এই ধরণের রোগীদের নড়াচড়া করতে শিখতে সাহায্য করতে
                পারে যাতে এতে রোগীর দৈনন্দিন কাজকর্মে স্বাভাবিকতা ও সক্ষমতা
                ফায়ার আসে।
              </p>
              <div className="py-5">
                <Link
                  href={`/blog/slug`}
                  className="hover-300 rounded-md bg-cyan-700 px-8 py-3 font-siliguri text-lg font-bold text-white hover:text-orange-400 hover:underline hover:underline-offset-4 lg:text-xl 2xl:px-10 2xl:py-4"
                >
                  বিস্তারিত পড়ুন
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <div className="rounded-md border border-gray-400 p-6 shadow">
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  <div className="h-1 w-8 rounded-full bg-cyan-700"></div>
                  <div className="h-[5px] w-[5px] rounded-full bg-cyan-700"></div>
                </div>
                <h3 className="font-h3 font-siliguri font-black text-cyan-700">
                  নতুন পোস্ট
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
