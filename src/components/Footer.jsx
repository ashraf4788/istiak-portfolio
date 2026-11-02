import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#101916] text-gray-400 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-[#2C8C68] flex items-center justify-center text-white font-bold text-sm">
              UX
            </div>
            <span className="font-bold text-white text-lg tracking-tight">
              Istiak
            </span>
          </div>
          <p className="text-xs text-gray-400">
            Crafting meaningful digital experiences through human-centered
            design.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <a href="#home" className="hover:text-[#2C8C68] transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-[#2C8C68] transition-colors">
            About Me
          </a>
          <a href="#works" className="hover:text-[#2C8C68] transition-colors">
            Works
          </a>
          <a
            href="#services"
            className="hover:text-[#2C8C68] transition-colors"
          >
            Services
          </a>
          <a href="#contact" className="hover:text-[#2C8C68] transition-colors">
            Contact
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-xs text-gray-500 text-center md:text-right">
          &copy; {new Date().getFullYear()} Istiak. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
