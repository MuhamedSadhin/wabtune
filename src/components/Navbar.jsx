

import  { useState } from "react";
import wabtunelogo from "../assets/wablogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 -inset-x-0 z-50 w-full text-sm bg-gradient-to-b from-gray-900 to-transparent px-2">
      <nav className="mt-4 relative max-w-6xl w-full border bg-gradient-to-r  from-[#3C0A6E] to-[#1A013E]/90  border-gray-700 rounded-[24px]  flex flex-wrap md:flex-nowrap items-center justify-between p-1 ps-4 md:py-0 sm:mx-auto">
        <div className="flex items-center">
          <a
            className="flex-none text-xl inline-block font-semibold"
            href="#home"
            aria-label="Wabtune"
          >
            <img
              src={wabtunelogo}
              alt="Wabtune Logo"
              className="w-32 filter brightness-0 invert"
            />
          </a>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-2 md:order-4 md:ms-4">
          <a
            className="whitespace-nowrap py-2 px-4 text-sm font-medium rounded-full border border-transparent bg-gray-800 text-white hover:bg-gray-900"
            href="https://app.wabtune.com/login"
          >
            Login
          </a>

          {/* Hamburger menu button - only on mobile */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center w-10 h-10 border border-gray-200 text-white rounded-full hover:bg-gray-700"
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "max-h-96" : "max-h-0"
          } overflow-hidden transition-all duration-500 ease-in-out basis-full grow md:max-h-full md:flex md:items-center md:justify-end`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:gap-6 mt-3 md:mt-0 py-2 md:py-0 md:ps-6">
            {["home", "about", "work", "contact", "docs"].map((link) => (
              <a
                key={link}
                href={
                  link === "docs" ? "https://app.wabtune.com/docs" : `#${link}`
                }
                onClick={() => setIsMenuOpen(false)}
                className="py-2 md:py-3 px-4 text-white font-medium hover:text-cyan-300 transition-colors duration-200"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
