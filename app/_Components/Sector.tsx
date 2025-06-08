"use client";

import React from "react";
import { motion } from "framer-motion";

const sectorData = [
  {
    title: "Sugar Manufacturing and Processing Industry",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit efficitur turpis, ut aliquam ipsum mattis eu. Praesent ut pharetra sapien.",
    color: "text-red-500",
    icon: "💻",
    border: "border-red-200",
  },
  {
    title: "Consumer Markets and Retail",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit efficitur turpis, ut aliquam ipsum mattis eu. Praesent ut pharetra sapien.",
    color: "text-blue-600",
    icon: "☁️",
    border: "border-blue-200",
  },
  {
    title: "Automotive Sector",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit efficitur turpis, ut aliquam ipsum mattis eu. Praesent ut pharetra sapien.",
    color: "text-teal-600",
    icon: "🛒",
    border: "border-teal-200",
  },
  {
    title: "Power Generation and Distribution",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit efficitur turpis, ut aliquam ipsum mattis eu. Praesent ut pharetra sapien.",
    color: "text-purple-600",
    icon: "📱",
    border: "border-purple-200",
  },
  {
    title: "Insurance and Risk Management",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit efficitur turpis, ut aliquam ipsum mattis eu. Praesent ut pharetra sapien.",
    color: "text-green-600",
    icon: "🗄️",
    border: "border-green-200",
  },
  {
    title: "Technology",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit efficitur turpis, ut aliquam ipsum mattis eu. Praesent ut pharetra sapien.",
    color: "text-orange-500",
    icon: "📄",
    border: "border-orange-200",
  },
];

const Sector = () => {
  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Sectors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sectorData.map((sector, index) => (
          <motion.div
            key={index}
            className={`border-2 ${sector.border} rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300`}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}>
            <div className={`text-5xl mb-4 ${sector.color}`}>{sector.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{sector.title}</h3>
            <p className="text-gray-600 text-sm">{sector.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Sector;
