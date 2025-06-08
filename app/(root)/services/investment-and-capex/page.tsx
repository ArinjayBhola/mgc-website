import Footer from "@/app/_Components/Footer";
import Header from "@/app/_Components/Header";
import SectionWithCards from "@/app/_Components/SectionWithCards";
import React from "react";

const page = () => {
  const cards = [
    {
      title: `Key Investment Decision Services Offered by our Team:-`,
      description: `
-Feasibility and Viability Studies
-Project Financing Advisory
-Investment Structuring & Tax Planning
-Due Diligence for Investment Targets
-Portfolio Performance Review
-Start-up Investment Advisory
-Regulatory & FEMA Compliance for Investments
-Exit Planning & Strategy
-Central and State Government incentive scheme advisory 
`,
    },
  ];

  return (
    <div>
      <Header />
      <SectionWithCards
        id="investment-and-capex"
        sectionTitle="Investment and Capex Related Decision Making"
        sectionDescription="We offer investment-related decision services to businesses, high-net-worth individuals (HNIs), startups, and institutional investors to support them in making strategic, data-driven, and financially sound investment decisions.
These services focus on maximizing returns, minimizing risk, ensuring regulatory compliance, and aligning investments with long-term financial goals."
        cards={cards}
      />
      <Footer />
    </div>
  );
};

export default page;
