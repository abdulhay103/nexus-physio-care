import Image from "next/image";
import CTAImg from "/public/others/ContactCta.png";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="relative h-60 w-full overflow-hidden rounded-md lg:h-80 2xl:h-96">
          <Image
            src={CTAImg}
            fill
            className="object-cover blur-[5px]"
            alt="cta-image"
          />
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-cyan-900 opacity-80">
            <div className="font-siliguri">
              <h2 className="font-h2 text-white">
                আমাদের সাথে সরাসরি যোগাযোগ করুন
              </h2>
              <div className="flex justify-center py-5">
                <Link
                  href={"/contact"}
                  className="rounded-md bg-white px-6 py-2 text-lg font-bold text-cyan-800 lg:px-8 lg:py-3 2xl:px-10 2xl:py-4"
                >
                  যোগাযোগ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
