import React from "react";
import Marquee from "./Marquee";

export default function MarqueeUi() {
  return (
    <div className="flex bg-red-200 py-10">
      <Marquee speed={15}>
        <p className="font-h2 font-siliguri text-cyan-700">
          আমাদের অভিজ্ঞ ও দক্ষ ফিজিওথেরাপি টিম আপনাকে সেবা দেয়ার জন্য প্রস্তুত
        </p>
        <p className="font-h2 font-siliguri text-cyan-700">
          আপনার প্রয়োজনীয় সেবার জন্য আজই যোগাযোগ করুন-০১৯১৪৬৮৫৮০৪
        </p>
      </Marquee>
    </div>
  );
}
