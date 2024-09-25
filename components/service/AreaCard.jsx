import React from "react";

export default function AreaCard({ bgColor, area, address }) {
  return (
    <div
      className={`hover-500 col-span-12 rounded-md border ${bgColor} p-6 text-center text-cyan-700 shadow-lg hover:bg-orange-800 hover:text-white lg:col-span-4`}
    >
      <h2 className="font-h2 underline underline-offset-[6px]">{area}</h2>
      <p className="pt-5">{address}</p>
    </div>
  );
}
