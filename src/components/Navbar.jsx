"use client";
import Image from "next/image";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
// Accept a 'theme' prop. Default to 'light' if none is provided.
export default function Navbar({ theme = "light" }) {
  const [isOpen, setIsOpen] = useState(false);

  // Define styles based on the theme prop
  const textColor = theme === "light" ? "text-white" : "text-gray-900";
  const bgColor = theme === "light" ? "bg-white/10" : "bg-black/5";
  const borderColor = theme === "light" ? "border-white/20" : "border-black/20";
  const logoSrc = theme === "light" ? "/Images/Logo.svg" : "/Images/Logo-dark.svg";

  // Combine static and dynamic classes
  const navElementClasses = `${bgColor} ${borderColor} ${textColor} backdrop-blur-lg`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 transition-colors duration-300 border-black border-2">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between relative">
        {/* Mobile Layout */}
        <div className="flex md:hidden items-center justify-between w-full z-50">
          <button
            className={`w-10 h-10 flex items-center justify-center z-50 ${textColor}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <HiOutlineMenu className="text-2xl" />
          </button>
          <div>
            {/* You'll need a dark version of the logo, e.g., Logo-dark.svg */}
            <Image src={logoSrc} alt="Logo" width={100} height={30} />
          </div>
        </div>

        {/* Left Side (Desktop) */}
        <div className="hidden md:flex items-center space-x-3">
          <div
            className={`w-16 h-14 flex items-center justify-center rounded-[2rem] cursor-pointer ${navElementClasses}`}
          >
            <HiOutlineMenu className="text-xl" />
          </div>
          <div
            className={`px-8 py-4 rounded-full text-sm font-medium ${navElementClasses}`}
          >
            EN / FR
          </div>
        </div>

        {/* Center Logo (Desktop) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-40">
          <Image src={logoSrc} alt="Logo" width={120} height={40} priority />
        </div>

        {/* Right Side (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <span
            className={`px-8 py-4 rounded-full text-md font-medium cursor-pointer ${navElementClasses}`}
          >
            +1 234 567 890
          </span>
          <div
            className={`px-8 py-4 rounded-full text-md font-medium cursor-pointer ${navElementClasses}`}
          >
            Book a repair
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu (optional: style based on theme too) */}
      {isOpen && (
        <div
          className={`md:hidden mt-4 space-y-4 px-4 z-40 ${navElementClasses} rounded-lg p-4`}
        >
          {/* ... mobile menu items ... */}
        </div>
      )}
    </nav>
  );
}
