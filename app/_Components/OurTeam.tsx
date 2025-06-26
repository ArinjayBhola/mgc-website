"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const OurTeam = () => {
  const data = [
    {
      name: "Akshay Kumar Gupta",
      position: "Founder",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/akshay kumar gupta_page-0001.jpg",
    },
    {
      name: "Ajai Kumar Rastogi",
      position: "Lead Partner",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/ajay_rastogi03232017.jpg",
    },
    {
      name: "Bihari Lal Gupta",
      position: "Lead Partner",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/bihari lal gupta_page-0001.jpg",
    },

    {
      name: "Pankaj Agarwal",
      position: "Working Partner",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/pankaj agarwal.jpg",
    },
    {
      name: "Richa Agarwal",
      position: "Working Partner",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/Richa_agarwal03232017.jpg",
    },
    {
      name: "Dinesh Kumar Nigam",
      position: "Working Partner",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/dinesh_nigam03232017.jpg",
    },
    {
      name: "Fiza Gupta",
      position: "Working Partner",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/fiza gupta.jpg",
    },

    {
      name: "Alok Tandon",
      position: "Working Partner",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/Photos-Alok_Tandon.jpg",
    },
    {
      name: "Arpit Gupta",
      position: "Senior Manager",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/arpit gupta_page-0001.jpg",
    },
    {
      name: "Rajeev Krishnan Purwar",
      position: "Audit Manager",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/team-member-3.jpg",
    },
  ];

  return (
    <section className="bg-[#f8f9fa] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-gray-800"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}>
          Meet Our Team
        </motion.h2>

        <motion.p
          className="text-gray-600 text-lg max-w-3xl mx-auto mb-16 text-center leading-relaxed"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          At Mittal Gupta and Co., our strength lies in our people. Each team member brings deep expertise, integrity,
          and a commitment to delivering exceptional service to our clients. Together, we work with purpose and passion
          to help businesses thrive.
        </motion.p>

        <div className="space-y-10">
          {data.map((member, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl p-6 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-orange-500 shadow-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-[#5a3b3b]">{member.name}</h3>
                <p className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">{member.position}</p>
                <p className="text-gray-700 leading-relaxed text-base">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
