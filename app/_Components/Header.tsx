"use client";

import React, { useState } from "react";
import { ChevronDown, Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMouse, setIsMouse] = useState(false);
  const [isWhatWeOfferOpen, setIsWhatWeOfferOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "Home", section: "home" },
    { label: "What we offer", section: "projects" },
    { label: "Blog", section: "projects" },
    { label: "Sector", section: "sectors" },
    { label: "Contact Us", section: "projects" },
  ];

  const AboutUsDropdownData = [
    { label: "Our Team", src: "/team" },
    { label: "Overview", src: "/aboutus" },
  ];

  const WhatWeOfferDropdownData = [
    { label: "Audit and Assurance", src: "/services/audit-and-assurance" },
    { label: "Book Keeping and Outsourcing", src: "/services/bookkeeping-and-outsourcing" },
    { label: "Domestic Taxation and International Taxation", src: "/services/domestic-and-international-taxation" },
    { label: "Goods and Service Tax", src: "/services/goods-and-services-tax" },
    { label: "IFC Services", src: "/services/ifc-services" },
    { label: "Advisory Services", src: "/services/advisory-services" },
    { label: "Transaction Advisory", src: "/services/transaction-advisory" },
    { label: "Startup Advisory", src: "/services/startup-advisory" },
    { label: "Litigation", src: "/services/litigation" },
    { label: "Transfer Pricing", src: "/services/transfer-pricing" },
    { label: "Investment and Capex Related Decision Making", src: "/services/investment-and-capex" },
    { label: "Risk Mitigation", src: "/services/risk-mitigation" },
  ];

  return (
    <div className="sticky top-0 z-50 bg-white shadow-2xl">
      {/* Top Bar: Firm name left, contact info right */}
      <div className="flex justify-between items-center px-4 py-2">
        <Link href={"/"}>
          <div className="text-2xl font-semibold">Mittal Gupta & Co.</div>
        </Link>
        <div className="flex items-center space-x-6">
          <div className="text-md text-gray-700 mt-2">
            <div className="text-md flex items-center space-x-2 text-gray-800">
              <span className="text-blue-600">
                <Phone />
              </span>
              <span>0512-3158490, 9839034107, 9415131816</span>
            </div>
          </div>

          <div className="text-md flex items-center space-x-2 text-gray-800">
            <span className="text-blue-600">
              <Mail />
            </span>
            <span>mgco@mgcoca.in</span>
          </div>
          <div className="w-12 h-12 relative">
            <Image
              src="/ca-logo.jpg"
              alt="CA Logo"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

      {/* Gray Nav Bar */}
      <div className="flex justify-center items-center bg-[#a6a6a6] p-4 space-x-6">
        <Link href={"/"}>
          <div
            className="text-lg cursor-pointer hover:text-gray-700"
            onClick={() => scrollToSection("projects")}>
            Home
          </div>
        </Link>

        {/* About Us Dropdown */}
        <div
          className="relative text-lg cursor-pointer hover:text-gray-700"
          onMouseEnter={() => setIsMouse(true)}
          onMouseLeave={() => setIsMouse(false)}>
          <div className="flex items-center space-x-1">
            <span>About us</span>
            <ChevronDown className={`transition-transform duration-300 ${isMouse ? "rotate-180" : ""}`} />
          </div>

          <div
            className={`absolute left-0 top-12 min-w-[180px] bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 z-50 ${
              isMouse ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
            }`}>
            {AboutUsDropdownData.map((item, index) => (
              <Link
                href={item.src}
                key={index}>
                <div className="px-4 py-3 text-sm hover:bg-gray-100 transition-colors border-b last:border-none">
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* What We Offer Dropdown */}
        <div
          className="relative text-lg cursor-pointer hover:text-gray-700"
          onMouseEnter={() => setIsWhatWeOfferOpen(true)}
          onMouseLeave={() => setIsWhatWeOfferOpen(false)}>
          <div className="flex items-center space-x-1">
            <span>What we offer</span>
            <ChevronDown className={`transition-transform duration-300 ${isWhatWeOfferOpen ? "rotate-180" : ""}`} />
          </div>

          <div
            className={`absolute left-0 top-12 min-w-[320px] max-h-[300px] overflow-y-auto bg-white rounded-xl shadow-xl transition-all duration-300 z-50 ${
              isWhatWeOfferOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
            }`}>
            {WhatWeOfferDropdownData.map((item, index) => (
              <Link
                href={item.src}
                key={index}>
                <div className="px-4 py-3 text-sm hover:bg-gray-100 transition-colors border-b last:border-none">
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Other Nav Items */}
        {navItems.slice(2).map((item) => (
          <div
            key={item.label}
            className="text-lg cursor-pointer hover:text-gray-700"
            onClick={() => scrollToSection(item.section)}>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
