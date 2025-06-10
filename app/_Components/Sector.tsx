"use client";

import React from "react";
import { Briefcase, Building, Settings, Users } from "lucide-react";

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

const SectorsPage = () => {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 py-20 px-6 lg:px-24">
      <div className="max-w-8xl mx-auto text-center">
        <h2
          className="text-4xl sm:text-5xl font-bold mb-12 text-black"
          id="sectors">
          Sectors
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
          {sectors.map((sector, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 flex flex-col items-center justify-center text-center transition-transform transform hover:scale-105">
              <div className="text-blue-600 bg-blue-100 rounded-full p-4 mb-4 flex items-center justify-center">
                {sector.icon}
              </div>
              <p className="font-semibold text-blue-900 text-sm sm:text-base">{sector.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectorsPage;
