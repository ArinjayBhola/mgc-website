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
        "Akshay Kumar Gupta stands as an eminent Chartered Accountant, bringing an impressive 44 years of profound expertise to the firm. His distinguished career is marked by holding prestigious positions such as a Central Council Member of the Institute of Chartered Accountants of India, Chairman of the Central India Regional Council of ICAI, and President of the Kanpur Chartered Accountants Society. He has also served effectively as an arbitrator and resolution provider in numerous high-stakes business disputes. His extensive experience notably includes comprehensive statutory and internal audits for leading public and private sector entities, particularly central statutory audits for nationalized banks and major public sector undertakings. He also maintains esteemed memberships with the Lucknow and Bombay Chartered Accountants Societies.",
      image: "/akshay kumar gupta_page-0001.jpg",
    },
    {
      name: "Ajai Kumar Rastogi",
      position: "Lead Partner",
      description:
        "A highly accomplished Chartered Accountant, Ajai Kumar Rastogi offers over 40 years of extensive experience. Further solidifying his qualifications, he holds a prestigious Diploma in Information Systems Audit (DISA) and is a valued member of both the Kanpur and Lucknow Chartered Accountants Societies. His core expertise lies in conducting comprehensive internal and statutory audits, spanning leading public and private sector enterprises, with significant involvement in central statutory audits of nationalized banks and prominent public sector undertakings.",
      image: "/ajay_rastogi03232017.jpg",
    },
    {
      name: "Bihari Lal Gupta",
      position: "Lead Partner",
      description:
        "Bihari Lal Gupta is a highly accomplished Chartered Accountant, contributing 36 years of extensive experience to the firm. He brings specialized expertise in Income Tax Law and is a respected member of the Kanpur Chartered Accountants Society. His comprehensive background includes significant involvement in internal and statutory audits for major public and private sector organizations, notably central statutory audits of nationalized banks and leading public sector undertakings.",
      image: "/bihari lal gupta_page-0001.jpg",
    },

    {
      name: "Pankaj Agarwal",
      position: "Working Partner",
      description:
        "Pankaj Agarwal is a distinguished Chartered Accountant with a remarkable 41 years of extensive experience. His leadership contributions are notable, having served as the Founder President of the Lucknow Chartered Accountants Society, and holding various roles including Chairman, Vice Chairman, Secretary, and Treasurer for the Lucknow Branch of the Central India Regional Council of ICAI. Mr. Tandon possesses specialized expertise in Income Tax Law and has successfully completed ICAI's rigorous Certificate Course on Indian Accounting Standards (Ind AS). His broad portfolio includes conducting statutory and internal audits for prominent public and private sector enterprises, particularly central statutory audits of nationalized banks and major public sector undertakings.",
      image: "/pankaj agarwal.jpg",
    },
    {
      name: "Richa Agarwal",
      position: "Working Partner",
      description:
        "Richa Agarwal is a qualified Chartered Accountant who further enhances her technical proficiency in the domain through her Diploma in Information Systems Audit. Her comprehensive experience encompasses conducting internal and statutory audits for prominent public and private sector enterprises, specifically central statutory audits of nationalized banks and key public sector undertakings.",
      image: "/Richa_agarwal03232017.jpg",
    },
    {
      name: "Dinesh Kumar Nigam",
      position: "Working Partner",
      description:
        "Dinesh Kumar Nigam is a seasoned Chartered Accountant with 14 years of extensive experience. He is an esteemed member of the Kanpur Chartered Accountants Society (Study Circle). His strong track record includes significant involvement in statutory and internal audits for major public and private sector entities, encompassing central statutory audits of nationalized banks and key public sector undertakings.",
      image: "/dinesh_nigam03232017.jpg",
    },
    {
      name: "Fiza Gupta",
      position: "Working Partner",
      description:
        "Fiza Gupta is a qualified Chartered Accountant and an esteemed member of the Kanpur Chartered Accountants Society. She brings substantial experience, particularly in conducting internal and statutory audits for leading public and private sector organizations, including central statutory audits for nationalized banks and major public sector undertakings.",
      image: "/fiza gupta.jpg",
    },

    {
      name: "Alok Tandon",
      position: "Working Partner",
      description:
        "As a highly qualified Chartered Accountant, Alok Tandon holds a Diploma in Information Systems Audit and demonstrates specialized expertise in Income Tax Law. He brings extensive experience, particularly in statutory and internal audits of leading public and private sector organizations, including crucial central statutory audits of nationalized banks and major public sector undertakings.",
      image: "/Photos-Alok_Tandon.jpg",
    },
    {
      name: "Arpit Gupta",
      position: "Senior Manager",
      description:
        "Arpit Gupta is a qualified Chartered Accountant and pursuing ACCA with specialization in Strategic Business Reporting (SBR) and Strategic Business Leadership (SBL). He holds a Master of Science degree in Management from University of Birmingham, United Kingdom, equipping him with a strong foundation in global business practices and strategic decision-making. He has experience in working in the big 4 and also holds specialised knowledge of GST and direct taxes. ",
      image: "/arpit gupta_page-0001.jpg",
    },
    {
      name: "Rajeev Krishnan Purwar",
      position: "Audit Manager",
      description:
        "Rajeev Krishnan Purwar is a Chartered Accountant bringing valuable experience, with a core focus on auditing and assurance services.",
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
