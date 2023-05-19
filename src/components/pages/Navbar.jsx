import React from "react";
import Contact from "../images/Contact.svg";
import MedBlock from "../images/MedBlock.svg";

const Navbar = () => {
  return (
    <nav className="bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-37 w-148 ml-4" src={MedBlock} alt="img" />
            </div>
            <div className="hidden md:block">{/* Desktop Menu */}</div>
          </div>
          <div className="flex items-center">
            {/* Right Side */}
            <button className="bg-green-500 text-black hover:bg-green-700 hover:text-black  rounded-full text-sm font-medium h-8 w-24  " >
              Login
            </button>
            <img className="h-8 w-8 ml-4" src={Contact} alt="img" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
