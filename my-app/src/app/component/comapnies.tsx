import Image from "next/image";
import Company1 from "../public/Company (1).png"
import Company2 from "../public/Company (2).png"
import Company3 from "../public/Company (3).png"
import Company4 from "../public/Company (4).png"
import Company5 from "../public/Company (5).png"
import Company6 from "../public/Company (6).png"

export default function TrustedCompanies(){
    return(
        
      <div className="bg-gray-100 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          <Image src={Company1} alt="Company 1" className="mx-auto h-12 w-auto object-contain" />
          <Image src={Company2} alt="Company 2" className="mx-auto h-12 w-auto object-contain" />
          <Image src={Company3} alt="Company 3" className="mx-auto h-12 w-auto object-contain" />
          <Image src={Company4} alt="Company 4" className="mx-auto h-12 w-auto object-contain" />
          <Image src={Company5} alt="Company 5" className="mx-auto h-12 w-auto object-contain" />
          <Image src={Company6} alt="Company 6" className="mx-auto h-12 w-auto object-contain" />
        </div>
      </div>
  );
}
      