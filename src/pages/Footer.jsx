import { FaLinkedinIn } from 'react-icons/fa';
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-white via-gray-900 to-black text-white mt-10 py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo */}
                    <div className="mb-6 md:mb-0">
                        <img 
                            src="/logo.webp" 
                            alt="NextGenAfrica Logo" 
                            className="h-34 md:h-28 max-w-full" 
                            loading="lazy" 
                        />
                    </div>

                    {/* Navigation Links */}
                    <div className="mb-6 md:mb-0">
                        <ul className="flex space-x-4">
                            <li>
                                <a href="/about" className="text-gray-400 hover:text-white transition duration-200">About Us</a>
                            </li>
                            <li>
                                <a href="/courses" className="text-gray-400 hover:text-white transition duration-200">Courses</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-400 hover:text-white transition duration-200">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4">
                        <a href="https://wa.me/+2347033112571" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition duration-200">
                            <FaWhatsapp size={24} />
                        </a>
                        <a href="https://twitter.com/Daniel90524246" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-200">
                            <FaXTwitter size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/daniel-williams-ux/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700 transition duration-200">
                            <FaLinkedinIn size={20} />
                        </a>
                        {/* <a href="williamsoligodaniel@gmail.com?subject=Sent_From_your_Site&body=Hi👋" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-700 transition duration-200">
                            <CiMail size={24} />
                        </a> */}
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} NextGenAfrica Tech. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;