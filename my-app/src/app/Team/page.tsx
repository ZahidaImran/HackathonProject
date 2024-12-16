import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";
import Image1 from "../public/image-1.png"
import Image2 from "../public/image-2.png"
import Image3 from "../public/image-3.png"
import Image4 from "../public/image-4.png"
import Image5 from "../public/image-5.png"
import Header from "../component/Navbar";
import TeamSection from "../component/team-section"

export default function Team() {
  return (
    <div>
      <Header />
      <div className="text-center py-10">
      <h2 className="text-[#737373] font-bold text-[16px] mt-5">WHAT WE DO</h2>
      <h1 className="text-[58px] font-bold mt-3 text-[#252B42]">
        Innovation tailored for you
      </h1>
      <div className="text-[#252B42] mt-5 font-bold text-[14px] flex justify-center items-center gap-1">
        Home
        <div className="text-[#BDBDBD] text-[25px]" ><FiChevronRight />{" "}</div>
        <span className="text-[#737373]">Team</span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
        {/* First Image taking 2 columns */}
        <div className="md:col-span-2">
          <Image
            src={Image1}
            alt="team"
            height={530}
            width={700}
            className="w-full h-auto"
          />
        </div>
        <div>
        <div className="md:col-span-1">
          <Image
            src={Image2}
            alt="team"
            height={260}
            width={361}
            className="w-full h-auto"
          />
        </div>
        <div className="md:col-span-1">
          <Image
            src={Image3}
            alt="team"
            height={260}
            width={361}
            className="w-full h-auto"
          />
        </div>
        </div>

        <div>
          <div className="md:col-span-1">
          <Image
            src={Image4}
            alt="team"
            height={260}
            width={361}
            className="w-full h-auto"
          />
        </div>
        <div className="md:col-span-1">
          <Image
            src={Image5}
            alt="team"
            height={260}
            width={361}
            className="w-full h-auto"
          />
        </div>
        </div>
        
      </div>
    </div>
    <TeamSection/>
    </div>

  );
}