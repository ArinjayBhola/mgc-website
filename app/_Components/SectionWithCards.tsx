"use client";

import React from "react";
import { motion } from "framer-motion";

interface Card {
  title: string;
  description: string;
}

interface SectionWithCardsProps {
  sectionTitle: string;
  sectionDescription: string;
  sectionNote?: string;
  cards: Card[];
  id?: string;
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const SectionWithCards: React.FC<SectionWithCardsProps> = ({
  sectionTitle,
  sectionDescription,
  cards,
  id,
  sectionNote,
}) => {
  return (
    <motion.section
      id={id}
      className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-gray-100 py-20 px-6 md:px-12"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}>
      <motion.div
        className="max-w-5xl mx-auto text-center mb-16"
        variants={fadeUp}>
        <h1 className="text-5xl pb-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500">
          {sectionTitle}
        </h1>
        <p className="mt-5 text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-left">
          {sectionDescription}
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto"
        variants={containerVariants}>
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="relative group bg-white/50 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            variants={fadeUp}>
            <h2 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
              {card.title}
            </h2>
            <p className="text-gray-800 text-justify leading-relaxed whitespace-pre-line">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto text-center text-xl font-semibold text-gray-700 leading-loose mt-10"
        variants={fadeUp}>
        {sectionNote}
      </motion.div>
    </motion.section>
  );
};

export default SectionWithCards;
