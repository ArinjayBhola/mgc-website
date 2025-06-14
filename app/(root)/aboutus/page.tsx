import Banner from "@/app/_Components/Banner";
import DetailAboutUs from "@/app/_Components/DetailAboutUs";
import Footer from "@/app/_Components/Footer";
import Header from "@/app/_Components/Header";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <DetailAboutUs />
      <Banner />
      <Footer />
    </div>
  );
};

export default page;
