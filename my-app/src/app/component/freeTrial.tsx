import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"

export default function FreeTrial() {
    return (
        <div>{/* Free Trial */}
            <div className="max-w-7xl mx-auto text-center mt-16" >
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Start your 14 days free trial</h2>
                <p className="text-lg text-gray-600 mb-6">
                    Met minim Mollie non desert Alamo est sit cliquey dolor
                    do met sent. RELIT official consequent.
                </p>
                <button className="bg-blue-400 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition">
                    Try it free now
                </button>
            </div >

            {/* Social Media Icons Section */}
            < div className="flex justify-center items-center space-x-6 mt-12" >
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
            </div >
        </div>

    )
}