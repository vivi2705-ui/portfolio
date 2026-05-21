"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About",    path: "#about"    },
  { title: "Projects", path: "#projects" },
  { title: "Contact",  path: "#contact"  },
];

// Inline SVG logo — brutalist-inspired with portfolio colors
const Logo = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background square */}
    <rect width="48" height="48" rx="6" fill="#0f0a2e"/>
    {/* Pink block top-right */}
    <rect x="26" y="4" width="18" height="18" fill="#ec4899"/>
    {/* Purple block bottom-left */}
    <rect x="4" y="26" width="18" height="18" fill="#5B45D4"/>
    {/* Gold accent top-left small */}
    <rect x="4" y="4" width="18" height="8" fill="#daa520"/>
    {/* Green dot bottom-right */}
    <circle cx="38" cy="38" r="6" fill="#00b864"/>
    {/* Letter V — white, bold */}
    <text x="9" y="30" fontFamily="'Courier New', monospace" fontWeight="900" fontSize="20" fill="white" letterSpacing="-1">V</text>
    {/* Border lines */}
    <rect x="1" y="1" width="46" height="46" rx="5" fill="none" stroke="#0f0a2e" strokeWidth="2"/>
  </svg>
);

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#c9c0f0] top-0 left-0 right-0 z-10 bg-[#ede9ff] bg-opacity-95 backdrop-blur-sm shadow-sm">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={"/"} className="flex items-center gap-2">
          <Logo />
          <span className="text-xl font-bold text-[#0f0a2e] hidden sm:block tracking-tight">
            Vinoria<span className="text-[#ec4899]">.</span>
          </span>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-[#5B45D4] text-[#5B45D4] hover:text-[#ec4899] hover:border-[#ec4899]"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-[#5B45D4] text-[#5B45D4] hover:text-[#ec4899] hover:border-[#ec4899]"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
