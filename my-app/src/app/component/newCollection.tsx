import Image from "next/image"
import background from "../public/background.png"

export default function NewCollection() {
  return (
    <div className="relative w-full h-auto bg-cover bg-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src={background} alt="women" layout="fill" objectFit="cover" />
      </div>

      {/* Content Overlay */}
      <div className="absolute left-0 top-0 px-6 lg:px-16 py-16 lg:py-24 z-10 flex flex-col justify-center gap-6 max-w-[600px] text-white">
        <h5 className="font-Montserrat font-semibold text-base">SUMMER 2020</h5>
        <h1 className="font-Montserrat font-semibold text-3xl lg:text-5xl max-w-[500px]">NEW COLLECTION</h1>
        <h4 className="font-Montserrat font-normal text-lg max-w-[400px]">We know how large objects will act, but things on a small scale.</h4>
        <button className="bg-[#738179] text-white px-10 py-3 text-xl font-Montserrat rounded-lg">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}
