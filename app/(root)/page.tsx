import AboutUs from "../_Components/AboutUs";
import Footer from "../_Components/Footer";
import Header from "../_Components/Header";
import Sector from "../_Components/Sector";
import Welcome from "../_Components/Welcome";
import WhatWeOffer from "../_Components/WhatWeOffer";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Header />
      <Welcome />
      <AboutUs />
      <WhatWeOffer />
      <Sector />
      <Footer />
    </div>
  );
}
