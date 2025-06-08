import Footer from "@/app/_Components/Footer";
import Header from "@/app/_Components/Header";
import SectionWithCards from "@/app/_Components/SectionWithCards";
import React from "react";

const page = () => {
  const cards = [
    {
      title: "Due Diligence",
      description: `-Financial Due Diligence: Evaluating the financial health of a target company—profitability, working capital, debt, and cash flows.
-Tax Due Diligence: Identifying tax risks and exposures, past assessments, and compliance status.
-Legal Due Diligence (often done in collaboration with law firms): Reviewing contracts, litigations, licenses, IP rights, etc.
-Operational Due Diligence: Assessing operational efficiency, internal controls, and management quality.
`,
    },
    {
      title: "Valuation Services",
      description: `Valuing businesses, shares, intangibles, and assets using methods such as:
-Discounted Cash Flow (DCF)
-Comparable Company Analysis
-Asset-based Valuation
Used for deal pricing, negotiations, and regulatory filings (e.g., under FEMA, Income Tax Act).`,
    },
    {
      title: "Deal Strategy & Planning",
      description: `-Identifying potential targets or acquirers (buy-side/sell-side advisory).
-Evaluating strategic fit: growth, diversification, market access, synergies.
-Advising on timing, pricing, and deal objectives.`,
    },
    {
      title: "Regulatory Compliance",
      description: `Ensuring compliance with:
-Companies Act, 2013
-SEBI regulations (for listed companies)
-RBI & FEMA (for foreign investment)
-Income Tax Act (e.g., Section 56, 50CA, 47)
-Competition Commission of India (CCI) (if thresholds are met)`,
    },
  ];

  return (
    <div>
      <Header />
      <SectionWithCards
        id="transaction-advisory"
        sectionTitle="Transaction Advisory"
        sectionDescription="Transaction Advisory is a specialized service offered by MGCo that helps businesses navigate the complex financial, legal, and tax aspects of corporate transactions such as Mergers, acquisitions, joint ventures, investments, demergers and divestitures.
These services are crucial for ensuring that a transaction is financially sound, legally compliant, and strategically beneficial for all parties involved."
        cards={cards}
      />
      <Footer />
    </div>
  );
};

export default page;
