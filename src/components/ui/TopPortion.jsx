import React from "react";

function TopPortion() {
  return (
    <div className="w-full border-2 border-black px-4">
      <div className="max-w-screen-xl mx-auto flex flex-row items-center w-full gap-x-[40%]">
        {/* Left Section */}
        <div className="flex items-center space-x-2 w-full border-black border-2 ">
          <div className="w-3 h-3 bg-black rounded-full" />
          <span className="text-lg font-medium text-gray-800">
            OUR ADVANTAGE
          </span>
        </div>

        {/* Right Section */}
        <div className="w-full">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 text-left border">
            Team for Cool, <br />
            Repair
          </h1>
        </div>
      </div>
    </div>
  );
}

export default TopPortion;
