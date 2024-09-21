import Image from "next/image";
import brush from "/public/others/brush.png";

export default function ContactDetails() {
  return (
    <section className="section-padding bg-slate-100 font-siliguri">
      {/* <div className="w-full pb-7 lg:pb-16 2xl:pb-16">
        <h1 className="font-h1 text-center font-siliguri text-green-800">
          আমাদের সার্ভিস এরিয়া
        </h1>
        <div className="flex w-full justify-center">
          <div className="relative h-3 w-44 lg:-mt-1 lg:h-5 lg:w-[300px] 2xl:-mt-10 2xl:h-6 2xl:w-96">
            <Image src={brush} fill className="object-cover" alt="brush" />
          </div>
        </div>
      </div> */}
      <div className="container grid grid-cols-12 gap-6 lg:gap-7">
        <div className="hover-500 col-span-12 rounded-md border p-6 text-center text-cyan-700 shadow-lg hover:bg-orange-800 hover:text-white lg:col-span-4">
          <h2 className="font-h2 underline underline-offset-[6px]">
            ধানমন্ডি এরিয়া
          </h2>
          <p className="pt-5">
            ধানমন্ডি, ধানমন্ডি-২৭, লালমাটিয়া, মোহাম্মদপুর, কৃষিমার্কেট , আদাবর,
            শাহজাহান রোড
          </p>
        </div>
        <div className="hover-500 col-span-12 rounded-md border p-6 text-center text-cyan-700 shadow-lg hover:bg-orange-800 hover:text-white lg:col-span-4">
          <h2 className="font-h2 underline underline-offset-[6px]">
            মিরপুর এরিয়া
          </h2>
          <p className="pt-5">
            পল্লবী, রূপনগর আবাসিক, ইস্টার্ণ হাউসিং, শাহআলী থানা, মনিপুর,
            আগারগাঁও, মিরপুর ডিওএইচএস, ইসিবি
          </p>
        </div>
        <div className="hover-500 col-span-12 rounded-md border p-6 text-center text-cyan-700 shadow-lg hover:bg-orange-800 hover:text-white lg:col-span-4">
          <h2 className="font-h2 underline underline-offset-[6px]">
            উত্তরা এরিয়া
          </h2>
          <p className="pt-5">উত্তরা সকল সেক্টর, গাউসুল আজম এভিনিউ, আজমপুর</p>
        </div>
        <div className="hover-500 col-span-12 rounded-md border p-6 text-center text-cyan-700 shadow-lg hover:bg-orange-800 hover:text-white lg:col-span-4">
          <h2 className="font-h2 underline underline-offset-[6px]">
            বসুন্ধরা আবাসিক
          </h2>
          <p className="pt-5">
            বসুন্ধরা আবাসিক, বাড্ডা নতুন বাজার, বারিধারা, এয়ারপোর্ট, খিলক্ষেত
          </p>
        </div>
        <div className="hover-500 col-span-12 rounded-md border p-6 text-center text-cyan-700 shadow-lg hover:bg-orange-800 hover:text-white lg:col-span-4">
          <h2 className="font-h2 underline underline-offset-[6px]">
            বনানী এরিয়া
          </h2>
          <p className="pt-5">
            বনানী, মহাখালী ডিওএইচএস, গুলশান, ভাটারা, কচুক্ষেত, কালাচাঁদপুর ও
            মহাখালী
          </p>
        </div>
        <div className="hover-500 col-span-12 rounded-md border p-6 text-center text-cyan-700 shadow-lg hover:bg-orange-800 hover:text-white lg:col-span-4">
          <h2 className="font-h2 underline underline-offset-[6px]">
            ফার্মগেট এরিয়া
          </h2>
          <p className="pt-5">
            ফার্মগেট, নাখালপাড়া, মণিপুরীপাড়া, তেজগাঁও, কাওরানবাজার, বাংলামোটর,
            সাতরাস্তা, মৌচাক, শাহবাগ, হাতিরপুল
          </p>
        </div>
      </div>
    </section>
  );
}
