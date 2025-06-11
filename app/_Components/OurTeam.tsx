"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const OurTeam = () => {
  const data = [
    {
      name: "Akshay Kumar Gupta",
      position: "Founder",
      image: "/akshay kumar gupta_page-0001.jpg",
    },
    {
      name: "Ajai Kumar Rastogi",
      position: "Lead Partner",
      image: "/ajay_rastogi03232017.jpg",
    },
    {
      name: "Bihari Lal Gupta",
      position: "Lead Partner",
      image: "/bihari lal gupta_page-0001.jpg",
    },
    {
      name: "Arpit Gupta",
      position: "Senior Manager",
      image: "/arpit gupta_page-0001.jpg",
    },
    {
      name: "Pankaj Agarwal",
      position: "Working Partner",
      image: "/pankaj agarwal.jpg",
    },
    {
      name: "Richa Agarwal",
      position: "Working Partner",
      image: "/Richa_agarwal03232017.jpg",
    },
    {
      name: "Dinesh Kumar Nigam",
      position: "Working Partner",
      image: "/dinesh_nigam03232017.jpg",
    },
    {
      name: "Fiza Gupta",
      position: "Working Partner",
      image: "/fiza gupta.jpg",
    },

    {
      name: "Alok Tandon",
      position: "Working Partner",
      image: "/Photos-Alok_Tandon.jpg",
    },
    {
      name: "Rajeev Krishnan Purwar",
      position: "Working Partner",
      image: "/team-member-3.jpg",
    },
  ];

  return (
    <section className="bg-[#f8f9fa] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-4 text-gray-800"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}>
          Meet Our Team
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-3xl mx-auto mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          At Mittal Gupta and Co., our strength lies in our people. Each team member brings deep expertise, integrity,
          and a commitment to delivering exceptional service to our clients. Together, we work with purpose and passion
          to help businesses thrive.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-[#f7954d]">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.position}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
