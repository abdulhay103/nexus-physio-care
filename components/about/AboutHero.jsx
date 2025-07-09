import Image from "next/image";
import aboutImg from "/public/about/about-hero.png";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="bg-gradient-to-t from-transparent via-cyan-50 to-transparent">
      <div className="section-padding container flex flex-col-reverse items-center gap-6 lg:flex-row">
        <div className="w-full items-center text-center font-siliguri text-cyan-800">
          <h2 className="font-h2 mx-auto lg:w-4/5 2xl:w-2/3">
            &#34;নেক্সাস ফিজিওথেরাপি কেয়ার &#34; <br />
            হোম ফিজিওথেরাপি সার্ভিস নিয়ে <br /> রয়েছে আপনার পাশে।
          </h2>
          <div className="py-6 lg:py-10 2xl:py-14">
            <Link
              href="/#service-area"
              className="rounded bg-cyan-700 px-6 py-2 text-lg font-semibold text-white hover:bg-cyan-800 lg:px-8 lg:py-3 2xl:px-10 2xl:py-4"
            >
              সার্ভিস এরিয়া
            </Link>
          </div>
        </div>
        <div className="w-full">
          <div className="relative mx-auto h-[400px] w-full lg:w-3/4 2xl:h-[500px]">
            <Image
              src={aboutImg}
              fill
              className="-mt-10 object-cover"
              alt="About-Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
