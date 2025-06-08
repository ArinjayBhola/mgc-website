"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const WhatWeOfferData = [
  { topic: "Audit and Assurance", src: "/services/audit-and-assurance" },
  { topic: "Book Keeping and Outsourcing", src: "/services/bookkeeping-and-outsourcing" },
  {
    topic: "Domestic Taxation and International Taxation",
    src: "/services/domestic-and-international-taxation",
  },
  { topic: "Goods and Service Tax", src: "/services/goods-and-services-tax" },
  { topic: "IFC Services", src: "/services/ifc-services" },
  { topic: "Advisory Services", src: "/services/advisory-services" },
  { topic: "Transaction Advisory", src: "/services/transaction-advisory" },
  { topic: "Startup Advisory", src: "/services/startup-advisory" },
  { topic: "Litigation", src: "/services/litigation" },
  { topic: "Transfer Pricing", src: "/services/transfer-pricing" },
  { topic: "Investment and Capex Related Decision Making", src: "/services/investment-and-capex" },
  { topic: "Risk Mitigation", src: "/services/risk-mitigation" },
];

const WhatWeOffer = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const itemsPerPage = 2;

  const handlePrev = () => {
    setDirection("left");
    setStartIndex((prev) => Math.max(prev - 2, 0));
  };

  const handleNext = () => {
    setDirection("right");
    setStartIndex((prev) => Math.min(prev + 2, WhatWeOfferData.length - itemsPerPage));
  };

  const visibleItems = WhatWeOfferData.slice(startIndex, startIndex + itemsPerPage);

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
    <div className="text-center py-12 px-6">
      <h2 className="text-4xl font-bold mb-12">What We Offer</h2>
      <div className="flex items-center justify-center space-x-6">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="disabled:opacity-30">
          <ArrowLeft
            size={48}
            className="text-blue-700 cursor-pointer"
          />
        </button>

        <div className="relative w-[900px] h-[400px] overflow-hidden">
          <AnimatePresence
            custom={direction}
            initial={false}>
            <motion.div
              key={startIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute top-0 left-0 w-full h-full flex justify-center items-start space-x-10">
              {visibleItems.map((item, index) => (
                <div
                  key={index}
                  className="w-[400px] h-[380px] bg-white border rounded-xl shadow-xl transition hover:shadow-2xl flex flex-col items-center p-6">
                  <Monitor
                    size={64}
                    className="mb-6 text-gray-800"
                  />
                  <h3 className="text-2xl font-semibold mb-4 text-center">{item.topic}</h3>
                  <Link href={item.src}>
                    <button className="mt-4 px-5 py-2 text-base font-semibold text-white bg-blue-700 rounded-md hover:bg-blue-900 transition-colors duration-300 cursor-pointer">
                      Read More
                    </button>
                  </Link>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={handleNext}
          disabled={startIndex + itemsPerPage >= WhatWeOfferData.length}
          className="disabled:opacity-30">
          <ArrowRight
            size={48}
            className="text-blue-700 cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
};

export default WhatWeOffer;
