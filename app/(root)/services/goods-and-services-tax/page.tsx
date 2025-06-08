import Footer from "@/app/_Components/Footer";
import Header from "@/app/_Components/Header";
import SectionWithCards from "@/app/_Components/SectionWithCards";
import React from "react";

const page = () => {
  const cards = [
    {
      title: "Our GST Services Include:",
      description: `-GST Registration & Advisory: Assistance in obtaining GST registration, classification of goods/services, and determining tax applicability.

-GST Compliance & Return Filing: Timely preparation and filing of monthly, quarterly, and annual GST returns (GSTR-1, GSTR-3B, GSTR-9, GSTR-9C), along with reconciliation of data and ITC (Input Tax Credit) optimization.

-GST Audit & Annual Returns: Conducting GST audits and assisting in the preparation of annual returns in compliance with the GST Act.

-GST Health Check & Risk Assessment: Periodic reviews to identify compliance gaps, exposure to interest and penalties, and opportunities for tax savings.

-Representation & Litigation Support: End-to-end support in handling GST departmental audits, notices, assessments, and appeals before tax authorities.

-Customized Training & Updates: Conducting workshops and training sessions for client teams on recent changes in GST laws, rules, and procedures.

Our expert team ensures that clients not only remain GST-compliant but also gain strategic tax efficiency, reduced risk exposure, and clarity in operations. With our proactive approach and strong technical backing, we stand as a trusted partner in managing the complexities of the GST regime.`,
    },
  ];

  return (
    <div>
      <Header />
      <SectionWithCards
        id="goods-and-services-tax"
        sectionTitle="Goods and Service Tax"
        sectionDescription="As a reputed Chartered Accountancy firm in India with decades of professional experience, we offer end-to-end Goods and Services Tax (GST) services to help businesses stay compliant with one of the most dynamic and evolving tax regimes in the country. Our GST services are tailored to meet the needs of corporates, SMEs, startups, and multinational entities operating in diverse sectors."
        cards={cards}
      />
      <Footer />
    </div>
  );
};

export default page;
