import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-10 font-montserrat">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-gray-100 px-4 py-5">
          {/* Logo */}
          <h3 className="text-2xl font-bold text-gray-800">Bandage</h3>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-blue-600 text-xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-blue-600 text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-blue-600 text-xl">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gray-300 my-6"></div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4">
          {/* Company Info */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Company Info</h4>
            <ul className="space-y-2 text-gray-600">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Features</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Business Marketing</li>
              <li>User Analytics</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-600">
              <li>iOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Get in Touch</h4>
            <form className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 border border-gray-300 rounded w-full sm:w-auto"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-600 mt-4">Lore imp sum dolor Amit</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-600 text-sm mt-8">
          Made With Love By Finland. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
