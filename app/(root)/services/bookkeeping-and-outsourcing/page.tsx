import Footer from "@/app/_Components/Footer";
import Header from "@/app/_Components/Header";
import SectionWithCards from "@/app/_Components/SectionWithCards";
import React from "react";

const page = () => {
  const cards = [
    {
      title: "Book keeping Services",
      description:
        "We manage day-to-day accounting records with precision and confidentiality. Our team ensures systematic recording of all financial transactions, including sales, purchases, expenses, and receipts, in accordance with Indian accounting standards and tax laws. We maintain general ledgers, prepare reconciliations, and generate financial statements such as trial balances, profit & loss accounts, and balance sheets.",
    },
    {
      title: "Outsourcing Services",
      description:
        "Our firm provides end-to-end outsourced finance and accounting services, including:\n- GST compliance and return filing\n- TDS calculations and statutory payments\n- Payroll processing and labour law compliance (PF, ESI)\n- Accounts payable/receivable management\n- MIS reporting and cash flow statements\n- Cloud-based accounting using Tally, and other platforms.",
    },
  ];

  return (
    <div>
      <Header />
      <SectionWithCards
        id="bookkeeping-and-outsourcing"
        sectionTitle="Book Keeping and Outsourcing"
        sectionDescription="With 40+ years of trusted excellence, MGCO delivers tailored audit services built on independence, integrity, and insight—helping businesses achieve financial transparency and growth."
        cards={cards}
      />
      <Footer />
    </div>
  );
};

export default page;
