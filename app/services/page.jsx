import Image from "next/image";
import LBP from "/public/services/back-pain.png";
import cervicalPain from "/public/services/cervical-pain.png";
import kneePain from "/public/services/knee-pain.png";
import shoulderPain from "/public/services/shoulder-pain.png";
import arthritis from "/public/services/arthritis.png";
import musclePain from "/public/services/muscle-pain.png";
import parkinsons from "/public/services/parkinsons.png";
import paralysis from "/public/services/paralysis.png";

export default function ServicePage() {
  return (
    <section className="section-padding container">
      <h2 className="font-h2 text-center font-siliguri text-green-700">
        নেক্সাস ফিজিও কেয়ার সর্বোচ্চ সফলতার উদ্দেশ্যে ফিজিওথেরাপি সেবা প্রদান
        করে আসছে। যার ফলে খুবই দ্রুত সময়ের মধ্যে রোগের নিরাময় সাধিত হচ্ছে। এরই
        ধারাবাহিকতায় আমরা নিমোক্ত সমস্যার ফিজিওথেরাপি চিকিৎসা প্রদান করে আসছি।
      </h2>
      <div className="grid grid-cols-12 gap-6 pt-10 lg:gap-7 lg:pt-12 xl:pt-16">
        <div className="hover-300 col-span-12 rounded-md border p-6 text-center text-orange-700 shadow-lg hover:bg-cyan-800 hover:text-white lg:col-span-4 xl:col-span-3">
          <div className="flex justify-center pb-4">
            <div className="relative h-20 w-20 overflow-hidden rounded-full bg-slate-300 lg:h-32 lg:w-32">
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
        <div className="hover-300 col-span-12 rounded-md border p-6 text-center text-orange-700 shadow-lg hover:bg-cyan-800 hover:text-white lg:col-span-4 xl:col-span-3">
          <div className="flex justify-center pb-4">
            <div className="relative h-20 w-20 overflow-hidden rounded-full bg-slate-300 lg:h-32 lg:w-32">
              <Image
                src={cervicalPain}
                fill
                className="object-cover"
                alt="back-pain"
              />
            </div>
          </div>
          <h2 className="font-h2 font-siliguri">ঘাড় ব্যথা</h2>
        </div>
        <div className="hover-300 col-span-12 rounded-md border p-6 text-center text-orange-700 shadow-lg hover:bg-cyan-800 hover:text-white lg:col-span-4 xl:col-span-3">
          <div className="flex justify-center pb-4">
            <div className="relative h-20 w-20 overflow-hidden rounded-full bg-slate-300 lg:h-32 lg:w-32">
              <Image
                src={shoulderPain}
                fill
                className="object-cover"
                alt="shoulder-pain"
              />
            </div>
          </div>
          <h2 className="font-h2 font-siliguri">কাঁধ ব্যথা</h2>
        </div>
        <div className="hover-300 col-span-12 rounded-md border p-6 text-center text-orange-700 shadow-lg hover:bg-cyan-800 hover:text-white lg:col-span-4 xl:col-span-3">
          <div className="flex justify-center pb-4">
            <div className="relative h-20 w-20 overflow-hidden rounded-full bg-slate-300 lg:h-32 lg:w-32">
              <Image
                src={kneePain}
                fill
                className="object-cover"
                alt="back-pain"
              />
            </div>
          </div>
          <h2 className="font-h2 font-siliguri">হাঁটু ব্যথা</h2>
        </div>
        <div className="hover-300 col-span-12 rounded-md border p-6 text-center text-orange-700 shadow-lg hover:bg-cyan-800 hover:text-white lg:col-span-4 xl:col-span-3">
          <div className="flex justify-center pb-4">
            <div className="relative h-20 w-20 overflow-hidden rounded-full bg-slate-300 lg:h-32 lg:w-32">
              <Image
                src={musclePain}
                fill
                className="object-cover"
                alt="knee-pain"
              />
            </div>
          </div>
          <h2 className="font-h2 font-siliguri">মাংসপেশি ব্যথা</h2>
        </div>
        <div className="hover-300 col-span-12 rounded-md border p-6 text-center text-orange-700 shadow-lg hover:bg-cyan-800 hover:text-white lg:col-span-4 xl:col-span-3">
          <div className="flex justify-center pb-4">
            <div className="relative h-20 w-20 overflow-hidden rounded-full bg-slate-300 lg:h-32 lg:w-32">
              <Image
                src={arthritis}
                fill
                className="object-cover"
                alt="back-pain"
              />
            </div>
          </div>
          <h2 className="font-h2 font-siliguri">অস্টিওআর্থাইটিস</h2>
        </div>
        <div className="hover-300 col-span-12 rounded-md border p-6 text-center text-orange-700 shadow-lg hover:bg-cyan-800 hover:text-white lg:col-span-4 xl:col-span-3">
          <div className="flex justify-center pb-4">
            <div className="relative h-20 w-20 overflow-hidden rounded-full bg-slate-300 lg:h-32 lg:w-32">
              <Image
                src={parkinsons}
                fill
                className="object-cover"
                alt="back-pain"
              />
            </div>
          </div>
          <h2 className="font-h2 font-siliguri">পার্কিনসন্স ডিজিস</h2>
        </div>
        <div className="hover-300 col-span-12 rounded-md border p-6 text-center text-orange-700 shadow-lg hover:bg-cyan-800 hover:text-white lg:col-span-4 xl:col-span-3">
          <div className="flex justify-center pb-4">
            <div className="relative h-20 w-20 overflow-hidden rounded-full bg-slate-300 lg:h-32 lg:w-32">
              <Image
                src={paralysis}
                fill
                className="object-cover"
                alt="back-pain"
              />
            </div>
          </div>
          <h2 className="font-h2 font-siliguri">প্যারালাইসিস</h2>
        </div>
      </div>
    </section>
  );
}
