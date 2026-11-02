"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#17231F]/90 backdrop-blur-md py-4 shadow-lg border-b border-[#2C8C68]/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo / Name */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#2C8C68] flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
            UX
          </div>
          <span className="font-bold text-lg tracking-tight text-white group-hover:text-[#2C8C68] transition-colors">
            Istiak
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 bg-[#17231F]/60 px-6 py-2.5 rounded-full border border-white/10 backdrop-blur-md">
          <a
            href="#home"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            About Me
          </a>
          <a
            href="#works"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Works
          </a>
          <a
            href="#services"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Let's Talk CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#2C8C68] hover:bg-[#237053] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#17231F] border-b border-white/10 py-6 px-6 shadow-xl flex flex-col gap-4 animate-fadeIn">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium text-gray-200 hover:text-[#2C8C68] py-2 border-b border-white/5"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium text-gray-200 hover:text-[#2C8C68] py-2 border-b border-white/5"
          >
            About Me
          </a>
          <a
            href="#works"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium text-gray-200 hover:text-[#2C8C68] py-2 border-b border-white/5"
          >
            Works
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium text-gray-200 hover:text-[#2C8C68] py-2 border-b border-white/5"
          >
            Services
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium text-gray-200 hover:text-[#2C8C68] py-2 border-b border-white/5"
          >
            Contact
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full flex items-center justify-center gap-2 bg-[#2C8C68] text-white py-3 rounded-xl font-semibold shadow-md"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
