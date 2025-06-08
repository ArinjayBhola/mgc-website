"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-10">
      {/* Heading */}
      <motion.div
        className="font-bold text-3xl sm:text-4xl my-1 text-center"
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}>
        About Us
      </motion.div>

      {/* Underline */}
      <motion.div
        className="h-1 w-24 sm:w-40 bg-black my-2 mb-6"
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      />

      {/* Description */}
      <motion.div
        className="text-base sm:text-lg md:text-xl text-center w-11/12 sm:w-4/5 md:w-3/4 text-gray-800 leading-relaxed"
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true, amount: 0.5 }}>
        With 43 years of history, Mittal Gupta & Co has been one of Kanpur&apos;s prominent Chartered Accountancy firms
        providing a wide array of financial and advisory services to reputed Indian companies. We believe in delivering
        accurate, relevant, and timely information using deep industry expertise. We help companies stay compliant and
        lawful while offering realistic solutions to complex scenarios using analytical skill, functional knowledge, and
        intensive training. Our result-oriented, success-driven partners provide equal services to clients of all sizes
        and locations.
      </motion.div>

      {/* Read More Button */}
      <motion.div
        className="mt-6"
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}>
        <Link href="/aboutus">
          <button className="px-6 sm:px-8 py-2 sm:py-3 mt-2 border-2 border-black hover:bg-blue-700 hover:text-white transition-colors duration-300 cursor-pointer hover:shadow-lg text-base sm:text-lg rounded-lg shadow-md">
            Read More
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default AboutUs;
