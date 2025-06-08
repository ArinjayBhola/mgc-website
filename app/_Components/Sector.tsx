"use client";

import React, { useState } from "react";
import { Briefcase, Building, Settings, Users, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sectors = [
  { name: "Sugar Manufacturing", icon: <Settings size={28} /> },
  { name: "Retail & Consumer Markets", icon: <Users size={28} /> },
  { name: "Automotive Sector", icon: <Briefcase size={28} /> },
  { name: "Power & Distribution", icon: <Building size={28} /> },
  { name: "Insurance & Risk", icon: <Briefcase size={28} /> },
  { name: "Technology", icon: <Settings size={28} /> },
  { name: "Infrastructure", icon: <Building size={28} /> },
  { name: "Telecom & Communication", icon: <Users size={28} /> },
  { name: "Jewellery Industry", icon: <Briefcase size={28} /> },
  { name: "Banking & Finance", icon: <Building size={28} /> },
  { name: "Hospitality Services", icon: <Users size={28} /> },
  { name: "Engineering Services", icon: <Settings size={28} /> },
  { name: "Defence & Aerospace", icon: <Briefcase size={28} /> },
  { name: "IT Services", icon: <Settings size={28} /> },
  { name: "FMCG", icon: <Users size={28} /> },
  { name: "Agro-Chemical", icon: <Building size={28} /> },
  { name: "PSUs", icon: <Briefcase size={28} /> },
  { name: "Realty Sector", icon: <Building size={28} /> },
  { name: "Manufacturing", icon: <Settings size={28} /> },
  { name: "D2C Brands", icon: <Users size={28} /> },
];

const itemsPerPage = 5;

const SectorsPage = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const maxStartIndex = sectors.length - itemsPerPage;

  const handlePrev = () => {
    if (startIndex === 0) return;
    setDirection("left");
    setStartIndex((prev) => Math.max(prev - itemsPerPage, 0));
  };

  const handleNext = () => {
    if (startIndex >= maxStartIndex) return;
    setDirection("right");
    setStartIndex((prev) => Math.min(prev + itemsPerPage, maxStartIndex));
  };

  const visibleItems = sectors.slice(startIndex, startIndex + itemsPerPage);

  const variants = {
    enter: (dir: string) => ({
      x: dir === "right" ? 400 : -400,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (dir: string) => ({
      x: dir === "right" ? -400 : 400,
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 min-h-screen py-20 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8">Sectors</h2>

        <div className="flex items-center justify-center space-x-6">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="disabled:opacity-30"
            aria-label="Previous">
            <ArrowLeft
              size={36}
              className="text-blue-700 cursor-pointer"
            />
          </button>

          <div className="relative w-full max-w-[1200px] h-[240px] overflow-hidden">
            <AnimatePresence
              initial={false}
              custom={direction}>
              <motion.div
                key={startIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute top-0 left-0 w-full h-full grid grid-cols-5 gap-8">
                {visibleItems.map((sector, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl shadow-md hover:shadow-xl hover:scale-[1.05] transition-transform duration-300 cursor-pointer p-5 flex flex-col items-center justify-center">
                    <div className="text-blue-600 bg-blue-100 rounded-full p-3 mb-4 flex items-center justify-center">
                      {sector.icon}
                    </div>
                    <p className="font-semibold text-blue-900 text-base sm:text-lg">{sector.name}</p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={startIndex >= maxStartIndex}
            className="disabled:opacity-30"
            aria-label="Next">
            <ArrowRight
              size={36}
              className="text-blue-700 cursor-pointer"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectorsPage;
