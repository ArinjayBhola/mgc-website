import Footer from "@/app/_Components/Footer";
import Header from "@/app/_Components/Header";
import SectionWithCards from "@/app/_Components/SectionWithCards";
import React from "react";

const page = () => {
  const cards = [
    {
      title: ``,
      description: `-Governance risk
-Control Assurances
-Design and Documentation of Standard Operating Procedures
-Business Performance Enhancement
-Compliance and Assurance services
-IT risk management and effectiveness
-Economic analysis
-Risk Based Internal Audits
-Debt Monitoring Review
`,
    },
  ];

  return (
    <div>
      <Header />
      <SectionWithCards
        id="risk-mitigation"
        sectionTitle="Risk Mitigation"
        sectionDescription="In a world of global ambitions and constantly evolving markets, exposure to risk is inevitable. At MGCO., our team offers comprehensive expertise in risk assessment, management, and mitigation—ensuring our clients are always prepared, resilient, and safeguarded against uncertainty."
        cards={cards}
      />
      <Footer />
    </div>
  );
};

export default page;
