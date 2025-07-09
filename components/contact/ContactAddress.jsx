import Link from "next/link";
import { BiEnvelopeOpen, BiPhoneCall } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";

export default function ContactAddress() {
  return (
    <div className="w-full">
      <h2 className="before:hrefp-10 font-h2 relative font-siliguri text-cyan-800 before:absolute before:-top-2 before:left-0 before:h-[2px] before:w-20 before:bg-orange-600 lg:before:w-40">
        জরুরী যোগাযোগ করুন
      </h2>
      <p className="pt-2 text-justify font-siliguri font-medium text-gray-500 xl:w-[500px] 2xl:w-[600px]">
        আপনি কি জরুরী কোন বিষয় নিয়ে আলোচনা করতে চান? আমরা আপনার গুরুত্বকে
        প্রাধান্য দিতে চাই। আপনি নিচের তথ্যগুলো ব্যবহার করে আমাদের সাথে যোগাযোগ
        করতে পারেন।
      </p>
      <div className="space-y-4 py-8 xl:py-10 2xl:py-14">
        <div className="font-Lora mt-2 flex items-center text-cyan-800">
          <div className="border-r-[1px] border-orange-600">
            <BiPhoneCall className="mr-3 h-8 w-8 text-cyan-800 2xl:mr-4" />
          </div>
          <div className="px-3">
            <p className="font-Lora text-cyan-800">To more info.</p>
            <Link href="tel:+8801914685804" className="font-Lora text-cyan-800">
              01914 685804
            </Link>
          </div>
        </div>
        <div className="font-Lora flex items-center py-3 text-cyan-800">
          <div className="border-r-[1px] border-orange-600">
            <BiEnvelopeOpen className="mr-3 h-8 w-8 text-cyan-800 2xl:mr-4" />
          </div>
          <div className="px-3">
            <Link
              href="mailto:nexusphysiocare@gmail.com"
              className="font-Lora text-cyan-800"
            >
              To send mail
            </Link>
            <p className="font-Lora text-cyan-800">nexusphysiocare@gmail.com</p>
          </div>
        </div>
        <div className="font-Lora flex items-center text-cyan-800">
          <div className="border-r-[1px] border-orange-600">
            <IoLocationOutline className="mr-3 h-8 w-8 text-cyan-800 2xl:mr-4" />
          </div>
          <p className="px-3">
            32/27, Rupnagor R/A <br />
            Mirpur, Dhaka - 1216
          </p>
        </div>
      </div>
      {/* <SocialMedia /> */}
    </div>
  );
}
