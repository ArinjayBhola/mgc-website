import Footer from "@/app/_Components/Footer";
import Header from "@/app/_Components/Header";
import SectionWithCards from "@/app/_Components/SectionWithCards";
import React from "react";

const page = () => {
  const cards = [
    {
      title: "Financial Advisory",
      description: `-Business Valuation: Estimating the fair value of a business for mergers, acquisitions, fundraising, or internal decision-making.
-Project Financing: Advising on structuring, funding sources, and documentation for large capital projects.
-Investment Advisory: Guiding clients on asset allocation, risk management, and investment options.
`,
    },
    {
      title: "Tax Advisory",
      description: `-Tax planning and structuring for individuals, firms, and companies.
-Advisory on capital gains, TDS, and tax treaties.
-GST impact analysis, planning, and optimization.
-Advisory on cross-border transactions, input tax credit (ITC), and e-invoicing.
-Transfer pricing documentation and assessment.
-Advisory on Double Tax Avoidance Agreements (DTAAs).
`,
    },
    {
      title: "Management & Business Consulting:",
      description: `-Business Strategy: Market entry strategy, business model evaluation, and growth plans.
-Cost Optimization: Identifying cost-saving opportunities through process improvement and resource allocation.
-Organizational Structuring: Designing internal structures, roles, and responsibilities for better governance and efficiency.

`,
    },
    {
      title: "Risk Advisory",
      description: `-Internal Controls & Risk Management: Evaluating and designing control systems to mitigate operational, financial, and compliance risks.
-Internal Audits: Conducting risk-based audits to ensure efficiency and regulatory compliance.
-Forensic Audits: Investigating financial discrepancies, frauds, and operational irregularities.
`,
    },
    {
      title: "Regulatory & Compliance Advisory",
      description: `-Company Law Advisory: Compliance with Companies Act, ROC filings, and corporate governance.
-FEMA & RBI Regulations: Advisory on foreign investments, ECBs (External Commercial Borrowings), and remittances.
-SEBI Regulations: For listed entities or those planning an IPO, advisory on SEBI guidelines and disclosures.
`,
    },
  ];

  return (
    <div>
      <Header />
      <SectionWithCards
        id="advisory-services"
        sectionTitle="Advisory Services"
        sectionDescription="MGCO offers a wide range of advisory services tailored to businesses, individuals, startups, and multinational corporations. These services go beyond basic compliance and accounting functions, aiming to enhance clients' decision-making, efficiency, and financial health."
        cards={cards}
      />
      <Footer />
    </div>
  );
};

export default page;
