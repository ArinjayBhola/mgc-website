import Banner from "@/app/_Components/Banner";
import Footer from "@/app/_Components/Footer";
import Header from "@/app/_Components/Header";
import OurTeam from "@/app/_Components/OurTeam";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <OurTeam />
      <Banner />
      <Footer />
    </div>
  );
};

export default page;
