import Footer from "@/app/_Components/Footer";
import Header from "@/app/_Components/Header";
import SectionWithCards from "@/app/_Components/SectionWithCards";
import React from "react";

const page = () => {
  const cards = [
    {
      title: "Assessment Proceedings",
      description: `-Representing clients during scrutiny assessments by the Income Tax Department.
-Preparing and submitting replies to notices under:
Section 143(2) – Scrutiny Assessment
Section 142(1) – Inquiry before assessment
Section 148 – Reassessment
`,
    },
    {
      title: "Appeals",
      description: `-Filing and arguing appeals before:
Commissioner of Income Tax (Appeals) – CIT(A)
Income Tax Appellate Tribunal (ITAT)
Appellate Authority under GST

-Drafting statements of facts, grounds of appeal, and preparing arguments.
-Assistance with advance rulings and rectifications.`,
    },
    {
      title: "Response to notices",
      description: `Drafting and filing response to:
-Show Cause Notices (SCNs)
-Summons under Section 70 of the CGST Act
-Notices for mismatch, input tax credit (ITC), or refund claims`,
    },
  ];

  return (
    <div>
      <Header />
      <SectionWithCards
        id="litigation"
        sectionTitle="Litigation"
        sectionDescription="MGCO offers litigation support services to help individuals, businesses, and corporations handle disputes related to tax, finance, and regulatory matters. While CAs are not litigators in the traditional legal sense (i.e., they don’t represent clients in civil or criminal courts), they are recognized experts for representing clients before various tax and regulatory authorities."
        cards={cards}
      />
      <Footer />
    </div>
  );
};

export default page;
