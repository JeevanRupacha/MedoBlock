import React from "react";


const Navbar = () => {
  return (
    <nav className="bg-supply-black">
      <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-37 w-148 " src="images/MedBlock.svg" alt="img" />
            </div>
            <div className="hidden md:block">{/* Desktop Menu */}</div>
          </div>
          <div className="flex items-center">
            {/* Right Side */}

            <button className="bg-button text-black hover:bg-green-700 hover:text-black  rounded-full text-sm font-medium h-8 w-24 ml-2 " >
            Login
            </button>
            <img className="h-8 w-8 ml-2" src=" images/contact.svg" alt="imageswitch" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
