"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const WhatWeOfferData = [
  {
    topic: "Audit and Assurance",
    src: "/services/audit-and-assurance",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit efficitur turpis, ut aliquam ipsum mattis eu. Praesent ut pharetra sapien..",
  },
  {
    topic: "Book Keeping and Outsourcing",
    src: "/services/bookkeeping-and-outsourcing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit efficitur turpis, ut aliquam ipsum mattis eu. Praesent ut pharetra sapien.",
  },
  {
    topic: "Domestic Taxation and International Taxation",
    src: "/services/domestic-and-international-taxation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit efficitur turpis, ut aliquam ipsum mattis eu. Praesent ut pharetra sapien.",
  },
  {
    topic: "Goods and Service Tax",
    src: "/services/goods-and-services-tax",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit efficitur turpis, ut aliquam ipsum mattis eu. Praesent ut pharetra sapien.",
  },
  {
    topic: "IFC Services",
    src: "/services/ifc-services",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit efficitur turpis, ut aliquam ipsum mattis eu. Praesent ut pharetra sapien.",
  },
  {
    topic: "Advisory Services",
    src: "/services/advisory-services",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit efficitur turpis, ut aliquam ipsum mattis eu. Praesent ut pharetra sapien.",
  },
  {
    topic: "Transaction Advisory",
    src: "/services/transaction-advisory",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit efficitur turpis, ut aliquam ipsum mattis eu. Praesent ut pharetra sapien.",
  },
  {
    topic: "Startup Advisory",
    src: "/services/startup-advisory",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit efficitur turpis, ut aliquam ipsum mattis eu. Praesent ut pharetra sapien.",
  },
  {
    topic: "Litigation",
    src: "/services/litigation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit efficitur turpis, ut aliquam ipsum mattis eu. Praesent ut pharetra sapien.",
  },
  {
    topic: "Transfer Pricing",
    src: "/services/transfer-pricing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit efficitur turpis, ut aliquam ipsum mattis eu. Praesent ut pharetra sapien.",
  },
  {
    topic: "Investment and Capex Related Decision Making",
    src: "/services/investment-and-capex",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit efficitur turpis, ut aliquam ipsum mattis eu. Praesent ut pharetra sapien.",
  },
  {
    topic: "Risk Mitigation",
    src: "/services/risk-mitigation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit efficitur turpis, ut aliquam ipsum mattis eu. Praesent ut pharetra sapien.",
  },
];

const WhatWeOffer = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const itemsPerPage = 2;

  const handlePrev = () => {
    setDirection("left");
    setStartIndex((prev) => Math.max(prev - itemsPerPage, 0));
  };

  const handleNext = () => {
    setDirection("right");
    setStartIndex((prev) => Math.min(prev + itemsPerPage, WhatWeOfferData.length - itemsPerPage));
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
    <div className="text-center py-12 px-4 sm:px-6 lg:px-20">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10">What We Offer</h2>

      <div className="flex items-center justify-center flex-col md:flex-row md:space-x-6">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="disabled:opacity-30 mb-4 md:mb-0 cursor-pointer">
          <ArrowLeft
            size={48}
            className="text-blue-700"
          />
        </button>

        <div className="relative w-full md:w-[900px] min-h-[420px] md:h-[400px] overflow-hidden">
          <AnimatePresence
            custom={direction}
            initial={false}
            mode="wait">
            <motion.div
              key={startIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-10">
              {visibleItems.map((item, index) => (
                <div
                  key={index}
                  className="w-full md:w-[400px] h-auto md:h-[380px] bg-white border rounded-xl shadow-xl hover:shadow-2xl transition p-6 flex flex-col items-center justify-between text-center">
                  <Monitor
                    size={64}
                    className="text-gray-800 mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{item.topic}</h3>
                  <p className="text-sm text-gray-600 mb-4 md:block">{item.desc}</p>
                  <Link href={item.src}>
                    <button className="mt-auto px-5 py-2 text-sm font-semibold text-white bg-blue-700 rounded-md hover:bg-blue-900 transition-colors duration-300 cursor-pointer">
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
          className="disabled:opacity-30 mt-4 md:mt-0 cursor-pointer">
          <ArrowRight
            size={48}
            className="text-blue-700"
          />
        </button>
      </div>
    </div>
  );
};

export default WhatWeOffer;
