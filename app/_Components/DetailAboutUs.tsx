"use client";

import React from "react";
import { Building2, BadgeCheck, Users2 } from "lucide-react";
import { motion } from "framer-motion";

// Fade-up variant for reusability
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const DetailAboutUs = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-gray-100 to-blue-100 py-20 text-center px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}>
        <motion.h1 className="text-5xl font-bold mb-4 text-blue-800">About Mittal Gupta & Co.</motion.h1>
        <motion.p className="text-lg max-w-3xl mx-auto text-gray-600">
          Chartered Accountants with 43+ years of legacy, trust, and innovation — blending tradition with modern
          solutions.
        </motion.p>
      </motion.section>

      {/* Overview Cards */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid gap-10 md:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`bg-white shadow-xl rounded-xl p-8 border-t-4 ${
              i === 0 ? "border-blue-600" : i === 1 ? "border-green-600" : "border-indigo-600"
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={i}>
            {i === 0 && <Building2 className="h-10 w-10 text-blue-600 mb-4" />}
            {i === 1 && <BadgeCheck className="h-10 w-10 text-green-600 mb-4" />}
            {i === 2 && <Users2 className="h-10 w-10 text-indigo-600 mb-4" />}
            <h3 className="text-2xl font-semibold mb-2">
              {i === 0 ? "Who We Are" : i === 1 ? "What We Do" : "Our Values"}
            </h3>
            <p className="text-gray-600">
              {i === 0
                ? "Established in 1982, we’ve grown into one of Kanpur’s leading CA firms with 8 partners and 40+ professionals..."
                : i === 1
                ? "From auditing to strategic consulting, we empower businesses through deep expertise and client-first solutions..."
                : "Integrity, professionalism, and accountability are the foundations of everything we do..."}
            </p>
          </motion.div>
        ))}
      </section>

      {/* Legacy Section */}
      <motion.section
        className="max-w-4xl mx-auto px-6 mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}>
        <div className="border-l-4 border-blue-700 pl-6 text-lg font-medium text-gray-700">
          <p className="mb-4">
            “In August 1982, Mr. Rakesh Mittal, Mr. Ajay Kumar Gupta, and Mr. Akshay Kumar Gupta laid the foundation of
            Mittal Gupta & Co. with a vision to deliver excellence in Accounting, Auditing, Taxation, Assurance, and
            Business Advisory Services.”
          </p>
        </div>
      </motion.section>

      {/* Vision & Mission */}
      <section className="bg-gray-50 py-20 px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}>
          Vision, Mission & Objectives
        </motion.h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {["Our Vision", "Our Mission"].map((title, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-md rounded-xl p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">{title}</h3>
              <p className="text-gray-700">
                {i === 0
                  ? "To be a trusted and forward-thinking Chartered Accountancy firm recognized for excellence..."
                  : "To deliver high-quality, value-driven services while upholding the highest standards of integrity..."}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Objectives List */}
        <motion.div
          className="mt-12 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Objectives</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-[16px]">
            <li>Enhance client satisfaction through timely, tailored solutions</li>
            <li>Adhere strictly to ethical practices and statutory compliance</li>
            <li>Invest in modern tech and innovation</li>
            <li>Foster continuous learning and professional growth</li>
            <li>Expand our presence across India and globally</li>
          </ul>
        </motion.div>
      </section>

      {/* Callout */}
      <motion.section
        className="text-center py-16 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}>
        <p className="text-xl text-gray-700 italic max-w-3xl mx-auto">
          “Our journey of four decades reflects our commitment to excellence, and our future is shaped by the values we
          uphold every day.”
        </p>
      </motion.section>
    </div>
  );
};

export default DetailAboutUs;
