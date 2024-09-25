"use client";
import Image from "next/image";
import breadCambImg from "../../public/others/breadcamb.png";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function BreadcambUi({ text }) {
  const pathNames = usePathname();
  const segments = pathNames.split("/").filter((item) => item);

  return (
    <section className="relative h-[200px] overflow-hidden bg-gradient-to-b from-cyan-100 to-transparent lg:h-[250px] 2xl:h-[320px]">
      <Image
        src={breadCambImg}
        className="object-cover opacity-20"
        fill
        alt="Breadcamb-image"
      />
      <div className="absolute mt-10 flex h-[200px] w-full items-center justify-center lg:mt-0 lg:h-[250px] 2xl:h-[350px]">
        <div className="text-center">
          <ol className="inline-flex list-none p-0 font-safodi">
            <li className="flex items-center">
              <Link
                href="/"
                className="hover-300 flex items-center gap-2 text-cyan-800 hover:text-orange-700"
              >
                <FaHome />
                Home
              </Link>
              {segments.length > 0 && <span className="mx-2">/</span>}
            </li>
            {segments.map((segment, index) => {
              const href = `/${segments.slice(0, index + 1).join("/")}`;
              const isLast = index === segments.length - 1;
              return (
                <li key={href} className="flex items-center">
                  <Link
                    href={href}
                    className={`${
                      isLast
                        ? "font-semibold text-gray-800"
                        : "hover:text-orange-700"
                    }`}
                    aria-current={isLast ? "page" : undefined}
                  >
                    {segment.charAt(0).toUpperCase() + segment.slice(1)}
                  </Link>
                  {!isLast && <span className="mx-2">/</span>}
                </li>
              );
            })}
          </ol>
          <h2 className="font-h2 pt-2 font-siliguri text-cyan-900 lg:pt-5">
            {text}
          </h2>
        </div>
      </div>
    </section>
  );
}
