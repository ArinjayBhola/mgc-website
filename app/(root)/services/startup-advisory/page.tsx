import Footer from "@/app/_Components/Footer";
import Header from "@/app/_Components/Header";
import SectionWithCards from "@/app/_Components/SectionWithCards";
import React from "react";

const page = () => {
  const cards = [
    {
      title: "Business Structuring & Incorporation",
      description: `-Advising on the most suitable structure(Private Limited Company/Limited Liability Partnership/One Person Company/Partnership or Sole Proprietorship).
-Assistance with Company incorporation (MCA filings);PAN, TAN, GST registration;Opening a business bank account.
`,
    },
    {
      title: "Accounting & Bookkeeping Setup",
      description: `-Designing a scalable accounting system
-Setting up financial reporting and MIS (Management Information System)
-Monthly bookkeeping and reconciliation`,
    },
    {
      title: "Tax Advisory & Compliance",
      description: `-GST Registration and Filing
-Income Tax Compliance (filings, audits)
-TDS Filing & Payment
-Advisory on tax-efficient salary structures
-Handling tax notices, assessments, and refunds`,
    },
    {
      title: "Financial Planning & Forecasting",
      description: `-Preparation of financial models and projections
-Cash flow management and budgeting
-Burn rate analysis and runway calculation`,
    },
  ];

  return (
    <div>
      <Header />
      <SectionWithCards
        id="startup-advisory"
        sectionTitle="Startup Advisory"
        sectionDescription="Startup advisory services from our firm are tailored to address the unique financial, regulatory, and strategic needs of startups—from incorporation to scaling and exit.
These services help startups stay compliant, make sound financial decisions, and become investor-ready."
        cards={cards}
      />
      <Footer />
    </div>
  );
};

export default page;
