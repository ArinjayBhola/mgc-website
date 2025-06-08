"use client";

import React, { useState, useEffect } from "react";
import { Briefcase, Building, Settings, Users } from "lucide-react";

const sectors = [
  { name: "Sugar Manufacturing", icon: <Settings /> },
  { name: "Retail & Consumer Markets", icon: <Users /> },
  { name: "Automotive Sector", icon: <Briefcase /> },
  { name: "Power & Distribution", icon: <Building /> },
  { name: "Insurance & Risk", icon: <Briefcase /> },
  { name: "Technology", icon: <Settings /> },
  { name: "Infrastructure", icon: <Building /> },
  { name: "Telecom & Communication", icon: <Users /> },
  { name: "Jewellery Industry", icon: <Briefcase /> },
  { name: "Banking & Finance", icon: <Building /> },
  { name: "Hospitality Services", icon: <Users /> },
  { name: "Engineering Services", icon: <Settings /> },
  { name: "Defence & Aerospace", icon: <Briefcase /> },
  { name: "IT Services", icon: <Settings /> },
  { name: "FMCG", icon: <Users /> },
  { name: "Agro-Chemical", icon: <Building /> },
  { name: "PSUs", icon: <Briefcase /> },
  { name: "Realty Sector", icon: <Building /> },
  { name: "Manufacturing", icon: <Settings /> },
  { name: "D2C Brands", icon: <Users /> },
];

const SectorsPage = () => {
  // State for current index of carousel start
  const [currentIndex, setCurrentIndex] = useState(0);
  // State for how many slides to show per view based on window width
  const [slidesPerView, setSlidesPerView] = useState(1);

  // Update slidesPerView on window resize (responsive breakpoints)
  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width >= 1024) setSlidesPerView(4);
      else if (width >= 768) setSlidesPerView(3);
      else if (width >= 640) setSlidesPerView(2);
      else setSlidesPerView(1);
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  // Move carousel left
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? sectors.length - slidesPerView : prev - 1));
  };

  // Move carousel right
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + slidesPerView >= sectors.length ? 0 : prev + 1));
  };

  // Get visible slides based on currentIndex and slidesPerView, loop around if needed
  const visibleSlides = [];
  for (let i = 0; i < slidesPerView; i++) {
    visibleSlides.push(sectors[(currentIndex + i) % sectors.length]);
  }

  return (
    <div
      className="bg-white py-16 px-6 lg:px-20 min-h-screen"
      id="sectors">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Sectors</h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          From cutting-edge tech to traditional industries, we empower a wide range of sectors with custom solutions.
        </p>

        {/* Carousel container */}
        <div className="relative">
          {/* Carousel slides */}
          <div className="flex space-x-6 overflow-hidden">
            {visibleSlides.map((sector, idx) => (
              <div
                key={currentIndex + "-" + idx}
                className="bg-gray-50 rounded-2xl shadow p-6 flex-1 text-center hover:shadow-md transition duration-300">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-fit mx-auto mb-4">{sector.icon}</div>
                <p className="text-gray-700 font-medium text-lg">{sector.name}</p>
              </div>
            ))}
          </div>

          {/* Prev/Next Buttons */}
          <button
            onClick={prevSlide}
            aria-label="Previous"
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white shadow rounded-full p-2 hover:bg-blue-100 transition">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next"
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white shadow rounded-full p-2 hover:bg-blue-100 transition">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectorsPage;
