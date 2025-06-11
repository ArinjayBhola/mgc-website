"use client";

import React from "react";
import {
  Building,
  Bus,
  CarFront,
  Computer,
  Cpu,
  Diamond,
  Factory,
  Globe,
  Hammer,
  Hotel,
  Package,
  Power,
  Shield,
  ShieldHalf,
  ShoppingCart,
  TestTube2,
  Truck,
  Wallet,
  Warehouse,
  Wifi,
} from "lucide-react";

const sectors = [
  { name: "Sugar Manufacturing", icon: <Factory size={28} /> },
  { name: "Retail & Consumer Markets", icon: <ShoppingCart size={28} /> },
  { name: "Automotive Sector", icon: <CarFront size={28} /> },
  { name: "Power & Distribution", icon: <Power size={28} /> },
  { name: "Insurance & Risk", icon: <Shield size={28} /> },
  { name: "Technology", icon: <Cpu size={28} /> },
  { name: "Infrastructure", icon: <Building size={28} /> },
  { name: "Telecom & Communication", icon: <Wifi size={28} /> },
  { name: "Jewellery Industry", icon: <Diamond size={28} /> },
  { name: "Banking & Finance", icon: <Wallet size={28} /> },
  { name: "Hospitality Services", icon: <Hotel size={28} /> },
  { name: "Engineering Services", icon: <Hammer size={28} /> },
  { name: "Defence & Aerospace", icon: <ShieldHalf size={28} /> },
  { name: "IT Services", icon: <Computer size={28} /> },
  { name: "FMCG", icon: <Package size={28} /> },
  { name: "Chemical", icon: <TestTube2 size={28} /> },
  { name: "PSUs", icon: <Globe size={28} /> },
  { name: "Realty Sector", icon: <Warehouse size={28} /> },
  { name: "Manufacturing", icon: <Truck size={28} /> },
  { name: "Transportation Logistics", icon: <Bus size={28} /> },
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8">
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
