import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import FreeTrial from "../component/freeTrial";
import Mem1 from "../public/Mem1.jpg"
import Mem2 from "../public/Mem2.jpg"
import Mem3 from "../public/Mem3.jpg"
import Mem4 from "../public/Mem4.jpg"
import Mem5 from "../public/Mem5.jpg"
import Mem6 from "../public/Mem6.jpg"
import Mem7 from "../public/Mem7.jpg"
import Mem8 from "../public/Mem8.jpg"
import Mem9 from "../public/Mem9.jpg"


interface TeamMember {
  name: string;
  profession: string;
  social: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  image: StaticImageData;
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "John Doe",
      profession: "Designer",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
      image: Mem1 ,
    },
    {
      name: "Jane Smith",
      profession: "Developer",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
      image: Mem2 ,
    },
    {
      name: "Sam Wilson",
      profession: "Project Manager",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
      image: Mem3 ,
    },
    {
      name: "Emily Davis",
      profession: "Marketing",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
      image: Mem4,
    },
    {
      name: "Michael Brown",
      profession: "SEO Specialist",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
      image: Mem5, 
    },
    {
      name: "Sarah Lee",
      profession: "Content Writer",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
      image: Mem6,
    },
    {
      name: "Chris Martin",
      profession: "UX/UI Designer",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
      image: Mem7,
    },
    {
      name: "Laura Johnson",
      profession: "Data Analyst",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
      image: Mem8,
    },
    {
      name: "David Clark",
      profession: "Web Developer",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
      image: Mem9,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <h2 className="text-center text-[40px] font-bold mb-20 text-[#252B42]">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            {/* Use Next.js Image component */}
            <Image
              src={member.image}
              alt={member.name}
              width={316}
              height={231}
              className="mx-auto"
            />
            <h3 className="mt-6 text-[16px] font-bold text-[#252B42]">
              {member.name}
            </h3>
            <p className="text-[#737373] text-[14px] mt-3">
              {member.profession}
            </p>
            <div className="flex justify-center mt-3 space-x-4">
              {/* Social media icons */}
              <Link href={member.social.facebook} className="text-[#23A6F0]">
                <FaFacebookF size={25} />
              </Link>
              <Link href={member.social.instagram} className="text-[#23A6F0]">
                <FaInstagram size={25} />
              </Link>
              <Link href={member.social.twitter} className="text-[#23A6F0]">
                <FaTwitter size={25} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <FreeTrial />
    </section>
  );
};

export default TeamSection;