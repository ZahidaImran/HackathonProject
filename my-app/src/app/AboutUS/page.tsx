import Image from "next/image";
import girl from "../public/ABOUT.png";
import facebookIcon from "../public/fb-logo.png";
import instagramIcon from "../public/insta-logo.png";
import twittericon from "../public/x-logo.png";
import user1 from "../public/team-user-1.jpg";
import user2 from "../public/team-user-2.jpg";
import user3 from "../public/team-user-3.jpg";
import girl2 from "../public/wwu.png";
import video from "../public/video.png";
import Companies from "../component/comapnies"
import Navbar from "../component/navbar"

export default function AboutUs() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col md:flex-row items-center justify-between px-4 py-8">
                {/* Text Section */}
                <div className="w-full text-center md:text-left md:w-1/2 md:ml-16">
                    <h3 className="text-[#252B42] font-bold text-[16px] mb-6">
                        ABOUT COMPANY
                    </h3>
                    <h1 className="text-[#252B42] font-bold text-[32px] sm:text-[48px] md:text-[58px] mb-6">
                        ABOUT US
                    </h1>
                    <p className="text-[#737373] text-[16px] sm:text-[18px] md:text-[20px] mt-5">
                        We know how large objects will act, <br />
                        but things on a small scale
                    </p>

                    {/* Button Section */}
                    <div className="mt-7 flex justify-center md:justify-start">
                        <button className="px-4 py-3 bg-[#23A6F0] text-[#FAFAFA] rounded-md hover:bg-blue-500 transition-all text-center text-[16px]">
                            Get Quote Now
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 mt-8 md:mt-0">
                    <Image
                        src={girl}
                        alt="aboutus"
                        height={280}
                        width={415}
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>

            <div className="flex flex-col items-center mt-11 px-6">
                {/* Heading and Paragraph Section */}
                <div className="flex flex-col sm:flex-row w-full items-center gap-6 py-8 mx-4 sm:mx-20">
                    <div>
                        <h3 className="text-[#E74040] text-[14px] mb-8 text-center">Problems trying</h3>
                        <h2 className="font-bold text-[24px] text-[#252B42] text-center sm:mt-2">
                            Met minim Mollie non desert <br /> Alamo est sit cliquey dolor do{" "}
                            <br /> met sent.
                        </h2>
                    </div>
                    <p className="text-[#737373] text-[14px] sm:mt-16 mt-8 text-center sm:mx-20 mx-4">
                        Problems trying to resolve the conflict between the two major realms
                        of
                        <br />
                        Classical physics: Newtonian mechanics
                    </p>
                </div>

                {/* Statistics Section */}
                <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-32 mt-16 mx-6 sm:mx-24">
                    <div className="text-center">
                        <h3 className="font-bold text-[#252B42] text-[48px] sm:text-[58px]">15K</h3>
                        <h2 className="font-bold text-[#737373] text-[14px] sm:text-[16px]">
                            Happy Customers
                        </h2>
                    </div>
                    <div className="text-center">
                        <h3 className="font-bold text-[#252B42] text-[48px] sm:text-[58px]">150K</h3>
                        <h2 className="font-bold text-[#737373] text-[14px] sm:text-[16px]">
                            Monthly Visitors
                        </h2>
                    </div>
                    <div className="text-center">
                        <h3 className="font-bold text-[#252B42] text-[48px] sm:text-[58px]">15</h3>
                        <h2 className="font-bold text-[#737373] text-[14px] sm:text-[16px]">
                            Countries Worldwide
                        </h2>
                    </div>
                    <div className="text-center">
                        <h3 className="font-bold text-[#252B42] text-[48px] sm:text-[58px]">100+</h3>
                        <h2 className="font-bold text-[#737373] text-[14px] sm:text-[16px]">
                            Top Partners
                        </h2>
                    </div>
                </div>

                {/* Image Section */}
                <div className="mt-16 sm:mt-20 flex justify-center items-center mx-6 sm:mx-36">
                    <Image src={video} alt="problem" width={989} height={540} />
                </div>
            </div>

            {/* Team Section */}
            <section className="relative bg-white py-16">
                <div className="container mx-auto flex flex-col items-center gap-16 px-4">
                    {/* Heading */}
                    <div className="text-center max-w-lg">
                        <h2 className="text-4xl font-bold text-[#252B42]">
                            Meet Our Team
                        </h2>
                        <p className="text-base text-[#737373] mt-4">
                            Problems trying to resolve the conflict between the two major
                            realms of Classical physics: Newtonian mechanics
                        </p>
                    </div>

                    {/* Team Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Card 1 */}
                        <div className="flex flex-col items-center bg-white rounded-lg overflow-hidden">
                            <div className="w-full h-[230px] relative">
                                <Image
                                    src={user1}
                                    alt="Team Member 1"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h5 className="text-xl font-bold text-[#252B42]">Username</h5>
                                <h6 className="text-sm font-semibold text-[#737373]">
                                    Profession
                                </h6>
                                {/* Social Media */}
                                <div className="flex justify-center gap-4 mt-4">
                                    <Image
                                        src={facebookIcon}
                                        alt="Facebook"
                                        className="w-6 h-6"
                                    />
                                    <Image
                                        src={instagramIcon}
                                        alt="Instagram"
                                        className="w-6 h-6"
                                    />
                                    <Image
                                        src={twittericon}
                                        alt="Twitter"
                                        className="w-6 h-6"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col items-center bg-white rounded-lg overflow-hidden">
                            <div className="w-full h-[230px] relative">
                                <Image
                                    src={user2}
                                    alt="Team Member 2"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h5 className="text-xl font-bold text-[#252B42]">
                                    Username
                                </h5>
                                <h6 className="text-sm font-semibold text-[#737373]">
                                    Profession
                                </h6>
                                <div className="flex justify-center gap-4 mt-4">
                                    <Image
                                        src={facebookIcon}
                                        alt="Facebook"
                                        className="w-6 h-6"
                                    />
                                    <Image
                                        src={instagramIcon}
                                        alt="Instagram"
                                        className="w-6 h-6"
                                    />
                                    <Image
                                        src={twittericon}
                                        alt="Twitter"
                                        className="w-6 h-6"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="flex flex-col items-center bg-white rounded-lg overflow-hidden">
                            <div className="w-full h-[230px] relative">
                                <Image
                                    src={user3}
                                    alt="Team Member 3"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h5 className="text-xl font-bold text-[#252B42]">
                                    Username
                                </h5>
                                <h6 className="text-sm font-semibold text-[#737373]">
                                    Profession
                                </h6>
                                <div className="flex justify-center gap-4 mt-4">
                                    <Image
                                        src={facebookIcon}
                                        alt="Facebook"
                                        className="w-6 h-6"
                                    />
                                    <Image
                                        src={instagramIcon}
                                        alt="Instagram"
                                        className="w-6 h-6"
                                    />
                                    <Image
                                        src={twittericon}
                                        alt="Twitter"
                                        className="w-6 h-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMPANIES SECTION */}
            <section className="bg-gray-100 py-20 flex justify-center">
                <div className="w-full max-w-6xl flex flex-col gap-[24px] items-center px-4 md:px-8">
                    {/* Heading Section */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Big Companies Are Here
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base max-w-lg mx-auto">
                            Problems trying to resolve the conflict between the two major
                            realms of Classical physics: Newtonian mechanics
                        </p>
                    </div>

                    {/* Logo Grid */}
                    <Companies />
                </div>
            </section>

            {/* groW */}
            <section className="relative w-full h-[636px] flex bg-[#2A7CC7] justify-center items-center mt-[-30px]">

                {/* Right Side Blue Section */}
                <div className="w-[1440px] md:w-1/2 h-full bg-[#2A7CC7] lg:px-[250px] lg:ml-[0px] ml-[50px] py-16  flex flex-col justify-center">
                    <div className="w-[438px] flex flex-col gap-[24px]">
                        <h5 className="text-white text-lg font-bold leading-[24px] tracking-[0.1px]">WORK WITH US</h5>
                        <h2 className="text-white text-4xl font-bold leading-[50px] tracking-[0.2px]">
                            Now Let&apos;s grow Yours
                        </h2>
                        <p className="text-white lg:text-sm text-[12px] lg:w-auto w-[350px] leading-[20px] tracking-[0.2px]">
                            The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
                        </p>
                        <button className="w-[132px] h-[52px] border border-white rounded-md flex items-center justify-center py-3 px-10 gap-2 mt-6">
                            <span className="text-white text-sm font-bold">Button</span>
                        </button>
                    </div>
                </div>
                {/* Left Side Image */}
                <div className="w-[540px] md:w-1/2 h-full relative">
                    <Image
                        src={girl2}
                        alt="Testimonial Background"
                        className="absolute w-[570px] h-[640px] left-[150px] inset-0 object-cover"
                    />
                </div>

            </section>
        </div>
    );
}