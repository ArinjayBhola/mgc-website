"use client";

import React, { useState } from "react";
import { ChevronDown, Mail, Phone, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMouse, setIsMouse] = useState(false);
  const [isWhatWeOfferOpen, setIsWhatWeOfferOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const AboutUsDropdownData = [
    { label: "Our Team", src: "/team" },
    { label: "Overview", src: "/aboutus" },
  ];

  const WhatWeOfferDropdownData = [
    { label: "Advisory Services", src: "/services/advisory-services" },
    { label: "Audit and Assurance", src: "/services/audit-and-assurance" },
    { label: "Book Keeping and Outsourcing", src: "/services/bookkeeping-and-outsourcing" },
    { label: "Domestic Taxation and International Taxation", src: "/services/domestic-and-international-taxation" },
    { label: "Goods and Service Tax", src: "/services/goods-and-services-tax" },
    { label: "IFC and Risk Control Services", src: "/services/ifc-services" },
    { label: "Investment and Capex Planning", src: "/services/investment-and-capex" },
    { label: "Litigation", src: "/services/litigation" },
    { label: "Startup Advisory", src: "/services/startup-advisory" },
    { label: "Risk Mitigation", src: "/services/risk-mitigation" },
    { label: "Transaction Advisory", src: "/services/transaction-advisory" },
    { label: "Transfer Pricing", src: "/services/transfer-pricing" },
  ];

  return (
    <div className="sticky top-0 z-50 bg-[#e3d5cf] shadow-2xl">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4">
        {/* Left logos */}
        <div className="flex items-center space-x-2">
          {/* CA Logo - only on large screens */}
          <div className="hidden lg:block">
            <Image
              src="/ca-logo.jpg"
              alt="CA Logo"
              width={50}
              height={50}
            />
          </div>
          {/* Main Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={300}
              height={300}
            />
          </Link>
        </div>

        {/* Contact Info */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-gray-800">
            <Phone className="text-blue-600" />
            <span>+91 9415131816</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-800">
            <Mail className="text-blue-600" />
            <span>mgco@mgcoca.in</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Menu
            size={28}
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-gray-800"
          />
        </div>
      </div>

      {/* Desktop Navigation Bar */}
      <div className="hidden lg:flex justify-center items-center bg-[#a6a6a6] p-4 space-x-6 text-white text-lg">
        <Link
          href="/"
          className="hover:text-black">
          Home
        </Link>

        {/* About Us Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsMouse(true)}
          onMouseLeave={() => setIsMouse(false)}>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-black">
            <span>About Us</span>
            <ChevronDown className={`transition-transform duration-300 ${isMouse ? "rotate-180" : ""}`} />
          </div>
          <div
            className={`absolute top-10 left-0 bg-white rounded-xl shadow-xl text-black min-w-[180px] z-50 transition-all duration-300 ${
              isMouse ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
            }`}>
            {AboutUsDropdownData.map((item, i) => (
              <Link
                key={i}
                href={item.src}
                className="block px-4 py-3 border-b hover:bg-gray-100 last:border-none text-sm hover:rounded-xl">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* What We Offer Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsWhatWeOfferOpen(true)}
          onMouseLeave={() => setIsWhatWeOfferOpen(false)}>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-black">
            <span>What We Offer</span>
            <ChevronDown className={`transition-transform duration-300 ${isWhatWeOfferOpen ? "rotate-180" : ""}`} />
          </div>
          <div
            className={`absolute top-10 left-0 bg-white rounded-xl shadow-xl text-black min-w-[320px] max-h-[300px] overflow-y-auto z-50 transition-all duration-300 ${
              isWhatWeOfferOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
            }`}>
            {WhatWeOfferDropdownData.map((item, i) => (
              <Link
                key={i}
                href={item.src}
                className="block px-4 py-3 border-b hover:bg-gray-100 last:border-none text-sm">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div
          onClick={() => scrollToSection("sectors")}
          className="cursor-pointer hover:text-black">
          <Link href="/#sectors">Sector</Link>
        </div>
        <div
          onClick={() => scrollToSection("projects")}
          className="cursor-pointer hover:text-black">
          <Link href="/blogs">Blog</Link>
        </div>
        <div
          onClick={() => scrollToSection("projects")}
          className="cursor-pointer hover:text-black">
          <Link href="/contact">Contact Us</Link>
        </div>
        {/* New Career Link */}
        <div
          onClick={() => scrollToSection("projects")}
          className="cursor-pointer hover:text-black">
          <Link href="/contact">Career</Link>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-xs bg-white z-[100] shadow-2xl transition-transform duration-300 ease-in-out rounded-r-xl ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b shadow-sm">
          <div className="flex items-center space-x-3">
            <Image
              src="/ca-logo.jpg"
              alt="Logo"
              width={40}
              height={40}
            />
            <div className="text-lg font-semibold text-gray-800">Mittal Gupta & Co.</div>
          </div>
          <X
            size={24}
            className="text-gray-700 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </div>

        {/* Contact Info */}
        <div className="p-4 border-b text-sm text-gray-700 space-y-2">
          <div className="flex items-center space-x-2">
            <Phone
              className="text-blue-600"
              size={16}
            />
            <span>+91 9415131816</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail
              className="text-blue-600"
              size={16}
            />
            <span>mgco@mgcoca.in</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="p-4 space-y-6 text-gray-800 text-base">
          <div>
            <div className="font-medium text-blue-800 mb-1">Home</div>
          </div>

          <div>
            <div className="font-medium text-blue-800 mb-1">About Us</div>
            <div className="pl-4 space-y-2 text-sm text-gray-600">
              {AboutUsDropdownData.map((item) => (
                <Link
                  key={item.label}
                  href={item.src}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block hover:text-blue-500">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="font-medium text-blue-800 mb-1">What We Offer</div>
            <div className="pl-4 space-y-2 text-sm text-gray-600 max-h-[160px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300">
              {WhatWeOfferDropdownData.map((item) => (
                <Link
                  key={item.label}
                  href={item.src}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block hover:text-blue-500">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="font-medium text-blue-800 mb-1">Sector</div>
          </div>
          <div>
            <div className="font-medium text-blue-800 mb-1">
              <Link href="/blogs">Blog</Link>
            </div>
          </div>
          <div>
            <div className="font-medium text-blue-800 mb-1">
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>

          {/* New Career Link */}
          <div>
            <div className="font-medium text-blue-800 mb-1">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}>
                Career
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
