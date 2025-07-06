"use client";
import Image from "next/image";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent px-6 py-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between relative">
        {/* Mobile Layout (Below md) */}
        <div className="flex md:hidden items-center justify-between w-full z-50">
          {/* Hamburger */}
          <button
            className="w-10 h-10 flex items-center justify-center text-white z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <HiOutlineMenu className="text-2xl" />
          </button>

          {/* Logo on right */}
          <div>
            <Image src="/Logo.svg" alt="Logo" width={100} height={30} />
          </div>
        </div>

        {/* Left Side Panel (md and up) */}
        <div className="hidden md:flex items-center space-x-3">
          <div className="w-16 h-14 flex items-center justify-center rounded-[2rem] bg-white/10 border border-white/20 backdrop-blur-lg">
            <HiOutlineMenu className="text-white text-xl" />
          </div>
          <div className="px-8 py-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-lg text-white text-sm font-medium">
            EN / FR
          </div>
        </div>

        {/* Center Logo (md and up) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-40">
          <Image src="/Logo.svg" alt="Logo" width={120} height={40} priority />
        </div>

        {/* Right Side Panel (md and up) */}
        <div className="hidden md:flex items-center space-x-4">
          <span className="px-8 py-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-lg text-white text-md font-medium cursor-pointer">
            +1 234 567 890
          </span>
          <div className="px-8 py-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-lg text-white text-md font-medium cursor-pointer">
            Book a repair
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 px-4 z-40">
          <div className="flex items-center space-x-3">
            {/* <div className="md:hidden w-16 h-14 flex items-center justify-center rounded-[2rem] bg-white/10 border border-white/20 backdrop-blur-lg">
              <HiOutlineMenu className="text-white text-xl" />
            </div> */}
            <div className="px-8 py-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-lg text-white text-sm font-medium">
              EN / FR
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <span className="px-8 py-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-lg text-white text-md font-medium cursor-pointer">
              +1 234 567 890
            </span>
            <div className="px-8 py-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-lg text-white text-md font-medium cursor-pointer">
              Book a repair
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
