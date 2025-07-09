import Link from "next/link";
import errorImg from "../public/others/error.png";
import Image from "next/image";
import { PiKeyReturn } from "react-icons/pi";

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="w-full lg:w-1/3">
        <div className="relative h-96 w-full lg:h-[420px] 2xl:h-[520px]">
          <Image
            src={errorImg}
            fill
            className="object-cover"
            alt="error-Image"
          />
        </div>
        <div className="hover-300 flex items-center justify-center gap-2 font-safodi text-[#407aff] hover:text-orange-600 2xl:gap-3 2xl:pt-5">
          <PiKeyReturn className="h-6 w-6" />
          <Link href="/" className="text-xl underline">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
