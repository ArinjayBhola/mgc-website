import Footer from "@/app/_Components/Footer";
import Header from "@/app/_Components/Header";
import SectionWithCards from "@/app/_Components/SectionWithCards";
import React from "react";

const page = () => {
  const cards = [
    {
      title: `Key Tansfer Pricing Services offered by us are:-`,
      description: `-Transfer Pricing Advisory
-Transfer Pricing Documentation
-Transfer Pricing Audit & Compliance
-Benchmarking & Economic Analysis
-TP Litigation & Dispute Resolution
-Advance Pricing Agreements (APA)
-Intra-Group Service Charge Evaluation
`,
    },
  ];

  return (
    <div>
      <Header />
      <SectionWithCards
        id="transfer-pricing"
        sectionTitle="Transfer Pricing"
        sectionDescription="Transfer Pricing (TP) refers to the pricing of goods, services, or intangibles transferred between related entities (associated enterprises), especially across international borders. Since these transactions can affect how much tax is paid in different jurisdictions, Indian tax authorities enforce strict TP regulations.
MGCO provides specialized transfer pricing services to help businesses comply with regulations, manage tax risks, and avoid penalties."
        cards={cards}
      />
      <Footer />
    </div>
  );
};

export default page;
