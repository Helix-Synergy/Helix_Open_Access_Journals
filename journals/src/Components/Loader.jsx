import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-4">
        <img
          src="../../public/Images/HOAJ.png"
          alt="Helix Journals Logo"
          className="w-32 h-32 animate-pulse"
        />
        <p className="text-gray-500 text-sm tracking-wide">
          Loading Journals...
        </p>
      </div>
    </div>
  );
};

export default Loader;
