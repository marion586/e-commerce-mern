import React, { useState } from "react";
import Header from "../components/Layout/Header.jsx";
import Hero from "../components/Route/Hero/Hero.jsx";
import Categories from "../components/Route/Categories/Categories.jsx";
import BestDeals from "../components/Route/BestDeals/BestDeals.jsx";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct.jsx";
import Events from "../components/Route/Events/Events.jsx";
import Sponsored from "../components/Route/Sponsored/Sponsored.jsx";
import Footer from "../components/Layout/Footer/Footer.jsx";

const HomePage = () => {
  const [activeHeading, setactiveHeading] = useState(1);
  return (
    <div>
      <Header activeHeading={activeHeading} />
      <Hero />
      <Categories />
      <BestDeals />
      <FeaturedProduct />

      <Events />

      <Sponsored />

      <Footer />
    </div>
  );
};

export default HomePage;
