"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Building, Warehouse } from "lucide-react";

const items = [
  {
    icon: <Warehouse size={40} />,
    title: "Warehouse",
    description: "We offer state-of-the-art warehouse services for efficient storage and distribution.",
  },
  {
    icon: <Building size={40} />,
    title: "Building Solutions",
    description: "Innovative building infrastructure tailored to your business needs.",
  },
  {
    icon: <Warehouse size={40} />,
    title: "Logistics",
    description: "Comprehensive logistics services for fast and reliable delivery.",
  },
  {
    icon: <Building size={40} />,
    title: "Custom Spaces",
    description: "Design and build spaces that work perfectly for your operations.",
  },
];

const WhatWeOffer = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + 1 <= items.length - 2) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="relative m-5 overflow-hidden">
      <div className="flex flex-col items-center justify-center p-4">
        <div className="font-bold text-4xl mb-6">What We Offer</div>

        <div className="relative w-full max-w-4xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${startIndex * (100 / 2)}%)`, // 2 items per view
              width: `${(items.length * 100) / 2}%`, // width = #items / items per view
            }}>
            {items.map((item, index) => (
              <div
                key={index}
                className="w-1/2 flex-shrink-0 flex flex-col items-center text-center p-4 border rounded shadow-md mx-2 bg-white">
                <div className="mb-2">{item.icon}</div>
                <div className="font-semibold text-lg mb-2">{item.title}</div>
                <div className="text-sm text-gray-600">{item.description}</div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <div
            className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer p-2 z-10"
            onClick={handlePrev}>
            <ArrowLeft
              size={40}
              className={startIndex === 0 ? "opacity-30" : ""}
            />
          </div>
          <div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer p-2 z-10"
            onClick={handleNext}>
            <ArrowRight
              size={40}
              className={startIndex + 2 >= items.length ? "opacity-30" : ""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
