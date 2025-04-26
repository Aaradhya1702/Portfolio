"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    console.log("Dropdown clicked! 💥");
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    console.log("Menu clicked! 🚀");
    setMenuOpen(!menuOpen);
  };

  const dropdownItems = [
    { title: "On Github", url: "https://github.com/Aaradhya1702" },
    {
      title: "On Instagram",
      url: "https://www.instagram.com/aaradhya_jainn?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      title: "On Linkedin",
      url: "https://www.linkedin.com/in/aaradhya-jain-577798229/",
    },
  ];

  return (
    <header className="bg-[#c4c4c4] border-b-3 border-black text-black relative z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-1 rounded-md">
              <a href="/">
                <img src="/Logo.svg" alt="Logo" className="h-8 w-8" />
              </a>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8 h-full text-center items-center justify-center text-black">
            <div className="relative h-full">
              <button
                onClick={toggleDropdown}
                className="font-bold hover:bg-black h-full hover:text-white px-4 py-2 transition"
              >
                Find Me
              </button>

              {dropdownOpen && (
                <div className="absolute right-12 mt-2 bg-[#e6e6e6] border-4 border-black shadow-[4px_4px_0_0_black] text-left py-2 w-56 z-50">
                  {dropdownItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.url}
                      target="_blank"
                      className="block px-4 py-2 hover:bg-[#d4d4d4] font-medium"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black px-4">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#c4c4c4] px-4 py-4 space-y-2">
          <button
            onClick={toggleDropdown}
            className="block font-bold w-full text-left"
          >
            Find Me
          </button>

          {dropdownOpen && (
            <div className="mt-2 bg-[#e6e6e6] border-4 border-black shadow-[4px_4px_0_0_black] py-2 w-full">
              {dropdownItems.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  className="block px-4 py-2 hover:bg-[#d4d4d4] font-medium"
                >
                  {item.title}
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
