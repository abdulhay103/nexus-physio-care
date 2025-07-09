import Link from "next/link";
import { FaEnvelopeOpenText, FaRegBell, FaWhatsapp } from "react-icons/fa";
import { FiPhoneIncoming } from "react-icons/fi";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { FaLocationPinLock } from "react-icons/fa6";
import { MdLibraryAddCheck } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";
import { PiCalendarCheckBold } from "react-icons/pi";
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";

export default function HomeContactDetails() {
  return (
    <section className="section-padding font-siliguri">
      <div className="container grid grid-cols-12 rounded-full bg-yellow-500 shadow-2xl">
        <div className="hover-500 col-span-12 rounded-tl-3xl rounded-tr-3xl bg-cyan-700 p-6 text-center text-white lg:col-span-4 lg:rounded-l-3xl lg:rounded-tr-none 2xl:p-8">
          <div className="flex justify-center">
            <div className="flex items-center gap-3">
              <MdOutlineConnectWithoutContact className="h-12 w-12 lg:h-12 lg:w-12" />
              <h2 className="font-h2 underline underline-offset-[6px]">
                দ্রুত যোগাযোগঃ
              </h2>
            </div>
          </div>
          <p className="py-5">
            ফোন অথবা হোয়াটস্যাপ এ যোগাযোগে খুবই দ্রুত এবং বিষয় ভিত্তিক আলোচনায়
            কাঙ্খিত পরিষেবা নিন।
          </p>
          <div className="mt-5 flex items-center overflow-hidden rounded border bg-white">
            <div className="w-16 pl-3 text-cyan-700">
              <FiPhoneIncoming className="h-7 w-7 font-bold lg:h-7 lg:w-7" />
              <FaWhatsapp className="h-7 w-7 font-bold lg:h-7 lg:w-7" />
            </div>
            <div className="w-full bg-cyan-800 px-10 py-2">
              <Link
                href="tel:+8801914685804"
                className="block text-[22px] font-bold lg:text-2xl 2xl:text-3xl"
              >
                01914 685804
              </Link>
              <Link
                href="tel:+8801914685804"
                className="block text-[22px] font-bold lg:text-2xl 2xl:text-3xl"
              >
                01914 000000
              </Link>
            </div>
          </div>
          <div className="my-5 flex w-full items-center overflow-hidden rounded border bg-white">
            <div className="w-12 pl-2 text-cyan-700 lg:w-16 lg:pl-3">
              <FaEnvelopeOpenText className="h-6 w-6 font-bold lg:h-7 lg:w-7" />
            </div>
            <div className="w-full bg-cyan-800 py-2">
              <Link
                href="mailto:nexusphysiocare@gmail.com"
                className="block text-lg font-semibold 2xl:text-2xl"
              >
                nexusphysiocare@gmail.com
              </Link>
            </div>
          </div>
        </div>
        <div className="hover-500 col-span-12 bg-orange-600 p-6 text-center text-white lg:col-span-4 2xl:p-8">
          <div className="flex justify-center">
            <div className="flex items-center gap-3 lg:gap-5">
              <IoCalendarOutline className="h-12 w-12 lg:h-12 lg:w-12" />
              <h2 className="font-h2 underline underline-offset-[6px]">
                এপয়নমেন্ট নিন
              </h2>
            </div>
          </div>
          <p className="py-5">
            আপনার চিকিৎসকের সাথে সুবিধাজনক সময়ে এপয়নমেন্ট বুক করুন।
          </p>
          <div className="w-full">
            <div className="flex items-center gap-3">
              <MdLibraryAddCheck className="h-5 w-5" />
              <p>অনলাইন এ এপয়নমেন্ট গ্রহণ</p>
            </div>
            <div className="flex items-center gap-3 py-2">
              <MdLibraryAddCheck className="h-5 w-5" />
              <p>সুবিধাজনক সময়ে সেবা গ্রহনের নিশ্চয়তা</p>
            </div>
            <div className="flex items-center gap-3">
              <MdLibraryAddCheck className="h-5 w-5" />
              <p>ফিজিওথেরাপিস্ট সিলেক্ট করার সুবিধা</p>
            </div>
          </div>
          <div className="w-full pb-5 pt-8">
            <p>এপয়নমেন্ট নিতে নিচের বাটনে ক্লিক করুন...</p>
            <div className="pt-8">
              <Link
                href="/appointment"
                className="hover-300 rounded-full border-2 border-white bg-white px-10 py-2 text-xl font-bold text-orange-700 hover:bg-transparent hover:text-white lg:text-2xl"
              >
                এপয়নমেন্ট
              </Link>
            </div>
          </div>
        </div>
        <div className="hover-500 col-span-12 rounded-bl-3xl rounded-br-3xl bg-green-700 p-6 text-center text-white lg:col-span-4 lg:rounded-r-3xl lg:rounded-bl-none 2xl:p-8">
          <div className="flex justify-center">
            <div className="flex items-center gap-3">
              <FaLocationPinLock className="h-12 w-12 lg:h-12 lg:w-12" />
              <h2 className="font-h2 underline underline-offset-[6px]">
                আমাদের ঠিকানাঃ
              </h2>
            </div>
          </div>
          <p className="py-5">
            চিকিৎসা সেবা ব্যতীত অন্যান্য দাপ্তরিক প্রয়োজনে আপনি আমাদের অফিসে
            সরাসরি যোগাযোগ করুন।
          </p>
          <div className="w-full">
            <div className="flex items-center gap-3">
              <PiCalendarCheckBold className="h-6 w-6" />
              <p>প্রতি শুক্রবার ও শনিবার (সাপ্তাহিক)</p>
            </div>
            <div className="flex items-center gap-3 py-3">
              <BsStopwatch className="h-6 w-6" />
              <p>সকাল ১০টা থেকে দুপুর ১২টা পর্যন্ত</p>
            </div>
            <div className="flex items-center gap-3">
              <IoLocationOutline className="h-6 w-6" />
              <p>৩২/২৭, রূপনগর আবাসিক, মিরপুর-১২১৬</p>
            </div>

            <div className="my-5 flex w-full items-center overflow-hidden rounded border bg-white">
              <div className="w-12 pl-2 text-green-700 lg:w-16 lg:pl-3">
                <FaRegBell className="h-6 w-6 font-bold lg:h-7 lg:w-7" />
              </div>
              <div className="w-full bg-green-700 py-2">
                <p className="px-2">
                  আমাদের ফিজিওথেরাপি সেন্টার শীঘ্রই চালু হচ্ছে এবং ঠিকানা
                  সম্মানিত গ্রাহকদের জানিয়ে দেয়া হবে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
