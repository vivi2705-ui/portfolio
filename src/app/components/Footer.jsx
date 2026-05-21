import React from "react";

const Logo = () => (
  <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="6" fill="#0f0a2e"/>
    <rect x="26" y="4" width="18" height="18" fill="#ec4899"/>
    <rect x="4" y="26" width="18" height="18" fill="#5B45D4"/>
    <rect x="4" y="4" width="18" height="8" fill="#daa520"/>
    <circle cx="38" cy="38" r="6" fill="#00b864"/>
    <text x="9" y="30" fontFamily="'Courier New', monospace" fontWeight="900" fontSize="20" fill="white" letterSpacing="-1">V</text>
    <rect x="1" y="1" width="46" height="46" rx="5" fill="none" stroke="#0f0a2e" strokeWidth="2"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="border z-10 border-t-[#c9c0f0] border-l-transparent border-r-transparent bg-[#ede9ff]">
      <div className="container p-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Logo />
          <span className="text-[#0f0a2e] font-bold">Vinoria<span className="text-[#ec4899]">.</span></span>
        </div>
        <p className="text-[#1e1560] text-sm">© 2026 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
