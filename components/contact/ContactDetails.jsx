import Image from "next/image";
import Link from "next/link";
import { FaEnvelopeOpenText, FaWhatsapp } from "react-icons/fa";
import { FiPhoneIncoming } from "react-icons/fi";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { BsCalendar2Check } from "react-icons/bs";
import { FaLocationPinLock } from "react-icons/fa6";

export default function ContactDetails() {
  return (
    <section className="section-padding font-siliguri">
      <div className="container grid grid-cols-12 rounded-full bg-yellow-500 shadow-2xl">
        <div className="hover-500 col-span-12 rounded-l-3xl bg-cyan-700 p-6 text-center text-white lg:col-span-4">
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
            <div className="w-16 pl-3 text-orange-700">
              <FiPhoneIncoming className="h-7 w-7 font-bold lg:h-7 lg:w-7" />
              <FaWhatsapp className="h-7 w-7 font-bold lg:h-7 lg:w-7" />
            </div>
            <div className="w-full bg-orange-800 px-10 py-2 font-safodi">
              <p className="font-safodi text-[22px] font-bold lg:text-2xl 2xl:text-3xl">
                01914 685804
              </p>
              <p className="font-safodi text-[22px] font-bold lg:text-2xl 2xl:text-3xl">
                01914 000000
              </p>
            </div>
          </div>
          <div className="my-5 flex w-full items-center overflow-hidden rounded border bg-white">
            <div className="w-16 pl-3 text-orange-700">
              <FaEnvelopeOpenText className="h-7 w-7 font-bold lg:h-7 lg:w-7" />
            </div>
            <div className="w-full bg-orange-800 py-2 font-safodi">
              <Link
                href="mailto:nexusphysiocare@gmail.com"
                className="font-safodi text-lg font-semibold 2xl:text-2xl"
              >
                nexusphysiocare@gmail.com
              </Link>
            </div>
          </div>
        </div>
        <div className="hover-500 col-span-12 bg-orange-700 p-6 text-center text-white lg:col-span-4">
          <div className="flex justify-center">
            <div className="flex items-center gap-3 lg:gap-5">
              <BsCalendar2Check className="h-12 w-12 lg:h-12 lg:w-12" />
              <h2 className="font-h2 underline underline-offset-[6px]">
                এপয়নমেন্ট দিন
              </h2>
            </div>
          </div>
          <p className="py-5">
            আপনার চিকিৎসকের সাথে সুবিধাজনক সময়ে এপয়নমেন্ট বুক করুন।
          </p>

          <div className="flex items-center overflow-hidden rounded border bg-white">
            <div className="w-16 pl-3 text-orange-700">
              <FiPhoneIncoming className="h-7 w-7 font-bold lg:h-7 lg:w-7" />
              <FaWhatsapp className="h-7 w-7 font-bold lg:h-7 lg:w-7" />
            </div>
            <div className="w-full bg-orange-800 px-10 py-2 font-safodi">
              <p className="font-safodi text-[22px] font-bold lg:text-2xl 2xl:text-3xl">
                01914 685804
              </p>
              <p className="font-safodi text-[22px] font-bold lg:text-2xl 2xl:text-3xl">
                01914 000000
              </p>
            </div>
          </div>
          <div className="my-5 flex w-full items-center overflow-hidden rounded border bg-white">
            <div className="w-16 pl-3 text-orange-700">
              <FaEnvelopeOpenText className="h-7 w-7 font-bold lg:h-7 lg:w-7" />
            </div>
            <div className="w-full bg-orange-800 py-2 font-safodi">
              <Link
                href="mailto:nexusphysiocare@gmail.com"
                className="font-safodi text-lg font-semibold 2xl:text-2xl"
              >
                nexusphysiocare@gmail.com
              </Link>
            </div>
          </div>
        </div>
        <div className="hover-500 col-span-12 rounded-r-3xl bg-green-700 p-6 text-center text-white lg:col-span-4">
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

          <div className="flex items-center overflow-hidden rounded border bg-white">
            <div className="w-16 pl-3 text-orange-700">
              <FiPhoneIncoming className="h-7 w-7 font-bold lg:h-7 lg:w-7" />
              <FaWhatsapp className="h-7 w-7 font-bold lg:h-7 lg:w-7" />
            </div>
            <div className="w-full bg-orange-800 px-10 py-2 font-safodi">
              <p className="font-safodi text-[22px] font-bold lg:text-2xl 2xl:text-3xl">
                01914 685804
              </p>
              <p className="font-safodi text-[22px] font-bold lg:text-2xl 2xl:text-3xl">
                01914 000000
              </p>
            </div>
          </div>
          <div className="my-5 flex w-full items-center overflow-hidden rounded border bg-white">
            <div className="w-16 pl-3 text-orange-700">
              <FaEnvelopeOpenText className="h-7 w-7 font-bold lg:h-7 lg:w-7" />
            </div>
            <div className="w-full bg-orange-800 py-2 font-safodi">
              <Link
                href="mailto:nexusphysiocare@gmail.com"
                className="font-safodi text-lg font-semibold 2xl:text-2xl"
              >
                nexusphysiocare@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
