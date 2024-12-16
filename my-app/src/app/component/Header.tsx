import Link from "next/link";
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import {
  FiPhone,
  FiMail,
} from "react-icons/fi";


export default function Header(){
    return(
        <div className="bg-[#23856D] py-4 hidden lg:block">
        <div className="container mx-auto flex justify-between items-center text-white text-sm">
          {/* Contact Information */}
          <div className="flex text-lg items-center gap-4">
            <div className="flex items-center gap-1">
              <FiPhone />
              <p>(225) 555-0118</p>
            </div>
            <div className="text-md flex items-center gap-1">
              <FiMail />
              <p>michelle.rivera@example.com</p>
            </div>
          </div>

          {/* Promotion */}
          <p className="hidden md:block font-extrabold text-xl">
            Follow Us and get a chance to win 80% off
          </p>

          {/* Social Media Links */}
          <div className="flex text-lg items-center gap-4">
            <p className="hidden md:block">Follow Us:</p>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </Link>
            <Link
              href=" https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
    )
}