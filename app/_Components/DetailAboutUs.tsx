"use client";

import React, { useState } from "react";
import { Building2, BadgeCheck, Users2, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

// Fade-up variant
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

// Modal animation
const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

const cardDetails = [
  {
    title: "Who We Are",
    icon: <Building2 className="h-10 w-10 text-blue-600 mb-4" />,
    short:
      "Established over four decades ago, Mittal Gupta & Co. has been a trusted name in Chartered Accountancy across Uttar Pradesh and beyond",
    full: `Established over four decades ago, Mittal Gupta & Co. has been a trusted name in Chartered Accountancy across Uttar Pradesh and beyond. Since our inception in 1982, we have remained steadfast in our commitment to ethical practice, governed by the Institute of Chartered Accountants of India (ICAI) and the provisions of the Chartered Accountants Act, 1949. As a firm registered with and regulated by ICAI, we uphold the highest standards of professional conduct, quality, and accountability. Our work is not only guided by experience and expertise but also by the rigorous regulatory framework that defines the role and responsibility of Chartered Accountants in India.`,
  },
  {
    title: "What We Do",
    icon: <BadgeCheck className="h-10 w-10 text-green-600 mb-4" />,
    short:
      "With over 40 years of experience, we serve our clients across industries, services, and operational levels to drive",
    full: `With over 40 years of experience, we serve our clients across industries, services, and operational levels to drive excellence at every step. Backed by deep professional expertise and a multidisciplinary team, we are committed to shared growth—because our clients' success is our greatest achievement.
Following a top-notch corporate culture, we believe in delivering accurate, relevant, and timely information to the decision-makers using industry expertise. We help companies to stay compliant and lawful and serve our clients by being their 'financial doctors'. We aim at applying intelligence and expertise by providing realistic solutions to complicated business scenarios using analytical skills, functional expertise and intensive training. Our result-oriented and success-driven partners believe in providing equal services to clients of all sizes and at all locations.
Our long-standing relationships with clients — some spanning generations — reflect our unwavering commitment to integrity, accuracy, and client-centric service.We take pride in being more than just accountants — we are partners in progress.`,
  },
  {
    title: "Our Values",
    icon: <Users2 className="h-10 w-10 text-indigo-600 mb-4" />,
    short: "Our enduring reputation is rooted in the foundational values of Mittal Gupta and Co",
    full: `Our enduring reputation is rooted in the foundational values of Mittal Gupta and Co., which continue to shape both our success and that of our clients. Guided by unwavering commitment, principled integrity, and a deep sense of purpose, our professional team remains steadfast in upholding these values—ensuring they propel us confidently into the future.`,
  },
];

const visionMissionDetails = [
  {
    title: "Our Vision",
    short:
      "With a legacy spanning more than 40 years, our vision is to lead the way in professional accountancy services ",
    full: `With a legacy spanning more than 40 years, our vision is to lead the way in professional accountancy services across Uttar Pradesh by fostering a culture of continuous knowledge updation, embracing innovation, and leveraging cutting-edge technology. We strive to be the preferred advisors for our clients, delivering tailored financial solutions with integrity, agility, and strategic foresight in a fast-evolving regulatory and digital environment.`,
  },
  {
    title: "Our Mission",
    short:
      "To deliver high-quality, value-driven financial, assurance, tax, and advisory services to clients across industries",
    full: `To deliver high-quality, value-driven financial, assurance, tax, and advisory services to clients across industries, while upholding the highest standards of integrity, accountability, and professionalism. We are committed to empowering businesses and individuals with sound financial insights, fostering trust, and contributing to the nation’s economic development.`,
  },
];

const DetailAboutUs = () => {
  const [selected, setSelected] = useState<null | number>(null);
  const [vmSelected, setVmSelected] = useState<null | number>(null);

  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
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

      {/* Cards */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid gap-10 md:grid-cols-3">
        {cardDetails.map((card, i) => (
          <motion.div
            key={i}
            className={`bg-white shadow-xl rounded-xl p-8 border-t-4 cursor-pointer hover:shadow-2xl transition ${
              i === 0 ? "border-blue-600" : i === 1 ? "border-green-600" : "border-indigo-600"
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={i}
            onClick={() => setSelected(i)}>
            {card.icon}
            <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.short}... Read more</p>
          </motion.div>
        ))}
      </section>

      {/* Modal for Main Cards */}
      <AnimatePresence>
        {selected !== null && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}>
              <div className="bg-white p-6 rounded-lg max-w-lg w-full relative shadow-2xl">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 text-gray-600 hover:text-red-600 transition">
                  <X className="w-6 h-6" />
                </button>
                <h2 className="text-2xl font-bold mb-4">{cardDetails[selected].title}</h2>
                <p className="text-gray-700 whitespace-pre-line">{cardDetails[selected].full}</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Legacy */}
      <motion.section
        className="max-w-4xl mx-auto px-6 mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}>
        <div className="border-l-4 border-blue-700 pl-6 text-lg font-medium text-gray-700">
          <p className="mb-4">
            “In August 1982, CA Rakesh Mittal and CA Akshay Kumar Gupta laid the foundation of Mittal Gupta & Co. with a
            vision to deliver excellence in Accounting, Auditing, Taxation, Assurance, and Business Advisory Services.”
          </p>
        </div>
      </motion.section>

      {/* Vision & Mission Cards */}
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
          {visionMissionDetails.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-md rounded-xl p-6 cursor-pointer hover:shadow-xl transition"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              onClick={() => setVmSelected(i)}>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">{item.title}</h3>
              <p className="text-gray-700">{item.short}... Read more</p>
            </motion.div>
          ))}
        </div>

        {/* Objectives */}
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

      {/* Modal for Vision/Mission */}
      <AnimatePresence>
        {vmSelected !== null && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}>
              <div className="bg-white p-6 rounded-lg max-w-lg w-full relative shadow-2xl">
                <button
                  onClick={() => setVmSelected(null)}
                  className="absolute top-3 right-3 text-gray-600 hover:text-red-600 transition">
                  <X className="w-6 h-6" />
                </button>
                <h2 className="text-2xl font-bold mb-4">{visionMissionDetails[vmSelected].title}</h2>
                <p className="text-gray-700 whitespace-pre-line">{visionMissionDetails[vmSelected].full}</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

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
