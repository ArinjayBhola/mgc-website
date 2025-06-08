"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <motion.div
        className="font-bold text-4xl my-1"
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}>
        About Us
      </motion.div>

      <motion.div
        className="h-1 w-40 bg-black my-1 mb-5"
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      />

      <motion.div
        className="text-xl mt-4 w-3/4 text-center"
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true, amount: 0.5 }}>
        With 43 years of history, Mittal Gupta & Co has been one of Kanpur&apos;s prominent Chartered Accountancy firms
        providing wide array of financial and advisory services to reputed Indian companies. Following a top-notch
        corporate culture, we believe in delivering accurate, relevant, and timely information to the decision-makers
        using industry expertise. We help companies to stay compliant and lawful. We aim at applying intelligence and
        expertise by providing realistic solutions to complicated business scenarios using analytical skills, functional
        expertise and intensive training. Our result-oriented and success-driven partners believe in providing equal
        services to clients of all sizes and at all locations.
      </motion.div>

      <motion.div
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}>
        <Link href="/aboutus">
          <button className="px-8 py-3 mt-4 border-2 border-black duration-300 hover:bg-blue-700 hover:text-white transition-colors cursor-pointer hover:shadow-lg text-lg rounded-lg shadow-md">
            Read More
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default AboutUs;
