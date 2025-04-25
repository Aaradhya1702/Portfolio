import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-black text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <div className="bg-white p-1 rounded-md">
              <img
                src="/Logo.svg" 
                alt="Logo"
                className="h-8 w-8"
              />
            </div>
          </div>

         
          <nav className="hidden md:flex space-x-8 bg-[#c4c4c4] px-6 py-2 rounded-md">
            <a href="#" className="font-bold">About Me</a>
          </nav>

        
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      
      {menuOpen && (
        <div className="md:hidden bg-[#c4c4c4] px-4 py-4 space-y-2">
          <a href="#" className="block font-bold">About Me</a>
        </div>
      )}
    </header>
  );
};

export default Header;
