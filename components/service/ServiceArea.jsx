import Image from "next/image";
import brush from "/public/others/brush.png";
import AreaCard from "./AreaCard";
import { serviceArea } from "@/utils/uiData/serviceData";

export default function ServiceArea() {
  let serviceAreas = serviceArea;

  return (
    <section className="section-padding container font-siliguri">
      <div className="w-full pb-7 lg:pb-16 2xl:pb-16">
        <h1 className="font-h1 text-center font-siliguri text-green-800">
          আমাদের সার্ভিস এরিয়া
        </h1>
        <div className="flex w-full justify-center">
          <div className="relative h-3 w-44 lg:-mt-1 lg:h-5 lg:w-[300px] 2xl:-mt-10 2xl:h-6 2xl:w-96">
            <Image src={brush} fill className="object-cover" alt="brush" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 lg:gap-7">
        {serviceAreas.map((item) => {
          return (
            <AreaCard
              key={item.id}
              bgColor={item.bgColor}
              area={item.area}
              address={item.address}
            />
          );
        })}
      </div>
    </section>
  );
}
