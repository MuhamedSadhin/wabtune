"use client";

import {
  FaPhone,
  FaInstagram,
  FaGoogle,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

const WabtuneFooter = () => {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-r from-[#1C084E] to-[#452076] w-full"
    >
      <div className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <a
              className="text-xl font-semibold text-white hover:text-gray-200 transition-colors"
              href="#"
              aria-label="Brand"
            >
              WABtune
            </a>
            <p className="text-sm text-gray-400 mt-3 max-w-xs">
              Empowering businesses to boost sales, automate communication, and
              grow faster through smart messaging solutions.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-100 mb-4">
              Product
            </h4>
            <div className="space-y-3 flex flex-col">
              <a
                href="https://app.wabtune.com/login"
                className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
              >
                Login
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
              >
                About
              </a>
              <a
                href="https://app.wabtune.com/docs"
                className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
              >
                Docs
              </a>
              <a
                href="#features"
                className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
              >
                Features
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-100 mb-4">
              Company
            </h4>
            <div className="space-y-3 flex flex-col">
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
              >
                About us
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
              >
                Customers
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-1 lg:colspan-1 lg:-ml-15">
            <h4 className="text-lg font-semibold text-gray-100 mb-4">
              Contact
            </h4>
            <div className="space-y-4 text-sm text-gray-300">
              {/* Location */}
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-white mt-1 w-4 h-4 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">
                    Neptunemark Digital Creator LLP 21/296 I,
                  </p>
                  <p className="text-gray-400">Markaz Knowledge City,</p>
                  <p className="text-gray-400">Kozhikode, Kerala, India</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <FaSquarePhone className="text-white w-4 h-4 flex-shrink-0" />
                <a
                  href="tel:+918921214461"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +91 89212 14461
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <MdMarkEmailUnread className="text-white w-4 h-4 flex-shrink-0" />
                <a
                  href="mailto:info@neptunemark.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@neptunemark.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 text-center sm:text-left">
            © {new Date().getFullYear()} Wabtune. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-2">
            <a
              href="https://www.instagram.com/neptune_mark?igsh=NnZ2Y25ub3pkZ2Qz"
              className="size-8 sm:size-10 flex justify-center items-center text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="size-4 sm:size-5" />
            </a>
            <a
              href="https://www.google.com"
              className="size-8 sm:size-10 flex justify-center items-center text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Google"
            >
              <FaGoogle className="size-4 sm:size-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/neptunemark/"
              className="size-8 sm:size-10 flex justify-center items-center text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="size-4 sm:size-5" />
            </a>
            <a
              href="https://wa.me/918921214461
"
              className="size-8 sm:size-10 flex justify-center items-center text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="WhatsApp"
            >
              <ImWhatsapp className="size-4 sm:size-5" />
            </a>
            <a
              href="https://x.com"
              className="size-8 sm:size-10 flex justify-center items-center text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Twitter"
            >
              <FaXTwitter className="size-4 sm:size-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WabtuneFooter;
