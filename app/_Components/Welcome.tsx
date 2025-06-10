"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Welcome = () => {
  const images = [
    { id: 1, src: "/1.jpeg" },
    { id: 2, src: "/2.png" },
    { id: 3, src: "/3.jpeg" },
    { id: 4, src: "/4.jpeg" },
    { id: 5, src: "/5.jpeg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-[400px] sm:h-[500px] md:h-[650px] overflow-hidden"
      id="home">
      {images.map((image, index) => (
        <Image
          key={image.id}
          src={image.src}
          alt={`Image ${image.id}`}
          fill
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default Welcome;
