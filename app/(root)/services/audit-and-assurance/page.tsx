import Footer from "@/app/_Components/Footer";
import Header from "@/app/_Components/Header";
import SectionWithCards from "@/app/_Components/SectionWithCards";
import React from "react";

const page = () => {
  const cards = [
    {
      title: "Statutory Audit",
      description:
        "Statutory Audits report a company’s financial state to stakeholders. Our expert auditors at MGCO ensure strict compliance with ICAI rules and prepare reports with precision and integrity.",
    },
    {
      title: "Internal Audit",
      description:
        "Internal audits are strategic tools that identify enterprise-wide risks, enhance efficiency, and provide early warnings. MGCO delivers top-tier internal audits to elevate business performance.",
    },
    {
      title: "Tax Audit",
      description:
        "Our tax audit services follow Section 44AB of the Income Tax Act. We help clients ensure compliance, minimize tax risks, and strengthen financial practices with accurate, timely audits.",
    },
    {
      title: "Stock Audit",
      description:
        "We specialize in auditing physical assets across vast supply chains. Our systemized management approach helps businesses ensure control, accountability, and asset security.",
    },
    {
      title: "IND-AS",
      description:
        "MGCO guides businesses through seamless IND AS adoption. With deep technical expertise, we help interpret, implement, and report financials in line with Indian and global standards.",
    },
  ];

  return (
    <div>
      <Header />
      <SectionWithCards
        id="audit-and-assurance"
        sectionTitle="Audit & Assurance"
        sectionDescription="With 40+ years of trusted excellence, MGCO delivers tailored audit services built on independence, integrity, and insight—helping businesses achieve financial transparency and growth."
        sectionNote="Serving corporates, SMEs, startups, NGOs, and government entities, we combine decades of experience with contemporary tools and a client-centric approach. Our commitment is to deliver value beyond compliance, enabling informed decision-making and long-term business growth. Trust, transparency, and technical expertise are the cornerstones of our audit and assurance practice."
        cards={cards}
      />
      <Footer />
    </div>
  );
};

export default page;
