"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const WhatWeOfferData = [
  {
    topic: "Advisory Services",
    src: "/services/advisory-services",
    desc: "Advisory services offered by us include business strategy, financial planning, regulatory compliance, mergers and acquisitions, and risk management. These services help organizations improve performance, make informed decisions, optimize resources, and navigate complex financial and regulatory environments effectively.",
  },
  {
    topic: "Audit and Assurance",
    src: "/services/audit-and-assurance",
    desc: "Audit and assurance services ensure accuracy of financial statements, adherence to regulations, and effective internal controls, enhancing stakeholder confidence and supporting informed decision-making. They also identify risks and recommend improvements in financial processes.",
  },
  {
    topic: "Book Keeping and Outsourcing",
    src: "/services/bookkeeping-and-outsourcing",
    desc: "Bookkeeping and outsourcing services include maintaining accurate financial records, managing accounts payable/receivable, payroll processing, and preparing financial reports. We offer these services to help businesses reduce costs, ensure compliance, and focus on core activities by outsourcing routine financial tasks to experts.",
  },
  {
    topic: "Domestic Taxation and International Taxation",
    src: "/services/domestic-and-international-taxation",
    desc: "Domestic and international taxation services include tax planning, return filing, TDS compliance, and representation before authorities. For international taxation, we handle cross-border transactions, DTAA, transfer pricing, and expatriate taxation, ensuring regulatory compliance and tax efficiency for global and local operations.",
  },
  {
    topic: "Goods and Service Tax",
    src: "/services/goods-and-services-tax",
    desc: "GST services include registration, return filing, input tax credit reconciliation, audit support, and compliance management. We advise on GST implications, handle notices, and assist with litigation, helping businesses comply with GST laws and optimize their tax positions effectively.",
  },
  {
    topic: "IFC Services",
    src: "/services/ifc-services",
    desc: "IFC and risk control services involve identifying business risks, designing and implementing internal controls, and preparing Risk Control Matrices. CA firms assess control effectiveness, ensure compliance, prevent fraud, and enhance financial reporting accuracy and operational efficiency for better governance.",
  },
  {
    topic: "Investment and Capex Related Decision Making",
    src: "/services/investment-and-capex",
    desc: "Investment and CAPEX planning services help businesses evaluate capital expenditures and investment opportunities. We assist in budgeting, financial analysis, risk assessment, and ROI forecasting to optimize resource allocation, ensure financial viability, and support strategic growth and long-term business sustainability.",
  },
  {
    topic: "Litigation",
    src: "/services/litigation",
    desc: "Litigation services by us includes assisting clients in tax disputes, preparing legal documentation, conducting forensic audits, and providing expert testimony. These services help resolve financial and regulatory conflicts efficiently while minimizing risks and ensuring compliance with applicable laws.",
  },
  {
    topic: "Startup Advisory",
    src: "/services/startup-advisory",
    desc: "Startup advisory services guide new businesses on company formation, regulatory compliance, tax planning, funding strategies, and financial management. We support startups in establishing strong foundations, securing investments, and ensuring smooth operations for sustainable growth and long-term success.",
  },
  {
    topic: "Risk Mitigation",
    src: "/services/risk-mitigation",
    desc: "Risk mitigation services identify, assess, and prioritize risks, then design strategies to minimize their impact. We help in implementing internal controls, compliance frameworks, and monitoring systems to protect assets, ensure regulatory adherence, and enhance operational resilience against financial, operational, and strategic risks.",
  },
  {
    topic: "Transaction Advisory",
    src: "/services/transaction-advisory",
    desc: "Transaction advisory services include due diligence, valuation, mergers and acquisitions support, financial modeling, and deal structuring. We help clients evaluate opportunities, manage risks, and optimize transaction outcomes, ensuring informed decision-making and successful business growth or restructuring.",
  },
  {
    topic: "Transfer Pricing",
    src: "/services/transfer-pricing",
    desc: "Transfer pricing services involve analyzing and documenting intercompany transactions to ensure compliance with tax laws. We assist in benchmarking, preparing transfer pricing reports, managing audits, and advising on pricing strategies to minimize tax risks and avoid penalties in cross-border dealings.",
  },
];

const WhatWeOffer = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const itemsPerPage = 3;
  const totalPages = Math.ceil(WhatWeOfferData.length / itemsPerPage);

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

        <div className="relative w-full md:w-[1300px] min-h-[420px] md:h-[400px] overflow-hidden">
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
              className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-8">
              {visibleItems.map((item, index) => (
                <div
                  key={index}
                  className="w-full max-w-xs md:max-w-none md:w-[380px] h-auto md:h-[380px] bg-white border rounded-xl shadow-xl hover:shadow-2xl transition p-4 sm:p-5 md:p-6 flex flex-col items-center justify-between text-center">
                  <Monitor
                    size={52}
                    className="text-gray-800 mb-3 sm:mb-4"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.topic}</h3>
                  <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
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

      {/* Tracker Dots */}
      <div className="mt-8 flex justify-center space-x-2">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <span
            key={idx}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              idx === startIndex / itemsPerPage ? "bg-blue-700 scale-110" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default WhatWeOffer;
