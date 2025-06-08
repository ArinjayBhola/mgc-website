"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <div
      className="relative w-full h-[650px]"
      id="home">
      <Image
        src="/welcome.png"
        alt="Welcome"
        fill
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black">
        <motion.h1
          className="text-6xl mb-4"
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
