import React from "react";
import Marquee from "./Marquee";

export default function MarqueeUi() {
  return (
    <div className="flex bg-orange-100 py-6 text-green-700 lg:py-8">
      <Marquee speed={10}>
        <p className="font-h2 py-2 font-siliguri lg:py-4">
          * * আমাদের অভিজ্ঞ ও দক্ষ ফিজিওথেরাপি টিম আপনাকে সেবা দেয়ার জন্য
          প্রস্তুত..
        </p>
        <p className="font-h2 py-2 font-siliguri lg:py-4">
          ** আপনার প্রয়োজনীয় সেবার জন্য আজই যোগাযোগ করুন..
        </p>
      </Marquee>
    </div>
  );
}
