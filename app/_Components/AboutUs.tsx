"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section
      id="aboutus"
      className="flex flex-col items-center justify-center px-4 py-14 bg-gradient-to-b from-white via-gray-50 to-white  scroll-mt-24">
      {/* Heading */}
      <motion.h2
        className="font-bold text-3xl sm:text-4xl text-center tracking-tight"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.6 }}>
        About Us
      </motion.h2>

      {/* Underline */}
      <motion.div
        className="h-1 w-28 sm:w-36 bg-black rounded-full mt-3 mb-8"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true, amount: 0.6 }}
      />

      {/* Description */}
      <motion.p
        className="text-lg sm:text-xl md:text-2xl text-center text-gray-700 w-11/12 sm:w-4/5 md:w-3/4 leading-relaxed"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true, amount: 0.6 }}>
        With over 43 years of legacy, Mittal Gupta & Co. stands as one of Kanpur&apos;s most trusted Chartered
        Accountancy firms. We specialize in offering precise, timely, and relevant financial solutions driven by deep
        industry knowledge and unwavering commitment to excellence.
      </motion.p>

      {/* Image + Paragraph */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-10 mt-12 w-11/12 sm:w-4/5 md:w-3/4"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        viewport={{ once: true, amount: 0.6 }}>
        {/* Image */}
        <div className="relative w-full md:w-1/2 h-64 sm:h-80 rounded-xl overflow-hidden shadow-xl border border-gray-200">
          <Image
            src="/office front.png"
            alt="Mittal Gupta & Co. Office"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Paragraph */}
        <div className="text-gray-700 text-lg sm:text-xl md:text-2xl leading-relaxed md:w-1/2">
          Our modern infrastructure reflects our dedication to client service and operational excellence. Located in
          prime business districts, our office includes digital systems, collaborative spaces, secure cloud storage, and
          high-speed connectivity—ensuring seamless client interaction and confidentiality.
        </div>
      </motion.div>

      {/* Button */}
      <motion.div
        className="mt-12"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        viewport={{ once: true, amount: 0.6 }}>
        <Link href="/aboutus">
          <button className="px-6 sm:px-8 py-2 sm:py-3 mt-2 border-2 border-black hover:bg-blue-700 hover:text-white transition-colors duration-300 cursor-pointer hover:shadow-lg text-base sm:text-lg rounded-lg shadow-md">
            Read More
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default AboutUs;
