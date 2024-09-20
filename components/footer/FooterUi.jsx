import Image from "next/image";
import logo from "../../public/logos/footer-logo.png";
import { FaFacebookSquare } from "react-icons/fa";
export default function FooterUi() {
  return (
    <div className=" bg-cyan-800 section-padding">
      <div className="container">
        <div className=" flex gap-6 flex-col lg:flex-row">
          <div className="w-full">
            <div className=" relative w-60 lg:w-[300px] 2xl:w-96 2xl:h-[105px] lg:h-20 h-16">
              <Image
                src={logo}
                fill
                className=" object-cover"
                alt="brand-logo"
              />
            </div>
          </div>
          <div className="w-full flex items-center text-white">
            <h2 className="font-h2">Follow us on:</h2>
            <div>
              <div>
                <FaFacebookSquare className=" lg:w-10 lg:h-10 hover:text-sky-700" />
              </div>
            </div>
          </div>
          <div className="w-full">footer</div>
        </div>
      </div>
    </div>
  );
}
