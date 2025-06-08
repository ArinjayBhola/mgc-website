"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <div
      className="relative w-full h-[400px] sm:h-[500px] md:h-[650px]"
      id="home">
      <Image
        src="/welcome.png"
        alt="Welcome"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black drop-shadow-md"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}>
          Welcome to Mittal Gupta & Co.
        </motion.h1>
      </div>
    </div>
  );
};

export default Welcome;
