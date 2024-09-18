import Link from "next/link";

export default function Home() {
  return (
    <main className=" min-h-screen bg-[url('/img/hero-bg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className=" flex min-h-screen w-full justify-center items-center flex-col">
        {/* <div className=" h-52 overflow-hidden">
          <Image
            src={Logo}
            width={300}
            height={300}
            className=" object-cover"
          />
        </div> */}
        <p className=" text-xl text-white">Welcome to Nexus Physio Care.</p>
        <h1 className=" text-4xl lg:text-7xl font-semibold text-white">
          We are comming soon..
        </h1>
        <p className="py-4 text-white">
          Any Query: Pls call- 01517813516, 01557453683
        </p>
        <Link
          href="mailto:abdulhay.me@gmail.com"
          target="_blank"
          className=" px-4 py-2 bg-sky-500 hover:bg-white text-white-500 hover:text-red-500 transition-all duration-300 rounded"
        >
          Get Started!
        </Link>
      </div>
    </main>
  );
}
