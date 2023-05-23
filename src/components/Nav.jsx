import React from 'react';

const Nav = ({ Leftimagescr, Rightimagescr, Button }) => {
  return (
    <nav className="bg-supply-black">
      <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-10 w-auto" src="images/MedBlock.svg" alt="img" />
            </div>
            <div className="hidden md:block">{/* Desktop Menu */}</div>
          </div>
          <div className="flex items-center">
            {/* Right Side */}
            <img className="h-8 w-8 ml-4" src={Leftimagescr} alt="img" />
            {Button}
            {/* Dropdown content */}
            <ul className="absolute right-0 mt-2 py-2 bg-white rounded shadow-lg hidden">
              <li className="px-4 py-2 hover:bg-gray-200">Option 1</li>
              <li className="px-4 py-2 hover:bg-gray-200">Option 2</li>
              <li className="px-4 py-2 hover:bg-gray-200">Option 3</li>
            </ul>
            <img className="h-8 w-8 ml-4" src={Rightimagescr} alt="img" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
