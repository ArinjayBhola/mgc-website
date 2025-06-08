import Footer from "@/app/_Components/Footer";
import Header from "@/app/_Components/Header";
import SectionWithCards from "@/app/_Components/SectionWithCards";
import React from "react";

const page = () => {
  const cards = [
    {
      title: "",
      description:
        "In today’s globalized business environment, taxation has become increasingly complex due to evolving tax laws, international regulations, cross-border transactions, and shifting tax incentives. Navigating these challenges requires a strategic and informed approach.",
    },
    {
      title: "",
      description:
        "We assist corporations in managing the intricacies of both domestic and international tax landscapes, including direct and indirect taxation, compliance, regulatory reporting, and dispute resolution. Our services are designed to help businesses overcome operational hurdles while remaining aligned with legal requirements and best practices.",
    },
    {
      title: "",
      description: `We are the one stop shop for all Direct and Indirect Taxation related matters whether it is compliances or representation services related matters namely:\n -Corporate Taxation\n -Litigation\n -Taxation of High Net Worth Individuals\n -Income Computation and Disclosure Standards (ICDS)\n -Transfer Pricing\n -Double Tax Avoidance Advisory`,
    },
  ];

  return (
    <div>
      <Header />
      <SectionWithCards
        id="domestic-and-international-taxation"
        sectionTitle="Domestic Taxation and International Taxation"
        sectionDescription="With 40+ years of trusted excellence, MGCO delivers tailored audit services built on independence, integrity, and insight—helping businesses achieve financial transparency and growth."
        cards={cards}
      />
      <Footer />
    </div>
  );
};

export default page;
