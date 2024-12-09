"use client"
import { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Company1 from "../public/Company (1).png"
import Company2 from "../public/Company (2).png"
import Company3 from "../public/Company (3).png"
import Company4 from "../public/Company (4).png"
import Company5 from "../public/Company (5).png"
import Company6 from "../public/Company (6).png"

// TypeScript Interface for Pricing Card Props
interface PricingCardProps {
  title: string;
  price: string;
  limit: string;
  features: string[];
  highlight: boolean;
  bgColor: string;
  textColor: string;
  limitColor: string;
}

// Reusable Pricing Card Component
function PricingCard({
  title,
  price,
  limit,
  features,
  highlight,
  bgColor,
  textColor,
  limitColor,
}: PricingCardProps) {
  return (
    <div
      className={`border rounded-lg shadow-md p-8 transform transition-transform hover:scale-105 ${
        highlight ? "border-2 border-blue-500 bg-blue-50" : "border border-gray-300"
      } ${bgColor}`}
    >
      <h3 className={`text-xl md:text-2xl text-center font-semibold mb-4 ${textColor}`}>{title}</h3>
      <p className={`text-3xl md:text-4xl font-extrabold mb-2 ${textColor}`}>{price}</p>
      <p className={`text-3xl md:text-4xl text-semibold ${limitColor} leading-[24px] mb-2`}>{limit}</p>
      <ul className={`space-y-4 mb-8 ${textColor}`}>
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="flex items-center justify-center w-5 h-5 bg-green-500 text-white text-xs font-bold rounded-full">✔</span>

            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
interface Faquestions {
    question: string;
    answer: string;
  }function FAQuestions({
    question,
    answer,
  }: Faquestions) {
    return(
    <div>
        <h3 className="font-semibold text-lg mb-2"> {question} </h3>
        <p className="text-gray-600">{answer}</p>
    </div>
)
}

    

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const toggleBilling = () => setIsYearly(!isYearly);

  const pricingPlans = [
    {
      title: "FREE",
      price: isYearly ? "$0" : "$0",
      limit: "Per Month",
      features: ["Unlimited Prduct Updates"],
      highlight: false,
      bgColor: "",
      textColor: "text-gray-800",
      limitColor: "text-blue-400",
    },
    {
      title: "STANDARD",
      price: isYearly ? "$99.99" : "$9.99",
      limit: isYearly? "Per Year" : "Per Month",
      features: ["Unlimited Prduct Updates", "Unlimited Prduct Updates"],
      highlight: true,
      bgColor: "bg-blue-950",
      textColor: "text-white",
      limitColor: "text-blue-400",
    },
    {
      title: "PREMIUM",
      price: isYearly ? "$199.99" : "$19.99",
      limit: isYearly? "Per Year" : "Per Month",
      features: ["Unlimited Prduct Updates"],
      highlight: false,
      bgColor: "",
      textColor: "text-gray-800",
      limitColor: "text-blue-400",
    },
  ];
  const FAQs = [
    {
        question: "the quick fox jumps over the lazy dog",
        answer:"Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
    }
  ]

  return (
    <section className="bg-gray-50 py-16 px-4">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Pricing</h2>
        <p className="text-lg text-gray-600">
        Problems trying to resolve the conflict between 
        the two major realms of Classical physics: Newtonian mechanics 
        </p>
      </div>

      {/* Breadcrumb Section */}
      <div className="mb-8 text-gray-600 text-sm text-center">
        <p>
          <span className="text-blue-600  font-medium cursor-pointer">Home </span> {"  >  "} Pricing
        </p>
      </div>

      {/* Monthly/Yearly Toggle */}
      <div className="flex justify-center items-center mb-8">
        <button
          onClick={toggleBilling}
          className={`px-6 py-2 text-sm font-medium rounded-l-lg border ${
            !isYearly ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={toggleBilling}
          className={`px-6 py-2 text-sm font-medium rounded-r-lg border ${
            isYearly ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
          }`}
        >
          Yearly
        </button>
      </div>

      {/* Pricing Plans Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>

      {/* Trusted Companies Section */}
      <div className="max-w-7xl mx-auto text-center mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Trusted by Leading Companies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          <Image src={Company1} alt="Company 1" className="mx-auto h-12" />
          <Image src={Company2} alt="Company 2" className="mx-auto h-12" />
          <Image src={Company3} alt="Company 3" className="mx-auto h-12" />
          <Image src={Company4} alt="Company 4" className="mx-auto h-12" />
          <Image src={Company5} alt="Company 5" className="mx-auto h-12" />
          <Image src={Company6} alt="Company 6" className="mx-auto h-12" />
        </div>
      </div>

      {/* FAQs Section */}
<div className="max-w-7xl mx-auto text-center mt-16">
  <h2 className="text-3xl font-bold text-gray-800 mb-8">Pricing FAQs</h2>
  <p className="text-gray-600 mb-8">
    Problems trying to resolve the conflict between the two major realms of Classical physics
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
    {Array(6)
      .fill(FAQs[0]) // Repeat the first FAQ 6 times
      .map((faq, index) => (
        <FAQuestions key={index} {...faq} />
      ))}
  </div>
  <p className="text-gray-600 mt-8">
    Haven&apos;t got your answer? <a href="#" className="text-blue-600 font-medium">Contact our support</a>
  </p>
</div>


      {/* Call to Action Section */}
      <div className="max-w-7xl mx-auto text-center mt-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Start your 14 days free trial</h2>
        <p className="text-lg text-gray-600 mb-6">
        Met minim Mollie non desert Alamo est sit cliquey dolor 
        do met sent. RELIT official consequent.
        </p>
        <button className="bg-blue-400 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition">
        Try it free now
        </button>
      </div>

      {/* Social Media Icons Section */}
      <div className="flex justify-center items-center space-x-6 mt-12">
        <a href="#" className="text-gray-600 hover:text-blue-600">
          <FaFacebookF size={24} />
        </a>
        <a href="#" className="text-gray-600 hover:text-pink-500">
          <FaInstagram size={24} />
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-500">
          <FaLinkedinIn size={24} />
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-400">
          <FaTwitter size={24} />
        </a>
      </div>
    </section>
  );
}